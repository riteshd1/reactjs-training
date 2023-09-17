// map
// filter
//reduce

let a = [1,2,3,4];

let newArr = a.filter((item,index)=>{
    if(item%2==0){
        return item;
    }
})

let data = [
    {
        name:'john',
        age:20
    },
    {
        name:'ram',
        age:30
    },
    {
        name:'shyam',
        age:18
    }
];


let filterData = (search)=>
{
    return data.filter((item)=>{
    if(item.name==search){
        return item;
    }
     
})
};

// console.log("filterData",filterData('ram'));

let reduceArr = [1,2,3,4];
reduceArr.reduce((prev,item,index)=>{
    console.log("item",item);
})


// data.filter(item=>item%2==0)