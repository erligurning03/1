const usernameField = document.querySelector("[name=username]");

usernameField.addEventListener("keyup", (event) => {
    if(!usernameField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-username").style.display = "block";
    } else {
         console.info("usernama  valid");
        document.getElementById("invalid-username").style.display = "none";
    }

});
const namaField = document.querySelector("[name=nama]");

namaField.addEventListener("keyup", (event) => {
    if(!namaField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-nama").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-nama").style.display = "none";
    }

});
const umurField = document.querySelector("[name=umur]");

umurField.addEventListener("keyup", (event) => {
    if(!umurField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-umur").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-umur").style.display = "none";
    }

});
const no_hpField = document.querySelector("[name=no_hp]");

no_hpField.addEventListener("keyup", (event) => {
    if(!no_hpField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-no_hp").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-no_hp").style.display = "none";
    }

});
const emailField = document.querySelector("[name=email]");

emailField.addEventListener("keyup", (event) => {
    if(!emailField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-email").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-email").style.display = "none";
    }

});
const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-password").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-password").style.display = "none";
    }

});

