'use strict';

//floors = 100
//eggs = 2
//random num where egg breaks

const eggDrop = (eggs = 0, breakPoint = Math.floor(100 * Math.random()), currFloor, step) => {
  // console.log(eggs, currFloor, breakPoint);
  //Break point
  if (eggs === 0) {
    console.log(`Highest floor you can drop without a break is ${currFloor}, Break Point = ${breakPoint}`);
    return;
  }
  if (eggs === 1) {
    // egg breaks
    if (currFloor >= breakPoint) {
      eggs--;
      eggDrop(eggs, breakPoint, currFloor - step, step);
    }
    // didn't continue up step of 1
    else {
      eggDrop(eggs, breakPoint, currFloor + step, step);
    }

  }
  if (eggs > 1) {
    // broke down currFloor - step
    if (currFloor > breakPoint) {
      // console.log('break');
      eggs--;
      eggDrop(eggs, breakPoint, currFloor - step - 1, 1);
    }
    // didn't continue up  + step
    else {
      eggDrop(eggs, breakPoint, currFloor + step, step - 1);
    }
  }

};

// if have two eggs currFloor + n 
let numEggs = 2;
let breakPoint = Math.floor(100 * Math.random());
let step = 14; //also the same floor we start on


eggDrop(numEggs, breakPoint, step, step);