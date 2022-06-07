// Code your solution in this file!
function distanceFromHqInBlocks(block1) {
  if (block1 > 42) {
    return block1 - 42;
  } else {
    return 42 - block1;
  }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(block1) {
  return distanceFromHqInBlocks(block1) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(initial, end) {
  if (initial < end) {
    return (end - initial) * 264;
  } else {
    return (initial - end) * 264;
  }
}
function calculatesFarePrice(initial,end){
const distance = distanceTravelledInFeet (initial,end);
if(distance <= 400){
    return 0;
}
else if(distance > 400 && distance <=2000){
    return .02 * (distance -400); 
}
else if(distance > 2000 && distance <2500){
    return 25;
} else{
    return `cannot travel that far`;
}

}