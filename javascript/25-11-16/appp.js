var array = ["one","two","three","four","five","six","seven","eight","nine","ten"];
console.log(array);

  var first = array.map(function(array){ 
       if( array.indexOf("e")==-1 ) {
       return array;
       }
       else {
           return false;
       }});
alert(first);