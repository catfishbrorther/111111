// FOR LOOP
for(let i=1;i<=5;i++);{
    console.log("Number" +i);
    
}
// WHILE LOOP
let i=1;
while(i<=5){
    console.log("Number" +i);
    i++;
}

// DO WHILE
let j=1;
do{
    console.log("Number" +j);
    j++;
}while(j<=5);


// LOOP THROUGH ARRAY
const cars=['Ford','Honda','Toyota','chevy'];
for(let i=0;i<cars,length;i++){
    console.log(cars[1]);
}

// FOREACH
cars.forEach(function(cars,index,arrary){
    console.log(`${index}:${car}`);
    console.log(array);
});

// MAP

const users=[
    {
        id:1,
        name:'Chang'
    },
    {
        id:2,
        name:'hao'
    },
    {
        id:3,
        name:'jun'
    }
];
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);
// FOR IN LOOP
const user={
    firstname:'Chang',
    lastname:'hao jun',
    age:18
}
for(let x in user){
    console.log(`${x}:${user[x]}`) ;
}