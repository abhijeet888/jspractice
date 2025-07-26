//The forEach() method calls a function (a callback function) once for each array element.
const population = [2,4,2,9,49,2828,3849,22,4];
let t = 0;

console.log(population.forEach((v,i,a)=>{ t += 1}));
console.log("forEach",t,population);

//every- The every() method checks if all array values pass a test.
console.log("Every",population.every((v,i,a)=>{return v>0}));

//some - The some() method checks if some array values pass a test.
console.log("Some",population.some((v,i,a)=>{return v>10000000}));//false - because none passes the test

//Map-it creates a new arrray

const numbers = [1,2,3,4,5];
console.log("Map:",numbers.map((v,i,a)=>{return v*i}));

//filter-to filter particular values - creates a new array that passes a test
const filterdPopulation = population.filter((v,i,a)=>{return v>20});
console.log("Filter",filterdPopulation);

//find - The find() method returns the value of the first array element that passes a test function.
const findPopulation = population.find((v,i,a)=>{return v>2})
console.log("Find",findPopulation)//ans - 4

//findIndex - The findIndex() method returns the index of the first array element that passes a test function.
const findIndex = population.findIndex((v,i,a)=>{return v>2});
console.log("FindIndex",findIndex);

//reduce  - Trying to understand ;)
const a = population.reduce(getSum)
function getSum(total, num){
return total + num;
}
console.log('Reduce', a);