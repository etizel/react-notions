// import quadrado from './quadrado.js';
import numberRandom from './randomnumber.js';
import champ from './champ.js';
import computer from './array.js';
import objectoClone from './object.js';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then((jsonX) => console.log(jsonX));

async function pokemonURL() {
  const pokemonFetch = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
  );
  const pokemonResponse = await pokemonFetch.json();
  return pokemonResponse;
}
console.log(pokemonURL());

// console.log(objectoClone.couple());
// console.log(computer.name.concat(computer.price).concat(computer.condition));

// console.log(champ.nameChamp('Lissandra'));
// console.log(champ.nameType('Ice Witch Black'));

// console.log(quadrado.perimetroQuadrado(4));
// console.log(quadrado.areaQuadrado(9));
