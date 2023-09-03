
let arr = [1,2,3,4];
let newArr= [];
//using for loop
for(let i=0;i<arr.length;i++){
    let tempVar = arr[i]*2;
    newArr.push(tempVar);
}
// console.log("newArr", newArr);

const iterateFun = (item)=>{
    return item*2;
}
const jsonData = [
    {
        name:'',
        age:''
    },
    {
        name:'',
        age:''
    }

];
//closure: calling/creating functions inside a function call.
let newArrMap = arr.map((item,index)=>{
    console.log("index",index)
    return item;
})

// let newArrMap = arr.map(item=>item*2);

console.log("newArrMap",newArrMap);