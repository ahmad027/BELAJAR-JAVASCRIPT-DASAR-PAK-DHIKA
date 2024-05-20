// argumen berupa function
function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

let sum = kali(tambah(2, 3), tambah(4, 5));

console.log(`Hasil Perkalian dari (2 + 3) X (4 + 5) = ${sum}`);

// contoh arguments
function tambahAngka() {
  let hasil = 0;

  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

let coba = tambahAngka(7, 8, 9, 10);

console.log(coba);
