function ArminVigenere(testExample, firstKey){

    var decimalArr = convertToDec(testExample);
    var key = extendKey(firstKey, testExample.length);
    encrypt = vigenere(decimalArr,key);

    console.log("Armin's Input Array: "+decimalArr);
    console.log("Armin's Input Key: "+key);
    console.log("Armin's Output: "+encrypt);

    return encrypt;

}

function vigenere(array,key){

    var encrypted = new Array(array.length);

    for(var i = 0; i< array.length; i++){

        encrypted[i] = (array[i]+key[i])%255 ;

    }

    return encrypted;

}

function extendKey(key, length){

    while(key.length < length){

        key += key;

    }

    key = stringToDigits(key.substring(0, length));

    return key;

}

function convertToDec(doubleArray){

    var decimalArray = new Array(doubleArray.length);

    for(var i=0; i<doubleArray.length; i++){

        decimalArray[i] = binToDec(doubleArray[i]);

    }

    return decimalArray;

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