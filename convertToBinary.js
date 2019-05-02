<<<<<<< HEAD
var testletterString = "Arminianism" ;
// console.log(stringToBinary(testletterString));
=======
//var testletterString = "Arminianism" ;
//var binaryDoubleArray = stringToBinary(testletterString);
//console.log(binaryDoubleArray);
>>>>>>> 2cd911ba3544cf8b45db7cd4b9e253cf334abfaf


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