/**
 * 
 * @author Matthew Rohrlach
 * 
 * @param 
 * @returns encrypted value
 * 
 */

var encryptionIn = XORgate(a, intVector);

var dec = convertToDec(encryptionIn);

var shift = 2; // prompt("Input numbers of letters shifted") or Math.floor(Math.random() * 26);

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
 * @param {binary} - input the variable which contains binary digits (up to 8 digits, otherwise adjust for loop)
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
 * @author Matthew Rohrlach
 * 
 * @param {decimal} - decimal used from binToDec function, will be a two or three digit number 
 * @param {shiftOfDecimal} - the amount of places the letter or number (which is represented by a decimal) will be shifted
 * @returns {enc} - encrypted information through the caesar cipher
 *  
 */

function encryptMatthew(decimal, shiftOfDecimal){

    var enc = new Array(decimal.length);

    for (var i=0; i < decimal.length; i++){

        enc[i] = (decimal[i] + shift);

        if (enc[i] > 126){

            enc[i] = enc[i] - 95;

        }

        else {

            break;

        }

    }

    return enc;

}