/*const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('enigma');btnSwitch.classList.toggle('active');
});*/

function encriptar(resultado) {
    const encripta = document.querySelector("[data-mensaje-recibir]").value;
    const encriptado = encripta.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.querySelector("[data-mensaje-entregar]").value = encriptado;
    document.getElementById("mensaje2").style.backgroundImage = "none";
}


function desencriptar(resultado){
    const desencripta= document.querySelector("[data-mensaje-recibir]").value;
    const desencriptado= desencripta.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.querySelector("[data-mensaje-entregar]").value = desencriptado;
    document.getElementById("mensaje2").style.backgroundImage = "none";
}

function copiar(){
    const copyText = document.querySelector("[data-mensaje-entregar]");
    copyText.select();
    document.execCommand("copy");
}


/************ nuevo code ************/

const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

const alfabeto1 = ["z","a","y","b","x","c","w","d","v","e","u","f","t","g","s","h","r","i","q","j","p","k","o","l","ñ","m","n"];

const alfabeto2 = ["q","e","o","p","d","g","ñ","c","b","n","m","w","r","t","f","k","x","y","h","v","u","i","s","j","l","a","z"];

const alfabeto3 = ["a","e","i","o","u","y","s","z","c","x","w","b","d","v","q","p","r","l","j","k","ñ","f","g","h","m","n","t"];

const alfabeto4 = ["z","y","x","w","v","u","t","s","r","q","p","o","ñ","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];

function enigma(){
  console.log("escribe aqui la función");
}