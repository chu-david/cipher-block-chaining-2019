decToBin(128);

function decToBin(dec){

    var binaryArray = new Array(8);
    for(i=7; i>=0; i--){
        
        
        if(dec >= Math.pow(2,i)){

            binaryArray[7-i] = 1;
            dec = dec - Math.pow(2,i);

        }else{

            binaryArray[7-i] = 0; 

        }
    }

    console.log(binaryArray);

}