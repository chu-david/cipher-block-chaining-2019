/**
 * 
 * @author Matthew Rohrlach
 * 
 * @param {encryptionIn} - Double array from XORgate function that contains the binary for ever letter, contains multiple letters
 * @returns {encryptionOut} - Encrypted value in binary form
 * 
 */

function MatthewCaesarCipher(binary){

    var dec = convertToDec(binary);
    console.log(convertToDec(binary));

    var shift = 2; // prompt("Input numbers of letters shifted") or Math.floor(Math.random() * 26);

    var enc = encryptMatthew(dec, shift);
    console.log(enc);
    
    var cipherText = decToBin(enc);
    console.log(decToBin(enc));

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

        if (encryptionArray[i] > 126){

            encryptionArray[i] = encryptionArray[i] - 95;

        }

        else if (encryptionArray[i] < 32) {

            encryptionArray[i] = 32;

        }

        else {

        }

    }

    return encryptionArray;

}   

/*function decToBinMatthew(){

    var

    for (var i = 0; i < 8; i++){



    }

}