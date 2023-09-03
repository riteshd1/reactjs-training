let arr = [1,2,3,4];

console.log("arr",arr);
let newArr = arr.reduce((prevVal, item, index)=>{
     prevVal =item;
     console.log("prevVal",prevVal);
     
    //  console.log("current Value",item);
    // console.log("current index",index);
});