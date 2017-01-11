// function addnum() {

//     var num1,num2,sum;
//     num1 = Number(document.form2.txtNum1.value);
//     num2 = Number(document.form2.txtNum2.value);
//     sum = (num1+num2);

//     document.form2.txtSum.value = sum;
// }



function calculator() {
    var num1, num2, operator, calculate;
    
    index = document.getElementById("drop").selectedIndex;
    
    operator = document.getElementsByTagName("option")[index].value;


    num1 = Number(document.myform.textbox1.value);


    num2 = Number(document.myform.textbox2.value);

    switch (operator) {
        case "+":
            calculate = (num1 + num2);
            break;
        case "-":
            calculate = (num1 - num2);
            break;
        case "*":
            calculate = (num1 * num2);
            break;
        case "/":
            calculate = (num1 / num2);
            break;
    }

    document.myform.result.value = calculate;
    
}







