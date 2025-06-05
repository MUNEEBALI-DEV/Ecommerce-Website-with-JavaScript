//  Lower Navbar
let mainContainer = document.querySelector(".main-container");
let ALL = document.querySelector(".ALL");
let ELECTRONICS = document.querySelector(".ELECTRONICS");
let JEWELERY = document.querySelector(".JEWELERY");
let menClothing = document.querySelector(".MEN-CLOTHING");
let womenClothing = document.querySelector(".WOMEN-CLOTHING");
// Upper Navbar
let Home = document.querySelectorAll(".Home");
let Products = document.querySelectorAll(".Products");
let Cart = document.querySelectorAll(".Cart");
let Checkout = document.querySelectorAll(".Checkout");
let checkoutContainer = document.querySelector(".checkout-container");
let Login = document.querySelectorAll(".Login");
let loginContainer = document.querySelector(".login-container");
let Profile = document.querySelectorAll(".Profile");
let profileContainer = document.querySelector(".profile-container");
// Main
let cardsRow = document.querySelectorAll(".cardsRow .col-lg-3 ");
let userSelection = document.querySelector(".user-selection");
let cartCard = document.querySelector(".cart-card");
let orderSummary = document.querySelector(".order-summary");
let addToCartBtn = document.querySelectorAll(".addToCart");
let cartTemplate = document.querySelector("#template-data");
// Summary Cart
let subTotal = document.querySelector(".sub-total");
let Total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelector(".minus");
/* if all plus why not all minus */
let sideBarBtn = document.querySelector(".sideBarBtn");
let slideBar = document.querySelector(".slide-bar");
let closeBtn = document.querySelector(".close-btn");

let cartNo = 0;

// Code

// View Product Btn Code
let viewProducts = document.querySelector(".view-products");

viewProducts.addEventListener("click", () => {
  cartCard.style.display = "none";
  mainContainer.style.display = "block";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
    card.classList.add("ON");
  });
});

// SideBar Code
sideBarBtn.addEventListener("click", () => {
  slideBar.style.right = "0";
});
closeBtn.addEventListener("click", () => {
  slideBar.style.right = "-100%";
});

function addingBlackBGOnclick(e) {
  let lowerNavBtn = document.querySelectorAll(".lower-nav-btn");
  lowerNavBtn.forEach((each) => {
    each.classList.remove("active");
  });
  e.target.classList.add("active");
}

// SideBar Code
ALL.addEventListener("click", (e) => {
  disablingSignUpEtc();
  addingBlackBGOnclick(e);
  mainContainer.style.display = "block";
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
  });
});

ELECTRONICS.addEventListener("click", (e) => {
  disablingSignUpEtc();
  addingBlackBGOnclick(e);
  mainContainer.style.display = "block";
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
    if (card.classList.contains("jw")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("men")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("women")) {
      card.classList.add("OFF");
    }
  });
});
JEWELERY.addEventListener("click", (e) => {
  addingBlackBGOnclick(e);
  disablingSignUpEtc();
  mainContainer.style.display = "block";
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
    if (card.classList.contains("el")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("men")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("women")) {
      card.classList.add("OFF");
    }
  });
});

menClothing.addEventListener("click", (e) => {
  addingBlackBGOnclick(e);
  disablingSignUpEtc();
  mainContainer.style.display = "block";
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
    if (card.classList.contains("el")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("jw")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("women")) {
      card.classList.add("OFF");
    }
  });
});
womenClothing.addEventListener("click", (e) => {
  addingBlackBGOnclick(e);
  disablingSignUpEtc();
  mainContainer.style.display = "block";
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
    if (card.classList.contains("el")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("jw")) {
      card.classList.add("OFF");
    } else if (card.classList.contains("men")) {
      card.classList.add("OFF");
    }
  });
});

Home.forEach((each) => {
  each.addEventListener("click", (e) => {
    e.preventDefault();
    mainContainer.style.display = "block";
    disablingSignUpEtc();
    cartCard.style.display = "none";
    userSelection.style.display = "none";
    ALL.classList.add("OFF");
    cardsRow.forEach((card) => {
      card.classList.remove("OFF");
    });
  });
});

