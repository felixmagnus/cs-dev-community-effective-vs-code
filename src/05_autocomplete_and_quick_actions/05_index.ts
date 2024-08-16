// A) Add the missing properties to the persons.
//
//    Place your cursor within the objects, and use Ctrl + Space to trigger
//    Intellisense. It will recommend the missing properties.
//    Press Tab to accept the suggestion.
//
//    PersonA is 42 years old.
//    PersonB is called "Günther".

interface Person {
  name?: string;
  age?: number;
}

const personA: Person = {
  name: "Hans",
};

const personB: Person = {
  age: 69,
};

// B) Add the missing method call to the "sayMoo" function.
//    Place your cursor within the function, type cow. and then use Intellisense
//    to complete the method call.

const cow = {
  speak: () => {
    console.log("Moo!");
  },
};

const sayMoo = () => {
  // not mooing yet
};

// C) Please your cursor at the "sophisticatedLog" function and then
//    use Cmd + . to trigger the Quick Actions Menu and import the missing function.

// D) Remove the unused parameter "c" from the "logParams" function using the Quick Actions Menu.

const logParams = (a: string, b: number, c: string) => {
  sophisticatedLog(a, b);
};

// E) Add all missing properties to the cat object by using the Quick Actions Menu.

interface Cat {
  name: string;
  breed: string;
  weight: number;
  age: number;
  color: string;
  isCute: boolean;
  isChunky: boolean;
}

const maurice: Cat = {};
