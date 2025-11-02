const container = document.querySelector('.favorites');
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

if (favorites.length === 0) {
  container.innerHTML =
    '<p class="text-gray-600">Hech qanday yoqtirilgan mahsulot yo‘q 💔</p>';
} else {
  favorites.forEach((p) => {
    const card = document.createElement('div');
    card.className =
      'bg-white rounded-xl shadow p-3 text-center hover:shadow-lg transition flex flex-col justify-between';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="w-full h-40 object-contain mb-2" />
      <h4 class="text-sm font-medium mb-1">${p.name}</h4>
      <p class="text-gray-600 mb-2">${p.price} so‘m</p>
      <button 
        class="remove-btn bg-red-600 text-white py-1 rounded hover:bg-red-700 transition">
        O‘chirish
      </button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.remove-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      favorites.splice(i, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      location.reload();
    });
  });
}
