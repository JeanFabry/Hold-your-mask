// Jean - Cart Div //

let myBasketButton = document.querySelector(
  "body > header > nav > div.navbar-menu > div > a >button"
);

let totalOrder = 0;
let main = document.querySelector("main");

let clicked = true;

let recapDiv = document.createElement("div");

let recapDivTitle = document.createElement("h3");
recapDivTitle.textContent = "You can find the recap of your order below:";

let recapDivOrders = document.createElement("div");
recapDivOrders.classList.add("recapDivOrders");
let recapDivOrdersEmpty = document.createElement("p");
recapDivOrdersEmpty.textContent = "Your Cart is currently empty !";
recapDivOrders.appendChild(recapDivOrdersEmpty);

let recapDivCartButtons = document.createElement("div");
recapDivCartButtons.classList.add("recapDivCartButtons");

let recapDivCartTotal = document.createElement("button");
recapDivCartTotal.innerText = "Your cart is empty !";
recapDivCartTotal.classList.add("buttonCartTotal");

let seeTimerShippingDiv = document.createElement("button");
seeTimerShippingDiv.innerText = "See timer";
seeTimerShippingDiv.classList.add("seeTimerShippingDiv");

let makeANewOrder = document.createElement("button");
makeANewOrder.innerText = "Make a new order";
makeANewOrder.classList.add("makeANewOrder");

let timerButton = document.querySelector(".timerButton");

// const shippingDiv = document.createElement("section")
//     shippingDiv.classList.add("shippingDiv");
//     $(shippingDiv).insertBefore("main");

recapDiv.appendChild(recapDivTitle);
recapDiv.appendChild(recapDivOrders);
recapDiv.appendChild(recapDivCartButtons);
recapDivCartButtons.appendChild(recapDivCartTotal);
document.body.appendChild(recapDiv);
recapDiv.classList.add("recapDiv");
// recapDiv.classList.add("modal");

const recapOrder = (e) => {
  if (clicked) {
    console.log("clicked:", clicked);
    recapDiv.style.right = "10px";
    clicked = false;
  } else {
    console.log(clicked);
    recapDiv.style.right = "-30%";
    clicked = true;
  }
};

myBasketButton.addEventListener("click", recapOrder);
//END JEAN

//Wassim
const collection = [
  {
    title: "Model 1",
    category: "Plat",
    category2: "Meat lover",
    img: "./assets/images/2.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "12",
    Prix: 5,
  },

  {
    title: "Model 2",
    category: "Dessert",
    category2: "Végétarien",
    img: "./assets/images/1.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "15",
    Prix: 5,
  },

  {
    title: "Model 3",
    category: "Plat",
    category2: "Végétarien",
    img: "./assets/images/3.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    PrixString: "14",
    Prix: 5,
  },

  {
    title: "Model 4",
    category: "Plat",
    category2: "Végétarien",
    img: "./assets/images/4.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "14",
    Prix:5,
  },

  {
    title: "Model 5",
    category: "Boisson",
    category2: "Végétarien",
    img: "./assets/images/5.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "17",
    Prix: 5,
  },

  {
    title: "Model 6",
    category: "Plat",
    category2: "Meat lover",
    img: "./assets/images/7.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "20",
    Prix: 5,
  },

  {
    title: "Model 7",
    category: "Boisson",
    category2: "Végétarien",
    img: "./assets/images/8.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "11",
    Prix: 5,
  },

  {
    title: "Model 8",
    category: "Plat",
    category2: "Meat lover",
    img: "./assets/images/1.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    PrixString: "11",
    Prix: 5,
  },

  {
    title: "Model 9",
    category: "Dessert",
    category2: "Végétarien",
    img: "./assets/images/2.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    PrixString: "14",
    Prix: 5,
  },

  {
    title: "Model 10",
    category: "Plat",
    category2: "Végétarien",
    img: "./assets/images/3.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. é de délicieuse rondelle de tomate.",
    PrixString: "12",
    Prix: 5,
  },
];

/////////////////////////////   Card   ////////////////////////////////////////////////////
const SectionColonne = document.querySelector(".menu");
// SectionColonne.innerHTML = ""

