//*Type Guard Type Narrowing
const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
    return;
  } else if (typeof x === "string") {
    console.log(x);
    return;
  } else {
    console.log("");
    return;
  }
};

printAll(["Tarek", "Rahim"]);
printAll("Hello Tarek");
printAll(null);


//*Type Guard Type Narrowing
const printsAll = (x: string | string[] | null) => {
  if (x != null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
      return;
    }
    console.log(x);
    return;
  }
  console.log("");
};
printAll(["Tarek", "Rahman"]);
printAll("Hello Tarek");
printAll(null);

//*Equality check
const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};
compare(2, 2);

//* "in" operator
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move =(animal: Bird | Fish)=>{
  if("fly" in animal){
    animal.fly()
    return
  }
  animal.swim()
}
