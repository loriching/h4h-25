chrome.storage.local.get(["score", "brand", "suggestions"], (data) => {
    let scoreElement = document.getElementById('myScore');
    console.log(data.brand);
    console.log(data.score);
    console.log(data.suggestions);

    scoreElement.innerHTML = data.brand;
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

