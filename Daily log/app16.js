const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}

const links = document.querySelectorAll('p a');

for (linkk of links) {
    console.log(links.href);
}

const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelectorAll('input[type="checkbox"]');

const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');

for (let link of allLinks) {
    link.style.color = 'red';
    link.styletextDecorationColor = 'magenda';
}

