
function newFunction(){
 
}
const checkInstance =new newFunction();
console.log(checkInstance instanceof newFunction);
console.log(checkInstance instanceof Object);
console.log(typeof newFunction ==="function");

newFunction();

// Removing duplicates from a sorted array
// function sortArray(){
//     const 
// }

function removeDuplicates(nums) {
  if (nums.length <= 1) return nums.length;

  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  return uniqueIndex + 1;
}

// function removeDuplicates(3);
