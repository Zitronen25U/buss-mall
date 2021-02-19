'use strict';

let totalClicks = 0;
let clicksAllowed = 25;
let allAds = [];
let indexArray = [];
let uniqueImageCount = 6;
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');

function Newad(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allAds.push(this);
}

new Newad('bag');
new Newad('banana');
new Newad('bathroom');
new Newad('boots');
new Newad('breakfast');
new Newad('bubblegum');
new Newad('chair');
new Newad('cthulhu');
new Newad('dog-duck');
new Newad('dragon');
new Newad('pen');
new Newad('pet-sweep');
new Newad('scissors');
new Newad('shark');
new Newad('sweep', 'png');
new Newad('tauntaun');
new Newad('unicorn');
new Newad('usb', 'gif');
new Newad('water-can');

function getRandomIndex() {
  return Math.floor(Math.random() * allAds.length);
}

function renderAds() {
  while (indexArray.length < uniqueImageCount) {
    let randomIndex = getRandomIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.unshift(randomIndex);
    }
  }
  console.log(indexArray);

  let firstAdIndex = indexArray.pop();
  let secondAdIndex = indexArray.pop();
  let thirdAdIndex = indexArray.pop();

  imageOne.src = allAds[firstAdIndex].src;
  imageOne.title = allAds[firstAdIndex].name;
  allAds[firstAdIndex].views++;

  imageTwo.src = allAds[secondAdIndex].src;
  imageTwo.title = allAds[secondAdIndex].name;
  allAds[secondAdIndex].views++;

  imageThree.src = allAds[thirdAdIndex].src;
  imageThree.title = allAds[thirdAdIndex].name;
  allAds[thirdAdIndex].views++;
}
renderAds();


function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click an image to take the survey');
  }
  totalClicks++;
  let adsClicked = event.target.title;
  for (let i = 0; i < allAds.length; i++) {
    if (adsClicked === allAds[i].name) {
      allAds[i].clicks++;
    }
  }
  renderAds();
  if (totalClicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

function renderChart() {
  let adNames = [];
  let adViews = [];
  let adClicks = [];

  for (let i = 0; i < allAds.length; i++) {
    adNames.push(allAds[i].name);
    adViews.push(allAds[i].views);
    adClicks.push(allAds[i].clicks);
  }

  let chartObject = {
    type: 'bar',
    data: {
      labels: adNames,
      datasets: [{
        label: '# of Views',
        data: adViews,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: '# of Clicks',
        data: adClicks,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, chartObject);
}
var ctx = document.getElementById('myChart').getContext('2d');
myContainer.addEventListener('click', handleClick);



