// axios.get('https://swapi.tech/api/people/1/')
//     .then(res => console.log('RESPONSE!', res));

// const getStarWarsPerson = async () => {
//     const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//     console.log(res.data);
// } catch (e) {
//     console.log('ERROR!', e);
// }

// getStarWarsPerson(1);


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => 
    try {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
} catch (e) {
    return 'No jokes!'
}



    const addNewJoke = async () => {
        const jokeText = await getDadJoke();
        const newLI = document.createElement('LI');
        newLI.append(jokeText);
        jokes.append(newLI);
    }

    button.addEventListener('click', addNewJoke);