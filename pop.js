let scoreElement = document.getElementById('myScore')
const brand = chrome.storage.local.get("name");
const score = chrome.storage.local.get("score");
const suggestions = chrome.storage.local.get("suggestions");
console.log(brand, score, suggestions);

scoreElement.innerHTML = "12345";

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

