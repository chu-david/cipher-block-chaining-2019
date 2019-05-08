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

        var plainText = readfile(filePath); //this doesn't work yet //prompt("Type the letters to be encrypted");
        //console.log(cipherText);

        var intVector = [0, 1, 0, 0, 1, 1, 0, 1];
        console.log(intVector);

        var binaryText = stringToBinary(plainText); 
        console.log(binaryText);
        var a = binaryText; // Davis wanted it changed to a
             
        var encryptionIn = XORgate(a, intVector);

        var keyArmin = "Yes!";
        var ArminEncryption = ArminVigenere(encryptionIn, keyArmin);

        //console.log(encryptionIn);
        //console.log(convertToDec(encryptionIn));
        //console.log(encryptMatthew(dec, shift));
        //console.log(decToBin(enc));
        
    }

