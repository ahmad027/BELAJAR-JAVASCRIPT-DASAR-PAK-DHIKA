document.write('-2- Segitiga 19 baris <br> <br>');
for (var a = 1; a <= 10; a++) {
  for (var b = 1; b <= a; b++) {
    document.write('*');
  }
  document.write('<br>');
}

for (var c = 12; c <= 20; c++) {
  for (var d = c; d <= 20; d++) {
    document.write('*');
  }
  document.write('<br>');
}

let s = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    s += '*';
  }
  s += '\n';
}

for (let k = 12; k <= 20; k++) {
  for (let l = k; l <= 20; l++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);
