chrome.storage.local.get(["rating", "brand"], (data) => {
    let scoreElement = document.getElementById('myScore');
    // Check if the rating and brand are available
    if (data.rating && data.brand) {
        console.log("Stored Rating:", data.rating);
        console.log("Stored Brand:", data.brand);

        scoreElement.innerHTML = data.brand;

        // Display the stored data in the popup
        document.getElementById("ratingDisplay").textContent = `Rating: ${data.rating}`;
        document.getElementById("brandDisplay").textContent = `Brand: ${data.brand}`;
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
