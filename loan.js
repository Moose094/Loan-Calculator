
// creating a function to calculate monthly payment

function calculate(){

    // variable for loan amount
let amount = document.getElementById('loanAm').value;


// variable for number of months
let numOfMonths = document.getElementById('numOf_months').value;


// variable for interest Rate
let interestRate = document.getElementById('IR').value;


//variable for Monthly Payment
let monthlyPayment = document.getElementById('MP');



// variable to calculate the interest 

 const interest = (amount * (interestRate * 0.01)) / numOfMonths;
    
// variable for the actual calculation

let pay = ((amount / numOfMonths) + interest).toFixed(2); 


/* putting a comma after every 3 digits
to make the pay amount easily 
readable
*/

pay = pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

// putting the result into the monthly payment box
document.querySelector('#MP').innerHTML = ` ${pay}`


}