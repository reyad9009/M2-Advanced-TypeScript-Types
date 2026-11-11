// typeof
let x = 123;
console.log(typeof x);

// type Guard
const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

// truthiness
type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Tarek",
  address: {
    street: "abc",
  },
};

const showAdress = (user: User) => {
  if (user && user.address ) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User not found")
};
