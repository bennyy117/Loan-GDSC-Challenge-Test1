var email = document.getElementById("email")

email.addEventListener('invalid', function() {
    if(this.validity.valueMissing){
        document.getElementById("invalidemail").innerHTML = "Please enter a valid email address";
    } else if(this.validity.typeMismatch) {
        document.getElementById("invalidemail").innerHTML = "Please enter a valid email address";
    } 
}, false);

