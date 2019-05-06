
function binaryToString(binaryDoubleArray){

    var string = "";

    for(var i = 0; i<binaryDoubleArray.length; i++){

        string += String.fromCharCode(binToDec(binaryDoubleArray[i])); 

    }

    return string;

}

function binToDec(binary){

    var decimal = 0;

    for(var i = 0; i<8; i++){

        if(binary[i] == 1){

            decimal += Math.pow(2, 7-i);

        }

    }

    return decimal;

} 