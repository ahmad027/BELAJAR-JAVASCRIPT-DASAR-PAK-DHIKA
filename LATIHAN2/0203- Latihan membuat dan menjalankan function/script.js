function volumeDuaKubus(a, b) {
  let volumeA = a * a * a;
  let volumeB = b * b * b;

  let total = volumeA + volumeB;

  return total;
}

alert(
  `Volume dari 2 kubus yang masing - masing sisinya adalah 8 dan 3 adalah : ${volumeDuaKubus(
    8,
    3
  )}`
);
alert(
  `Volume dari 2 kubus yang masing - masing sisinya adalah 8 dan 3 adalah : ${volumeDuaKubus(
    10,
    15
  )}`
);
