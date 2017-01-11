var array = [];
var str = [];
var store = localStorage['data'];
    if (store !== undefined) {
        str = JSON.parse(store);
    }
//this run when we click save
function data() {
    var name, email, mob, edit, save, del, obj, num, newnum;
    //initialzing vars
    name = document.getElementById("id1").value;
    email = document.getElementById("id2").value;
    mob = document.getElementById("id3").value;
    obj = { Name: name, Email: email, Mobile: mob }
    num = 1;
    newnum = 1;
    //form validation
   if(name == "" || email == "" ||mob == ""){
        alert(" All Field is required");
    return "Field is required";        
    }
    else {
        
        // pushing data to localStorage
        str.push(obj);
        localStorage['data'] = JSON.stringify(str);
         generateTable(name, mob, email);   
    }
}
function myDeleteFunction(event) {
    var attribute = event.target.parentElement.parentElement.rowIndex;
    console.log(event.target);
    document.getElementById("register").deleteRow(attribute);
}
function editfunction() {
    var attribute = event.target.parentElement.parentElement.children;
    var name = attribute[0].textContent;
    var email = attribute[1].textContent;
    var phone = attribute[2].textContent;

    document.getElementById("id1").value = name;
    document.getElementById("id2").value = email;
    document.getElementById("id3").value = phone;
}

// this runs on refresh
function generateTable(name, mob, email) {
    var name, email, mob, edit, save, del, obj, num, newnum;
    //initialzing vars
    name = name;
    email = email;
    mob = mob;
    edit = document.getElementById("id4").button;
    var table = document.getElementById("register");
    var row = table.insertRow();
    
    var rowNo = document.getElementsByTagName('tr').length - 1 ;
    var firstNameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var mobCell = row.insertCell(2);
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Edit");
    btn.appendChild(t);
    
    btn.setAttribute("id", ++num);
    btn.setAttribute("onClick","editfunction(event)");
    btn.setAttribute("rowNo", rowNo);
    firstNameCell.innerHTML = name;
    emailCell.innerHTML = email;
    mobCell.innerHTML = mob;
    
    var button = row.insertCell(3);
    button.appendChild(btn);
    del = document.getElementById("id6").value;
    var btn1 = document.createElement("BUTTON");
    btn1.setAttribute("id", ++newnum);
    btn1.setAttribute("rowNo", rowNo);
    
    btn1.setAttribute("onclick", "myDeleteFunction(event)");
    var t1 = document.createTextNode("Delete");
    btn1.appendChild(t1);
    document.getElementById("id6").body;
    var button = row.insertCell(4);
    button.appendChild(btn1);

    document.getElementById("id1").value = "";
    document.getElementById("id2").value = "";
    document.getElementById("id3").value = "";
}
for(var x = 0; x < str.length; x++){
    console.log(str[x]);
    generateTable(str[x].Name, str[x].Mobile, str[x].Email)
    
}
