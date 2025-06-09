const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweet');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(userameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
    // console.log(tweetInput.value);

});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` -${tweet}`);

    tweetsContainer.append(newTweet);
}



const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;

    const newItem = document.createElement('li');
    newItem.textContent = `${productInput.value} ${qtyInput.value}`;
    list.appendChild(newItem);

    productInput.value = '';
    qtyInput.value = '';
});

const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.qty;
    const qtyInput = form.elements.qty;

    const newItem = this.ownerDocument.createElement('li');
    newItem.textContent = `${qtyInput.value} ${productInput.value}`;
    list.appendChild(newItem);

    productInput.value = '';
    qtyInput.value = '';
});