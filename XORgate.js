
/*

@Author: Davis TheLotl
@Returns: returns a double array created from a provided double array consisting of 8-bit binary strings, and a 8-bit initialisation vector

@param: a={double array of 8-bit letters}
@param: intVector={8-bit string to compare}
*/

function XORgate(a, intVector){

    var perriwinkle = [];
    var xorVar = [];

        for(var i=0;i<a.length;i++){

            for(var j=0;j<8;j++){

                if(a[i][j] == intVector[j]){

                    perriwinkle.push(0);

                }else if(a[i][j] != intVector[j]){

                    perriwinkle.push(1);
                    
                }

            }
        
            xorVar.push(perriwinkle);
            perriwinkle = [];
        }
/* 
@exports: double array containing 8-bit binary corresponding to letters
*/
    return xorVar
        
}


/* 

armin double array recied
sort with int vector/previous output
return to matt variable

*/

//this is useless text