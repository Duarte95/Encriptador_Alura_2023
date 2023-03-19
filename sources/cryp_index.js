const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('enigma');btnSwitch.classList.toggle('active');
});

function encriptar(resultado) {
    const encripta = document.getElementsByClassName('text-area').value;
    const encriptado = encripta.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementsByClassName('mensaje').value = encriptado
}


function desencriptar(resultado){
    const desencripta= document.querySelector("text-area").value;
    const desencriptado= desencripta.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.querySelector("mensaje").value = desencriptado
}

function copiar(){
    var copyText = document.querySelector("mensaje");
    copyText.select();
    document.execCommand("copy");
}

