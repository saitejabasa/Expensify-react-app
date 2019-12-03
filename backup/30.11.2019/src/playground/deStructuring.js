
//object destructuring
const person = {
    name:'saiteja',
    age:'26',
    location:{
        city:'hyderabad',
        temp:30
    }
};


const {name , age} = person;
console.log(`${name} is ${age}`);

const {city , temp} =person.location;
if(city && temp){
    console.log(`${city} and temp ${temp}`);
}

//ArrayDestructuring

const adress = ['one', 'two', 'three'];
const [s,  , z] = adress;

console.log(`you are ${s} and ${z}`);