// JavaScript Object Notation
const name = ["Priyansu", "John", "Max"];
const phone = [1234567890, 9987654321, 5643746322];
const email = ["spriyansu@gmail.com", "john@gmail.com", "max@gmail.com"];

const user = { 
  name: {firstName: "Salam", middleName: "Priyansu", lastName: "Meitei"}, 
  phone: {call: 1234567890, whatsapp: 8723452873}, 
  email: ["spriyansu@gmail.com", "example@gmail.com"]
} // json

// console.log(user.name.firstName + " " + user.name.middleName + " " + user.name.lastName);
// console.log(user.phone.whatsapp);
// console.log(user.email[1]);



const usersData = [
  { name: "Priyansu", phone: 1234567890, email: "spriyansu@gmail.com" },
  { name: "John", phone: 9987654321, email: "john@gmail.com" },
  { name: "Max", phone: 5643746322, email: "max@gmail.com" },
]

const users = [
  { 
    name: "Priyansu", 
    phone: 1234567890, 
    email: "spriyansu@gmail.com",
    role: "admin",
    bal: 1500,
  },
  { 
    name: "John", 
    phone: 9987654321, 
    email: "john@gmail.com",
    role: "user",
    bal: 850,
  },
  { 
    name: "Max", 
    phone: 5643746322, 
    email: "max@gmail.com",
    role: "user",
    bal: 1200
  },
]

// const text = ["A", 5, true, {name: "John"}]

const container = document.getElementById("container");
for (let i = 0; i < users.length; i++) {
  container.innerHTML += `
    <h1 
      class="
        text-center font-semibold text-3xl 
        ${users[i].role == "admin" ? "text-blue-500 bg-yellow-500" : "text-green-500 bg-blue-200"}
      "
    >
      Welcome ${users[i].name}, phone ${users[i].phone}, 
      <span class="${users[i].bal < 1000 ? "text-red-500" : "text-violet-500"}">
        ${users[i].bal}
      </span>
    </h1>
  `;
  
}
/* <h1>Welcome Priyansu, phone 1234567890, <span>1500</span></h1> */

const result = users[1].role == "admin" ? "text-red-500 bg-yellow-500" : "text-green-500 bg-blue-500";

console.log(result);



