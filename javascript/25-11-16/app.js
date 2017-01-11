var array = [];
function save(){
   var a = document.getElementById("inputid1").value;
    array.push(a);   
    document.getElementById("inputid1").value = "";
}

 function result(){
     console.log(array);
     array = array.join("");
     console.log(array);
     document.getElementById("input2id").value = array;
     
 }