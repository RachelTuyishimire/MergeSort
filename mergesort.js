// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

// function merge(num, target){
//     if (num.length <=1){
//         return num
//     }
//     let middle = Math.floor(array.length/2)
//     let left = num.slice(0, middle)
//     let right = num.slice(middle)
//     return merge(mergeSort(left), mergeSort(right));
// } 
// function merge(left, rigth){
//     let num = [];
//     while (left.length && right.length){
//         if (left[0] < right[0]){
//             num.push(left.shift())
//         }
//         else {
//             num.push(right.shift())
//         }
//     }
//     return num.concat(left.slice()).concat(right.slice()); 
// }

// let num = [45,12,6,89,2,5];
// let target = 6;
// console.log(merge(array))

let num = [45,12,6,89,2,5]
  let target = 6;
let firstIndex = 0;
let lastIndex = num.length-1;
let middleIndex = Math.floor((firstIndex+lastIndex)/2);
while(num[middleIndex]!==firstIndex<=lastIndex){
    console.log(middleIndex);
    console.log(firstIndex);
    console.log(lastIndex);
    if(num[middleIndex]>6){
        lastIndex=middleIndex-1;
    }  else{
        lastIndex=middleIndex+1;
    }
    middleIndex=Math.floor((firstIndex+lastIndex)/2);{
    }
    return num[middleIndex]===lastIndex-1;
    }
    //Given an unsorted array of numbers return the sorted array in descending order
    let arr=[123,89,5,23,9,56]
    function descending (arr,merge){
        let leftIndex = 0;
        let rightIndex = length-1;
        while(leftIndex.length&&rightIndex.length){
            if(leftIndex [0]<rightIndex[0]);{
            arr.push(leftIndex.shift());
        }
    }
    return[...arr ,...leftIndex,...rightIndex];
    }
    function mergeSort(unsortedArray){
        const middleIndex = unsortedArray.length/2;
        if(unsortedArray.length<2){
            return unsortedArray;
        }
        const leftIndex = unsortedArray.splice(0,middleIndex);
        return mergeArrays(mergeSort(leftIndex)),mergeSort(unsortedArray);
    }
    //
    function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
      }
      function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
          if (left[0] >= right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        }
        return [...result, ...left, ...right];
      }
      let arr4 = [123, 89, 5, 23, 9, 56];
      arr = mergeSort(arr);
      console.log(arr);
    function findTarget(arr, target) {
            arr = mergeSort(arr);
            let left = 0;
            let right = arr.length - 1;
            while (left <= right) {
              const mid = Math.floor((left + right) / 2);
              if (arr[mid] === target) {
                return mid;
              } else if (arr[mid] < target) {
                left = mid + 1;
              } else {
                right = mid - 1;
              }
            }
            return null;
          }
          function mergeSort(arr) {
            if (arr.length <= 1) {
              return arr;
            }
            let mid = Math.floor(arr.length / 2);
            let left = arr.slice(0, mid);
            let right = arr.slice(mid);
            return merge(mergeSort(left), mergeSort(right));
          }
          function merge(left, right) {
            let result = [];
            while (left.length && right.length) {
              if (left[0] < right[0]) {
                result.push(left.shift());
              } else {
                result.push(right.shift());
              }
            }
            return [...result, ...left, ...right];
          }
          //Given the following array, search for the following target
          let target2 = 34;
          let arr2 = [1, 4, 78, 2, 67, 3];
          let index = findTarget(arr2, target);
          console.log(index);