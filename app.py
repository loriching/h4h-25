from flask import Flask, request, jsonify
from flask_cors import CORS
from csv import DictReader
import string

fti = {}

with open("fti.csv", mode = 'r', newline = '', encoding = 'utf-8-sig') as file:
    reader = DictReader(file)
    for row in reader:
        brand = row["Brand Name"]
        score = row["2023 FINAL SCORE"]
        fti[brand] = score
        fti[brand.lower()] = score
        fti[brand.upper()] = score
        fti[brand.title()] = score

def lookupBrand(brand):
    if brand in fti.keys():
        return fti[brand]

app = Flask(__name__)
CORS(app)

def parse(text):
    # Clean up page title
    text.strip(".").strip(",")
    print(text)
    # Not super efficient, but it works
    for brand in fti.keys():
        if brand in text:
            score = fti[brand]
            print(score)
            return jsonify({"rating": score})
    print("Brand not found")
    return jsonify({"rating": "0"})

@app.route('/lookup', methods = ["POST"])
def lookup():
    data = request.get_json()
    return parse(data.get("text", ""))

if __name__ == "__main__":
    app.run(port=4999, debug = True)