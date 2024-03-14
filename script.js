const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["0", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

function btnEncriptar(){
    const textoEncriptado = encriptar(campo_texto.value);
    campo_mensaje.value = textoEncriptado;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
            document.getElementById("copiar").style.display="show";
            document.getElementById("copiar").style.display="inherit";
        }
    }
    return fraseEncriptada;

    
}


function btnDesencriptar(){
    const textoDesencriptado = desEncriptar(campo_texto.value);
    campo_mensaje.value = textoDesencriptado;
}

function desEncriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseDesencriptada.includes(matriz_code[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
            document.getElementById("copiar").style.display="show";
            document.getElementById("copiar").style.display="inherit";
        }
    }
    return fraseDesencriptada;

    
}

function copy(){
    const contenido= document.querySelector("#campo-mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado");
}