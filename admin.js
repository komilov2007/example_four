const basketContainer = document.querySelector('.basket-container');
const basket = JSON.parse(localStorage.getItem('basket')) || [];

if (basket.length === 0) {
  basketContainer.innerHTML =
    "<p class='text-center text-gray-500'>Savatcha bo‘sh 😔</p>";
} else {
  basketContainer.innerHTML = basket
    .map(
      (item) => `
        <div class="bg-white shadow-md rounded-lg p-4 text-center">
          <img src="${item.image}" class="w-full h-48 object-contain mb-3" alt="${item.name}">
          <h3 class="text-gray-800 font-medium mb-1">${item.name}</h3>
          <p class="text-blue-600 font-semibold">${item.price}</p>
        </div>
      `
    )
    .join('');
}
