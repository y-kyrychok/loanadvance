"use strict"

let $ = (selector) => document.body.querySelector(selector);

// *******************input[type=range]***********************

let $rng = document.querySelector("input.loan-range");

read("change");
read("mousedown");
read("mousemove");

function read(eventType) {
    $rng.addEventListener(eventType, ()=>
    {
      $("strong").innerHTML = "$" + $rng.value;
    });
  };

//*************************Submit form***********************

$("submit-form-request").addEventListener("submit", (event) =>
    {
        event.preventDefault()
        calculateLoan()
    });

function calculateLoan() {
    
}