Products.forEach((each) => {
  each.addEventListener("click", (e) => {
    mainContainer.style.display = "block";
    disablingSignUpEtc();
    cartCard.style.display = "none";
    userSelection.style.display = "none";
    e.preventDefault();
    ALL.classList.remove("OFF");
    cardsRow.forEach((card) => {
      card.classList.remove("OFF");
    });
  });
});

Cart.forEach((each) => {
  each.addEventListener("click", (e) => {
    e.preventDefault();
    disablingSignUpEtc();
    mainContainer.style.display = "block";
    cardsRow.forEach((card) => {
      card.classList.add("OFF");

      let itemsList = document.querySelector(".items-list");
      let noOfItem = itemsList.querySelectorAll("div").length;
      if (noOfItem == 0) {
        cartCard.style.display = "flex";
      }

      let allSelectionData = userSelection.querySelectorAll(".selection-data");
      allSelectionData.forEach((ele) => {
        let quantityElement = ele.querySelector(".quantity");
        if (quantityElement) {
          let Quantity = quantityElement.value;
          if (Quantity > 0) {
            orderSummary.style.display = "block";
            userSelection.style.display = "block";
            cartCard.style.display = "none";
          }
        }
      });

      let price = orderSummary.querySelector(".total").innerText;

      if (price == "$0.00") {
        cartCard.style.display = "flex";
      }
    });
  });
});

// Saving cart into local storage
function saveToLocalStorage() {
  let cartItems = [];
  let allSelectionData = userSelection.querySelectorAll(".selection-data");
  allSelectionData.forEach((eachItem) => {
    let imgSrc = eachItem.querySelector("img").src;
    let title = eachItem.querySelector(".card-title").innerHTML;
    let price = eachItem.querySelector(".card-price").innerHTML;
    let quantity = eachItem.querySelector(".quantity");
    if (quantity) {
      quantity = eachItem.querySelector(".quantity").value;
    }

    cartItems.push({
      imgSrc,
      title,
      price,
      quantity,
    });
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));
}
// Saving cart into local storage

// Loading Cart when reload
function loadFromLocalStorage() {
  let cartItems = localStorage.getItem("cart");
  if (cartItems) {
    let savedItems = JSON.parse(cartItems);

    // // Removing dummy selection data

    savedItems = savedItems.filter(function (item) {
      return item.title !== "CARD TITLE WILL BE HERE";
    });

    // // Removing dummy selection data

    // visibility of orderSummary
    if (savedItems.length > 0) {
      orderSummary.style.display = "block";
      cartCard.style.display = "none";
    } else {
      orderSummary.style.display = "none";
      cartCard.style.display = "flex";
    }

    savedItems.forEach((Item) => {
      let selectionData = document.createElement("div");
      selectionData.classList.add(
        "selection-data",
        "d-flex",
        "flex-column",
        "flex-md-row"
      );
      let billImgDiv = document.createElement("div");
      billImgDiv.classList.add("bill-img-div");
      let img = document.createElement("img");
      img.classList.add("bill-img");

      const imgSrc = Item.imgSrc;
      img.src = imgSrc;
      let wrapper = document.createElement("div");
      wrapper.classList.add("ps-3");
      let cardTitle = document.createElement("p");
      cardTitle.classList.add("card-title");

      cardTitle.innerHTML = Item.title;

      let cardPrice = document.createElement("h5");
      cardPrice.classList.add("card-price", "fw-normal", "text-danger", "mt-2");
      cardPrice.innerHTML = Item.price;
      const cardItem = cartTemplate.content.cloneNode(true);
      cardItem.querySelector(".quantity").value = Item.quantity;
      let removeBtn = document.createElement("a");
      removeBtn.classList.add(
        "btn",
        "bg-danger",
        "cart-btn",
        "text-white",
        "ms-auto"
      );
      removeBtn.innerHTML = "Remove";
      // Appending Nodes
      billImgDiv.append(img);
      wrapper.append(cardTitle, cardPrice, cardItem);
      selectionData.append(billImgDiv, wrapper, removeBtn);

      // Add to DOM
      userSelection.prepend(selectionData);

      // Add event listeners
      removingCart(removeBtn);
      addingCartNo(selectionData);
    });
    calculationOfPayment();
  }
}

// Loading Cart when reload

