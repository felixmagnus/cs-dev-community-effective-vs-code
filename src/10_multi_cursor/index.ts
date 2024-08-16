// A) Put your cursor on the "target" variable content, and press Cmd + D
//    multiple times to toggle multi cursor mode. Then, type coolMan to
//    replace the content

const target = "Hello, World!";

if (target === "Hello, World!") {
  console.log("We found the target!");
}

const x = () => {
  console.log("Doing stuff!");

  const wow = `${target} !!!!! Wow!`;

  console.log(wow);
};

// B) - Put your cursor before the word "hans"
//    - Press Ctrl + Shift + Arrow-Down to spawn a new cursor below
//    - Repeat until you have a cursor on each name
//    - Using Shift + Option + Arrow-Right, select the name
//    - Press Cmd + C to copy the names
//    - Move your cursor to the start of the line
//    - Press Shift + Option + Arrow-Right to select the respective "target"
//    - Press Cmd + V to paste the names

const greetings = {
  target1: "Hello, hans!",
  target2: "Hello, fritz!",
  target3: "Hello, max!",
  target4: "Hello, anna!",
  target5: "Hello, franzi!",
};
