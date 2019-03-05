// FUNCTION DECLARATIONS

function greet(firstName="Cahng", lastName="hao jun"){
    return 'Hellow'+firstName+' '+lastName
;}

console.log(greet());
console.log(greet('Chang','hao jun'))
// FUNCTION EXPRESIONS

const square=function(x=3){
    return x*x;
}
console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function greet(firstName="Cahng", lastName="hao jun"){
    console.log('Hellow'+firstName+' '+lastName)
;})('Chang', 'hao jun')

// PROPERTY METHODS
const todo={
    add: function() {
    console.log('Add todo ...');
},
edit: function(id){
    console.log(`Edit todo ${id}`);
}
}
todo.delete = function(id){
    console.log(`Delete todo id ${id}`);
}

todo.add();
todo.edit(111);
todo.delete(11);
    
