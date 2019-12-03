
const user = {
    usr:"saiteja",
    cities: ['Hyderabad', 'Bangalore', 'Italy'],
    printPlacesLived(){

        return this.cities.map((city)=>this.usr +" lived in "+city);
        // or this
        // const citymap = this.cities.map((city)=>{
        //     return this.usr +" lived in "+city;
        // });
        // return citymap;
    }
}; 

console.log(user.printPlacesLived());

const multiplier = {
    number:[1,2,3,4,5,6],
    multiplyBy: 4,
    multiplier(){
        return this.number.map((multiply)=> multiply*this.multiplyBy);
    }
};
console.log(multiplier.multiplier());
// const square = function(x){
//     return x*x;
// };
// console.log(square(6));

// const squareArrow = (x)=>{
//     return x*x;
// };

// const squareArrow = (x) => x*x;
// console.log(squareArrow(5));
