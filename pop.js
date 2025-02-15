let scoreElement = document.getElementById('myScore')
scoreElement.innerHTML = "12345";

const xValues = [scoreElement, "Not applicable"];
const yValues = [0.23, 0.77];
const barColors = [
    "red",
    "gray"
]

newChart("myChart", {
    type: "doughnutChart",
    date: {
    labels: xValues,
    datasets: [{
        backgroundColor: donutColors, data: yva
    }]
    },
    options: {
    title: true, text: "Brand Sustainability Score"
    }
});