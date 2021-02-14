'use strict';

let totalClicks = 0;
let clicksAllowed = 25;
let allAds = [];
// let indexArray = [];

let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');

function Newad(name, fileExtension = 'jpg'){
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

function getRandomIndex(){
  return Math.floor(Math.random() * allAds.length);
}


function renderAds(){
  let firstAdIndex = getRandomIndex();
  let secondAdIndex = getRandomIndex();
  let thirdAdIndex = getRandomIndex();
  while(firstAdIndex === secondAdIndex || secondAdIndex === thirdAdIndex || firstAdIndex === thirdAdIndex){
    secondAdIndex = getRandomIndex();
    thirdAdIndex = getRandomIndex();
  }

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

function renderResults(){
  let adList = document.querySelector('ul');
  for (let i = 0; i < allAds.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allAds[i].name} had ${allAds[i].views} votes, and was seen ${allAds[i].clicks} times`;
    adList.appendChild(li);
    console.log(renderResults);
  }
}

function handleClick(event){
  if (event.target === myContainer){
    alert('Please click an image to take the survey');
  }

  totalClicks++;
  let adsClicked = event.target.title;

  for (let i = 0; i < allAds.length; i++){
    if(adsClicked === allAds[i].name){
      allAds[i].clicks++;
    }
  }

  renderAds();
  if (totalClicks === clicksAllowed){
    myContainer.removeEventListener('click', handleClick);
    // console.log(renderAds);
  }
}

function handleButtonClick(event){
  if(totalClicks === clicksAllowed){
    renderResults();
  }
  if(totalClicks !== clicksAllowed){
    alert('Sorry! You must take the survey 25 times!');
  }
}

renderAds();
myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', handleButtonClick);