// bintang beruutan kecil ke besar

let s = '';

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);
console.log('\n');

// bintang berurutan besar ke kecil

let t = '';

for (let k = 5; k > 0; k--) {
  for (let l = 0; l < k; l++) {
    t += '*';
  }
  t += '\n';
}

console.log(t);