function createCartClone(eachCart) {
  // Creating Nodes
  let selectionData = document.createElement("div");
  selectionData.classList.add(
    "selection-data",
    "d-flex",
    "flex-column",
    "flex-md-row"
  );
  let billImgDiv = document.createElement("div");
  billImgDiv.classList.add("bill-img-div");
  let img = document.createElement("img");
  img.classList.add("bill-img");
  const parentCard = eachCart.closest(".card");
  const imgSrc = parentCard.querySelector("img").src;
  img.src = imgSrc;
  let wrapper = document.createElement("div");
  wrapper.classList.add("ps-3");
  let cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = parentCard.querySelector(".card-title").innerHTML;
  let cardPrice = document.createElement("h5");
  cardPrice.classList.add("card-price", "fw-normal", "text-danger", "mt-2");
  cardPrice.innerHTML = parentCard.querySelector(".card-price").innerHTML;
  const cardItem = cartTemplate.content.cloneNode(true);
  let removeBtn = document.createElement("a");
  removeBtn.classList.add(
    "btn",
    "bg-danger",
    "cart-btn",
    "text-white",
    "ms-auto"
  );
  removeBtn.innerHTML = "Remove";
  // Appending Nodes
  billImgDiv.append(img);
  wrapper.append(cardTitle, cardPrice, cardItem);
  selectionData.append(billImgDiv, wrapper, removeBtn);

  //checking duplicate items
  let itemExists = false;

  let allSelectionData = userSelection.querySelectorAll(".selection-data");
  allSelectionData.forEach((ele) => {
    if (ele.querySelector(".card-title").innerHTML == cardTitle.innerHTML) {
      let quantity = ele.querySelector(".quantity").value;
      quantity++;
      ele.querySelector(".quantity").value = quantity;
      itemExists = true;
      calculationOfPayment();
    }
  });
  //checking duplicate items

  if (!itemExists) {
    userSelection.prepend(selectionData);
  }

  removingCart(removeBtn);
  addingCartNo(selectionData);
  saveToLocalStorage();
}

addToCartBtn.forEach((eachCart) => {
  eachCart.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Product added successfully");
    orderSummary.style.display = "block";
    cartCard.style.display = "none";
    createCartClone(eachCart);
    calculationOfPayment();
  });
});

function removingCart(removeBtn) {
  removeBtn.addEventListener("click", () => {
    removeBtn.closest(".selection-data").remove();
    calculationOfPayment();
    saveToLocalStorage();
  });
}

// Removing the cart if quantity is zero
function zeroQuantityChecking() {
  let allSelectionData = userSelection.querySelectorAll(".selection-data");
  allSelectionData.forEach((ele) => {
    let quantityElement = ele.querySelector(".quantity");
    if (quantityElement) {
      let Quantity = quantityElement.value;
      if (Quantity == 0) {
        ele.remove();
        cartCard.style.display = "flex";
        calculationOfPayment();
        saveToLocalStorage();
      }
    }
  });
}
// Removing the cart if quantity is zero

function addingCartNo(selectionData) {
  let quantity = selectionData.querySelector(".quantity").value;
  selectionData.querySelector(".plus").addEventListener("click", () => {
    quantity++;
    selectionData.querySelector(".quantity").value = quantity;
    calculationOfPayment();
    saveToLocalStorage();
  });
  selectionData.querySelector(".minus").addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      selectionData.querySelector(".quantity").value = quantity;
      zeroQuantityChecking();
      calculationOfPayment();
      saveToLocalStorage();
    }
  });
}
function calculationOfPayment() {
  let totalPrice = 0;
  let allSelectionData = userSelection.querySelectorAll(".selection-data");

  allSelectionData.forEach((eachEle) => {
    let cartPrice = Number(
      eachEle.querySelector(".card-price").innerText.slice(1)
    );

    let quantityElement = eachEle.querySelector(".quantity");
    if (quantityElement) {
      let Quantity = Number(quantityElement.value);
      // console.log(Quantity);
      let eachCartPrice = (cartPrice * Quantity).toFixed(2);
      totalPrice = totalPrice + parseFloat(eachCartPrice);
      // console.log(totalPrice);
      Total.innerText = `$${totalPrice.toFixed(2)}`;
      subTotal.innerText = `$${totalPrice.toFixed(2)}`;
    }
  });
  Total.innerText = `$${totalPrice.toFixed(2)}`;
  subTotal.innerText = `$${totalPrice.toFixed(2)}`;

  if (Total.innerText == "$0.00") {
    orderSummary.style.display = "none";
    cartCard.style.display = "flex";
  } else if (totalPrice > 0) {
    orderSummary.style.display = "block";
    cartCard.style.display = "none";
  } else {
    orderSummary.style.display = "none";
    cartCard.style.display = "flex";
  }
  showingCartDetailInOrder(totalPrice);
}

