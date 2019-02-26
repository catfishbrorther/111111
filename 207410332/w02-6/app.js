const name = 'Chang';
const age = 18;
const job = 'Student';
const city = 'Keelung';
let html;

// Without template strings (es5)
html='<ul>'
     '<li> Name:'+ name + '</li>' +
     '<li> age:' + age +'</li>' +
     '<li> job' +job + '<li>' +
     '<li> city'+ city + '<li>' +  
     '</ul>';   

document.body.innerHTML = html;     
// With template strings (es6)
html=`
     <ul>
     <li> Name:${name}  </li>
     <li> age: ${age} </li>
     <li> job:${job}</li>
     <li> city:${city}</li>
     </ul>
`
document.body.innerHTML = html;