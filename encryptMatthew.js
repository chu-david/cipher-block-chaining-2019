/**
 * 
 * @author: Matthew
 * 
 * @param: theoretically none
 * @returns encrypted value
 * 
 */

var encryptionIn;

var str = "Test" //readfile(iHaveADream2.txt);

var num =  str.length; //Math.floor((Math.random() * 26) + 1);

console.log(num);

function convertToDec(encryptionIn){ // @author: Armin Schmarewski

    var decimalArray = new Array(doubleArray.length);

    for(var i=0; i<doubleArray.length; i++){

        decimalArray[i] = binToDec(doubleArray[i]);

    }

    return decimalArray;

}

function encryptMatthew(encryptionIn){ // use outer loop to check letter, inner loop to check bit and bit to compare to the key, look at sortingefficiency to shift by key amount (num). Year 10 might have some.

    var anArray = [];
    var endArray = [];

        for(var i=0; i < encryptionIn.length; i++){

            for(var j=0; j < 8; j++){

                if(encryptionIn[i][j] == num[j]){

                    anArray.push(0);

                }else if(encryptionIn[i][j] != num[j]){

                    anArray.push(1);
                    
                }

            }
        
            endArray.push(anArray);
            anArray = [];
            
        }

    return endArray;

}
