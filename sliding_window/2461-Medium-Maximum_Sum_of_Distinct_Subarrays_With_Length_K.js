// Link: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// Descritpion: You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// if map has item increment the frequency else add item to map with frequency 1
function addItemToMap(map, item){
    if(map.has(item)){map.set(item, map.get(item)+1)}
    else{(map.set(item,1))}
  }
  
  //if map has item with frequeny greater then 1 decrement otherwise delete
  function removeItemFromMap(map,item){
    if(map.get(item) > 1){
    map.set(item, map.get(item)-1)}
    else
      {map.delete(item)}
  }
  
  
  var maximumSubarraySum = function(nums, k) {
     //edge case
     if( k > nums.length) {return 0};
  
     let window = new Map()
     let maxSum = 0
     let tempSum = 0
     
     for(let i =0 ; i < nums.length ; i++){
    //for each loop add to tempSum current element then add it to the window
       tempSum += nums[i];
        addItemToMap(window,nums[i]);
    // if the window size is k length we must have exactly k values 
       if(window.size === k){
         if(maxSum < tempSum){maxSum = tempSum}
       }
       //on i > k-1 we need to start removing from the front of the window before the next loop
       if (i >= k-1 ){
         removeItemFromMap(window,nums[i-(k-1)])
          tempSum -= nums[i-(k-1)]
       }
  
     }
     return(maxSum)
   
  }
//export for jest tests
  module.exports = {
    addItemToMap,
    removeItemFromMap,
    maximumSubarraySum
};


