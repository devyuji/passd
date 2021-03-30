export const generator = (len: number): string => {
  const first: number = Math.floor(len / 2);
  const second: number = Math.floor(first / 2);
  const third: number = len - (first + second);

  const capitalAlphabet: Array<string> = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallAlphabet: Array<string> = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const specialCharacter: Array<string> = ["!", "@", "#", "?", "]"];

  const number: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let capitalAlphabetResult: string = "";
  let smallAlphabetResult: string = "";
  let specialOrNumberResult: string | number = "";

  for (let i = 1; i <= first; i++) {
    const randomNum = randomNumber(26);
    smallAlphabetResult += smallAlphabet[randomNum];
  }

  for (let j = 1; j <= second; j++) {
    const randomNum = randomNumber(26);
    capitalAlphabetResult += capitalAlphabet[randomNum];
  }

  for (let k = 1; k <= third; k++) {
    if (k % 2 === 0) {
      let randomNumSpecialCharacter = randomNumber(5);
      specialOrNumberResult += specialCharacter[randomNumSpecialCharacter];
    } else {
      let randomNumSpecialCharacter = randomNumber(10);
      specialOrNumberResult += number[randomNumSpecialCharacter];
    }
  }

  const result =
    capitalAlphabetResult + smallAlphabetResult + specialOrNumberResult;

  return result;
};

const randomNumber = (num: number): number => {
  return Math.floor(Math.random() * (num - 0)) + 0;
};
