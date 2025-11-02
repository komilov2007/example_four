function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.querySelector('.cart-container');
  const totalPrice = document.querySelector('.total-price');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML =
      '<p class="text-center text-gray-500">Savatcha bo‘sh </p>';
    totalPrice.textContent = '';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const card = document.createElement('div');
    card.className =
      'bg-white rounded-xl shadow p-3 flex items-center justify-between';

    card.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${item.img}" alt="${item.title}" class="w-16 h-16 object-contain" />
        <div>
          <h4 class="font-medium">${item.title}</h4>
          <p>${item.price} so‘m</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button class="decrease bg-gray-200 px-2 rounded" data-index="${index}">−</button>
        <span>${item.quantity}</span>
        <button class="increase bg-gray-200 px-2 rounded" data-index="${index}">+</button>
        <button class="remove text-red-600" data-index="${index}">🗑</button>
      </div>
    `;

    container.appendChild(card);
  });

  totalPrice.textContent = `Umumiy summa: ${total} so‘m`;

  container.querySelectorAll('.increase').forEach((btn) => {
    btn.addEventListener('click', (e) => changeQty(e, 1));
  });

  container.querySelectorAll('.decrease').forEach((btn) => {
    btn.addEventListener('click', (e) => changeQty(e, -1));
  });

  container.querySelectorAll('.remove').forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });
}

function changeQty(e, dir) {
  const index = e.target.dataset.index;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += dir;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function removeItem(e) {
  const index = e.target.dataset.index;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

loadCart();
