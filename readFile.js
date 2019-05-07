Console.log(readfile)

var plaintext = readfile(); 
var result = [];

function readfile(){


    $.ajax({
  
        url:"Ihaveadream2.txt", dataType:"text", async: false,
        success: function(result){
    
        console.log(result)
        
            
        }   
    });

    return result;

};



/*function csvJSON(csv){

    var lines=csv.split("\n");

    

    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
    obj[headers[j]] = currentline[j];
    }

    result.push(obj);

    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  } 
*/
 
    
/*var JSONfile = csvJSON(result);

    data = JSON.parse(JSONfile); //data now an object
    console.log(Object.keys(data)); //looking at keys
    console.log(JSON.stringify(data, null, 2)); //visualise data stucture
    }  
