import { externalFunction } from "./external.js";

// A) Use Option + L-R-Arrows to navigate to the condition and fix it

// B) Use Cmd + L-R-Arrows (+ Option + L-R-Arrows) to navigate to typoe in the comment and fix it

// C) Use F12 to jump to the source of the externalFunction()

const doStuff = () => {
  console.log("Doing stuff!");
};

const blub = () => {
  doStuff();
};

const main = () => {
  const someCondition = true;

  if (someCondition) {
    blub(); //LoremLorem ipsum dolor sit amet, consetetur sadipscing elitr, there is a typo in the MILDLE of this comment
  }

  const aMoreComplexCondition = true && true && false && true;

  if (aMoreComplexCondition) {
    externalFunction();
  }
};

main();
