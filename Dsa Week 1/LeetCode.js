
// function leetCode(nums){
//     let minSum=0;
//     let maxSum=0;
//     let l1= 0;
//     let s1 = nums[0];
//     for(let i=0;i<nums.length;i++){
//         if(l1<nums[i]){
//             l1 = nums[i]
//         }else if(s1<nums[i]){
//             s1= nums[i]
//         }
//     }
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!=l1){
//             minSum+=nums[i]
//         }

//         if(nums[i]!=s1){
//             maxSum+=nums[i]
//         }
//     }
//     console.log(`${minSum} ${maxSum}`);
// }

// console.log(leetCode(nums = [1,3,5,7,9]));







function miniMaxSum(arr) {
    let minSum=0;
    let maxSum=0;
    let l1= 0;
    let s1 = arr[0];
    for(let i=0;i<arr.length;i++){
        if(l1<arr[i]){
            l1 = arr[i]
        }else if(s1<arr[i]){
            s1= arr[i]
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=l1){
            minSum+=arr[i]
        }

        if(arr[i]!=s1){
            maxSum+=arr[i]
        }
    }
    console.log(`${minSum} ${maxSum}`);
}

miniMaxSum(arr = [1,2,3,4,5])