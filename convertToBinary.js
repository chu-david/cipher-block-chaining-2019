function convertToBinary(textIn){

    var binaryText="";

        var currentCharCodeBinary = textIn.charCodeAt(0).toString(2);
        var loopTimes = 8-currentCharCodeBinary.length; 
        if(loopTimes >0){
            for(var j=0;j<loopTimes;j++){

                currentCharCodeBinary="0"+currentCharCodeBinary;
            }
        }
        binaryText = currentCharCodeBinary;

    return binaryText
}