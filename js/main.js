function price() {
  const type = document.getElementById('type').value;
  let price;
  switch (type) {
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

  if (price) {
    document.getElementById('price').value = price;
  } else {
    document.getElementById('price').value = ""
  }
}

function calcPrice() {
  const fixedPrice = document.getElementById('price').value;
  const theRightAmount = document.getElementById('number').value;
  
  if (theRightAmount && fixedPrice) {
    const totalPrice = (fixedPrice/1000)*theRightAmount
    const text = `Ціна даного виду пастили складе ${totalPrice} грн.`;
    document.getElementById('result').innerHTML = text;    
  } else { 
    const errorMessage = "Заповніть, будь-ласка, всі поля!";
    document.getElementById('result').innerHTML = errorMessage;
  } 
}






