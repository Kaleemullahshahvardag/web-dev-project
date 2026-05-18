import { newProducts, msiMoniters, customBuilds, msiLaptop } from "./products/data/categary-1 products.js";

// We use use external library swiper js for slider and pagination//

const imageSlider = new Swiper('.image-slider', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.image-slider .swiper-pagination',
    clickable: true
  },
  autoplay:{
    delay: 5000
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const reviewSlider = new Swiper('.review-slider', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.review-slider .swiper-pagination',
    clickable: true
  },
  autoplay:{
    delay: 8000
  },
});

// SHOW AND CLOSE MOBILE SIDEBAR //

const sideBar = document.querySelector('.side-bar');
const showSideBar = document.querySelector('.js-menu');
const closeSideBar = document.querySelector('.js-close');
const overlay = document.querySelector('.overlay');

showSideBar.addEventListener('click', () => {
  sideBar.classList.add('show');
  overlay.style.display = 'block';
});

closeSideBar.addEventListener('click', () => {
  sideBar.classList.remove('show');
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  sideBar.classList.remove('show');
  overlay.style.display = 'none';
});


// back-to-top-scroll-btn //

const backToTopScrollBtn = document.querySelector('.back-to-top-btn');
window.onscroll = function (){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backToTopScrollBtn.style.display = 'block'
  } else{
    backToTopScrollBtn.style.display = 'none'
  }
}

backToTopScrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})

// LOOP THROUGH PRODUCTS ARRAY AND GENERATE HTML //

const grabElement = document.querySelector('.card-container')
grabElement.innerHTML = '';
newProducts.forEach((product) => {
  const createElement = document.createElement('div');
  createElement.className = 'card-1';
  createElement.setAttribute('data-product-id', product.id);
  createElement.innerHTML = `
      <div class="image-container">
        <img class="product-image" height="130px" src="${product.image}" alt="product-image">
      </div>
      <div>
        <div class="rating-container">
          <div class="rating">
            <span style="color: orange;">&#9733;&#9733;&#9733;&#9733;</span> <!-- 4 filled stars -->
            <span style="color: #a5a5a5;">&#9734;</span> <!-- 1 empty star -->
          </div>
        <div class="reviews">Reviews (4)</div>
        </div>
        <div class="description-price-container">
          <div class="description">
            <p>${product.description}</p>
          </div>
        </div>
      </div>
      <div class="price">
          <p>$${(product.price.originalPrice).toFixed(2)}</p>
          <p>$${(product.price.discountPrice).toFixed(2)}</p>
      </div>
  `
  grabElement.appendChild(createElement);

});

// MSI MONITERS //

const grabElement2 = document.querySelector('.js-column');
grabElement2.innerHTML = '';
msiMoniters.forEach((moniter) => {
  const createElement = document.createElement('div');
  createElement.className = 'product-container';
  createElement.setAttribute('data-product-id', moniter.id)
  createElement.innerHTML = `
    <div class="image-container">
      <img class="product-image" height="130px" src="${moniter.image}" >
      </div>
      <div>
        <div class="rating-container">
          <div class="rating">
            <span style="color: orange;">&#9733;&#9733;&#9733;&#9733;</span>
            <span style="color: #a5a5a5;">&#9734;</span>
          </div>
        <div class="reviews">Reviews (4)</div>
        </div>
        <div class="description-price-container">
          <div class="description">
            <p>${moniter.description}</p>
          </div>
        </div>
      </div>
      <div class="price">
      <p>$${(moniter.price.originalPrice).toFixed(2)}</p>
      <p>$${(moniter.price.discountPrice).toFixed(2)}</p>
    </div>
  `
  grabElement2.appendChild(createElement);
});

// CUSTOM BUILDS //

const grabElement3 = document.querySelector('.js-column-2');
grabElement3.innerHTML = '';
customBuilds.forEach((custom) => {
  const createElement = document.createElement('div');
  createElement.className = 'product-container';
  createElement.setAttribute('data-product-id', custom.id)
  createElement.innerHTML = `
    <div class="image-container">
    <img class="product-image" height="130px" src="${custom.image}" >
  </div>
  <div>
    <div class="rating-container">
      <div class="rating">
        <span style="color: orange;">&#9733;&#9733;&#9733;&#9733;</span>
        <span style="color: #a5a5a5;">&#9734;</span>
      </div>
    <div class="reviews">Reviews (4)</div>
    </div>
    <div class="description-price-container">
      <div class="description">
        <p>${custom.description}</p>
      </div>
    </div>
    </div>
    <div class="price">
      <p>$${(custom.price.originalPrice).toFixed(2)}</p>
    <p>$${(custom.price.discountPrice).toFixed(2)}</p>
  </div>
  `
  grabElement3.appendChild(createElement);
});

// MSI LAPTOPS //

const grabElement4 = document.querySelector('.js-column-3');
grabElement4.innerHTML = '';
msiLaptop.forEach((laptop) => {
  const createElement = document.createElement('div');
  createElement.className = 'product-container';
  createElement.innerHTML = `
      <div class="image-container">
      <img class="product-image" height="130px" src="${laptop.image}" >
      </div>
      <div>
      <div class="rating-container">
        <div class="rating">
          <span style="color: orange;">&#9733;&#9733;&#9733;&#9733;</span> <!-- 4 filled stars -->
          <span style="color: #a5a5a5;">&#9734;</span> <!-- 1 empty star -->
        </div>
      <div class="reviews">Reviews (4)</div>
      </div>
      <div class="description-price-container">
        <div class="description">
          <p>${laptop.description}</p>
        </div>
      </div>
    </div>
    <div class="price">
      <p>${(laptop.price.originalPrice).toFixed(2)}</p>
      <p>${(laptop.price.discountPrice).toFixed(2)}</p>
    </div>
  `
  grabElement4.appendChild(createElement);
});

const observer = new IntersectionObserver((entries) => {});

const promise = new promise((resolve, reject) => {
  if(90 === 89){
    reject()
  }
});