// Sign Up Code

let Signup = document.querySelectorAll(".Signup");
let signupContainer = document.querySelector(".signup-container");
let signupForm = document.querySelector(".signup-form");

let signupProceedBtn = document.querySelector(".signup-proceed");

// Disabling other containers
function disablingSignUpEtc() {
  signupContainer.style.display = "none";
  loginContainer.style.display = "none";
  profileContainer.style.display = "none";
  checkoutContainer.style.display = "none";
}

Signup.forEach((each) => {
  each.addEventListener("click", (e) => {
    // Disabling other containers
    signupContainer.style.display = "block";
    mainContainer.style.display = "none";
    loginContainer.style.display = "none";
    profileContainer.style.display = "none";
    orderSummary.style.display = "none";
    checkoutContainer.style.display = "none";
    userSelection.style.display = "none";
    cartCard.style.display = "none";
    cardsRow.forEach((card) => {
      card.classList.add("OFF");
    });
  });
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let allSignUp = [];
signupProceedBtn.addEventListener("click", (e) => {
  if (!Array.isArray(allSignUp)) {
    allSignUp = [];
  }

  let signupUsernameInput = document.querySelector(".signup-username");
  let signupEmailInput = document.querySelector(".signup-email");
  let signupPasswordInput = document.querySelector(".signup-password");

  let username = signupUsernameInput.value;
  let email = signupEmailInput.value;
  let password = signupPasswordInput.value;

  if (!username || !email || !password) {
    alert("Please fill the SignUp details completly");
    return;
  }
  if (allSignUp && allSignUp.some((u) => u.email === email)) {
    return alert("Email already exists");
  }
  if (allSignUp && allSignUp.some((u) => u.username === username)) {
    return alert("Username already exists");
  }

  allSignUp.push({
    username,
    email,
    password,
  });

  localStorage.setItem("signupData", JSON.stringify(allSignUp));

  alert("Account Created");
  profileAfterSignUp(username, email);
});

// Profile Code
let userStatus = "logout";

function OpeningPrfile() {
  // Disabling other containers
  mainContainer.style.display = "none";
  signupContainer.style.display = "none";
  loginContainer.style.display = "none";
  profileContainer.style.display = "block";
  checkoutContainer.style.display = "none";
  orderSummary.style.display = "none";
  userSelection.style.display = "none";
  cartCard.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.add("OFF");
  });
  Profile.forEach((each) => {
    each.style.display = "block";
  });

  userStatus = "login";
}

Profile.forEach((each) => {
  each.addEventListener("click", () => {
    OpeningPrfile();
  });
});

function profileAfterSignUp(username, email) {
  OpeningPrfile();
  let profileUsername = document.querySelector(".profile-username");
  let profileEmail = document.querySelector(".profile-email");
  profileUsername.innerHTML = username;
  profileEmail.innerHTML = email;
  Signup.forEach((each) => {
    each.style.display = "none";
  });
  Login.forEach((each) => {
    each.style.display = "none";
  });
}

// Login Code

Login.forEach((each) => {
  each.addEventListener("click", (e) => {
    // Disabling other containers
    mainContainer.style.display = "none";
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
    profileContainer.style.display = "none";
    checkoutContainer.style.display = "none";
    orderSummary.style.display = "none";
    userSelection.style.display = "none";
    cartCard.style.display = "none";
    cardsRow.forEach((card) => {
      card.classList.add("OFF");
    });
  });
});

let loginEmailInput = document.querySelector(".login-email");
let loginPasswordInput = document.querySelector(".login-password");
let loginProceedBtn = document.querySelector(".login-proceed");
let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

function profileAfterLogin(loginEmail, loginUsername) {
  OpeningPrfile();
  let profileUsername = document.querySelector(".profile-username");
  let profileEmail = document.querySelector(".profile-email");
  profileEmail.innerHTML = loginEmail;
  profileUsername.innerHTML = loginUsername;
  Login.forEach((each) => {
    each.style.display = "none";
  });
  Signup.forEach((each) => {
    each.style.display = "none";
  });
}

