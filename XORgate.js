function XORgate(a,b){

    //add try catch//

    //https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch//

    if(a.length !=b.length){

        console.log("Error");

    }else{
        var output="";
        for(var i=0;i<8;i++){

            output = output+a.charAt(i)^b.charAt(i);

        }

    }
    //console.log(output);
    return output
}