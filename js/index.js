"use strict"

let $ = (selector) => document.body.querySelector(selector);

// *******************input[type=range]***********************

let rng = document.querySelector("input.loan-range");

read("change");
read("mousedown");
read("mousemove");

function read(eventType) {
    rng.addEventListener(eventType, ()=>
    {
      $("strong").innerHTML = "$" + rng.value;
    });
  };

//*************************Submit form***********************

let form = $(".request")

form.addEventListener("submit", (event) =>
    {
        event.preventDefault();
        calculateLoan()
    });

function calculateLoan() {
    let loanInfo = $(".loan-info")
    let inputs = $(".inputs")
    inputs.style.display = "none"
    loanInfo.style.display = "flex"


    let lastname = $("input.last-name")
    let period = $("input.period")
    let name = $("input.first-name")
}