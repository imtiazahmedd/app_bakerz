
var count = 0;
function functioncheck(){
    if(event.keyCode ==  '13'){
myfunction();
    }
}
     function myfunction(){
         var nam = "Imtiaz Ahmed";
    var spann = "<h3 class='democlass'>"+nam+"</h3>";
    var divi = "<div><img src='./images/c.png'/></div>"   
    spann.innerHTML = nam ;
  var time = new Date();
  var newtime = time.toString().split(" ");
  var newarr = newtime.slice(0,5);
  
     x = document.getElementById("inputid").value;
  
    var first = x + ' &nbsp;' +'&nbsp;'+'&nbsp'+ newarr.toString();
     var par = "<span>"+first+"</span>";
    
    document.getElementById("inputid").value='';
    
    var imag = "<span><img src = './images/d.png' onClick = 'deletefunction()' /></span>"
  
    var main = document.createElement('div');
    document.body.appendChild(main);
    main.innerHTML += spann + divi + par + imag; 
    main.setAttribute('id',Math.random().toString(36).substring(2,14));
    
 
    document.getElementsByClassName('notify')[0].innerHTML += main.innerHTML;
    count += 1;
    
    document.getElementsByClassName('notificationdiv')[0].innerHTML = count;
    
   document.getElementsByClassName('notificationdiv')[0].setAttribute('id','show');  
  
     }
    
     function deletefunction(){
        var del = event.target.parentElement.parentElement.getAttribute('id');
        document.getElementById(del).remove();
        count = count-1;
    
        document.getElementsByClassName('notificationdiv')[0].innerHTML = count;
        if(count == 0){
            document.getElementsByClassName('notificationdiv')[0].style.display = 'none';
        }
     }
      
function divfunction(){
    if(document.getElementsByClassName('notify')[0].style.display == 'none'){
     document.getElementsByClassName('notify')[0].style.display = 'block';
    }
    else{
        document.getElementsByClassName('notify')[0].style.display = 'none';
    }
}
