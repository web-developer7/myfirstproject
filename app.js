"use strict";

let person={
    name:"saidabror",
    age:12,
    jobs:"programmer , designer, pupil",



    hobies:{
hobbiOne:"read books",
hobbieTwo:"listening to music" ,
hobbieThree:"play football",
hobbieFour:"play the guitar"
    }
};


const jsonFile=JSON.stringify(person);

const obj=JSON.parse(jsonFile);
obj.nick="pro";

console.log(person);
console.log(jsonFile);
console.log(obj);

