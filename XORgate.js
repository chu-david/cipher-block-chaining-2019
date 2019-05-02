



function XORgate(a, intVector){

    var perriwinkle = [];
    var xorVar = [];

        for(var i=0;i<a.length;i++){

            for(var j=0;j<8;j++){

                console.log("Blabla"+a[i][j]);
                console.log("Blablablabla "+intVector[j]);

                if(a[i][j] == intVector[j]){

                    perriwinkle.push(0);

                }else if(a[i][j] != intVector[j]){

                    perriwinkle.push(1);
                    
                }

            }
        
            xorVar.push(perriwinkle);
            perriwinkle = [];
        }

        console.log(xorVar);

        return xorVar
        

}


/* 

armin double array recied
sort with int vector/previous output
return to matt variable

*/

//this is useless text