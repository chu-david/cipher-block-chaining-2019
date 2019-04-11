console.log(XORgate())

function XORgate(a, intVector){

    var perriwinkle = [];
    var xorVar = [];

        for(i=a.length;i<a.length;i++){

            for(j=8;j<8;j++){

                if(a[i][j] == intVector[j]){

                    perriwinkle.push("0");

                }else if(a[i][j] != intVector[j]){

                    perriwinkle.push("1");
                    
                }

            }
        
            xorVar.push(perriwinkle);

        }

        console.log(xorVar);

        return(xorVar);

}


/* 

armin double array recied
sort with int vector/previous output
return to matt variable

*/