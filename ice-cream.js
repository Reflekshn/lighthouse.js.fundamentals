// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

let copy = iceCreamFlavours.slice(0);
copy.push('root beer');
console.log(copy);
console.log(copy[0]);
console.log(copy[copy.length-1]);
console.log(copy.length);