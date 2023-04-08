let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

let loginButton = document.querySelector("#loginBtn")
let signUpButton = document.querySelector("#signUpBtn")

loginButton.addEventListener("click", () => {
    val(0);
})

signUpButton.addEventListener("click", () => {
    val(1);
})

function val(index) {

    function validateemail() {  
        var x = document.getElementsByClassName('email ele')[index];  
        var atposition = x.value.indexOf("@");  
        var dotposition = x.value.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
        {  
            alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition); 
            x.style.border="solid 3px red";
            return false;
        }  
        else {
            x.style.border="solid 3px green";
            return true;
        }
    }

    function validatepass() {
        var pass = document.getElementsByClassName('password ele')[index];

        if(pass.value.match(/[0-9]/))
        {
            //return true;
        }
        else
        {
            alert("Password must contain number");
            return false;
        }
        if(pass.value.match(/[A-Z]/))
        {
            //return true;
        }
        else
        {
            alert("Password must contain upper case value");
            return false;
        }
        if(pass.value.match(/[a-z]/))
        {
            //return true;
        }
        else
        {
            alert("Password must contain lower case value");
            return false;
        }
        if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\.]/))
        {
            //return true;
        }
        else
        {
            alert("Password must contain special character");
            return false;
        }
        if(pass.value.length<7)
        {
            alert("Password length is too short");
            return false;
        }

        return true;
    }
    
    if (validateemail()) {
        validatepass()
    }
}