/**
 * 
 * @author: Matthew
 * 
 */

var encryptionIn;

function binToDec(binaryText){

    var decimal = 0;

    for(var i = 0; i<8; i++){

        if(binaryText[i] == 1){

            decimal += Math.pow(2, 7-i);

        }

    }

    return decimal;

} 

