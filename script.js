// 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis.
const randomJokeButton = document.querySelector('#random-joke-button')

randomJokeButton.addEventListener('click', (event) => {
  event.preventDefault()
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
      const jokeParagraph = document.querySelector('#joke-paragraph')
      jokeParagraph.textContent = joke.value
    })
})

// 2. Sukurti galimybę pasirinkti juokelių kategoriją:
//   2.1. Sukurti formą, kurioje bus <select> elementas. 
//   2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.

let formElement = document.querySelector('#form-element')
let selectElement = document.querySelector('#chooseCategory')
let jokeDisplayElement = document.querySelector('#joke-by-category-display')

fetch('https://api.chucknorris.io/jokes/categories')
  .then(res => res.json())
  .then(categories => {
    categories.forEach(category => {
      let optionElement = document.createElement('option')
      optionElement.value = category
      optionElement.textContent = category
      selectElement.append(optionElement)
    });
})

//   2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.
formElement.addEventListener('submit', event =>{
  event.preventDefault()
  const selectedCategory = selectElement.value

    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
    .then(res => res.json())
    .then(data => {
      jokeDisplayElement.textContent = data.value;
    })
})

// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
let searchFormElement = document.querySelector('#form-search')
let textInputElement = document.querySelector('#textInput')
let searchSubmitButton = document.querySelector('#joke-button')
let searchParagraphDisplay = document.querySelector('#joke-by-search-paragraph')

searchFormElement.addEventListener('submit', (event)=>{
  event.preventDefault()
  const selectedCategory = textInputElement.value

    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
    .then(res => res.json())
    .then(data => {
      searchParagraphDisplay.textContent = data.value
    })
})
