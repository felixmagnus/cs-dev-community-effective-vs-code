// A) Use Cmd + Shift + D to duplicate the log statement

// B) Use Option + Up-Down-Arrows to move the duplicated log statement into the condition

// C) Fix the log statement by selecting the text "anImportantValue" and type a single {
//    VSCode will automatically wrap the value correctly

// D) Using Cmd + L and Cmd + Shift + 7, comment out all other calls of the main function

// E) Put your cursor on it, then use F2 to refactor the variable name "anImportantValue" to "importantValue"

const main = () => {
  console.log("Doing stuff!");

  const someCondition = true;

  if (someCondition) {
  }

  const someValue = 13;

  const anImportantValue = 42;

  console.log(`A value: ${someValue}, another thing is: $anImportantValue`);
};

main();

main();
main();
main();
main();
