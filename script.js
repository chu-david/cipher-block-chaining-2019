//Write Code Here
$(document).ready(function(){
    
    var cipherText ="";
    var block="";

    //var text = ReadFile("iHaveADream.txt");
    var text="hello";
    var binary = convertToBinary(text);

    var current="";
    var i=0;

    var init = "11111111";

    while(binary.length >0){
        console.log(binary.substring(i,i+8));
        var encInput = XORgate(init,binary.substring(i,i+8));
        
        //var encInput = XORgate("0101","1010");
        binary = binary.substring(i+8,binary.length);

        block = encrypt(encInput, "blake","ceasar");

        console.log(encInput);
    }
})