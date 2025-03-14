window.onload = function() {
  let cardNumber = [ "As","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let suit = ["Spades", "Diamonds","Hearts","Clubs"]
  let numberShowed = document.getElementById('cardContent');
  let suitShowed = document.getElementById('theCard');
  let button = document.getElementById('button');
  
  function getRandomCard(){
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuit = Math.floor(Math.random() * suit.length);
  let finalSuit = suit[randomSuit]
  return{randomCardNumber, finalSuit}
  }

  
  function getSuitClass(suit) {
    switch (suit) {
      case "Spades":
        return "suit-spades";
      case "Diamonds":
        return "suit-diamonds";
      case "Hearts":
        return "suit-hearts";
      case "Clubs":
        return "suit-clubs";
    }
  }

  function updateCard() {
    let { randomCardNumber, finalSuit } = getRandomCard();
    numberShowed.innerHTML = cardNumber[randomCardNumber];
    suitShowed.classList.remove("suit-spades", "suit-diamonds", "suit-hearts", "suit-clubs");
    suitShowed.classList.add(getSuitClass(finalSuit));
  }
  updateCard();

  button.addEventListener('click', updateCard);


}
