
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    detail: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioplayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    detail: {
        author: 'Ed Sheeran',
        year: 2015
    }
} 


// const { song: anotherSong,detail
// } = audioplayer;
 
// const { author,year } = detail;

// console.log('cantante: ', author);
// console.log('año: ', year);
// console.log('cancion: ', anotherSong);

const [,,p3= 'not found' ]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3: ', p3);