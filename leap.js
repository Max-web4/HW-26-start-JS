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

function moneyConverter() {
    let val = document.getElementById("amount").value;
    let EUR = 0.82;
    let UAN = 28.07;
    let AZN = 1.4;
    let result ;

    switch(true) {
        case document.getElementById("Eur").checked:
            result = val / EUR ;
            break;
        case document.getElementById("Uan").checked :
            result = val / UAN ;
            break;
        case document.getElementById("Azn").checked :
            result = val / AZN ;
            break;
    }
    result = `${result.toFixed(2)}`
    document.getElementById("convert_result").innerHTML = result;
    return result;

}