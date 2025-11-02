const sections = [
  {
    title: 'zlvbsa',
    url: 'https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product',
    container: document.querySelector('.bnn'),
  },
  {
    title: 'Популярные',
    url: 'https://6905db6eee3d0d14c133f2d2.mockapi.io/api/product',
    container: document.querySelector('.popular-container'),
  },
  {
    title: 'Бестселлеры',
    url: 'https://68fa0502ef8b2e621e7e795f.mockapi.io/api/product-threteen',
    container: document.querySelector('.bestseller-container'),
  },
  {
    title: 'Новинки',
    url: 'https://6905db6eee3d0d14c133f2d2.mockapi.io/api/productNovinki',
    container: document.querySelector('.novinki-container'),
  },
  {
    title: 'Товары со скидкой',
    url: 'https://6905e8e9ee3d0d14c1341a42.mockapi.io/api/tovar',
    container: document.querySelector('.tovar'),
  },
];

async function fetchProducts(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('API xato:', err);
    return [];
  }
}

function renderProducts(container, products) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  container.innerHTML = '';

  products.forEach((p) => {
    const liked = favorites.some((f) => f.id === p.id);

    const card = document.createElement('div');
    card.className =
      'relative bg-white rounded-xl shadow p-3 text-center hover:shadow-lg transition flex flex-col justify-between';

    card.innerHTML = `
      <button 
        class="heart-btn absolute top-2 right-2 text-gray-400 text-xl bg-white p-2 rounded-full shadow hover:scale-110 transition"
        data-id="${p.id}">
        <i class="fa-heart ${
          liked ? 'fa-solid text-red-500' : 'fa-regular'
        }"></i>
      </button>

      <img src="${p.image || p.img}" alt="${
      p.name
    }" class="w-full h-40 object-contain mb-2" />
      <h4 class="text-sm font-medium mb-1">${p.name}</h4>
      <p class="text-gray-600 mb-2">${p.price || 'Narx yo‘q'} so‘m</p>
      <button 
        data-id="${p.id}" 
        class="buy-btn bg-gray-600 text-white py-1 rounded hover:bg-blue-700 transition">
        Savatchaga
      </button>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.buy-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const product = products.find((p) => p.id == id);
      addToCart(product);
    });
  });

  container.querySelectorAll('.heart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      const product = products.find((p) => p.id == id);
      toggleFavorite(product, btn);
    });
  });
}
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find((item) => item.id === product.id);

  if (existing) existing.quantity += 1;
  else {
    cart.push({
      id: product.id,
      title: product.name,
      price: product.price || 0,
      img: product.image || product.img,
      quantity: 1,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} savatchaga qo‘shildi 🛒`);
}

function toggleFavorite(product, btn) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const exists = favorites.find((item) => item.id === product.id);

  if (exists) {
    favorites = favorites.filter((item) => item.id !== product.id);
    btn.querySelector('i').classList.remove('fa-solid', 'text-red-500');
    btn.querySelector('i').classList.add('fa-regular', 'text-gray-400');
    showToast(`${product.name} yoqtirishdan olib tashlandi 💔`);
  } else {
    favorites.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image || product.img,
    });
    btn.querySelector('i').classList.remove('fa-regular', 'text-gray-400');
    btn.querySelector('i').classList.add('fa-solid', 'text-red-500');
    showToast(`${product.name} yoqtirildi ❤️`);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.className =
    'fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow opacity-0 transition';
  document.body.appendChild(t);
  setTimeout(() => (t.style.opacity = 1), 100);
  setTimeout(() => {
    t.style.opacity = 0;
    setTimeout(() => t.remove(), 500);
  }, 2000);
}
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((a, c) => a + c.quantity, 0);
  const counter = document.querySelector('.cart-count');
  if (counter) counter.textContent = total;
}
async function init() {
  for (const section of sections) {
    const products = await fetchProducts(section.url);
    renderProducts(section.container, products);
  }
  updateCartCount();
}

init();
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  });
}
const API_URL = 'https://6905e8e9ee3d0d14c1341a42.mockapi.io/api/stat';
const container = document.getElementById('articles-container');

async function fetchArticles() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderArticles(data);
  } catch (err) {
    console.error('Xatolik:', err);
  }
}

function renderArticles(articles) {
  container.innerHTML = '';
  articles.forEach((a) => {
    const card = document.createElement('div');
    card.className =
      'bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col';

    card.innerHTML = `
      <img src="${a.image}" alt="${a.title}" class="w-full h-40 object-cover" />
      <div class="p-3 flex-1 flex flex-col justify-between">
        <div>
          <p class="text-gray-500 text-xs mb-1">${a.data}</p>
          <h3 class="font-medium text-sm mb-2 line-clamp-2">${a.name}</h3>
        </div>
        <a href="${
          a.link || '#'
        }" class="text-blue-600 text-sm hover:underline mt-auto">
          Читать →
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

fetchArticles();
