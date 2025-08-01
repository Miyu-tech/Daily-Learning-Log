// fakeRequestPromise('yelp.com/api/coffee');
// .then(() => {  //.thenは成功のときに使う
//     console.log('Success!');
//     fakeRequestPromise('yelp.com/api/coffee');
// .then(() => {
//         console.log('Success!');
//     })
//         .catch(() => {　　//.catchは失敗したときに使う
//             console.log('failure');
//         })
// })
//     .catch(() => {
//         console.log('failure');
//     })


//下記のやり方なら同じ階層にかけてすっきり読みやすくなる
fakeRequestPromise('yelp.com/api/coffe');
.then((data) => {
    console.log('Success');
    console.log(data);
    retrun fakeRequestPromise('yelp.com/api/coffee/page2');
})
    .then((data) => {
        console.log('Success2');
        console.log(data)
    })
    .catch((err) => {
        console.log('Failure');
        console.log(err)
    })

//thenはそれから、という意味で使うとわかりやすい