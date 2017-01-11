// create an array and push object


// var arr = [];
// var name = prompt("Enter your name");
// var age = prompt("Enter your age");
// var id = prompt("Enter your id");

// arr.push({myname : name, myage : age, myid : id });
// var x = JSON.stringify(arr);
// document.write(x);


// create an array and pushing multiple objects

//   var arr = [];
// for(var i = 0; i < 2; i++){
//  var name = prompt("Enter your name");
// var age = prompt("Enter your age");
// var id = prompt("Enter your id");
// arr.push({myname : name, myage : age, myid : id });
// var x = JSON.stringify(arr);
// document.write('name: ' + name);
// }
// for(var key in object);



// object to string and string to object conversion

var arr = [];
var name = prompt("Ener your name");
var email = prompt("Enter your email");
arr.push({name:name, email:email});
var str = JSON.stringify(arr);
document.write(str);

var strr = JSON.parse(str);
document.write(strr);




// var arr = [];

// for(var i=0; i<5; i++){
//   var name = prompt("Enter your name");
//    var id = prompt("Enter your id");
//     arr.push({name: name, id : id});
// }
//     console.log(arr);


