let jmlBaris = 5;
let pola = '';

for (let i = 0; i < jmlBaris; i++) {
  // spasi
  for (let spasi = jmlBaris - 1; spasi > i; spasi--) {
    pola += ' ';
  }

  // angka
  let number = 1;
  for (let j = 0; j <= i; j++) {
    pola += number + ' ';
    number = (number * (i - j)) / (j + 1);
  }

  pola += '\n';
}

console.log(pola);
