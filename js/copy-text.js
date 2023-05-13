import { resultText } from "./encrypt.js";


function btnCopyText() {
     
    const copyText = resultText.innerHTML;

    navigator.clipboard.writeText(copyText);
    alert("Texto copiado com sucesso");

    
};

document.getElementById("btn-copy").addEventListener("click", btnCopyText);
