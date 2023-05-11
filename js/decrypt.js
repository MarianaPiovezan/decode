import { textarea, resultText, decodeEmpty, decodeResult, error } from "./encrypt.js";


function decrypt(stringEncrypt) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringEncrypt.includes(keys[i][1])) {
            stringEncrypt = stringEncrypt.replaceAll(keys[i][1], keys[i][0]);

        }
    }
    return stringEncrypt;
};

function btnDecrypty() {
    const textDecrypt = decrypt(resultText);

    
        resultText.innerHTML = `${textDecrypt}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
        error.style.display = "none";  

};

document.getElementById("btn-decrypt").addEventListener("click", decrypt);