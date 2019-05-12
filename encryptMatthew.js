/**
 * 
 * @author Matthew Rohrlach
 * 
 * @param {encryptionIn} - Double array from XORgate function that contains the binary for ever letter, contains multiple letters
 * @returns {cipherText} - Encrypted value in binary form
 * 
 */

function MatthewCaesarCipher(binary){

    var dec = convertToDec(binary);
    console.log("Matthew's input in decimal form: " + dec);

    var shift = Math.floor(Math.random() * 26);
    console.log("Number of places being shifted: " + shift);

    var enc = encryptMatthew(dec, shift);
    console.log("Matthew's encryption in decimal form: " + enc);
    
    var cipherText = decToBinMatthew(enc);
    console.log("Matthew's encryption in binary form is below");
    console.log(cipherText);

}

/**
 * 
 * @author Matthew Rohrlach
 * 
 * @param {decimal} - Decimal used from binToDec function, will be a two or three digit number 
 * @param {shiftOfDecimal} - The amount of places the letter or number (which is represented by a decimal) will be shifted
 * @returns {encryptionArray} - Encrypted information through the caesar cipher in decimal form
 *  
 */

function encryptMatthew(decimal, shiftOfDecimal){

    var encryptionArray = new Array(decimal.length);

    for (var i=0; i < decimal.length; i++){

        encryptionArray[i] = (decimal[i] + shiftOfDecimal);

        if (encryptionArray[i] > 255){

            encryptionArray[i] = encryptionArray[i] - 255;

        }

        else {

        }

    }

    return encryptionArray;

}   

function decToBinMatthew(decimal){

    var decimalArray = new Array(decimal.length);

    for (var i = 0; i < decimal.length; i++){

        decimalArray[i] = decToBin(decimal[i]);

    }

    return decimalArray;

}