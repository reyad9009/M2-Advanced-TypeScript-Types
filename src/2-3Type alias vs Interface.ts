//* type alias vs interface
// Interface is generally connected to objects
// type alias is more connected to literals, unions, tuples, primitives

//TODO: type alias
type ID = number; //! interface id = number --- not possible
type Role = "admin" | "member"; //! interface "admin" | "member" --- not possible

interface User {
  name: string;
  id: ID;
  role: Role;
}
const user: User = {
  name: "Tarek",
  id: 124,
  role: "admin",
};
console.log(user);



//TODO : interface
interface Animal {
  species: string;
}
interface Cat extends Animal {
  breed: string;
}
const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};
console.log(cat)



//----------------------------

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbol is used to perform intersection
  model: string;
};
const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};
console.log(car)


//----------------------------
interface IEmployee {
  name: string;
}
interface IEmployee {
  id: number;
}

///! This is not valid -- thiss prosses is not working in the type
// type TEmployee = {
//   name: string;
// };

// type TEmployee = {}

const employee: IEmployee = {
  id: 123,
  name: "ABC",
};