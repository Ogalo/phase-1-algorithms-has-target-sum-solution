function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through each number in the array
  for (let i = 0; i <array.length; i++){
    //   for the current num, identify a complement that adds to the target (comp = target - num)
    const complement = target - array[i];

    for (let j = 1+i; j< array.length; j++){
      if (array[j] === complement){
        return true;
      }
    }

  }
  
  //   iterate through the rest of the array
  //     check if any number is our complement
  //     if so, return true.
  return false;
}

/* 
  Write the Big O time complexity of your function here
  RunTime: 0(n^2)
  space: 0(n)
*/

/* 
  Add your pseudocode here
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    iterate through the rest of the array
      check if any number is our complement
      if so, return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

//make a function 'hasTargetSum' that checks if two numbers from the array add up to the some target. for example, if I have an array '[1, 2, 3, 4]' and the target is '6' It should return true because 2 and 4 add to 6. for each number check if there is a number that adds to the target. 