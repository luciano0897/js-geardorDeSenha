let sliderElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "0123456";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slide.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function gerarPassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
       pass += charset.charAt(Math.floor(Math.random() *n)); 
    }
    containerPassword.classList.remove("hide") ;
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert ("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}