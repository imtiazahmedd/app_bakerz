function mysearch(){
    var compltParagraph = document.getElementById("paragid1").value;
    
    compltParagraph = compltParagraph.toLowerCase();
     
    var search_word = document.getElementById("searchid2").value;
 
    var input = new RegExp(search_word,"g");
    
    var matchWord =compltParagraph.match(input);
   
    document.getElementById("resultid3").value = matchWord.length; 
}