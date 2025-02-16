# INSTRUCTIONS FOR RUNNING THIS:
# If you don't already have the libraries below installed, you'll have to do that
# Then just open a terminal and do python app.py
# That will launch the server and start listening for POST requests from the Chrome extension


from flask import Flask, request, jsonify
from flask_cors import CORS
import string
import json

app = Flask(__name__)
CORS(app)

fti = {}
with open('fti.json', 'r') as f:
    fti = json.load(f)

prices = {}
with open("prices.json", 'r') as f:
    prices = json.load(f)

def suggestAlternatives(brand):
    suggestions = []
    price = prices[brand]
    for alt in prices:
        if prices[alt] == price:
            if fti[alt] > fti[brand]:
                suggestions.append(alt)
    return suggestions

def parse(text):
    if not text:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Text is empty"})
        }

    # Clean up page title (translator method didn't work)
    # Issues: s.oliver, dr. martens, ito-yokado (note it's Not an issue with the hyphen because k-way, li-ning etc work)
    cleaned = " ".join(word.strip(".,:—;").lower() for word in text.split())
    print(cleaned)
    for brand in fti.keys():
        if brand in cleaned:
            score = fti[brand]
            print("Found brand match:", brand)
            print("Score:", score)
            suggestions = suggestAlternatives(brand)
            print("Suggestions:", suggestions)
            return {
                        "statusCode": 200,
                        "body": json.dumps(
                            {
                                "rating": score,
                                "brand": brand.title(),
                                "suggestions": suggestions[:3]
                            }
                        )
                   }

    print("Brand not found")
    return {
                "statusCode": 400,
                "body": json.dumps({"rating": -999})
            }

@app.route('/lookup', methods = ["POST"])
def lookup():
    data = request.get_json()
    return parse(data.get("text", ""))
    
if __name__ == "__main__":
    app.run(port=5000, debug = True)
