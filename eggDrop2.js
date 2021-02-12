'use strict';
function eggDrop(eggs = 2, breakPt = Math.floor(Math.random() * 100), currFloor = 0) {
  if (eggs === 0) {
    console.log(`The breakpoint was ${breakPt} and the highest safe floor was ${currFloor}`);
    return currFloor;
  }
  if (eggs === 1) {
    if (currFloor + 1 >= breakPt) {
      eggDrop(eggs - 1, breakPt, currFloor);
    }
    else {
      eggDrop(eggs, breakPt, currFloor + 1);
    }
  }
  if (eggs === 2) {
    if (currFloor + 14 > breakPt) {
      eggDrop(eggs - 1, breakPt, currFloor);
    }
    else {
      eggDrop(eggs, breakPt, currFloor + 14);
    }
  }
}

eggDrop();