for (let element of collection) {
  const colonne = document.createElement("div");
  colonne.className = "card column is-one-quarter margin";
  SectionColonne.appendChild(colonne);

  //============================== IMAGE =================================//

  const cardImg = document.createElement("div");
  cardImg.className = "card-image";
  colonne.appendChild(cardImg);

  const cardfig = document.createElement("figure");
  cardfig.className = "image is-4by3";
  cardImg.appendChild(cardfig);

  const image = document.createElement("img");
  image.src = element.img;
  cardfig.appendChild(image);

  //============================== Content =================================//

  const cardCont = document.createElement("div");
  cardCont.className = "card-content";
  colonne.appendChild(cardCont);

  //---------TAG--------------

  // const tag = document.createElement("span");
  // tag.className = "tag is-success";
  // tag.textContent = element.category;
  // cardCont.appendChild(tag);

  // const tag2 = document.createElement("span");
  // tag2.className = "tag is-danger";
  // tag2.textContent = element.category2;
  // cardCont.appendChild(tag2);

  // //==================================== TITRE + Texte =====================================//

  const cardAllText = document.createElement("div");
  cardAllText.className = "content";
  cardCont.appendChild(cardAllText);

  const cardTitre = document.createElement("h4");
  cardTitre.className = "content";
  cardTitre.textContent = element.title;
  cardAllText.appendChild(cardTitre);

  const cardText = document.createElement("p");
  cardText.className = "content";
  cardText.textContent = element.description;
  cardAllText.appendChild(cardText);

  //============================== PRIX =================================//

  const cardAllPrix = document.createElement("div");
  cardAllPrix.className = "block";
  cardAllText.appendChild(cardAllPrix);

  const cardPrix = document.createElement("a");
  cardPrix.className = "buttonAddMe";
  cardPrix.textContent = "Add me: " + element.Prix + "€";
  cardAllText.appendChild(cardPrix);

  //============================== Function ADD TO CART =================================//
  //function to add production to cart :
  const addingToCart = (e) => {
    if (!recapDivCartTotal.innerText.match("You've ordered for ")) {
      recapDivOrdersEmpty.textContent = "";
      const innerRecapDiv = document.createElement("div");
      const innerRecapImgLeft = document.createElement("img");
      const innerRecapDivRight = document.createElement("div");
      // const innerRecapDivButton = document.createElement("button");
      // innerRecapDivButton.textContent="X";
      const innerRecapDivRightTitle = document.createElement("h3");
      const innerRecapDivRightPrice = document.createElement("p");

      innerRecapDivRightTitle.classList.add("innerRecapDivRightTitle");
      innerRecapDiv.classList.add("innerRecapDiv");
      innerRecapDivRight.classList.add("innerRecapDivRight");
      innerRecapImgLeft.classList.add("innerRecapImgLeft");

      innerRecapImgLeft.src = element.img;
      innerRecapDivRightTitle.textContent = element.title;
      innerRecapDivRightPrice.textContent = element.Prix + "€";
      totalOrder += element.Prix;
      recapDivCartTotal.innerText = "Order here for: " + totalOrder + "€";

      recapDivCartTotal.classList.remove("orderDone");
      recapDivCartTotal.classList.remove("orderWrong");

      innerRecapDiv.appendChild(innerRecapImgLeft);
      innerRecapDiv.appendChild(innerRecapDivRight);
      // innerRecapDiv.appendChild(innerRecapDivButton);
      innerRecapDivRight.appendChild(innerRecapDivRightTitle);
      innerRecapDivRight.appendChild(innerRecapDivRightPrice);
      recapDivOrders.appendChild(innerRecapDiv);
    }
  };
  cardPrix.addEventListener("click", addingToCart);
}

const shipping = () => {
  if (totalOrder != 0) {
    document.querySelector(".shippingDiv").style.height = "400px";
    const timerDiv = document.createElement("div");
    recapDivCartTotal.innerText = "You've ordered for " + totalOrder + "€ !";
    recapDivCartTotal.classList.add("orderDone");
    recapDivCartTotal.classList.remove("orderWrong");
    recapDivCartTotal.disabled = true;
    recapDivCartButtons.appendChild(seeTimerShippingDiv);
    recapDivCartButtons.appendChild(makeANewOrder);
    window.location.href = "#timer";
  } else {
    recapDivCartTotal.innerText = "Your cart is empty !";
    recapDivCartTotal.classList.add("orderWrong");
  }
};

const closeTimer = () => {
  document.querySelector(".shippingDiv").style.height = "0px";
};
let secs = 1800;
const countDown = () => {
  let element = document.querySelector(".timer");

  setInterval(function () {
    let mins = Math.floor(secs / 60);
    let displaySec = secs - mins * 60;
    element.innerHTML = mins + " minutes and " + displaySec + " seconds";
    if (secs < 1) {
      element.innerHTML = "<h2>Your order has arrived</h2>";
    }
    secs--;
  }, 1000);
};

const NewOrder = () => {
  totalOrder = 0;
  secs = 1800;
  document.querySelector(".shippingDiv").style.height = "0px";
  recapDivOrders.innerHTML = "";
  recapDivOrdersEmpty.textContent = "Your Cart is currently empty !";
  recapDivOrders.appendChild(recapDivOrdersEmpty);
  recapDivCartTotal.innerText = "Your cart is empty !";
  recapDivCartTotal.classList.remove("orderDone");
  recapDivCartTotal.disabled = false;
  recapDivCartButtons.removeChild(seeTimerShippingDiv);
  recapDivCartButtons.removeChild(makeANewOrder);
};

