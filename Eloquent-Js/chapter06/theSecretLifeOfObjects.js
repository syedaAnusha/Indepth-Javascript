//* SOME CODES FROM CHAPTER 06

function speak(line) {
  console.log(`The ${this.type} rabbit says ${line} `);
}

let hungryRabbit = { type: "hungry", speak };
let whiteRabbit = { type: "white", speak };

hungryRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

speak.call(hungryRabbit, "Burp!!");
