'use strict';

function getDogs(dogNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response=> response.json())
    .then(jsonData => {
      extractData(jsonData);
      console.log(jsonData);
    })
    .catch(error => {
      console.log(error);
    });

  //response will be an object
  //message property is an array of links
  //loop through that array and print values
}

function extractData(jsonData){
  jsonData.message.forEach(dogs=>{
    console.log(dogs);
  });
}


function handleSubmit() {
  $('#js-number-select').submit(function(event) {
    event.preventDefault();
    console.log(dogNumber);
    const dogNumber = $('.js-number-input').val();
    getDogs(dogNumber);

  });
}