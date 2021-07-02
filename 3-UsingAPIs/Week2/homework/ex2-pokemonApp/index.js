'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  const select = document.createElement('select');
  document.body.appendChild(select);

  data.results.forEach((pokemon) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.innerText = pokemon.name;
  });

  select.addEventListener('change', (e) => {
    fetchImage(e.target.value);
  });
}

async function fetchImage(pokemonName) {
  const data = await fetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const image = document.createElement('img');
  image.src = data.sprites.front_default;
  document.body.appendChild(image);
}

function main() {
  const btn = document.createElement('button');
  btn.innerText = 'Get Pokemon!';
  document.body.appendChild(btn);
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.width = '150px';

  btn.addEventListener('click', fetchAndPopulatePokemons);
}

window.addEventListener('load', main);
