'use strict';

function getDogNumber(dogNumber) {

  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response=> response.json())
    .then(jsonData => {
      extractData(jsonData);
      console.log(jsonData);
    })
    .catch(error => {
      console.log(error);
    });
}

function getDogBreed(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      extractData(jsonData);
    })
    .catch(error => {
      console.log(error);
      alert('Breed not found');
    });
}

function extractData(jsonData){
  if (typeof jsonData.message === 'object') {
    jsonData.message.forEach(dogs=>{
      console.log(dogs);
      $('.dogsList').append(createTemplate(dogs));
    });
  }  
  else {
    $('.dogsList').append(createTemplate(jsonData.message));
  }
}


function handleNumberSubmit() {
  $('#js-number-select').submit(function(event) {
    event.preventDefault();
    $('.dogsList').empty();
    const dogNumber = $('.js-number-input').val();
    getDogNumber(dogNumber);
  });
}

function handleBreedSubmit() {
  $('#js-breed-select').submit(function(event) {
    event.preventDefault();
    $('.dogsList').empty();
    const dogBreed = $('.js-breed-input').val();
    $('.js-breed-input').val('');
    console.log(dogBreed);
    getDogBreed(dogBreed);
  });
}

function createTemplate(dogLink){
  console.log(dogLink);
  console.log('creating a template!');
  let template =`<section>
    <img src="${dogLink}" alt="Dog Pictures">
  </section>
      `;
  return template;
}

function main(){
  handleBreedSubmit();
  handleNumberSubmit();
}

$(main());