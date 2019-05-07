/**
 * JSDoc
 * 
 * @author: Matthew
 * @this 
 * @param {letters or numbers}
 * 
 */

$(document).ready(main);

    function main(){

        var cipherText = prompt("Type the letters to be encrypted");
        //console.log(cipherText);

        var intVector = [0, 1, 0, 0, 1, 1, 0, 1];

        //plaintext();

        var binaryText = stringToBinary(cipherText); 
        console.log(binaryText);

        var a = binaryText;

        // doesn't work console.log(binToDec(binaryText));

        var encryptionIn = XORgate(a, intVector);
        console.log(encryptionIn);

        var encryptionOut = encryptedData;
        console.log(encryptionOut);
        
    }

