const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('クリックした');
    console.log('Ohayo');
}

function scream() {
    console.log('Konichiwa');
    console.log('Ureshi');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    StylePropertyMap('h1 click');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('click!');
});

