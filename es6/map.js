let numbers = [1,2,3,4];
// let numbers2 = [2,4,6,8];
let newArr=[];
for(let i=0; i<numbers.length; i++){
    let temp = numbers[i]*2;
    newArr.push(temp);
}
console.log("newArr:",newArr);
function tempFun(item){ 
    console.log("tempFun");
    return item*2;
};

let newArrWithMap = numbers.map((item,index)=>{
    console.log("index",index);
    console.log("item",item);
   return item*2;
}
    );

console.log("newArrWithMap:",newArrWithMap);


// function mapTest(tempFun){
//    // return tempFun();
//     console.log("mapTest called");
// }
// mapTest(tempFun(2));