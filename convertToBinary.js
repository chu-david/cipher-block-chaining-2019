function convertToBinary(textIn){

    var binaryText="";

    for(var i=0;i<textIn.length;i++){
        var currentCharCodeBinary = textIn.charCodeAt(i).toString(2);
        if(currentCharCodeBinary.length <8){
            console.log("too short");
            for(var i=0;i<(8-binaryText.length);i++){

                binaryText="0"+binaryText;
            }
        }
        binaryText = binaryText+currentCharCodeBinary;

    }
    

    return binaryText
}