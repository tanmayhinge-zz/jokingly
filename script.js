const button = document.querySelector('.container button')
const setupText = document.querySelector('.container p1')
const punchlineText = document.querySelector('.container p2')

document.addEventListener('DOMContentLoaded', fetchJoke)
button.addEventListener('click', fetchJoke);

async function fetchJoke(){
    const jokeData = await fetch('https://official-joke-api.appspot.com/random_joke',{
        headers:
        {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    setupText.innerHTML = (`${jokeObj.setup}`);
    punchlineText.innerHTML = (`${jokeObj.punchline}`);
}