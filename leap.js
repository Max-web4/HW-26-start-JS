function itsLeap() {document.getElementById('leapYear').innerHTML = 'leap year!' } ;

function notLeap() {document.getElementById('leapYear').innerHTML = 'It`s not!' } ;

function checkLeap() {
let leapValue = document.leapform.leapField.value
if (!((leapValue % 4) || (!(leapValue % 100) && (leapValue % 400)))) {
    return itsLeap()
}
return notLeap()
}

function polindrom() {document.getElementById('polindrom').innerHTML='This is a polindrom'} 
function notPolindrom() {document.getElementById('polindrom').innerHTML='It`s not a polindrom'} 

function checkPolindrom () {
let str = document.polindromform.polindromField.value
let string = str.replace(/\s/g, '').trim()
    if (string == string.split('').reverse().join('')) {
        return polindrom()
    };
    return notPolindrom();
  }

  