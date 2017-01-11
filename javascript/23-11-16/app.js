function mysearch(){
var completeParagraph = document.getElementById("paragid1").value;
var searchWord = document.getElementById("searchid2").value;


var re = new RegExp(searchWord,"gi");

var res = completeParagraph.match(re);
if(res == null && " "){
    alert("not found");
}
else{
document.getElementById("resultid3").value = res;
}
}