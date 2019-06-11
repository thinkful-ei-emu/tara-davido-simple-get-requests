function getDogs(dogNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response=> response.json())
    .then(jsonData => {
      extractData(jsonData);
    })
    .catch(error => {
      console.log(error);
    })

    //response will be an object
    //message property is an array of links
    //loop through that array and print values
}

function extractData

function handleSubmit() {
  $('#js-number-select').submit(function(event) {
    event.preventDefault();
    dogNumber = ${'.js-number-input'}.val();
    getDogs(dogNumber);
  })
}