document.getElementById("fname").addEventListener("keyup", myFunction);

function myFunction() {
    var array=[];
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    var y = document.getElementById("id1");
    y.textContent = x.value;
    // var reversed = x.value.split('').reverse().join("");
    // y.textContent = reversed;
}