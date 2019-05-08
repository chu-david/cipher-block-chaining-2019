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

        console.log(intVector);

        var binaryText = stringToBinary(cipherText); 
        console.log(binaryText);
        var a = binaryText;
             
        var encryptionIn = XORgate(a, intVector);

        var keyArmin = "Yes!";
        var ArminEncryption = ArminVigenere(encryptionIn, keyArmin);

        console.log(encryptionIn);

        console.log(convertToDec(encryptionIn));

        console.log(encryptMatthew(dec, shift));

        console.log(decToBin(enc));
        
    }

