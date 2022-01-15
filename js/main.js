let getValue = id => document.getElementById(id).value;

let postValue = (id, message) => document.getElementById(id).innerHTML = message;

let getPriceOfPastila = typePastila => {
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

let showPrice = () => {
  const fixedPrice = getPriceOfPastila(getValue("type"));
  if (fixedPrice) {
    document.getElementById("price").value = fixedPrice;
  } else {
    document.getElementById("price").value = "";
  }
  return fixedPrice;
}

let createText = totalCount => `Ціна даного виду пастили складе ${totalCount} грн.`;

let render = () => {
  if (+getValue("number") && showPrice()) {
    postValue("result", createText(calcPrice(showPrice(), +getValue("number"))));  
  } else { 
    const errorMessage = "Заповніть, будь-ласка, всі поля!";
    postValue("result", errorMessage);
  }
}

