export function convertNum(num) {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const englishDigits = num.toString().split("");

  let cnvtNum = "";
  englishDigits.forEach((digit) => {
    if (!isNaN(digit)) {
      cnvtNum += bengaliDigits[digit];
    } else {
      cnvtNum += digit;
    }
  });

  return cnvtNum;
}
