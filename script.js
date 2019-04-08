//Write Code Here
$(document).ready(function(){
    
    var cipherText ="";
    var block="";

    var text = ReadFile("iHaveADream2.txt");
    //var text="hello";

    var current="";

    var init = "11111111";
    //var i=0;

    while(text.length >0){
        var binary = convertToBinary(text.charAt(0));       
        var encInput = XORgate(init,binary); 
        text = text.substring(1,text.length);
        init = encrypt(encInput, 5,"caesar");
        block = block+init;
    }
    console.log(block);
})