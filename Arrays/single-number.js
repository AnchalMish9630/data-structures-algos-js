
// using hasmap object
var singleNumber = function(nums) {
   let hash={}
   for(let i=0;i<nums.length;i++){
    if(!hash[nums[i]]){
        hash[nums[i]]=1
    }
    else{
         hash[nums[i]]++
    }
     for(let i=0;i<nums.length;i++){
        if( hash[nums[i]]==1){
            return nums[i];
        }
     }
   }
};


// using XOR operation

var singleNumber = function(nums) {
    let result = 0
    for(let i=0;i<nums.length;i++){
        result = result ^ nums[i];
    }
    return result;

}

