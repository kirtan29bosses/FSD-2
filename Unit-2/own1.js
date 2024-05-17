// This file is used in 'own2.js'

const add=(a,b) => 
    {
        return a+b;
    }
module.exports=add;

const sub=(a,b) => 
    {
        return a-b;
    }
const mul=(a,b) => 
    {
        return a*b;
    }
const name="Hello"
module.exports.s=sub;
module.exports.m=mul;
// Or module.exports={sub,mul};

// module.exports={sub,mul,name};