const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let accumilator = 0;

const totalBatteries = batteryBatches.reduce(function (accumilator, element) {
  // console.log(accumilator)
  accumilator += element;
  //console.log(accumilator)
  return accumilator;
}, 0);

console.log(totalBatteries);
