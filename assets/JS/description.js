const pokemonSelect = document.getElementById('pokemonSelect')

function descriptionPokemon(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <div class="back-button">
                <a href="index.html">
                    <i class="fas fa-arrow-left"></i>
                </a>
            </div>
            <span class="name">${pokemon.name}</span>
            <span class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </span>
            <img src="${pokemon.photo}" alt="${pokemon.name}">

            <div class="tabs">
                <button class="tab" onclick="openTab('tab1')">About</button>
                <button class="tab" onclick="openTab('tab2')">Aba 2</button>
                <button class="tab" onclick="openTab('tab3')">Aba 3</button>
                <button class="tab" onclick="openTab('tab4')">Aba 4</button>
            </div>

            <div id="tab1" class="tab-content">
                <div class="detailStats">
                    <h3>Stats: </h3>
                    <ol class="stats">
                        ${pokemon.stats.map((effort) => `<li class="stat ${effort}">${effort}</li>`).join(', ')}
                    </ol>
                </div>
                <div class="weight"><h3>Weight: </h3> ${pokemon.weight}</div>
            </div>

            <div id="tab2" class="tab-content">
                <h2>Aba 2</h2>
                <p>Aba 2...</p>
            </div>

            <div id="tab3" class="tab-content">
                <h2>Aba 3</h2>
                <p>Aba 3...</p>
            </div>

            <div id="tab4" class="tab-content">
                <h2>Aba 4</h2>
                <p>Aba 4...</p>
            </div>
        </li>
    `
} 

const selectedPokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
const newHtml = selectedPokemon ? descriptionPokemon(selectedPokemon) : '';
pokemonSelect.innerHTML = newHtml;


function openTab(tabName) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}



