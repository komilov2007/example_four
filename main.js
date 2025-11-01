fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data) => console.log(data));

const cards = document.querySelector('.cards');

fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      cards.innerHTML += `<div class="flex flex-wrap gap-[px] ">
  <div
    class="bg-white rounded-[2px] border border-[#e6e6e6] shadow-md hover:shadow-lg transition w-full h-[380px] flex flex-col"
  >
    <div class="h-[250px] relative">
      <i class="fa-regular fa-heart absolute top-2 right-2 text-gray-600 bg-white p-2 rounded-full"></i>
      <img
        src="${item.image}"
        alt="Mahsulot rasmi"
        class="w-[80%] h-[80%] ml-[10%] object-cover"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-[14px] font-medium text-gray-800 text-center">
          ${item.name}
        </h3>
       
      </div>
 <div class="flex">
        
 <p class="text-center ml-[10%] font-semibold text-l ">
          ${item.price} so'm
        </p>
        <img
        class="w-[45px] ml-[10%] mb-[10px] color-blue  text-white rounded-lg text-sm border rounded-[50%] p-[10px]  hover:bg-blue-200 transition" src="${item.button}"
     / >
      </div>
     
       
      
    </div>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log('xato', error));

// sdzfxcgvhbjn

fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product-threteen')
  .then((res) => res.json())
  .then((data2) => console.log(data2));

const card30 = document.querySelector('.card30');

fetch('https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product-threteen')
  .then((res) => res.json())
  .then((data2) => {
    data2.forEach((item) => {
      card30.innerHTML += `<div class="flex flex-wrap gap-[px] ">
  <div
    class="bg-white rounded-[2px] border border-[#e6e6e6] shadow-md hover:shadow-lg transition w-full h-[380px] flex flex-col"
  >
    <div class="h-[250px] relative">
      <i class="fa-regular fa-heart absolute top-2 right-2 text-gray-600 bg-white p-2 rounded-full"></i>
      <img
        src="${item.image}"
        alt="Mahsulot rasmi"
        class="w-[80%] h-[80%] ml-[10%] object-cover"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-[14px] font-medium text-gray-800 text-center">
          ${item.name}
        </h3>
       
      </div>
 <div class="flex">
        
 <p class="text-center ml-[10%] font-semibold text-l ">
          ${item.price} so'm
        </p>
        <img
        class="w-[45px] ml-[10%] mb-[10px] color-blue  text-white rounded-lg text-sm border rounded-[50%] p-[10px]  hover:bg-blue-200 transition" src="${item.button}"
     / >
      </div>
     
       
      
    </div>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log('xato', error));

fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data2) => console.log(data2));

const novinki = document.querySelector('.novinki');

fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/product')
  .then((res) => res.json())
  .then((data3) => {
    data3.forEach((item) => {
      novinki.innerHTML += `<div class="flex flex-wrap gap-[px] ">
  <div
    class="bg-white rounded-[2px] border border-[#e6e6e6] shadow-md hover:shadow-lg transition w-full h-[380px] flex flex-col"
  >
    <div class="h-[250px] relative">
      <i class="fa-regular fa-heart absolute top-2 right-2 text-gray-600 bg-white p-2 rounded-full"></i>
      <img
        src="${item.image}"
        alt="Mahsulot rasmi"
        class="w-[80%] h-[80%] ml-[10%] object-cover"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-[14px] font-medium text-gray-800 text-center">
          ${item.name}
        </h3>
       
      </div>
 <div class="flex">
        
 <p class="text-center ml-[10%] font-semibold text-l ">
          ${item.price} so'm
        </p>
        <img
        class="w-[45px] ml-[10%] mb-[10px] color-blue  text-white rounded-lg text-sm border rounded-[50%] p-[10px]  hover:bg-blue-200 transition" src="${item.button}"
     / >
      </div>
     
       
      
    </div>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log('xato', error));

fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/productNovinki')
  .then((res) => res.json())
  .then((data2) => console.log(data2));

const tovar = document.querySelector('.tovar');

fetch('https://6905db6eee3d0d14c133f2d2.mockapi.io/api/productNovinki')
  .then((res) => res.json())
  .then((data2) => {
    data2.forEach((item) => {
      tovar.innerHTML += `<div class="flex flex-wrap gap-[px] ">
  <div
    class="bg-white rounded-[2px] border border-[#e6e6e6] shadow-md hover:shadow-lg transition w-full h-[380px] flex flex-col"
  >
    <div class="h-[250px] relative">
      <i class="fa-regular fa-heart absolute top-2 right-2 text-gray-600 bg-white p-2 rounded-full"></i>
      <img
        src="${item.image}"
        alt="Mahsulot rasmi"
        class="w-[80%] h-[80%] ml-[10%] object-cover"
      />
    </div>

    <div class="flex flex-col flex-1 justify-between">
      <div>
     
        <h3 class="text-[14px] font-medium text-gray-800 text-center">
          ${item.name}
        </h3>
       
      </div>
 <div class="flex">
        
 <p class="text-center ml-[10%] font-semibold text-l ">
          ${item.price} so'm
        </p>
        <img
        class="w-[45px] ml-[10%] mb-[10px] color-blue  text-white rounded-lg text-sm border rounded-[50%] p-[10px]  hover:bg-blue-200 transition" src="${item.button}"
     / >
      </div>
     
       
      
    </div>
  </div>
</div>`;
    });
  })
  .catch((error) => console.log('xato', error));

fetch('https://6905e8e9ee3d0d14c1341a42.mockapi.io/api/stat')
  .then((res) => res.json())
  .then((data2) => console.log(data2));

const stat = document.querySelector('.stat');

fetch('https://6905e8e9ee3d0d14c1341a42.mockapi.io/api/stat')
  .then((res) => res.json())
  .then((data2) => {
    stat.innerHTML = data2
      .map(
        (item) => `
      <div class="bg-white rounded-[2px] overflow-hidden shadow hover:shadow-lg transition">
        <div class="w-full h-[203px] bg-gray-200">
          <img src="${item.image}" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="">
          <p class="text-sm text-gray-500 mb-1">${item.data}</p>
          <h3 class="text-base p-[2%] font-semibold leading-snug hover:text-blue-600 cursor-pointer">
            ${item.name}
          </h3>
        </div>
      </div>
    `
      )
      .join('');
  })
  .catch((error) => console.log('xato', error));
