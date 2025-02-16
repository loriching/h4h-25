async function sendToApp(page){
    const url = "http://127.0.0.1:4999/lookup";
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

    } catch (error) {
        console.error("Error sending request:", error);
    }
}
const title = document.title;
sendToApp(title);