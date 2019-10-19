var mongoose = require('mongoose');

var button = document.getElementsByClassName('arrow up icon');
var counter = document.getElementsByClassName('score');

button.addEventListener('click', function(){
    counter.textContent = parseInt(counter.textContent) + 1; // `parseInt` converts the `value` from a string to a number
}, false);
