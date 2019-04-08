function convertToBinary(textIn){

    var binaryText="";

    for(var i=0;i<textIn.length;i++){

        var currentCharCodeBinary = textIn.charCodeAt(i).toString(2);
        if(currentCharCodeBinary.length <8){
            for(var j=0;j<(8-currentCharCodeBinary.length);j++){

                currentCharCodeBinary="0"+currentCharCodeBinary;
            }
        }
        binaryText = binaryText+currentCharCodeBinary;

    }

    return binaryText
}