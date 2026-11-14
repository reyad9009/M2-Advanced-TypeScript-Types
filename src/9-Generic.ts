//* TypeScript-এ Generic হলো এমন একটি Feature, যার মাধ্যমে আমরা এমন Function, Type বা Interface তৈরি করতে পারি, যেগুলো বিভিন্ন ধরনের Data নিয়ে কাজ করতে পারে এবং একই সঙ্গে Type Safety বজায় রাখে।

// Without Generic
function printString(value: string): string {
  return value;
}

function printNumber(value: number): number {
  return value;
}

//With Generic
function printValue<T>(value: T): T {
  return value;
}

console.log(printValue<string>("Tarek"));

console.log(printValue<number>(100));

console.log(printValue<boolean>(true));

//* Problem 6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};
// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

//* problem 9
const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.flat();
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
