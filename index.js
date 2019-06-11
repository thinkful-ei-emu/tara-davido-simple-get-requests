'use strict';

function getDogs(dogNumber, dogBreed) {
  if (dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${dogNumber}`)
      .then(response => response.json())
      .then(jsonData => {
        extractData(jsonData);
        console.log(jsonData);
      })
      .catch(error => {
        console.log(error);
        alert("Breed not found");
      })
  }

  else {
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

  //response will be an object
  //message property is an array of links
  //loop through that array and print values
}

function extractData(jsonData){
  jsonData.message.forEach(dogs=>{
    console.log(dogs);
    $('.dogsList').append(createTemplate(dogs));
  });
}


function handleSubmit() {
  $('#js-number-select').submit(function(event) {
    event.preventDefault();
    const dogNumber = $('.js-number-input').val();
    const dogBreed = $('.js-breed-input').val();
    getDogs(dogNumber, dogBreed);

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

handleSubmit();