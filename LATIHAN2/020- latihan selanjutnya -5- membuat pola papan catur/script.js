let barisMenurun = 10;
let kolomMendatar = 10;

for (let a = 1; a <= barisMenurun; a++) {
  if (a % 2 == 0) {
    for (let b = 1; b <= kolomMendatar; b++) {
      if (b % 2 == 0) {
        document.write('#');
      } else {
        document.write('_');
      }
    }
  } else {
    for (let b = 1; b <= kolomMendatar; b++) {
      if (b % 2 == 0) {
        document.write('_');
      } else {
        document.write('#');
      }
    }
  }

  document.write('<br>');
}

// CONSOL LOG
let s = '';

let vertikal = 10;
let horizontal = 10;

for (let i = 1; i <= vertikal; i++) {
  if (i % 2 == 0) {
    for (let j = 1; j <= horizontal; j++) {
      if (j % 2 == 0) {
        s += '#';
      } else {
        s += ' ';
      }
    }
  } else {
    for (let j = 1; j <= horizontal; j++) {
      if (j % 2 == 0) {
        s += ' ';
      } else {
        s += '#';
      }
    }
  }

  s += '\n';
}

console.log(s);
