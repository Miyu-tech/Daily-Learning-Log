const form = document.querySelector('#searchForm');
const resultArea = document.querySelector('#resultArea');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const drinkInput = form.elements.query;
    const drinkName = drinkInput.value.trim();

    if (!drinkName) return alert('飲み物の名前を入力してください');

    const caffeineData = await fetchDrinkInfo(drinkName);

    displayResults(caffeineData);
    drinkInput.value = '';
});

class Drink {
    constructor(name, caffeine, origin) {
        this.name = name;
        this.caffeine = caffeine;
        this.origin = origin;
    }
}

async function fetchDrinkInfo(drinkName) {

    const dummy = {
        "coffee": new Drink("Coffee", 95, "Ethiopia"),
        "matcha": new Drink("Match", 70, "Japan"),
        "cola": new Drink("Cola", 35, "United States"),
        "blacktea": new Drink("Black tea", 50, "India"),
    };
    return dummy[drinkName.toLowerCase()];
}

function displayResults(drink) {
    resultArea.innerHTML = '';

    if (!drink) {
        resultArea.textContent = '該当データがありませんでした。';
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h3>${drink.name}</h3>
    <p>カフェイン量：${drink.caffeine} mg</p>
    <p>原産国：${drink.origin}</p>
    `;
    resultArea.append(card);
}