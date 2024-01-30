const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 20
let offset = 0;

function convertPokemonToLi(pokemon, index) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            <button class="loadDescriptionButton" type="button" data-pokemon-index="${index}">Saiba Mais</button>
        </li>
    `
}


function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            pokemonList.innerHTML = '';
            const newHtml = pokemons.map((pokemon, index) => {
                return convertPokemonToLi(pokemon, index);
            }).join('');
            pokemonList.innerHTML += newHtml;

        
          document.querySelectorAll('.loadDescriptionButton').forEach((button) => {
            button.addEventListener('click', function() {
                const pokemonIndex = button.getAttribute('data-pokemon-index');
                const selectedPokemon = pokemons[pokemonIndex];
                localStorage.setItem('selectedPokemon', JSON.stringify(selectedPokemon));
                var pageDescription = "description.html";
                window.open(pageDescription, '_blank');

            });
        });
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit
    qtdRecordsWithNexPage >= maxRecords
    ? (() => {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        loadMoreButton.disabled = true;
    })()
    : loadPokemonItens(offset, limit);
})




