chrome.storage.local.get(["rating", "brand", "suggestions"], (data) => {
    let scoreElement = document.getElementById('myScore');
    // Check if the rating and brand are available
    if (data.rating && data.brand && data.suggestions) {
        console.log("Stored Rating:", data.rating);
        console.log("Stored Brand:", data.brand);
        console.log("Stored Suggestions:", data.suggestions);

        scoreElement.innerHTML = data.brand;

    } else {
        console.log("No data found in storage.");
    }
});

const ctx = document.getElementById('myDonut')
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        
      }]
    }
  });
