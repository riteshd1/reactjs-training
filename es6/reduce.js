const numbers = [1,2,3,4];



let sum= 0;
for(let i=0; i<numbers.length; i++){
    let nextVal = numbers[i+1];
    let currVal = numbers[i];
    sum = nextVal+currVal;
    // sum+=numbers[i];
}
// console.log("Sum:",sum);

let sumwithMap = numbers.reduce((prevItem,item, index)=>{
    console.log("------------iteration : "+index+"----------");
    console.log("prevItem",prevItem);
    console.log("item",item);
    console.log("index",index);
    return prevItem = prevItem+item;
}
);

 console.log("sumwithMap",sumwithMap);