var generate = document.getElementById("generate");
generate.addEventListener('click',
function() {

    // Data form
    var name = document.getElementById('name').value;
    var distance = document.getElementById('km').value;
    var age = document.getElementById('age').value;

    // Calc price (0.21€ / km)
    var ticketPrice = 0.21 * distance;
    // Discount Type
    var discountType = "Reatil Price";


    // Ticket Price
    if (age == 'Underages'){
        ticketPrice -= ticketPrice * 0.2;
        discountType = 'Discount Young ( -20% )';
    }
    else if (age == 'Seniors'){
        ticketPrice -= ticketPrice * 0.4;
        discountType = 'Discount Senior ( -40% )';
    }

    document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed(2)  + '€';
    // Discount
    document.getElementById('discount').innerHTML = discountType;
    // Username
    document.getElementById('user-name').innerHTML = name;
    // Cabin
    document.getElementById('cabin').innerHTML = Math.floor(Math.random()*9) +1;
    // CP Code
    document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // Show Ticket
    document.getElementById('ticket').className = 'show';
}
);


var cancel = document.getElementById("cancel");
cancel.addEventListener('click',
function() {

    // Crear form to reuse
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    // Ticket Price
    document.getElementById('ticket-price').innerHTML = '';
    // Discount
    document.getElementById('discount').innerHTML = '';
    // Username
    document.getElementById('user-name').innerHTML = '';
    // Cabin
    document.getElementById('cabin').innerHTML = '';
    // CP Code
    document.getElementById('cp-code').innerHTML = '';

    // Hidden Ticket
    document.getElementById('ticket').className = 'hidden';
}
);
