const arrname = ["one", "Two", "Three", "Four", "Five", "six", "Seven", "Eight", "Nine", "Ten"];
const arrimg = [
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCTCRF8VMxR63s2WjdXsdLipybRtkfjKTeA&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3c4Eq5SN_m7Oh1bb--DsKp-A3i9tYiy9tw&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuupPoCVDxpBjIFu-vE8-pp2DiA0YfAX80A&s,
]


const scrollXCardContainer = document.getElementById("scrollXCardContainer");
for (let i = 0; i < arrname.length; i++) {
  scrollXCardContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md min-w-80">
      <img 
        class="w-full aspect-5/3 object-cover"
        src="${arrimg[i]}"
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold">${arrXCard[i]}</h1>
        <p class="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio quas ad rem labore debitis voluptatum veritatis quibusdam ducimus!</p>
      </div>
    </div>
  `;
}
