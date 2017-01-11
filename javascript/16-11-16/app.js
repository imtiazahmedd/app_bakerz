
 var array = [];
function data(){
    var name , email , mob ,edit ,save ,btn;
    
    name = document.getElementById("id1").value;
    email = document.getElementById("id2").value;
    mob = document.getElementById("id3").value;
    edit = document.getElementById("id4").button;

    
    var obj = {Name:name,Email:email,Mobile:mob}
   
  var table = document.getElementById("register");
  var row = table.insertRow();
  var firstNameCell = row.insertCell(0);
  var emailCell = row.insertCell(1);
  var mobCell = row.insertCell(2);
  var button = row.insertCell(3);
  
  firstNameCell.innerHTML = name;
  emailCell.innerHTML = email;
  mobCell.innerHTML = mob;
  button.innerHTML = edit;
  
}
   
   
   
   
   
   function myFunc(id){
        alert(id);
}
   
   
  
   
   
   

   
      
    
 






