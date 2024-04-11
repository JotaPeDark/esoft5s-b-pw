function changePageTitle(title) {
  document.title = title
}
//contador de visitas
let visitas = localStorage.getItem("visitas");
let contador;
let ultimaVisita;

if (!visitas) {
  contador = 0;
  localStorage.setItem("visitas", contador);
} else {
  contador = localStorage.getItem("visitas");
  contador++;
  ultimaVisita = new Date
  localStorage.setItem("visitas", contador);
}

console.log(ultimaVisita)

//-----------------------------------------------------------------------------------------------------

document.getElementById("numero").innerHTML = contador;

function resetear() {
  localStorage.removeItem("visitas");
  location.reload();
}

function generateInfoSection(src, pokemonName) {
  const h2 = document.createElement('h2')
  h2.id = "info-pokemon-label"
  h2.textContent = `Informações sobre ${pokemonName}`

  const img = document.querySelector('img')
  img.src = src
  img.alt = `Imagem do pokemon ${pokemonName}`

  const section = document.querySelector('#info-pokemon')

  section.appendChild(h2)
  section.appendChild(img)
}

async function getPokemonData(name) {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   .then((fetchData) => {
  //     return fetchData.json()
  //   })
  //   .then((jsonData) => generateInfoSection(jsonData.sprites.front_default, name))
  //   .catch((error) => console.error(error))

  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    const jsonData = await data.json()

    generateInfoSection(jsonData.sprites.front_default, name)
  } catch (error) {
    console.error(error)
  }
}

function getSearchParams() {
  // Early return -> Caso location search, não faz nada.
  if (!location.search) {
    return
  }

  // URLSearchParams é uma classe que facilita a manipulação de query strings
  const urlSearchParams = new URLSearchParams(location.search)

  // Pegando o valor do parâmetro name
  const pokemonName = urlSearchParams.get('name')

  changePageTitle(`Pagina do ${pokemonName}`)
  getPokemonData(pokemonName)
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams()
})
