// global score variables
let maxScore = 207.5;
let brandScore = 0;

chrome.storage.local.get(["rating", "brand", "suggestions"], (data) => {
// Check if the rating and brand are available
  if (data.rating && data.brand && data.suggestions && data.rating!=-999) {
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
      if (data.suggestions.length >= 1) {
        suggestionElement1.innerHTML = data.suggestions[0];
      } if (data.suggestions.length >= 2) {
        suggestionElement2.innerHTML = data.suggestions[1];
      } if (data.suggestions.length >= 3) {
        suggestionElement3.innerHTML = data.suggestions[2];
      }

      // score & color calculations
      let diffScore = maxScore - brandScore;

      //0-40, 40-70, 70-100
      let scoreColor;
      if (brandScore >= 145.25) {
        scoreColor = 'green'
      } else if(brandScore >=82.88){
        scoreColor = 'orange'
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
            cutout: "70%",
            radius: 90
          }
          
      });

  } else {
      console.log("No data found in storage.");
      let errorMsgElement = document.getElementById("error-msg");
      errorMsgElement.setAttribute("style", "visibility: visible");
  }
});



