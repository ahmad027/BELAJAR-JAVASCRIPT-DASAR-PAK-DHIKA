document.write('1 - Bintang Berurutan dari kecil ke besar <br>');

for (let a = 1; a <= 10; a++) {
  for (let b = 1; b < a; b++) {
    document.write('*');
  }
  document.write('<br>');
}

document.write('<br>');

document.write('2 - Bintang Berurutan dari besar ke kecil <br> <br>');

for (let c = 10; c >= 1; c--) {
  for (let d = 1; d < c; d++) {
    document.write('*');
  }
  document.write('<br>');
}

// bintang berurutan kecil ke besar

let s = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);
console.log('\n');

// bintang berurutan besar ke kecil

let t = '';

for (let k = 10; k > 0; k--) {
  for (let l = 0; l < k; l++) {
    t += '*';
  }
  t += '\n';
}

console.log(t);
