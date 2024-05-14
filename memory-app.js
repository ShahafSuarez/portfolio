document.addEventListener("DOMContentLoaded", () => {
  //list all card options
  const cardArray = [
    {
      name: "vscode",
      img: "images/memory-game/vscode.png",
    },
    {
      name: "css",
      img: "images/memory-game/css.png",
    },
    {
      name: "bug",
      img: "images/memory-game/bug.png",
    },
    {
      name: "incognito",
      img: "images/memory-game/incognito.png",
    },
    {
      name: "github",
      img: "images/memory-game/github.png",
    },
    {
      name: "react",
      img: "images/memory-game/react.png",
    },
    {
      name: "wordpress",
      img: "images/memory-game/wordpress.png",
    },
    {
      name: "js",
      img: "images/memory-game/js.png",
    },
    {
      name: "html",
      img: "images/memory-game/html.png",
    },
    {
      name: "vscode",
      img: "images/memory-game/vscode.png",
    },
    {
      name: "css",
      img: "images/memory-game/css.png",
    },
    {
      name: "github",
      img: "images/memory-game/github.png",
    },
    {
      name: "react",
      img: "images/memory-game/react.png",
    },
    {
      name: "js",
      img: "images/memory-game/js.png",
    },
    {
      name: "wordpress",
      img: "images/memory-game/wordpress.png",
    },
    {
      name: "html",
      img: "images/memory-game/html.png",
    },
    {
      name: "incognito",
      img: "images/memory-game/incognito.png",
    },
    {
      name: "bug",
      img: "images/memory-game/bug.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/memory-game/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/memory-game/blank.png");
      cards[optionTwoId].setAttribute("src", "images/memory-game/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/memory-game/white.png");
      cards[optionTwoId].setAttribute("src", "images/memory-game/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/memory-game/blank.png");
      cards[optionTwoId].setAttribute("src", "images/memory-game/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "You found them all!";
    }
  }

  //flip card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
