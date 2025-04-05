document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encode = document.getElementById('encode');
    let decode = document.getElementById('decode');

    let encodeInput = encode.querySelector('textarea');
    let decodeInput = decode.querySelector('textarea');


    encode.addEventListener('submit', function(event) {
        event.preventDefault();

        current_message = encodeInput.value;
        let encoded = '';

        for (let char of current_message) {
            encoded += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        decodeInput.value = encoded;
        encodeInput.value = '';

    })

    decode.addEventListener('submit', function(event) {
        event.preventDefault();

        current_message = decodeInput.value;
        let decoded = '';

        for (let char of current_message) {
            decoded += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        
        decodeInput.value = decoded;



    })
    
}