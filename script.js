// Cart functionality
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceP = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');
const categoryFilter = document.getElementById('categoryFilter');
const products = document.querySelectorAll('.product');

// Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productDiv = button.parentElement;
        const name = productDiv.querySelector('h3').innerText;
        const price = parseFloat(productDiv.querySelector('p').innerText.replace('$',''));
        cart.push({name, price});
        updateCart();
    });
});

// Update Cart
function updateCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(div);
        total += item.price;
    });
    totalPriceP.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout simulation
checkoutButton.addEventListener('click', () => {
    if(cart.length === 0){
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
});

// Category filter
categoryFilter.addEventListener('change', () => {
    const value = categoryFilter.value;
    products.forEach(product => {
        if(value === 'All' || product.dataset.category === value){
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
