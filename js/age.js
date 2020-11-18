function yourAge() {
    let age = document.value; 
    let e = document.getElementById("ages");
    
    switch(true) {
        case age < 0 || age > 200: 
        e.innerHTML="?";
                break;
        case age >= 0 && age < 12: e.innerHTML = "Child";
                break;
        case age >= 12 && age < 18: e.innerHTML = "teeny";
                break;
        case age >= 18 && age < 60: e.innerHTML = "adult";
                break;
        case age >= 60 && age < 100: e.innerHTML = "retired";
                break;
        case age >= 100 && age <= 200: e.innerHTML = "Joda";
                break;
        default: e.innerHTML = "Numbers only";
    }
    }
    let e = document.getElementById('ages');
    e.innerHTML = 'some text';
    
     