const myFunc = ()=>{
    return "hello";
}
const myFunc2 = ()=>{
    return "hello 2";
}

exports.myFunc2 = myFunc2;
exports.myFunc = myFunc;

// exports = {...exports,myFunc:myFunc,myFunc2:myFunc2};
// export default myFunc;