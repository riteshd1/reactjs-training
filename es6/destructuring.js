//Destructuring

let data = {
    firstname:'John',
    lastname:'Dove',
    email:'john@gmail.com',
    mobile:'9876543210',
    gender:'male'
};
// let firstname = data.firstname;
// let lastname = data.lastname;
// let email = data.email;
// const {firstname,lastname} = data;
const { firstname: fname, lastname: lname } = data;

//alias
console.log(fname);
