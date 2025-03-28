import{Product,taxCalculation } from "./06-function-types";

const shoppingCart: Product[] = [

    {
        descripcion: 'Phone1',
        price: 100
    
    },
    {
        descripcion: 'Phone2',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);
