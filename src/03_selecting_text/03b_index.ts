// A) Use Shift + Option + L-R-Arrows to select the string within the console log statement in Line 11 and fix it

// B) Use Cmd + Option + L-R-Arrows to delete only the comment from the thousand definition

// C) Use Cmd + L to select the lines with the "dumb comment" and delete them

// D) Place your cursor on the "target" variable and use Ctrl + Shift + Cmd + Arrow-Right
//    to expand your selection to the whole function definition, then delete it

const x = () => {
  console.log("This is a non-sense log statement");

  const thousand = 1000; // this is two hundred

  const theTruth = true;
  const alsoTrue = true;

  // Dumb comment:
  // To explain this line in detail, one could say the following: We compare a variable
  // with another variable, and both are true, so the condition is true
  if (theTruth === alsoTrue) {
    console.log("this is true");
  }

  if (thousand === 1000) {
    console.log("This is a thousand");
  }

  const innerFunction = () => {
    const anotherTruth = true;

    if (anotherTruth) {
      const target = "target";

      console.log(target);
    }
  };
};
