const jsonData = [
    {
        name:'John',
        age:'25'
    },
    {
        name:'Shyam',
        age:'26'
    },
    {
        name:'Ram',
        age:'28'
    }
];

// let newArr = jsonData.map(item=>{
//     if (item.age=='26')
//     {
//         return item;
//     }
// });

let newArr = jsonData.filter((item,index)=>{
    if (item.age=='26')
    {
        return item;
    }
});
console.log("newArr",newArr);