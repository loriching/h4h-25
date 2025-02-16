import json
import string
from csv import DictReader

fti = {}

def parse(text):
    if text == '':
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Text is empty'})
        }

    # Clean up page title
    translator = str.maketrans('', '', ["," , "."])
    text = text.translate(translator).lower()

    for brand in fti.keys():
        if brand in text:
            score = fti[brand]
            print(score)
            return jsonify({"rating": score})
    print("Brand not found")
    return json.dumps({"rating": 0})

def lambda_handler(event, context):
    global fti

    if fti == {}:
        with open('fti.json', 'r') as f:
            fti = json.load(f)
            
    if not event.get('body'):
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Request body is missing'})
        }

    body = json.loads(event['body'])
    text = body.get('text').strip()
    return parse(text)