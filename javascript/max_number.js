function getMaxNumber(arr){
     let maxNumber=0;
    // for(let i=0; i<arr.length;i++){
    //     let nextNumber = arr[i+1];
    //     if(maxNumber < nextNumber){
    //         maxNumber = nextNumber;   
    //     }
        
    // }
    console.log(Math.max(...arr));
    return maxNumber;
}
getMaxNumber([5,15,400,2,960,20,950]);
