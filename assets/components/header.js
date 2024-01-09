// Header Component
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="sticky-header border-btm-black header-1">
      <div class="header-bottom">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-1 col-md-4 col-4  ">
                      <div class="header-logo">
                          <a href="index.html" class="logo-main">
                             <h1>Neon</h1>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-9 d-lg-block d-none">
                      <nav class="site-navigation">
                          <ul class="main-menu list-unstyled justify-content-center">
                             
                              <li class="menu-list-item nav-item active has-megamenu">
                                  <div class="mega-menu-header">
                                      <a class="nav-link"  href="collection-left-sidebar.html">
                                        Customize
                                      </a>
                                      <span class="open-submenu">
                                          <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round">
                                              <polyline points="6 9 12 15 18 9"></polyline>
                                          </svg>
                                      </span>
                                  </div>
                                  <div class="submenu-transform submenu-transform-desktop">
                                      <div class="container">
                                          <ul class="submenu megamenu-container list-unstyled">
                                              
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/8.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >Under 4000</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/1.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >for kids</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <li class="menu-list-item nav-item has-megamenu">
                                  <div class="mega-menu-header">
                                      <a class="nav-link" href="collection-left-sidebar.html">
                                          Shop Neon
                                      </a>
                                      <span class="open-submenu">
                                          <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round">
                                              <polyline points="6 9 12 15 18 9"></polyline>
                                          </svg>
                                      </span>
                                  </div>
                                  <div class="submenu-transform submenu-transform-desktop">
                                      <div class="container">
                                          <ul class="submenu megamenu-container list-unstyled">
                                              
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/5.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >floro sign</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/2.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >best seller</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/6.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >for business</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/7.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >for event</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/8.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >Under 4000</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                              <li class="menu-list-item nav-item-sub">
                                                  <div class="mega-menu-header d-flex align-items-center justify-content-between">
                                                      <a class="mega-menu-img nav-link-sub nav-text-sub" href="#">
                                                          <img class="menu-img" src="assets/images/stories/1.jpg" alt="img">
                                                         
                                                          <div class="img-menu-action  text_12 bg-transparent p-0 mt-3">
                                                              <span >for kids</span>
                                                              <span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg"
                                                                      width="30" height="18" fill="#12dd7e"
                                                                      class="icon-right-long" viewBox="0 0 16 16">
                                                                      <path fill-rule="evenodd"
                                                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                  </svg>
                                                              </span>
                                                          </div>
                                                      </a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <!-- <li class="menu-list-item nav-item has-dropdown">
                                  <div class="mega-menu-header">
                                      <a class="nav-link" href="blog.html">Blog</a>
                                      <span class="open-submenu">
                                          <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                              width="24" height="24" viewBox="0 0 24 24" fill="none"
                                              stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round">
                                              <polyline points="6 9 12 15 18 9"></polyline>
                                          </svg>
                                      </span>
                                  </div>
                                  <div class="submenu-transform submenu-transform-desktop">
                                      <ul class="submenu list-unstyled">
                                          <li class="menu-list-item nav-item-sub">
                                              <a class="nav-link-sub nav-text-sub" href="blog.html">Blog</a>
                                          </li>
                                          <li class="menu-list-item nav-item-sub">
                                              <a class="nav-link-sub nav-text-sub" href="article.html">Blog
                                                  Details</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li> -->
                             
                              <li class="menu-list-item nav-item">
                                  <a class="nav-link" href="#">Head Light</a>
                              </li>
                              <li class="menu-list-item nav-item">
                                  <a class="nav-link" href="#">Business Neon Logo</a>
                              </li>
                              <li class="menu-list-item nav-item">
                                  <a class="nav-link" href="#">Why Neon</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div class="col-lg-2 col-md-8 col-8  ">
                      <div class="header-action d-flex align-items-center justify-content-end">
                          <a class="header-action-item header-search" href="javascript:void(0)">
                              
                              <img src="assets/images/icon/search.svg" class="icon icon-search"  alt="">
                          </a>
                          <a class="header-action-item header-wishlist ms-4 d-none d-lg-block" href="login.html">
                              <img src="assets/images/icon/user.svg" width="49px" class="icon icon-wishlist" alt="">
                          </a>
                          <a class="header-action-item header-cart ms-4" href="#drawer-cart" data-bs-toggle="offcanvas">
                              <img src="assets/images/icon/cart.svg" class="icon icon-cart" alt="">
                             
                          </a>
                          <a class="header-action-item header-hamburger ms-4 d-lg-none" href="#drawer-menu" data-bs-toggle="offcanvas">
                              <img src="assets/images/icon/menu.svg" class="icon icon-hamburger"  alt="">
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="search-wrapper">
              <div class="container">
                  <form action="#" class="search-form d-flex align-items-center">
                      <button type="submit" class="search-submit bg-transparent pl-0 text-start">
                          <img src="assets/images/icon/search.svg" class="icon icon-search"  alt="">
  
                      </button>
                      <div class="search-input mr-4">
                          <input type="text" placeholder="Search your best products..." autocomplete="off">
                      </div>
                      <div class="search-close">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-close">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                      </div>
                      <!-- <img src="assets/images/icon/close.svg" class="search-close" alt=""> -->
                  </form>
              </div>
          </div>
      </div>
  </header>
  `;
  }
}

customElements.define("my-header", MyHeader);
// Fixed Navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".sticky-top").addClass("shadow-sm").css("top", "0px");
  } else {
    $(".sticky-top").removeClass("shadow-sm").css("top", "-200px");
  }
});
//  custom cursor
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = {
  x: 0,
  y: 0,
};
const cursorBorderPos = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(0, 144, 144, .4)";
      cursorBorder.style.setProperty("--size", "55px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "60px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "30px");
  });
});
function loginClick() {
  var loginTab = document.getElementById("login-tab");
  loginTab.click();
}
function signupClick() {
  var signupTab = document.getElementById("signup-tab");
  signupTab.click();
}
// back to top
const tapTopBtn = document.querySelector(".tap-to-top-button");
const tapTopTopBox = document.querySelector(".tap-to-top-box");
tapTopBtn?.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
if (tapTopTopBox) {
  window.onscroll = function () {
    if (pageYOffset >= 1000) {
      tapTopTopBox.classList.remove("hide");
    } else {
      tapTopTopBox.classList.add("hide");
    }
  };
}
//  cart
// ==== CART ==================
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// == Open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// == Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// == Close Working JavaScript
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// == Making Function
function ready() {
  // Remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // == Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }

  // Buy button work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

// Buy button
function buyButtonClicked() {
  alert("Your order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// == Remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// == Quantity changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

// Add to cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;
    }
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="image" class="cart-img">
          <div class="detail-box">
              <div class="cart-product-title">${title}</div>
              <div class="cart-price">${price}</div>
              <input class="cart-quantity" type="number" value="1">
          </div>
      <i class='bx bxs-trash-alt cart-remove'></i>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
// == Uptade total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // if price contain some cents value
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
