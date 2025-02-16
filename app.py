# INSTRUCTIONS FOR RUNNING THIS:
# If you don't already have the libraries below installed, you'll have to do that
# Then just open a terminal and do python app.py
# That will launch the server and start listening for POST requests from the Chrome extension

from flask import Flask, request
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

    suggestions = sorted(suggestions, key=lambda x: fti[x], reverse=True)

    return suggestions

def linkparse(link):
    for brand in link.split("."):
        if brand in fti:
            score = fti[brand]
            print("Found brand match:", brand)
            print("Score:", score)
            suggestions = suggestAlternatives(brand)
                
            return {
                "statusCode": 200,
                "body": json.dumps({
                    "rating": score,
                    "brand": brand.title(),
                    "suggestions": suggestions[:3],
                })
            }
    print("Brand not found")
    return {
        "statusCode": 400,
        "body": json.dumps({"rating": -999})
    }

def parse(text):
    if not text:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Text is empty"})
        }

    cleaned = []
    # Clean up page title (translator method didn't work)
    # Issues: s.oliver, dr. martens
    for word in text.split():
        cleaned.append(word.strip(".,:—;®™").lower())

    word_count = len(cleaned)
    for n in range(1, word_count - 1):
        for i in range(word_count - n - 1):
            phrase = " ".join(cleaned[i:i + n])  # Create contiguous sequence
            
            if phrase in fti:
                brand = phrase
                score = fti[brand]
                print("Found brand match:", brand)
                print("Score:", score)
                suggestions = suggestAlternatives(brand)
                print(suggestions[:3])
                
                return {
                    "statusCode": 200,
                    "body": json.dumps({
                        "rating": score,
                        "brand": brand.title(),
                        "suggestions": suggestions[:3],
                    })
                }

    print("Brand not found")
    return {
        "statusCode": 400,
        "body": json.dumps({"rating": -999})
    }

@app.route('/lookup', methods = ["POST"])
def lookup():
    data = request.get_json()
    if parse(data.get("title", ""))["statusCode"] == 400:
        return linkparse(data.get("link", ""))
    else:
        return parse(data.get("title", ""))
    
if __name__ == "__main__":
    app.run(port=5000, debug=True)

