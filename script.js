/// https://pokeapi.co/api/v2/pokemon/pikachu

      // display the pokemon name

      // display the pokemon image
      // display 5 of  the pokemon moves
      // (good luck!)

const getPokemon = async() => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    let pokemon =  await res.json();

    console.log(pokemon)

    const pokemonRow = document.querySelector('#pokemon');

    pokemonRow.innerHTML += 
    `
    <div class="card" style="width: 18rem;">
  <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <ul>
    </ul>
  </div>
</div>
    `
    const ul = document.querySelector('ul');
    const pokemonMoves = pokemon.moves
    const pokemoneFive = pokemonMoves.slice(0,5);
    pokemoneFive.forEach((pokeMove) =>{
        ul.innerHTML += `
        <li><span>${pokeMove.move.name}</span></li>`
    })

}
getPokemon();