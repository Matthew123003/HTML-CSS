//alerts, popups on the page
alert('hello world!');

//creating variables
const author = "Matt";
const title = "JS Lesson";
let likes = 55;

//html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
console.log(html, typeof html);

//regular function
const calcArea3 = function(radius){
    return 3.14 * radius**2;
}

//arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
}

//arrow functions can also look like this
const calcArea2 = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(area);