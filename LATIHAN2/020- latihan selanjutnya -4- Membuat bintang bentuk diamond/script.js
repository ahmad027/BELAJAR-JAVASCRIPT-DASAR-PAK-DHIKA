for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write('#');
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    document.write('*');
  }

  document.write('<br>');
}

for (let l = 1; l <= 4; l++) {
  for (let m = 1; m <= l; m++) {
    document.write('$');
  }

  for (let n = 5; n > l; n--) {
    document.write('*');
  }

  for (let o = 5; o > l + 1; o--) {
    document.write('*');
  }

  document.write('<br>');
}

// CONSOLE LOG
let result = '';

for (let a = 1; a <= 5; a++) {
  for (let b = 5; b > a; b--) {
    result += ' ';
  }

  for (let c = 1; c <= 2 * a - 1; c++) {
    result += '*';
  }

  result += '\n';
}

for (let d = 1; d <= 4; d++) {
  for (let e = 1; e <= d; e++) {
    result += ' ';
  }

  for (let f = 4; f >= d; f--) {
    result += '*';
  }

  for (let g = 4; g >= d + 1; g--) {
    result += '*';
  }

  result += '\n';
}

console.log(result);
