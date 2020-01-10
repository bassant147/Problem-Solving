// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '';
  let spaces = n;
  
  for(let i = 1; i <= n; i++) {
    str = drawPounds(i, str);
    str = drawSpaces(spaces-i, str);
    console.log(str);
    str = '';
  }      
    return;
}

function drawPounds(m, str) {
  for(let i = 1; i <= m; i++) {
    str += '#';
  }
  return str;
}

function drawSpaces(m, str) {
  for(let i = m; i > 0; i--) {
    str += ' ';
  }
  return str;
}

/*
////////////////////////////////////////
// --- Alt Answer

function steps(n) {

  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let col = 0; col < n; col++) {
      if(row >= col) stair += '#';
      else stair += ' ';
    }
    console.log(stair); 
  }
}



function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }
  if(stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if(row >= stair.length) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
*/
module.exports = steps;
