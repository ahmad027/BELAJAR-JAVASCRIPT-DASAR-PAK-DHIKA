let rows = 5;

for (let i = 1; i <= rows; i++) {
  // menampilkan spasi (setiap baris jumlah spasi berkurang satu)
  for (let j = i; j <= rows - 1; j++) {
    document.write('#');
  }

  // menampilkan bintang (setiap naik satu baris tambah 2 bintang)
  for (let k = 1; k <= 2 * i - 1; k++) {
    document.write('*');
  }
  document.write('<br>');
}

// CONSOLE LOG

let baris = 5;
let result = '';

for (let a = 1; a <= baris; a++) {
  // menampilkan spasi (setiap baris jumlah spasi berkurang satu)
  for (b = a; b <= baris - 1; b++) {
    result += ' ';
  }

  // menampilkan bintang (setiap naik satu baris tambah 2 bintang)
  for (let c = 1; c <= 2 * a - 1; c++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
