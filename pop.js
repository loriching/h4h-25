// Inject brand name and score to HTML
let scoreElement = document.getElementById('brand-score')
scoreElement.innerHTML = 100 // GET SCORE HERE
let nameElement = document.getElementById('brand-name')
nameElement.innerHTML = "No Data on this Brand"

// Score calculations
let maxScore = 207.5;
let brandScore = document.getElementById('brand-score').innerHTML;
let diffScore = maxScore - brandScore;

//0-40, 40-70,70-100
let scoreColor;
if (brandScore >= 145.25) {
  scoreColor = 'green'
} 
else if(brandScore >=82.88){
  scoreColor = 'orange'
}
else {
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
      cutout: "70%",
      radius: 90
    }
});

