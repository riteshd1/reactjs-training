const person = [
    {
        firstName:'John',
        lastName:'Dove',
        age:'20'
    },
    {
        firstName:'Sam',
        lastName:'Smith',
        age:'24'
    },
    {
        firstName:'Will',
        lastName:'Williamson',
        age:'24'
    }
];

let item = {
    firstName:'John',
    lastName:'Dove',
    age:'20'
};

const getPersonByAge = (searchAge)=>{
for(let i=0; i<person.length; i++){
    let {age} =person[i];
    if(age==searchAge){
        return person[i];
    }
}
}
const getPersonByFilter = (age)=>person.filter((item,index)=>{
    console.log("index",index);
    console.log("item",item);
    if(item.age==age){
        return item.age;
    }
});
const getPersonByMap = (age)=>person.map(item=>{
   if(item.age==age){
    return item.age;
   }
});


// console.log(getPersonByAge('24'));
console.log("getPersonByFilter",getPersonByFilter('24'));
// console.log("getPersonByMap",getPersonByMap('24'));

