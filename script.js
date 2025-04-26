const names = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch’d",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

let currentIndex = 0; // Initialize index globally

function addIndex() {
  currentIndex++;
  if (currentIndex > names.length) currentIndex = 1;
  updateResult();
}

function subIndex() {
  currentIndex--;
  if (currentIndex < 1) currentIndex = names.length;
  updateResult();
}

function updateResult() {
  const result = document.getElementById("result");
  const pokemonName = names[currentIndex - 1]; // Get the name of the Pokemon
  result.innerHTML = `Id: ${currentIndex}<br>Name: ${pokemonName}`;

  const pokedexScreen = document.querySelector(".pokedex-screen");
  pokedexScreen.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentIndex}.png')`;
  pokedexScreen.style.backgroundSize = "contain";
  pokedexScreen.style.backgroundRepeat = "no-repeat";
  pokedexScreen.style.backgroundPosition = "center";

  if (currentIndex > 0) {
    const screen = document.querySelector(".pokedex-screen");
    screen.style.backgroundColor = "white";
  } else {
    const screen = document.querySelector(".pokedex-screen");
    screen.style.backgroundColor = "black";
  }
}

function findNameIndex() {
  let input = document.getElementById("nameInput").value.trim();
  input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  const index = names.indexOf(input) + 1;

  const result = document.getElementById("result");
  result.innerHTML = ""; // Clear previous result

  if (index !== 0 && input === names[index - 1]) {
    currentIndex = index;
    result.innerHTML = `Id: ${index}<br>Name: ${input}`; // Display both ID and name

    const pokedexScreen = document.querySelector(".pokedex-screen");
    pokedexScreen.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentIndex}.png')`;
    pokedexScreen.style.backgroundSize = "contain";
    pokedexScreen.style.backgroundRepeat = "no-repeat";
    pokedexScreen.style.backgroundPosition = "center";

    if (currentIndex > 0) {
      const screen = document.querySelector(".pokedex-screen");
      screen.style.backgroundColor = "white";
    } else {
      const screen = document.querySelector(".pokedex-screen");
      screen.style.backgroundColor = "black";
    }

    result.appendChild(document.createElement("br"));
    result.appendChild(image);
  } else {
    // Find the closest match
    const closestMatch = findClosestMatch(input, names);
    if (closestMatch) {
      const indexFix = names.indexOf(closestMatch) + 1;
      currentIndex = indexFix;
      result.innerHTML = `Name not found. <br> Did you mean "${closestMatch}"?`;

      const pokedexScreen = document.querySelector(".pokedex-screen");
      pokedexScreen.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentIndex}.png')`;
      pokedexScreen.style.backgroundSize = "contain";
      pokedexScreen.style.backgroundRepeat = "no-repeat";
      pokedexScreen.style.backgroundPosition = "center";

      if (currentIndex > 0) {
        const screen = document.querySelector(".pokedex-screen");
        screen.style.backgroundColor = "white";
      } else {
        const screen = document.querySelector(".pokedex-screen");
        screen.style.backgroundColor = "black";
      }

      result.appendChild(document.createElement("br"));
      result.appendChild(image);
    } else {
      result.textContent = "Name not found. Make sure spelling is correct.";
    }
  }
}

// Helper function to calculate Levenshtein distance
function getLevenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

// Helper function to find the closest match
function findClosestMatch(input, names) {
  let closestMatch = null;
  let smallestDistance = Infinity;

  for (const name of names) {
    const distance = getLevenshteinDistance(input, name);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestMatch = name;
    }
  }

  return smallestDistance <= 3 ? closestMatch : null;
}
