const user = [
    {
        name: "Jackson",
        phone: "+91 8994323847",
        email: "jackson@gmail.com"
    },
    {
        name: "Malem",
        phone: "+91 8989745325",
        email: "malem@gmail.com"
    },
    {
        name: "Ayush",
        phone: "+91 7008945236",
        email: "ayush@gmail.com"
    }
]

const container = document.getElementById("container")
for (let i=0 ; i<user.length ; i++) {
    container.innerHTML += `
    <div  class=" m-4 border w-55 rounded-lg overflow-hidden bg-white/70">
        <div class="flex border ">
                <div class="max-w-14 flex items-center justify-center px-2 py-0.5 rounded-full ">
                    <h1 class="bg-gray-200  text-4xl rounded-full px-3  ">
                        ${user[i].name.charAt(0)}
                    </h1>
                </div>
                <div class="border-l flex-1 py-1 text-sm">
                    <div class="border-b">    
                        <h3 class="px-1">
                            ${user[i].name}
                        </h3>
                    </div>
                    <h4 class="px-1">
                        ${user[i].phone}
                    </h4>
                </div>
            </div>
            <h4 class="p-2">
                ${user[i].email}
            </h4>
        </div>
    </div>       
    `;
}

// const container = document.getElementById("container");
// for (let i = 0; i < users.length; i++) {
//   container.innerHTML += `
//     <h1 
//       class="
//         text-center font-semibold text-3xl 
//         ${users[i].role == "admin" ? "text-blue-500 bg-yellow-500" : "text-green-500 bg-blue-200"}
//       "
//     >
//       Welcome ${users[i].name}, phone ${users[i].phone}, 
//       <span class="${users[i].bal < 1000 ? "text-red-500" : "text-violet-500"}">
//         ${users[i].bal}
//       </span>
//     </h1>
//   `;
  
// }
// {/* <h1>Welcome Priyansu, phone 1234567890, <span>1500</span></h1> */}

const result = users[1].role == "admin" ? "text-red-500 bg-yellow-500" : "text-green-500 bg-blue-500";

console.log(result);







 //ternary
 
function order1(amount1, distance1) {
  const discount1 = amount1 >= 10000 ? amount1 * 0.20 : 0;
  const deliveryDays1 = distance1 < 5 ? 1 : 2;
  return {
    originalAmount1: amount1,
    discount1,
    finalAmount1: amount1 - discount1,
    deliveryDays1
  };
}
console.log(order1(15000, 3));
console.log(order(18000, 8));
