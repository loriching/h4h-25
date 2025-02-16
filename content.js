
/* 
   This function sends page content (for example, document.title) to the localhost:5000 server, the
   default endpoint for Flask APIs, via a POST request. This means that the content will get routed through 
   to the Flask app, app.py, which will process the request and return a JSON containing its output.
   For example, sendToApp posts the following:
   {"text": "Abercrombie & Fitch | Authentic American clothing since 1892" }
    This is received by the lookup method in app.py which returns the following:
   {"body": { "rating": 83.25 } }
    the function below then fetches this response and deals with it. It can interpret it or send the data to other modules.
*/
async function sendToApp(page){
    const url = "http://127.0.0.1:5000/lookup";
    const request = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            text: page 
        })
    };
    try {
        const response = await fetch(url, request);

        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response from Flask app:", data);
        return data;

    } catch (error) {
        console.error("Error sending request:", error);
    }
}
const title = document.title;
sendToApp(title);
