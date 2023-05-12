import { textarea, resultText, decodeEmpty, decodeResult, error } from "./encrypt.js";


function decrypt(stringDecrypt) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringDecrypt.includes(keys[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(keys[i][1], keys[i][0]);

        } 
    }
    return stringDecrypt;
};

function btnDecrypt() {
    const textDecrypt = decrypt(textarea.value);
    
    if (textarea.value === "") {
        error.style.display = "block";
        decodeEmpty.style.display = "flex";
        decodeResult.style.display = "none";
      
    }else{
        resultText.innerHTML = `${textDecrypt}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
        error.style.display = "none";  
    }
};

document.getElementById("btn-decrypt").addEventListener("click", btnDecrypt);