let ulang = true;

while (ulang) {
  // menangkap pilihan player
  const p = prompt('Silahkan pilih : gajah, orang atau semut');

  // console.log(p);

  // menangkap pilihan comp
  // membangkitkan pilihan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  // menentukan rules
  let hasil = '';

  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'gajah') {
    hasil = comp == 'orang' ? 'MENANG' : 'KALAH';
  } else if (p == 'orang') {
    hasil = comp == 'gajah' ? 'KALAH' : 'MENANG';
  } else if (p == 'semut') {
    hasil = comp == 'orang' ? 'KALAH' : 'MENANG';
  } else {
    hasil = alert('Anda salah Memasukkan Pilihan');
  }

  if (p !== '') {
    alert(
      `Pilihan Anda : ${p} \nPilihan Computer : ${comp} \nHasilnya : \nAnda ${hasil}`
    );
  }

  ulang = confirm('mau mengulang game?');
}

alert('Terimakasih sudah bermain.');
