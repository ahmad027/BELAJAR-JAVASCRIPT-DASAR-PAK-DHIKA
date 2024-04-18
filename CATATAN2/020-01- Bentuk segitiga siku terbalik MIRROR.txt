document.write('1- Segitiga 10 baris terbalik MIRROR <br> <br>');
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write('_');
  }
  for (var k = i; k <= 10; k++) {
    document.write('*');
  }
  document.write('<br>');
}

let s = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    s += ' ';
  }
  for (let k = i; k <= 10; k++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);
