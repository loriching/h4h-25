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
            'statusCode': 400,
            'body': json.dumps({'message': 'Text is empty'})
        }

    # Clean up page title
    # translator method didn't work
    cleaned = ""
    for word in text:
        cleaned += word.strip(".").strip(",").lower()
        
    for brand in fti.keys():
        if brand in cleaned:
            score = fti[brand]
            print(brand)
            print(score)
            return {
                'statusCode': 200,
                'body': json.dumps({"rating": score})
                }
    print("Brand not found")
    return {
                'statusCode': 200,
                'body': json.dumps({"rating": -999})
            }

@app.route('/lookup', methods = ["POST"])
def lookup():
    data = request.get_json()
    return parse(data.get("text", ""))
    
if __name__ == "__main__":
    app.run(port=4999, debug = True)