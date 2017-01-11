
 var array = [];
function data(){
    var name , email , mob ,edit ,save,del;
    
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

  
  
   var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Edit");
    btn.appendChild(t);
    
    document.getElementById("id5").body;
  firstNameCell.innerHTML = name;
  emailCell.innerHTML = email;
  mobCell.innerHTML = mob;
  
   var button = row.insertCell(3);
   button.appendChild(btn);
  
  
  del = document.getElementById("id6").value;
  
  
   var btn1 = document.createElement("BUTTON");
   
   
    var t1 = document.createTextNode("Delete");
    
    
    
    btn1.appendChild(t1);
    document.getElementById("id6").body;
    var button = row.insertCell(4);
    button.appendChild(btn1);
 
  document.getElementById("id1").value = "";
  document.getElementById("id2").value = "";
  document.getElementById("id3").value = ""; 
  

}




