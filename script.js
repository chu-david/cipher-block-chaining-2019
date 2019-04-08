//Write Code Here
$(document).ready(function(){
    
    var cipherText ="";
    var block="";

    var text = ReadFile("iHaveADream.txt");
    //var text="hello";
    var binary = convertToBinary(text);

    var current="";

    var init = "11111111";
    //var i=0;

    while(binary.length >0){
//        console.log("length"+binary.length);
        var encInput = XORgate(init,binary.substring(0,8));
        console.log(encInput);
        binary = binary.substring(8,binary.length);
        init = encrypt(encInput, 5,"caesar");
        block = block+init;
    }
    //console.log(block);
})