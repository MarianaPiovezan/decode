export const textarea = document.querySelector(".textarea");
export const resultText = document.querySelector(".result-text");
export const decodeEmpty = document.querySelector(".decode-empty");
export const decodeResult = document.querySelector(".decode-result");
export const error = document.querySelector(".error");


function encrypty(stringEncrypty) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncrypty = stringEncrypty.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringEncrypty.includes(keys[i][0])) {
            stringEncrypty = stringEncrypty.replaceAll(keys[i][0], keys[i][1]);

        }
    }
    return stringEncrypty;
};

function btnEncrypty() {
    const textEncrypty = encrypty(textarea.value);

    if (textarea.value === "") {
        error.style.display = "block";
    } else {
        resultText.innerHTML = `${textEncrypty}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
        error.style.display = "none";
    }
    

};