loginProceedBtn.addEventListener("click", () => {
  emailValue = loginEmailInput.value;
  passwordValue = loginPasswordInput.value;

  if (!emailValue || !passwordValue) {
    alert("Please fill the login details completly");
    return;
  }

  let signupData = localStorage.getItem("signupData");
  let parsedSignupData = [];

  if (signupData) {
    parsedSignupData = JSON.parse(signupData);
  } else {
    alert("No user data found. Please sign up first.");
    return;
  }

  let loginSuccessful = false;

  for (const eachobj of parsedSignupData) {
    if (
      eachobj.email == loginEmailInput.value &&
      eachobj.password == loginPasswordInput.value
    ) {
      alert("Account Successfully Login");
      localStorage.setItem("loginEmail", JSON.stringify(eachobj.email));
      localStorage.setItem("loginUsername", JSON.stringify(eachobj.username));
      profileAfterLogin(eachobj.email, eachobj.username);
      loginSuccessful = true;
      loadUserOrderHistory();
      break;
    }
  }

  if (!loginSuccessful) {
    alert("Incorrect Username or Password");
  }
});

// Logout Btn Code
function logoutProcess() {
  // Clear the login data from localStorage
  localStorage.removeItem("loginEmail");
  localStorage.removeItem("loginUsername");

  Profile.forEach((each) => {
    each.style.display = "none";
  });

  Login.forEach((each) => {
    each.style.display = "block";
  });
  Signup.forEach((each) => {
    each.style.display = "block";
  });
  profileContainer.style.display = "none";
  loginContainer.style.display = "block";

  userStatus = "logout";
}
let logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  logoutProcess();
});

// Checkout Code

//  proceed to checkout Code

function userStatusChecking() {
  if (userStatus == "logout") {
    alert("Login or SignUp");
    loginContainer.style.display = "block";
    checkoutContainer.style.display = "none";
    mainContainer.style.display = "none";
    signupContainer.style.display = "none";
    profileContainer.style.display = "none";
    orderSummary.style.display = "none";
    userSelection.style.display = "none";
    cartCard.style.display = "none";
    cardsRow.forEach((card) => {
      card.classList.add("OFF");
    });
  } else if (userStatus == "login") {
    orderSummary.style.display = "none";
    userSelection.style.display = "none";
    checkoutContainer.style.display = "block";
  }
}

let proceedToCheckoutBtn = document.querySelector(".proceed-to-checkout");
proceedToCheckoutBtn.addEventListener("click", () => {
  userStatusChecking();
  mainContainer.style.display = "none";
});

// Checkout Code

function showingCartDetailInOrder(totalPrice) {
  let itemsList = document.querySelector(".items-list");

  // Clear previous items before adding new ones
  itemsList.innerHTML = ""; // This empties the container

  let allSelectionData = userSelection.querySelectorAll(".selection-data");
  allSelectionData.forEach((each) => {
    let cardTitle = each.querySelector(".card-title").innerHTML;
    let cardPrice = each.querySelector(".card-price").innerHTML;
    let quantityElement = each.querySelector(".quantity");
    if (quantityElement) {
      let cardQuantity = quantityElement.value;

      let div = document.createElement("div");
      div.classList.add("d-flex", "justify-content-between");
      let p1 = document.createElement("p");
      p1.classList.add("text-black", "fw-normal", "py-1", "my-0");
      p1.innerHTML = `${cardTitle} x ${cardQuantity}`;
      let p2 = document.createElement("p");
      p2.classList.add("text-black", "fw-bolder", "py-1", "my-0");

      p2.innerHTML = cardPrice;
      div.append(p1, p2);
      itemsList.prepend(div);
    }
  });

  // In order Detail
  let cartSubtotal = document.querySelector(".cart-subtotal");
  let TotalPrice = document.querySelector(".order-total");
  // In cart

  let calculatedPrice = totalPrice.toFixed(2);
  cartSubtotal.innerHTML = `$${totalPrice.toFixed(2)}`;
  TotalPrice.innerHTML = `$${(totalPrice + 2.1).toFixed(2)}`;

  function zeroPriceInOrder() {
    if (calculatedPrice == 0) {
      alert("Your Cart is empty,Please Add some Items");
      checkoutContainer.style.display = "none";
      mainContainer.style.display = "block";
      signupContainer.style.display = "none";
      profileContainer.style.display = "none";

      cardsRow.forEach((card) => {
        card.classList.remove("OFF");
        card.classList.add("ON");
      });
    }
  }

  Checkout.forEach((each) => {
    each.addEventListener("click", () => {
      userStatusChecking();
      mainContainer.style.display = "none";
      profileContainer.style.display = "none";
      cartCard.style.display = "none";
      zeroPriceInOrder();
    });
  });
}