recapDivCartTotal.addEventListener("click", shipping);
timerButton.addEventListener("click", closeTimer);
countDown();
seeTimerShippingDiv.addEventListener("click", shipping);
makeANewOrder.addEventListener("click", NewOrder);
/////////////////////////////  Fin Card   ////////////////////////////////////////////////////
//////////////////////////// Option de recherche ////////////////////////////////////////////

function filterPlat(information) {
  const results = [];

  for (let plat of collection) {
    if (
      plat.title.toLowerCase().match(information) ||
      plat.category.toLowerCase().match(information) ||
      plat.category2.toLowerCase().match(information) ||
      plat.description.toLowerCase().match(information) ||
      plat.PrixString.toLowerCase().match(information)
    ) {
      results.push(plat);
    }
  }

  const resultsDiv = document.querySelector("#collection_Filtrer"); //pour envoyé la nouvel collection avec le filtre dans une nouvel 'div' ligne(129 HTML)
  resultsDiv.innerHTML = "";
  SectionColonne.innerHTML = " ";

  for (let element of results /*option recherche*/) {
    const colonne = document.createElement("div");
    colonne.className = "card column is-one-quarter margin";
    resultsDiv.appendChild(colonne); //option recherche

    //============================== IMAGE =================================//

    const cardImg = document.createElement("div");
    cardImg.className = "card-image";
    colonne.appendChild(cardImg);

    const cardfig = document.createElement("figure");
    cardfig.className = "image is-4by3";
    cardImg.appendChild(cardfig);

    const image = document.createElement("img");
    image.src = element.img;
    cardfig.appendChild(image);

    //============================== TAG =================================//

    const cardCont = document.createElement("div");
    cardCont.className = "card-content";
    colonne.appendChild(cardCont);

    // const tag = document.createElement("span");
    // tag.className = "tag is-success";
    // tag.textContent = element.category;
    // cardCont.appendChild(tag);

    // const tag2 = document.createElement("span");
    // tag2.className = "tag is-danger";
    // tag2.textContent = element.category2;
    // cardCont.appendChild(tag2);

    //==================================== TITRE + Texte =====================================//

    const cardAllText = document.createElement("div");
    cardAllText.className = "content";
    cardCont.appendChild(cardAllText);

    const cardTitre = document.createElement("h2");
    cardTitre.className = "content";
    cardTitre.textContent = element.title;
    cardAllText.appendChild(cardTitre);

    const cardText = document.createElement("p");
    cardText.className = "content";
    cardText.textContent = element.description;
    cardAllText.appendChild(cardText);

    //============================== PRIX =================================//

    const cardAllPrix = document.createElement("div");
    cardAllPrix.className = "block";
    cardAllText.appendChild(cardAllPrix);

    const cardPrix = document.createElement("a");
    cardPrix.className = "button";
    cardPrix.textContent = "Add me: " + element.Prix + "€";
    cardAllText.appendChild(cardPrix);

    //============================== Function ADD TO CART =================================//
    //function to add production to cart :
    const addingToCart = (e) => {
      if (!recapDivCartTotal.innerText.match("You've ordered for ")) {
        recapDivOrdersEmpty.textContent = "";
        const innerRecapDiv = document.createElement("div");
        const innerRecapImgLeft = document.createElement("img");
        const innerRecapDivRight = document.createElement("div");
        // const innerRecapDivButton = document.createElement("button");
        // innerRecapDivButton.textContent="X";
        const innerRecapDivRightTitle = document.createElement("h3");
        const innerRecapDivRightPrice = document.createElement("p");

        innerRecapDivRightTitle.classList.add("innerRecapDivRightTitle");
        innerRecapDiv.classList.add("innerRecapDiv");
        innerRecapDivRight.classList.add("innerRecapDivRight");
        innerRecapImgLeft.classList.add("innerRecapImgLeft");

        innerRecapImgLeft.src = element.img;
        innerRecapDivRightTitle.textContent = element.title;
        innerRecapDivRightPrice.textContent = element.Prix + "€";
        totalOrder += element.Prix;
        recapDivCartTotal.innerText = "Order here for: " + totalOrder + "€";

        recapDivCartTotal.classList.remove("orderDone");
        recapDivCartTotal.classList.remove("orderWrong");

        innerRecapDiv.appendChild(innerRecapImgLeft);
        innerRecapDiv.appendChild(innerRecapDivRight);
        // innerRecapDiv.appendChild(innerRecapDivButton);
        innerRecapDivRight.appendChild(innerRecapDivRightTitle);
        innerRecapDivRight.appendChild(innerRecapDivRightPrice);
        recapDivOrders.appendChild(innerRecapDiv);

        // const remove =() => {
        //     recapDivOrders.remove(innerRecapDiv);
        // }

        // innerRecapDivButton.addEventListener("click", remove)
      }
    };

    cardPrix.addEventListener("click", addingToCart);
  }
}

document
  .querySelector("#recherche") //option recherche
  .addEventListener("keyup", (input) => {
    /* sélection des valeurs(keyup) entrer dans la barre de recherche(input) */
    filterPlat(input.target.value.toLowerCase());
  });
