
const skills: string[] = ['bash', 'counter', 'healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Character = {
    name: 'Isaac',
    hp: 100,
    skills: ['bash', 'counter']

}

strider.hometown = 'Pueblo Natal';


console.table(strider);