/*
Author:  Marc D. Holman
For:  Introduction to Cloud Development with HTML5, CSS, and Javascript
Date:  10 / 15 / 2022

Title:  Simple Interest Calculator, calculates interest accrued over time.
*/

// self-invoking "anonymous" function runs when the page is loaded
// note the script is attached to the bottom of the page
// this prevents errors that are caused when a script tries to get reference
// to an element that may not yet have been created.

// bind the deposit and interest rate fields displayed at bottom of app
(function() {
    document.getElementById("result").style.display = "none";

    let slider = document.getElementById("rate");
    let interestRateDisplay = document.getElementById("interestRateDisplay");
    let interestRateBottomDisplay = document.getElementById("interestRate");
    
    slider.addEventListener('input', function() {
        interestRateDisplay.innerHTML = slider.value + "%";

        interestRateBottomDisplay.innerHTML = slider.value + "%";
    }, false);

    let principal = document.getElementById("principal");
    let principalDisplay = document.getElementById("amount");

    principal.addEventListener('input', function() {
        principalDisplay.innerHTML = principal.value;
    }, false);

})();

// The interest is computed here according to the simple formula:
// interest = (principal * rate * time) / 100
// resultant total amount and year fields are populated on compute
function compute()
{
    let principal = document.getElementById("principal").value;

    if(principal <= 0 || principal == "") {
        alert("Principal must be a positive value.");
        return;
    }
    
    let rate = document.getElementById("rate").value;
    let interestRateDisplay = document.getElementById("interestRateDisplay"); // the span
    let years= document.getElementById("years").value;
    let totalAmount = document.getElementById("totalAmount");
    let projectedYearDisplay = document.getElementById("projectedYear");

    let simpleInterest = (principal * rate * years) / 100;

    totalAmount.innerHTML = simpleInterest;
    principal.innerHTML = principal;
    projectedYear.innerHTML = getProjectedYear(years);

    showOrHideResults();

}

// toggles the display style on result div to show/hide
function showOrHideResults() {
    var resultsDiv = document.getElementById("result");
    if(resultsDiv.style.display == "none") {
        resultsDiv.style.display = "block";
    } else {
        resultsDiv.style.display = "none";
    }
}

// takes the number of years entered on the form and performs necessary
// addition to get the projected year.
function getProjectedYear(years) {
    let date = new Date();
    let currentYear = date.getFullYear();
   
    let projectedYear = (parseInt(currentYear) + parseInt(years));

    return projectedYear;
}
        