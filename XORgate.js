function XORgate(a,b){

    //add try catch//

    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch//

    if(a.length !=b.length){

        console.log("Error");

    }else{

        var output = (parseInt(a) ^ parseInt(b));
        console.log(output.length)
        if(output.length <8){
            console.log("too short");
            
            for(var i=0;i<(8-output.length);i++){

                output = "0"+output;
            }
            
        }

    }

    return output
}