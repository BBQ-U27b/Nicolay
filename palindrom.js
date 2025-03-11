const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkpalindrom(word) {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

function main() {
  rl.question('Geben Sie nun Ihr Wort ein oder "q" zum beenden : ', (input) => {
    if (input.toLowerCase() === "q") {
      console.log("Programm beendet");
      rl.close();
      return;
    }
    if (input.length === 0) {
      console.log("Kein Wort eingegeben! Ahh🙀");
    } else {
      const word = input.toLowerCase();
      if (checkpalindrom(word)) {
        console.log("Das Wort ist ein Palindrom! Yay😻");
      } else {
        console.log("Das Wort ist kein Palindrom! Naw😿");
      }
    }
    main();
  });
}

main();