// Call this when the page loads

document.addEventListener("DOMContentLoaded", () => {
  let spinner = document.querySelector(".spinner");
  let spinnerOverlay = document.querySelector(".spinner-overlay");
  spinner.style.display = "none";
  spinnerOverlay.style.display = "none";
  loadFromLocalStorage();

 let savedSignup = localStorage.getItem("signupData");
 allSignUp = savedSignup ? JSON.parse(savedSignup) : [];


  let loginUsername = JSON.parse(localStorage.getItem("loginUsername"));
  let loginEmail = JSON.parse(localStorage.getItem("loginEmail"));

  if (loginEmail && loginUsername) {
    profileAfterLogin(loginEmail, loginUsername);
    loadUserOrderHistory(); // Load their order historyz
  } else {
    logoutProcess();
  }

  calculationOfPayment();
  loginContainer.style.display = "none";
  cartCard.style.display = "none";
});

// Place Order Code
let checkoutForm = document.querySelector(".checkout-form");

function formIsFilled() {
  let allInputs = checkoutForm.querySelectorAll("input, select, textarea");

  for (let element of allInputs) {
    // Skip radio buttons that aren't checked
    if (element.type === "radio" && !element.checked) continue;

    if (element.required && !element.value.trim()) {
      return false;
    }
  }
  return true;
}

checkoutForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission for demo

  if (formIsFilled()) {
    alert("Congrats,Your Order is placed");
    appendingOrderHistory();
    removingPreviousData();
  } else {
    alert("Form is Incomplete");
    checkoutForm.reportValidity();
  }
});

// removing carts detail once submitted
function removingPreviousData() {
  let allSelectionData = userSelection.querySelectorAll(".selection-data");
  allSelectionData.forEach((each) => {
    each.remove();
  });
  localStorage.removeItem("cart");
  calculationOfPayment();
  cartCard.style.display = "none";
}
// Code when order is placed

function generateOrderId() {
  // Characters to use in the random part
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "Order #";

  // Generate 8 random characters
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}
function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are 0-11 in JavaScript
  const year = now.getFullYear();

  return `${day}/${month}/${year}`;
}

//  function appendingOrderHistory() {
//     // Create the main container div
// const orderContainer = document.createElement('div');
// orderContainer.className = 'd-flex flex-column flex-md-row align-items-md-center justify-content-between border-bottom py-3 w-100';

// // Create the order details div
// const orderDetails = document.createElement('div');
// orderDetails.className = 'order-history-details';

// // Create and append the order elements
// const orderNumber = document.createElement('p');
// orderNumber.className = 'fw-bolder fs-5 mb-0';
// orderNumber.innerHTML =  generateOrderId();

// // let localOrderId=orderNumber.innerHTML;
// // localStorage.setItem("localOrderId",JSON.stringify(localOrderId))

// const orderDate = document.createElement('p');
// orderDate.className = 'text-gray mb-0';
// orderDate.innerHTML =`Date: <b> ${getCurrentDate()} </b>  `;

// // let localOrderDate=orderDate.innerHTML;
// // localStorage.setItem("localOrderDate",JSON.stringify(localOrderDate))

// const orderTotal = document.createElement('p');
// orderTotal.className = 'text-gray mb-0';
//   let TotalPrice = document.querySelector(".order-total");
// orderTotal.innerHTML = `Total:<span class="fw-bolder"> ${ TotalPrice.innerHTML} </span>`;

// // let localOrderPrice=orderTotal.innerHTML;
// // localStorage.setItem("localOrderPrice",JSON.stringify(localOrderPrice))

// const orderAddress = document.createElement('p');
// orderAddress.className = 'text-gray mb-0';
// let Address =document.querySelector("#Address")
// orderAddress.innerHTML = `Address:<span class="fw-bolder"> ${ Address.value}  </span>`;

