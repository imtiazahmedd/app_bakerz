var array = [];
function insert(){

       array.push(document.getElementsByName("input_array")[0].value);
       document.getElementById("first").value = "";
}
function runScript(e) {
    if (e.keyCode == 13) {
       array.push(document.getElementsByName("input_array")[0].value);
       
       
    }
}

function search(){
    
    if(array.length == ""){
        
    alert("Not Found");
        
    }
    else if(n = array.indexOf(document.getElementsByName("input")[0].value) >= 0)
   {
       
    alert(document.getElementsByName("input")[0].value  +" " + "Found");
    }
    
else{
    alert("Not Found");
    
    
}    
        
}
