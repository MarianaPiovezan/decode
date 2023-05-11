import { textarea, resultText, decodeEmpty, decodeResult, error } from "./encrypty.js";


function decrypty(stringEncrypty) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypty = stringEncrypty.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringEncrypty.includes(keys[i][1])) {
            stringEncrypty = stringEncrypty.replaceAll(keys[i][1], keys[i][0]);

        }
    }
    return stringEncrypty;
};

function btnDecrypty() {
    const textDecrypty = decrypty(resultText);

    
        resultText.innerHTML = `${textDecrypty}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
        error.style.display = "none";  

};

document.getElementById("button-dec").addEventListener("click", btnDecrypty)
