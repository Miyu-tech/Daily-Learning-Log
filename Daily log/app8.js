例えば、

const subreddits = [
    "cooking",
    "books",
    "chickens",
    "life",
    "pics",
    "soccer",
    "movies",
];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

これよりも、下記はシンプル

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddits}`);
}

例２

const seatingChat\rt = {
    ['sato', 'Yato', 'uto'],
    ['ise', 'hese', 'ose'],
    ['was', 'wes', 'yes']
};

for (let row of setingChart) {
    for (let student of row) {
        console.log(student);
    }
}

const testScores = {
    ken: 80;
    yuki: 67;
    taro: 89;
    ryota: 91;
    yuma: 72;
    yuko: 77;
    chiaki: 83;
    kota: 97;
    saeko: 81;
    koki: 60;
};

for (let student of Object.keys(testScores)) {
    console.log(`${student}さんは${testScores[student]}`);
}