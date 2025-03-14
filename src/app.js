window.onload = function() {
  let cardNumber = [ "As","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let suit = ["Spades", "Diamonds","Hearts","Clubs"]
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuit = Math.floor(Math.random() * suit.length);
  let finalSuit = suit[randomSuit]

  
}