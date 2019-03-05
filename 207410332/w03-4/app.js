let val;

//Number to string
val=String(555);
console.log("string(555) =",val);

val=String(4+4);
console.log("string(4+4) =",val);

//Bool 
val=String(true);
console.log("string(true) =",val );

//Date
val=String(new Date());
console.log("string(new data) =",val);

//array
val=String([1,2,3,4]);
console.log("string([1,2,3,4]) =",val);

//tostring
val=(5).toString();
console.log("(5).tostring=",val);

val=(true).toString();
console.log("(5).tostring =",val);

//string to number
val=Number('5');
console.log("Number(5) =",val);

val=Number(true);
console.log("Number(ture)",val);

val=Number(false);
console.log("Number(false)",val);

val=Number(null);
console.log("Number(null)",val);

val=Number('Hellow');
console.log("Number('Hellow')",val);

val=Number([1,2,3]);
console.log("Number([1,2,3])",val);

val=parseInt('100.30');
console.log("parseInt = ",val);

val=parseFloat('100.30');
console.log("parseFloat =",val);

//output
console.log(val);

console.log(typeof val);

val=100.123;
console.log("toFixed(2) =",val.toFixed(2));

const val2 =6;
console.log("val2 =6");

const sum=Number(val1+val2);

console.log("Number(val1+val2")=",sum);
console.log(typeod sum);
