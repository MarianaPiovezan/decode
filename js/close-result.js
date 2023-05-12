import { decodeEmpty, decodeResult } from "./encrypt.js";


function btnCloseResult() {
    
    decodeEmpty.style.display = "flex";
    decodeResult.style.display = "none";
    
};

document.getElementById("btn-close-result").addEventListener("click", btnCloseResult);
