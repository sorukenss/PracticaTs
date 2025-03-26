
interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;

}
interface Address{
    street: string;
    country: string;
    city: string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        city: 'NY',
        country: 'USA'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }

}