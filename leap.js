function itsLeap() {document.getElementById('leapYear').innerHTML = 'leap year!' } ;

function notLeap() {document.getElementById('leapYear').innerHTML = 'It`s not!' } ;

function checkLeap() {
let leapValue = document.leapform.leapField.value
if (!((leapValue % 4) || (!(leapValue % 100) && (leapValue % 400)))) {
    return itsLeap()
}
return notLeap()
}

