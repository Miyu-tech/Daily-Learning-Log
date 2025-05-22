const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



numbers.forEach(
    function (element) {
        console.log(element);
    }
);

-------------------------

const movies = [
    {
        title: 'Amedeus',
        score: 99
    },
    {
        title: 'Syand By Me',
        score: 85
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Amedeus',
        score: 90
    },
];

//Amadeusの評価を99/100にしたいとき

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})

---------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);//[2,4,6,8]

コールバック関数はmapの中に出てくるfunction(...){... } のこと。どういう処理をしたいかを渡す関数


const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (person) {
    return person.first;
});

console.log(firstNames);


//アロー関数（functionを使わづに書ける簡略版

const add = (x, y) => {
    return x + y;
}

const square = (num) => {
    return num * num;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}


const greet = name => `Hey ${name}!`

//{}を()に変えて;を一番下に移すと、returnを消して簡略化できる
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

//()事態をなくすこともできる
const add = (x, y) => x + y

//簡略化できるのは実行する式が１つのときのみ可能です

const movies = [
    {
        title: 'Amedeus',
        score: 99
    },
    {
        title: 'Syand By Me',
        score: 85
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Amedeus',
        score: 90
    },
]

const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)

これを