<<<<<<< HEAD
//var testletterString = "Arminianism" ;
//var binaryDoubleArray = stringToBinary(testletterString);
//console.log(binaryDoubleArray);


=======
>>>>>>> c24cd91150a5ff5525111eb5c7e4bade6f447d6d
function stringToBinary(initialstring){

    var numberArray = stringToDigits(initialstring);
    var finsihedArray = new Array(numberArray.length);

    for(var i=0; i< numberArray.length ; i++){

        finsihedArray[i] = decToBin(numberArray[i]);

    }

    return finsihedArray;
    
}


function stringToDigits(letterString){

    var numberArray = new Array(letterString.length);

    for(var i = 0 ; i < letterString.length; i++ ){

        numberArray[i] = letterString.charCodeAt(i);

    }

    return numberArray;

}


function decToBin(decimal){

    var binaryArray = new Array(8);

    for(var i=7; i>=0; i--){
        
        if(decimal >= Math.pow(2,i)){

            binaryArray[7-i] = 1;
            decimal = decimal - Math.pow(2,i);

        }else{

            binaryArray[7-i] = 0; 

        }
    }

    return binaryArray;

}

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