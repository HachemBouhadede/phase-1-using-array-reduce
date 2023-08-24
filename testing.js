const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

let totalSum = 0
let tempSum = 0
const total = (list) => {
    totalSum += list.price 
    console.log (totalSum)
    return totalSum
}

totalSum = products.reduce(total )
console.log(totalSum)