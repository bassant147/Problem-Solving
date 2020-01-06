/////////////////////////////////////////////
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

module.exports = reverse;

function reverse(str) {
	
	let reversed = '';
	for(var i = str.length-1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

/*
/////////////////////////////////////////////
// --- Alt. ans.

function reverse(str) {
	return str.split('').reduce((reversed, char)=>{
		return char + reversed;
	},'');
}

/////////////////////////////////////////////
// --- Alt. ans.

function reverse(str) {
	return str.split('').reverse().join('');
}

/////////////////////////////////////////////
// --- Alt. ans.

function reverse(str) {
	let reversed = '';
	for(let character of str) {
		reversed = character + reversed;
	}
	return reversed;
}
*/

