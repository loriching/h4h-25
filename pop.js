let scoreElement = document.getElementById('myScore')
scoreElement.innerHTML = "12345";

// let transparencyScore = document.getElementById('scoreText');
// transparencyScore.innerHTML = 0.8;
let transparencyScore = 0.8;
let complementTScore = 1 - transparencyScore;

let scoreColor;

if (transparencyScore >= 0.6){
  scoreColor = 'green'
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
        data: [complementTScore, transparencyScore],
        backgroundColor: ['gray', scoreColor]
      }]
    }, 
    options: {
      cutout: "80%",
      radius: 140
    }
});

