var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

console.log (allNames);

if (allNames.indexOf(newName) === -1) {
	console.log ('warunek spełniony');
	var allNewNames = allNames.push(newName);
	console.log (allNewNames);
}
else {
	console.log ('warunek nie spełniony' + allNewNames);
}