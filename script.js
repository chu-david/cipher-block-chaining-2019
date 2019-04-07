//Write Code Here
$(document).ready(function(){
    
    var cipherText ="";
    var block="";

    //var text = ReadFile("iHaveADream.txt");
    var text="hello";
    var binary = convertToBinary(text);

    console.log(binary.length)

    var current="";
    var i=0;

    var init = "00000000";

    while(binary.length >0){

        var encInput = XORgate(init,binary.substring(i,i+8));
        binary = binary.substring(i+8,binary.length);

        block = encrypt(encInput, "blake","ceasar");

        console.log(encInput);
    }
})