// // let localOrderAddress=orderAddress.innerHTML ;
// // localStorage.setItem("localOrderAddress",JSON.stringify(localOrderAddress))

// const orderItems = document.createElement('p');
// orderItems.className = 'text-gray mb-0';
//   let itemsList = document.querySelector(".items-list");

//     let noOfItem =itemsList.querySelectorAll("div").length;

// orderItems.innerHTML = `Total items:<span class="fw-bolder"> ${ noOfItem }</span>`;

// //     let localOrderItemsNO=orderItems.innerHTML ;
// // localStorage.setItem("localOrderItemsNO",JSON.stringify(localOrderItemsNO))

// // Append all elements to order details
// orderDetails.appendChild(orderNumber);
// orderDetails.appendChild(orderDate);
// orderDetails.appendChild(orderTotal);
// orderDetails.appendChild(orderAddress);
// orderDetails.appendChild(orderItems);

// // Create the Complete button
// const completeButton = document.createElement('button');
// completeButton.type = 'button';
// completeButton.className = 'btn btn-success me-auto me-md-0 my-3 my-md-0';
// completeButton.readOnly = true;
// completeButton.textContent = 'Complete';

// // Append both sections to the main container
// orderContainer.appendChild(orderDetails);
// orderContainer.appendChild(completeButton);

// let orderHistory=document.querySelector(".order-history")
//     orderHistory.appendChild(orderContainer)

//     checkoutContainer.style.display = "none";
//     profileContainer.style.display = "block";
//   }

// Modify your appendingOrderHistory function to save to localStorage
function appendingOrderHistory() {
  // Generate order data
  const orderData = {
    id: generateOrderId(),
    date: getCurrentDate(),
    total: document.querySelector(".order-total").innerHTML,
    address: document.querySelector("#Address").value,
    itemsCount: document.querySelector(".items-list").querySelectorAll("div")
      .length,
    email: JSON.parse(localStorage.getItem("loginEmail")), // Associate with user
  };

  // Save to localStorage
  let orderHistory = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  orderHistory.push(orderData);
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

  // Display the order
  displayOrder(orderData);

  checkoutContainer.style.display = "none";
  profileContainer.style.display = "block";
}

// / New function to display a single order
function displayOrder(orderData) {
  const orderContainer = document.createElement("div");
  orderContainer.className =
    "d-flex flex-column flex-md-row align-items-md-center justify-content-between border-bottom py-3 w-100";

  const orderDetails = document.createElement("div");
  orderDetails.className = "order-history-details";

  const orderNumber = document.createElement("p");
  orderNumber.className = "fw-bolder fs-5 mb-0";
  orderNumber.innerHTML = orderData.id;

  const orderDate = document.createElement("p");
  orderDate.className = "text-gray mb-0";
  orderDate.innerHTML = `Date: <b>${orderData.date}</b>`;

  const orderTotal = document.createElement("p");
  orderTotal.className = "text-gray mb-0";
  orderTotal.innerHTML = `Total:<span class="fw-bolder">${orderData.total}</span>`;

  const orderAddress = document.createElement("p");
  orderAddress.className = "text-gray mb-0";
  orderAddress.innerHTML = `Address:<span class="fw-bolder">${orderData.address}</span>`;

  const orderItems = document.createElement("p");
  orderItems.className = "text-gray mb-0";
  orderItems.innerHTML = `Total items:<span class="fw-bolder">${orderData.itemsCount}</span>`;

  orderDetails.append(
    orderNumber,
    orderDate,
    orderTotal,
    orderAddress,
    orderItems
  );

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "btn btn-success me-auto me-md-0 my-3 my-md-0";
  completeButton.readOnly = true;
  completeButton.textContent = "Complete";

  orderContainer.append(orderDetails, completeButton);
  document.querySelector(".order-history").appendChild(orderContainer);
}

// Load all orders for the current user when they log in
function loadUserOrderHistory() {
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  const userEmail = JSON.parse(localStorage.getItem("loginEmail"));

  // Clear existing orders
  document.querySelector(".order-history").innerHTML = "";

  // Filter and display orders for this user
  orderHistory
    .filter((order) => order.email === userEmail)
    .forEach((order) => displayOrder(order));
}

// AOS
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
