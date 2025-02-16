// score calculations
let maxScore = 207.5;
let brandScore;
let diffScore = maxScore - brandScore;

chrome.storage.local.get(["rating", "brand", "suggestions"], (data) => {
// Check if the rating and brand are available
  if (data.rating && data.brand && data.suggestions) {
      console.log("Stored Rating:", data.rating);
      console.log("Stored Brand:", data.brand);
      console.log("Stored Suggestions:", data.suggestions);

      // inject into HTML
      let scoreElement = document.getElementById('brand-score');
      let nameElement = document.getElementById('brand-name');
      let suggestionElement1 = document.getElementById('suggestion1');
      let suggestionElement2 = document.getElementById('suggestion2');
      let suggestionElement3 = document.getElementById('suggestion3');
      scoreElement.innerHTML = data.rating;
      brandScore = data.rating;
      nameElement.innerHTML = data.brand;
      suggestionElement1.innerHTML = data.suggestions[0].name;
      suggestionElement2.innerHTML = data.suggestions[1].name;
      suggestionElement3.innerHTML = data.suggestions[2].name;

  } else {
      console.log("No data found in storage.");
      let errorMsgElement = document.getElementById("error-msg");
      errorMsgElement.setAttribute("style", "visibility: visible");
  }
});

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

