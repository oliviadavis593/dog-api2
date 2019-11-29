'use strict';

function getDogImages(numberInput) {
    if(numberInput < 3) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert('Oops something went wrong. Try again later!'));
    }
    else if (numberInput > 50) {
        return alert('Please choose a number that is equal to or less than 50');
    }
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numberInput}`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert('Oops something went wrong. Try again later!'));
    }
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').html('');
    responseJson.message.forEach(renderedImg => {
        $('.results').append(`<img src="${renderedImg}" class="results">`);
    });
    $('.results').removeClass('hidden');
}

function userInput() {
    $('#dog-input-form').submit(e => {
        e.preventDefault();
        let numberInput = $('#number-dog').val();
        getDogImages(numberInput);
    });
}

$(function() {
    console.log('App is loading!');
    userInput();
})



/*
fetch('https://dog.ceo/api/breeds/image/random/3')
  .then(rawResponse => rawResponse.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
    const images = jsonResponse.message.map(image => `<img src="${image}" />`);
    $('.images').html(images);
  })
  .catch(error => {
    console.log(error);
  });
  
*/