setTimeOit(() => {
    console.log('やっほー');
}, 3000);

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

clearInterval();


## filterの使い方

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.filter((num) => {
    return num === 4;
})

const movies = [
    {
        title: 'Amedeus',
        score: 99
        year: 1984
    },
    title: 'Syand By Me',
    score: 85
    year: 2013
    {
        title: 'Parasite',
        score: 95
        year: 2004
    },
    {
        title: 'Amedeus',
        score: 90
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
    }
];

// const goodMovies = movies.filter(movie => return movie.score > 80)
const goodMovies = movies.filter(movie => return movie.score > 80).map(movie => movie.title);

const badMovies = movies.filter(movie => return movie.score < 70);
const recentMovies = movies.filter(movie => return movie.year > 2010);

validUserNames.filter(validUserName => return validUserNames.length < 10);

function validUserNames(usernames) {
    return usernames.filter(function (name) {
        return name.length < 10;
    });
}


const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]
exams.every(exam => exam >= 75);  //すべて数字が７５以上ならtrue



const movies = [
    {
        title: 'Amedeus',
        score: 99
        year: 1984
    },
    title: 'Syand By Me',
    score: 85
    year: 2013
    {
        title: 'Parasite',
        score: 95
        year: 2004
    },
    {
        title: 'Amedeus',
        score: 90
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
    }
];

movies.some(movie => movie.year > 2010);

function allEvens(arr) {
    return arr.every(function (num) {
        return num % 2 === 0;
    });
}


## reduce


const prices = [980, 1500, 1980, 4980, 2980];
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total); //12420

prices.reduce((total, prices) => {
    return total + prices;
})

もし最小値を知りたいなら

prices.reduce((min, prices){
    if (min > price) {
        retun price;
    }
    return min;
})


const movies = [
    {
        title: 'Amedeus',
        score: 99
        year: 1984
    },
    title: 'Syand By Me',
    score: 85
    year: 2013
    {
        title: 'Parasite',
        score: 95
        year: 2004
    },
    {
        title: 'Amedeus',
        score: 90
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
    }
];

const highestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (bestMovie.score < currentMovie.score) {
        return currentMovie;
    }
    return bestMovie;
})


##　アロー関数

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function () {
        return `${this.lastName} ${this.firstName}`;
    },
}