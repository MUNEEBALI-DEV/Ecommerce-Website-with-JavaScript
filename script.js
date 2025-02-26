//  Lower Navbar
let ALL = document.querySelector(".ALL");
let ELECTRONICS = document.querySelector(".ELECTRONICS");
let JEWELERY = document.querySelector(".JEWELERY");
let menClothing = document.querySelector(".MEN-CLOTHING");
let womenClothing = document.querySelector(".WOMEN-CLOTHING");
// Upper Navbar
let Home = document.querySelector(".Home");
let Products = document.querySelector(".Products");
let Cart = document.querySelector(".Cart");
let Checkout = document.querySelector(".Checkout");
let Login = document.querySelector(".Login");
let Signup = document.querySelector(".Signup");
// Main
let cardsRow = document.querySelectorAll(".cardsRow .col-lg-3 ");
let userSelection = document.querySelector(".user-selection");
let cartCard = document.querySelector(".cart-card");
let addToCartBtn = document.querySelectorAll(".addToCart");
let cartTemplate = document.querySelector("#template-data");
// Summary Cart
let subTotal = document.querySelector(".sub-total");
let Total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelector(".minus");
let cartNo=0;

// Code

ALL.addEventListener("click", () => {
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
  });
});

ELECTRONICS.addEventListener("click", () => {
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
JEWELERY.addEventListener("click", () => {
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

menClothing.addEventListener("click", () => {
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
womenClothing.addEventListener("click", () => {
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

Home.addEventListener("click", (e) => {
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  e.preventDefault();
  ALL.classList.add("OFF");
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
  });
});
Products.addEventListener("click", (e) => {
  cartCard.style.display = "none";
  userSelection.style.display = "none";
  e.preventDefault();
  ALL.classList.remove("OFF");
  cardsRow.forEach((card) => {
    card.classList.remove("OFF");
  });
});
Cart.addEventListener("click", (e) => {
  e.preventDefault();
  cardsRow.forEach((card) => {
    card.classList.add("OFF");
    // cartCard.style.display = "flex";
    userSelection.style.display = "block";
  });
});

addToCartBtn.forEach((eachCart) => {
  eachCart.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Product added successfully");
    cartCard.style.display = "none";
    createCartClone(eachCart);
  });
});

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
  userSelection.prepend(selectionData);
  removingCart(removeBtn);
  addingCartNo(selectionData);
}

function removingCart(removeBtn) {
  removeBtn.addEventListener("click", () => {
    removeBtn.closest(".selection-data").remove();
  });
}

function addingCartNo(selectionData) {
    selectionData.querySelector(".quantity").value ="1"
  selectionData.querySelector(".plus").addEventListener("click", () => {
    if ((selectionData.querySelector(".quantity").value ="0")) {
        selectionData.querySelector(".quantity").value ="1"
    } 
    
  });

  // .addEventListener("click",()=>{
  //   console.log("hi");
  // })
}
