'use strict';

const SHARE_PRICES = [128, 97, 121, 123, 98, 97, 105];

/**
 * The share price for a company over a week's trading is as follows:
 *  [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the
 *  company on a particular day, and sell the shares on a following day,
 *  write an algorithm to work out what the maximum profit you could make would be.
 */

function maxProfits(arr) {
  //take in an array, return max profit
  let currMin = arr[0];
  let currMinIndex = arr[0];
  let currMax = arr[arr.length - 1];
  let currMaxIndex = arr[arr.length - 1];
  let currMaxProfit = currMax - currMin;

  for (let i = 0; i < arr.length; i++) {
    //iterate through the array looking for a better minimum
    if (currMaxIndex > i && currMax - arr[i] > currMaxProfit) {
      currMin = arr[i];
      currMinIndex = i;
      currMaxProfit = currMax - currMin;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > currMax) {
        currMax = arr[j];
        currMaxProfit = currMax - currMin;
      }
    }
  }
  return currMaxProfit;
}

console.log(maxProfits(SHARE_PRICES));