// Inject brand name and score to HTML
let scoreElement = document.getElementById('brand-score')
scoreElement.innerHTML = 150 // GET SCORE HERE
let nameElement = document.getElementById('brand-name')
nameElement.innerHTML = "No Data on this Brand"

let maxScore = 207.5;
let brandScore = document.getElementById('brand-score').innerHTML;
let diffScore = maxScore - brandScore;

let scoreColor;

if (brandScore >= 0.6){
  scoreColor = 'green'
} else {
  scoreColor = 'red'
}

const ctx=document.getElementById('myDonut')
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Transparency Index',
        data: [diffScore, brandScore],
        backgroundColor: ['gray', scoreColor]
      }]
    }, 
    options: {
      cutout: "80%",
      radius: 90
    }
});

