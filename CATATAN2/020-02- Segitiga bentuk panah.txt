document.write('-2- Segitiga 19 baris<br>');
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

for (var i = 1; i <= 10; i++) {
  for (var j = i; j <= 9; j++) {
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

for (let i = 1; i <= 10; i++) {
  for (let k = i; k <= 9; k++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);
