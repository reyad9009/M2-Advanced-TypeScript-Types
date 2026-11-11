// Basic Union --- যেকোনো string \| number
type Identity = string | number | boolean;
const id: Identity = 123456;
const name: Identity = "Tarek";
const status: Identity = true
console.log(id, name, status);


// Literal Union --- "yes" \| "no" নির্দিষ্ট value
type Role = "user" | "admin" | "manager";
const userRole: Role = "admin";
console.log(userRole);

type Status = "success" | "error" | "loading";
const checkStatus = (status: Status) => {
  console.log(status);
};
checkStatus("error");


// object union
type Admin = {id: number, role: "admin", privileges: string[]}
type Member = {id: number, role: "member", plans: string[]}

type User = Admin | Member

const user : User = {id: 123, role: "member", plans: ["abc", "def"]}
const user2 : User = {id: 123, role: "admin", privileges: ["abc", "def"]}
console.log(user, user2)
