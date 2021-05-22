const products = document.querySelector('.products');
const credits = document.querySelector('.credits');
const currentCharge = document.querySelector('#charge');
const currentCredit = document.querySelector('#credit');
const dispenseBtn = document.querySelector('.dispense');
const messageParagraph = document.querySelector('.message');
let total = 0;
let credit = 0;

// handle charge events
products.addEventListener('click', (event) => {
    if (event.target.classList.contains('product')) {
        total += parseInt(event.target.value);
        // console.log(total);
        currentCharge.innerText = `Total Charge: $${total}.00`;
    }
})

// handle credit events
credits.addEventListener('click', (event) => {
    if (event.target.classList.contains('credit')) {
        credit += parseInt(event.target.value);
        // console.log(credit);
        currentCredit.innerText = `Total Credit: $${credit}.00`;
    }
})

// handle checkout events
dispenseBtn.addEventListener('click', (event) => {
    if (credit < total) {
        // console.log('not enough money');
        messageParagraph.innerText = 'Sorry, not enough money :(';
    } else {
        // console.log('enough money');
        messageParagraph.innerText = 'Thank you for your purchase!';
        // subtract the total charge from the total credit
        credit -= total;
        // set the total charge to 0
        total = 0;
        // update the display for the total charge
        currentCharge.innerText = `Total Charge: $${total}.00`;
        // update the display for the total credit
        currentCredit.innerText = `Total Credit: $${credit}.00`;
    }
});