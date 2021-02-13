'use strict';

let totalClicks = 0;
let clicksAllowed = 15;
let allBusses = [];
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section'); //event listner


function // contructor

function getRandomIndex(){
  return Math.floor(Math.random() * allBusses.length);
}

function render// (){
  let firstBus = getRandomIndex();
  let secondBus = getRandomIndex();
  let thirdBus = getRandomIndex();

}

function handleClick(event){
  totalClicks++;
  letBusClicked = event.target.title;
  render//
  if(totalClicks === clicksAllowed0{
    //remove event listner
    myContainer.removeEventListener('click', handleClick);
  }
}

myContainer.addEventListener('click', handleClick);