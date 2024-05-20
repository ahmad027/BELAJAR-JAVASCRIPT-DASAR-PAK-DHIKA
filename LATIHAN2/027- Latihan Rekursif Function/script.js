// cetak angka rekursif dari 10 - 1
function cetakAngka(n) {
  if (n == 0) return;

  console.log(n);
  cetakAngka(n - 1);
}

console.log(cetakAngka(10));

// rekursi dari angka 1 - 10
function angkaNaik(n) {
  if (n == 11) return;
  console.log(n);
  angkaNaik(n + 1);
}

console.log(angkaNaik(1));
