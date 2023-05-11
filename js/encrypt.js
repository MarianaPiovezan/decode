export const textarea = document.querySelector(".textarea");
export const resultText = document.querySelector(".result-text");
export const decodeEmpty = document.querySelector(".decode-empty");
export const decodeResult = document.querySelector(".decode-result");
export const error = document.querySelector(".error");


function encrypty(stringEncrypt) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringEncrypt.includes(keys[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(keys[i][0], keys[i][1]);

        }
    }
    return stringEncrypt;
};

function btnEncrypt() {
    const textEncrypt = encrypty(textarea.value);

    if (textarea.value === "") {
        error.style.display = "block";
    } else {
        resultText.innerHTML = `${textEncrypt}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
        error.style.display = "none";
    }
    

};

document.getElementById("btn-encrypt").addEventListener("click", btnEncrypt);
