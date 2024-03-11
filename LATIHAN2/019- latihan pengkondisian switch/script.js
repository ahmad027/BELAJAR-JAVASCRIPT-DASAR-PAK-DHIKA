let item = prompt(
  'Masukkan nama makanan / minuman : \n (cth: nasi, daging susu, hamburger, softdrink) '
);

switch (item) {
  case 'nasi':

  case 'daging':
    alert('makanan / minuman sehat');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('makanan / minuman tidak sehat');
    break;
  default:
    alert('anda memasukkan nama makanan / minuman yang salah');
    break;
}
