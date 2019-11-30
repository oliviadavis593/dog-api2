'use strict';

function getDogImages(numberInput) {
    if(numberInput > 50) {
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
function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('I cant seem to find that. Try something else!'));
}
  
*/