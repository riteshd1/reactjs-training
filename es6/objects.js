let address = "Ram nagar,nagpur";
const person = {
    id:1,
    firstname:'John',
    lastname:'Dove',
    email:'john@gmail.com',
    phone:'9876542310',
    gender:'male',
    address,
    getAge (){
       console.log(this.firstname)
    }
}
//console.log(person);
//person.getAge();

let users = {
    user1:{
        username:'user1'
        
    },
    user2:{
        username:'user2',
        email:'user2@gmail.com'
    },
    user3:{
        username:'user3',
        email:'user3@gmail.com'
    }
};
// let users = [
//     {
//         username:'user1',
//         email:'user1@gmail.com'
//     },
//     {
//         username:'user2',
//         email:'user2@gmail.com'
//     },
//     {
//         username:'user3',
//         email:'user3@gmail.com'
//     }
// ];

let tempArr = Object.values(users);

// tempArr.map(item=>{
//     console.log(users[item]);
// });

//  console.log(users.hasOwnProperty('user3'));
// Object.freeze(users);
 users.user4 = {
    username:'user4',
    email:'user4@gmail.com'
 }

//  delete users.user1;
Object.seal(users);
users.user1={};
delete users.user1;
 console.log(users);
 