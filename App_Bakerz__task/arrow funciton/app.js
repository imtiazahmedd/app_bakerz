 //=======================================Arrow function  =========================================
     
 

// ES - 5 multiply function

// function multi(a,b) {
//     return a * b;
// }
// console.log(multi(2, 5));


//Es - 6 multiply function 
    
// var multi = (x, y) => {return x * y};
// console.log(multi(3, 4));


// var multi = (x, y) => x*y;
// console.log(multi(3,4));


// var phrasesplitterES5 = function phrasesplitter(phrase) {
//     return phrase.split(' ');
   
// }
// console.log(phrasesplitterES5('phrase asdfjlkaa adsfjkl'));

// var pharseplitterEs6 = phrase => phrase.split(' ');
// console.log(pharseplitterEs6('ecma script 6'));


// var doclog = function doc() {
//     console.log(document);
// };
// doclog();




// var dclog = () => (document);
// console.log(dclog());






















//=====================================ES6 MAP =============================================================

// let map = new Map();
// map.set('foo', 123);
// console.log(map.get('foo'));
// console.log(map.has('foo'));
// map.delete('foo');
// console.log(map.has('foo'));



// let map = new Map();
// map.set('first' , 1234);
// map.set('second', 5678);
// console.log(map);
// console.log(map.get('first'), map.get('second'));


// ===================getting array form an array  using map object==============================


// let mymap = new Map([
//     ['one', 1],['two', 2], ['three', 3]
// ]);

// for(let key of mymap.entries()){
    
// console.log(key);
// }


// =======================getting keys form an nested array using map object =========================


// let mymap =  new Map ([
//     ['one', 1], ['two', 2], ['three', 3]
// ]);
// for(let key of mymap.keys()){
//     console.log(key);
// }


//=========================getting values form an nessted array using map object ========================

// let mymap = new Map([
//     ['one', 1], ['two', 2],['three' , 3]
// ]);
// for(let value of mymap.values()){
//     console.log(value);
// }





// let map = new Map();
// map.set('one', 1);
// map.set('two', 2);
// map.set('three', 3);
// console.log(map.size);


// let map = new Map();
// const key1 = {};
// console.log(key1);
// map.set(key1, 'Hellow');
// console.log(map.get(key1));


// let map = new Map();
// const key2 = {};
// map.set(key2, 'wolleh');
// console.log(map.get(key2));




// ==============================================let VS var ===================================




// =============let ===============

// if(true){
//     let name = 'imtiaz';
// }
// console.log(name);



// for(let i = 0 ; i <= 10; i++){
//     console.log(i);
// }
// console.log(i);



// ============var =================

// if(true){
//     let name = 'imtiaz';
// }
// console.log(name);


// for(var i = 0 ; i <= 10; i++){
//     console.log(i);
// }
// console.log(i);



// ===============================const ===============================


// const name = 'imtiaz';
// console.log(name);
// name = 'ahmed';
// console.log(name);


//=================================backtic  ========================================
// using for multi line

// let name = `imtiaz
// ahmed`;

// console.log(name);



// var firstname = 'imtiaz';
// var lastname = 'ahmed';
// console.log(`my name is  ${firstname} ${lastname}`);




// =========================Destrunction Assignment ===============================


