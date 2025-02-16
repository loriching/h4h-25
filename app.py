# INSTRUCTIONS FOR RUNNING THIS:
# If you don't already have the libraries below installed, you'll have to do that
# (pip install flask and flask-cors and maybe json idk)
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

def parse(text):
    if text == '':
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Text is empty"})
        }

    # Clean up page title (translator method didn't work)
    # Issues: s.oliver, ito-yokado (note it's not an issue with the hyphen because k-way, li-ning etc work)
    cleaned = ""
    for word in text:
        cleaned += word.strip(".").strip(",").lower()
    
    print("Cleaned webpage title:", cleaned)

    for brand in fti.keys():
        if brand in cleaned:
            score = fti[brand]
            print("Found brand match:", brand)
            print(score)
            return {
                        "statusCode": 200,
                        "body": json.dumps({"rating": score})
                   }
    print("Brand not found")
    return {
                "statusCode": 200,
                "body": json.dumps({"rating": -999})
            }

@app.route('/lookup', methods = ["POST"])
def lookup():
    data = request.get_json()
    return parse(data.get("text", ""))
    
if __name__ == "__main__":
    app.run(port=5000, debug = True)
