let scoreElement = document.getElementById('myScore')
scoreElement.innerHTML = "12345";

const data = {
    labels: [
        scoreElement,
        "Not applicable"
    ],
    datasets: [{
        label: 'New donut chart',
        data: [23, 77], 
        backgroundColor: [
            "red",
            "gray"
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughtnut',
    data: data,
};

