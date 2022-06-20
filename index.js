function hasTargetSum(array, target) 
{
  for (let i = 0; i < array.length; i++) {
const firstNumber= target - array[i];

    for (let j = i + 1; j < array.length; j++) 
    {   
      if (array[j] === firstNumber) {
        return true}

        
       // else{ return false}
    }

  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  make a function called hastargetsum using function keywords ,
  check among the the arrays if their sum of two numbers adds upto to the given target sum 
  if it adds up ,the fuctiio returns true and if not it return a false as
  the result
*/

/* 
  Add your pseudocode here
  function hastarget 
  pass arrugment array and target
  iterate over the given arrays of numbers 
  check if the complimentary numbers of the target result add up 
  correctly 
  return true 
  return false if not .
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