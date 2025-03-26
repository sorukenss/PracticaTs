interface Product {
    descripcion: string;
    price: number;

}

const phone: Product = {
    descripcion: 'Nokia A1',
    price: 150
}
const tablet: Product = {
    descripcion: 'Ipad Air',
    price: 350
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(opcions:TaxCalculationOptions):number[] {
    
    let total = 0;
    opcions.products.forEach(product => {
        total += product.price;
    });

    return [total, total * opcions.tax];
}


const shoppingCart= [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', result[0]);
console.log('Tax', result[1]);