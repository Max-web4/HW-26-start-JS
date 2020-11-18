function yourAge() {
    let age = document.ageform.ageField.value; 
    let e = document.getElementById("ages");
    
    switch(true) {
        case age < 0 || age > 200: 
        e.innerHTML="Wellcome to the Earth";
                break;
        case age >= 0 && age < 3: e.innerHTML = "If you already able to read this, call the head office NASSA, right now! You have a job:)";
                break;
        case age >= 3 && age < 12: e.innerHTML = "Spongebob sent greetings to you ";
                break;
        case age >= 12 && age < 18: e.innerHTML = "teeny";
                break;
        case age >= 18 && age < 60: e.innerHTML = "adult";
                break;
        case age >= 60 && age < 120: e.innerHTML = "61 i tu snova apel'sin";
                break;
        case age >= 120 && age <= 200: e.innerHTML = "Hello master Yoda";
                break;
        default: e.innerHTML = "Numbers only";
    }
    }
   
    function yourSumbol() {
        let n = document.symbolform.symbolField.value; 
        let Sy = document.getElementById("Symbols");
        
        switch(true) {
            case n == 0: 
            Sy.innerHTML=")";
                    break;
            case n == 1: Sy.innerHTML = "!";
                    break;
            case n ==2: Sy.innerHTML = `"`;
                    break;
            case n ==3: Sy.innerHTML = `£`;
                    break;
            case n ==4: Sy.innerHTML = "$";
                    break;
            case n ==5: Sy.innerHTML = "%";
                    break;
            case n ==6: Sy.innerHTML = "^";
                    break;
            case n ==7: Sy.innerHTML = "&";
                    break;
            case n ==8: Sy.innerHTML = "*";
                    break;
            case n ==9: Sy.innerHTML = "(^)";
                    break;
            default: Sy.innerHTML = "Numbers from 0 to 9";
        }
        }