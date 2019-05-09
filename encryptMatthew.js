/**
 * 
 * @author Matthew Rohrlach
 * 
 * @param {encryptionIn} - Double array from XORgate function that contains the binary for ever letter, contains multiple letters
 * @returns {encryptionOut} - Encrypted value in binary form
 * 
 */

var dec = convertToDec(binaryText);

var shift = 2; // prompt("Input numbers of letters shifted") or Math.floor(Math.random() * 26);

var enc = encryptMatthew(dec, shift);

var cipherText = decToBin(enc);

/**
 * 
 * @author Armin Schmarewski
 * @param {doubleArray} - The double array that contains the binary of one letter and then contains multiple letters
 * @returns {decimalArray} - An array which contains the decimals of the letters in the doubleArray
 * 
 */

function convertToDec(doubleArray){

    var decimalArray = new Array(doubleArray.length);

    for(var i=0; i<doubleArray.length; i++){

        decimalArray[i] = binToDec(doubleArray[i]);

    }

    return decimalArray;

}

/**
 * Function
 * @author Armin Schmarewski
 * @param {binary} - Input the variable which contains binary digits (up to 8 digits, otherwise adjust for loop)
 * @returns {decimal} - Returns the decimal, works in collaboration with convertToDec function
 * 
 */

function binToDec(binary){

    var decimal = 0;

    for(var i = 0; i<8; i++){

        if(binary[i] == 1){

            decimal += Math.pow(2, 7-i);

        }

    }

    return decimal;

}  

/**
 * 
 * @author Armin Schmarewski
 * 
 * @param {decimal} -  Takes in decimal from encryptMatthew function
 * @returns {binary} - Returns the binary of what was encrypted
 * 
 */

function decToBin(decimal){

    var binary = new Array(8);

    for(var i=7; i>=0; i--){
        
        if(decimal >= Math.pow(2,i)){

            binary[7-i] = 1;
            decimal = decimal - Math.pow(2,i);

        }else{

            binary[7-i] = 0; 

        }
    }

    return binary;

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