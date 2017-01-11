
//  var cities = {  
//     karachi : [['2015-12-01', 500], ['2017-12-01', 800],['2015-12-01', 2300],],
//     lahore : [['2016-12-01', 1000], ['2016-12-01', 1000], ['2016-12-01', 1000]],
//     multan : [['2017-12-01', 200], ['2017-12-01', 200], ['2017-12-01', 200]]
//  }
 
// var arrKey = [];
// arrKey.push('years');
// for(var key in cities){
//      var x = key;
//     arrKey.push(x);
//  }

// var arrValue = [];
// var i =0;
// for(var key in cities){
    
//     cities[key].forEach(function(values){
//      if(i == 0){
//         arrValue.push(values); 
//         i++;      
//      }else if(typeof values == 'number'){
//         arrValue.push(values);    
//      }
//     });
// }

// var mainArray = [arrKey, arrValue];
// console.table(mainArray);
//  document.write(arrKey + "<br>" + arrValue);
































   
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
 var cities = { 
  
    karachi : [['2015-12-01', 500], ['2017-12-01', 800],['2013-12-01', 2300]],
    lahore : [['2015-12-01', 1000], ['2017-12-01', 3000], ['2013-12-01', 4000]],
    multan : [['2015-12-01', 600], ['2017-12-01', 700], ['2013-12-01', 266]]
    
 }
var keysvalue = [];
var arryears = [];
var arrpopulation = [[], [], []];
for(var key in cities){
    var keys = key;
    keysvalue.push(keys);  
}
for( var key in cities){
  
    cities[key].forEach(function(values, index) {
        
        var val = values;
        var year = val[0];
        
        if(!arryears.includes(year)){
              
        arryears.push(year);
        
        }
        var population = val[1];
      
        arrpopulation[index].push(population);
    });   
}

for(var i = 0; i<arrpopulation.length; i++){
    arrpopulation[i].unshift(arryears[i]);
}
keysvalue.unshift('years');
var mainArray = [ keysvalue, arrpopulation[0] , arrpopulation[1] , arrpopulation[2] ];
console.log(mainArray);
console.table(mainArray);

   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
// var cities = {  
//     karachi : ['2015-12-01', 500],
//     lahore : ['2015-12-01', 1000], 
//     multan : ['2016-12-01', 200]
// }

// var arrKey = [];
// arrKey.push('years');
// for(var key in cities){
//      var x = key;
//     arrKey.push(x);
//  }

// var arrValue = [];
// // var i =0;
// for(var key in cities){
    
//     cities[key].forEach(function(values){
//     //  if(i == 0){
//         arrValue.push(values); 
//         // i++;      
// //      }else if(typeof values == 'number'){
// //         arrValue.push(values);    
// //      }
// //     });
// // }

// var mainArray = [arrKey, arrValue];
// console.table(mainArray);
// //  document.write(arrKey + "<br>" + arrValue);
 
 
 
 
 
 
 
 
 
 
 