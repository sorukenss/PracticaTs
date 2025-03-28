

export class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
}

// export class Hero extends Person{
//     alterEgo: string;
//     realname:string;
//     constructor(alterEgo: string, age: number, realname:string) {
//         super('IronMan',age);
//         this.alterEgo = alterEgo;
//         this.realname = realname;
//     }
        
//     }
export class Hero{

    alterEgo: string;
    realname:string;
    constructor(alterEgo: string, age: number, realname:string, person:Person) {
        this.alterEgo = alterEgo;
        this.realname = realname; 
    }
        
}
const persona=new Person('tony',25);

const ironMan = new Hero("Tony Stark", 30,'iroman',persona);

console.log(ironMan);