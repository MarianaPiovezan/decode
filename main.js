const textarea = document.querySelector(".textarea");
const resultText = document.querySelector(".result-text");
const decodeEmpty = document.querySelector(".decode-empty");
const decodeResult = document.querySelector(".decode-result");
const error = document.querySelector(".error");


function encrypty(stringEncripty) {
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncripty = stringEncripty.toLowerCase();

    for (let i = 0; i < keys.length; i++) {
        if (stringEncripty.includes(keys[i][0])) {
            stringEncripty = stringEncripty.replaceAll(keys[i][0], keys[i][1]);

        }
    }
    return stringEncripty;
};

function btnEncrypty() {
    const textEncripty = encrypty(textarea.value);

    if (textarea.value === "") {
        error.style.display = "block";
    } else {
        resultText.innerHTML = `${textEncripty}`;
        textarea.value = "";
        decodeResult.style.display = "flex";
        decodeEmpty.style.display = "none";
    }

};

