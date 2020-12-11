

function yourDiscount() {
    let val = document.getElementById("disc").value ;
    let discForm = document.getElementById("Discount") ;
    let counter ;
    if(200 <= val && val < 300) {
     counter = val - (val * 0.03) 
    } else if (val < 500) {
        counter = val - (val * 0.05)
    }   else if (val >= 500) {
        counter = val - (val * 0.07)
    }  else if (val < 0) {
        counter = NaN
    }  else { counter = val}
    return counter
    discForm = counter
    
}
yourDiscount()
discForm.innerHTML