//function that loops over an array and returns
// an index number index matches the target value
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return i;
    }
  };
  return -1;
};

//function to verify whether the index matched the target number.
const verify = (index) => {
  if (index != -1){
    console.log(`Target found at index: ${index}`);
  } else {
    console.log(`Target not found in list.`);
  };
};

const numbers = [1,2,3,4,5,6,7,8,9,10];

// Tests.
let result = linearSearch(numbers, 17);
verify(result);

result = linearSearch(numbers, 6);
verify(result);

result = linearSearch(numbers, 10);
verify(result);
