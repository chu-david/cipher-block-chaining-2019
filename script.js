/**
 * JSDoc
 * 
 * @author Matthew, Armin, Davis and Zac
 * 
 * @param {plainText} - Calls function which grabs text from txt file and displays it in the variable 'plainText'
 * @returns {cipherText} - Returns encrypted value in binary form
 * 
 */

$(document).ready(main);

    function main(){

        var plainText = prompt("Type the letters to be encrypted"); //readfile(filePath);
        //console.log(cipherText);

        var intVector = [0, 1, 0, 0, 1, 1, 0, 1];
        //console.log(intVector);

        var binaryText = stringToBinary(plainText); 
        console.log(binaryText);
        var a = binaryText; // Davis wanted it changed to a
             
        var encryptionIn = XORgate(a, intVector);
        console.log(encryptionIn);

        var keyArmin = "Yes!";
        var ArminEncryption = ArminVigenere(encryptionIn, keyArmin);

        var MatthewEncryption = MatthewCaesarCipher(encryptionIn); // cipherText
        
    }

