const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".text-area-secondary");
const btnCopiar = document.querySelector(".btn-copiar")

window.addEventListener("load", function() {     
    btnCopiar.style.display = 'none';   
 });

 function criptografarTexto() {
    escondeImagem();
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    document.getElementById("msgNotFound").style.display = 'none';
    document.getElementById("msgTypeText").style.display = 'none';
    document.getElementById("texto-mensagem").style.display = 'block';
    textArea.value = "";
    mostrarCopiar();
}

function escondeImagem() {
    document.getElementById("imagemBusca").style.display = "none";
}

function mostrarCopiar() {
    btnCopiar.style.display = "block";
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function descriptografarTexto(){
    escondeImagem();
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value =  textoDescriptografado.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    document.getElementById("msgNotFound").style.display = 'none';
    document.getElementById("msgTypeText").style.display = 'none';
    document.getElementById("texto-mensagem").style.display = 'block';
    textArea.value = "";
    mostrarCopiar();
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value)
}