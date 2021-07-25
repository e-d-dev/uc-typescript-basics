
/**
 * Video 41
 */

// const pizzas = [
//     { name: 'Pepperoni', toppings: ['pepperoni'] }
// ];

// const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

// console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: () => pizza.name
// };

// console.log(pizza.getName());

// ===========================================================================
/**
 * Video 42
 */

// function multiply(a: number, b: number = 25) {
//     return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(5, 35));

// ===========================================================================
/**
 * Video 43
 */

// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     getName() {
//         return this.name;
//     }
// }
// const toppings = ['pepperoni'];

// const orderBeforeES6 = {
//     pizza: pizza,
//     toppings: toppings
// };
// console.log(orderBeforeES6);

// const orderES6 = {
//     pizza,
//     toppings
// };
// console.log(orderES6);

// function createOrder(piz: any, top: any) {
//     return { piz, top };
// }
// console.log(createOrder(pizza, toppings));

// console.log(pizza.getName());

// ===========================================================================
/**
 * Video 44
 */

// function sumAll(message: string, ...arr: number[]) {
//     console.log(message);
//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll('Hello', 1,2,3,4,5,6,7,8,9,10);
// console.log(sum);

// ===========================================================================
/**
 * Video 45
 */

// const toppings = ['bacon', 'chilli'];
// const newToppings = ['pepperoni'];
// const allToppings: any[] = toppings.concat(newToppings);
// const allToppings2: any[] = [...toppings, ...newToppings]; // array spread operator
// const allToppings3: any[] = [...newToppings, ...toppings];
// console.log(allToppings);
// console.log(allToppings2);
// console.log(allToppings3);

// ===========================================================================
/**
 * Video 46
 */

// const pizza = {
//     name: 'Pepperoni'
// };
// const toppings = ['pepperoni'];

// const order = { pizza, toppings }; // puts the whole pizza object in, not just the property

// const orderSpreadOperator = { ...pizza, toppings };  // object spread operator, since ES6

// const orderTheOldWay = Object.assign({}, pizza, { toppings });

// console.log(order);
// console.log(orderSpreadOperator);
// console.log(orderTheOldWay);

// ===========================================================================
/**
 * Video 47
 */

// object destructuring
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

// object literal structure (the curly braces) says: we are getting an object coming through that one argument with a name property and a toppings property
function order({ name: pizzaName, toppings: pizzaToppings } : {name: string, toppings: string[]}) { 
    return {pizzaName, pizzaToppings};
}

const myOrder = order(pizza);
console.log(myOrder);
const {pizzaName} = order(pizza);
console.log(pizzaName);

// array destructuring
const toppings = ['pepperoni', 'bacon', 'chilli'];
const [first, second, third] = toppings;
console.log(first, second, third);

function logToppings([first, second, third]: any) {
    console.log(first, second, third);
};
logToppings(toppings);