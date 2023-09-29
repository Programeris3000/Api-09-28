// UŽDUOTIS (https://dog.ceo/dog-api/):
// 1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.


function dogDisplay (){
let dogForm = document.querySelector('#dogs-form')
let dogSelect = document.querySelector('#dogs-select')
let imageDisplay = document.querySelector('#image-display')

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res=> res.json())
  .then(data=>{
      for (const breed in data.message) {        
        let optionElement = document.createElement('option') 
        optionElement.textContent = breed                                             
        optionElement.value = breed                      
        dogSelect.append(optionElement)       
        
        const subBreeds = data.message[breed]
        subBreeds.forEach(subBreed=>{
          let subOptionElement = document.createElement('option')
          subOptionElement.textContent = `${breed}(${subBreed})`
          subOptionElement.value = `${breed}/${subBreed}`
          dogSelect.append(subOptionElement)       
        })
      }
  })

  dogForm.addEventListener('submit', event =>{              
    event.preventDefault()                                  
    const breedInsert = `${dogSelect.value}`                                             
      fetch(`https://dog.ceo/api/breed/${breedInsert}/images/random`) 
      .then(res => res.json())
      .then(data => {
        imageDisplay.setAttribute('src', data.message)
      })
  })
}

dogDisplay ()


// 1. Sukurti formą, kurioje galima įrašyti asmens vardą.
function init(){
const personsForm = document.querySelector('#enter-persons-name')
const nameInput = document.querySelector('#persons-name')
const personsDataWrapper = document.querySelector('#persons-data')

personsForm.addEventListener('submit', (event)=>{
event.preventDefault()
const name = event.target['persons-name'].value

fetch(`https://api.agify.io?name=${name}`)
  .then(res => res.json())
  .then(data=>{
    const age = data.age
    const output = `${name} age is ${age}`
    const ageDisplay = document.createElement('span')
    ageDisplay.textContent = output
    personsDataWrapper.append(ageDisplay)
  })

  fetch(`https://api.nationalize.io?name=${name}`)
  .then(res => res.json())
  .then(data=>{
    data.country.forEach(array=>{
      for (const property in array) {
        const key = property
        const value = array[property]
        console.log(value)
        // if(typeof value === 'number'){
        // }
      }
    })


    // const nationality = data.nationality
    // const output = `${name} nationality is ${nationality}`
    // const nationalityDisplay = document.createElement('span')
    // nationalityDisplay.textContent = output
    // personsDataWrapper.append(nationalityDisplay)
  })


})
// 2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
// Amžiui - https://agify.io/
// Tautybei - https://nationalize.io/
// Lyčiai - https://genderize.io/



}

init()

