function getValue(id) {
  return document.getElementById(id).value;
}

function postValue(id, message) {
  document.getElementById(id).innerHTML = message;
}

function getPriceOfPastila(typePastila) {
  let price;
  switch (typePastila) {
    case "apple":
      price = 280;
      break
    case "apple-strawberry":
      price = 280;
      break   
    case "plum with walnut":
      price = 320;
      break
    case "lithuanian apple cheese":
      price = 320;
      break
    case "lithuanian apple cheese with walnut":
      price = 350;
      break   
    default:
      break
  }
  return price;
}

function showPrice() { 
  const fixedPrice = getPriceOfPastila(getValue("type"));
  if (fixedPrice) {
    document.getElementById("price").value = fixedPrice;
  } else {
    document.getElementById("price").value = "";
  }
  return fixedPrice;
}

function calcTotalPrice() {
  return calcPrice(showPrice(), +getValue("number"));
}

function render() {
  if (+getValue("number") && showPrice()) {
    const text = `Ціна даного виду пастили складе ${calcTotalPrice()} грн.`;
    postValue("result", text);    
  } else { 
    const errorMessage = "Заповніть, будь-ласка, всі поля!";
    postValue("result", errorMessage);
  }
}
