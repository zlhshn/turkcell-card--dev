// ? Ödev-1_Oluşturduğumuz paket kartları üstüne fare imlecini getirdiğimizde paket fiyatının üstü çizilsin ve altına fiyatın yarı fiyatı yazılsın ve hemen yanına %50 ibaresi eklensin.

const cards = document.querySelectorAll(".card-container");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const price = card.querySelector(".price");

    if (price) {
      price.style.textDecoration = "line-through";
      discountPrice = price.textContent / 2;
      const newPrice = document.createElement("p");
      newPrice.textContent = `${discountPrice}`;
      newPrice.className = "discount-price";
      price.parentNode.append(newPrice);
      const tl = document.createElement("sup");
      tl.textContent = "TL/AY";
      newPrice.append(tl);
      const discount = document.createElement("span");
      discount.textContent = "(%50)";
      discount.style.color = "red";
      discount.style.paddingLeft = "5px";
      newPrice.append(discount);
    }

    card.addEventListener("mouseout", () => {
      const price = card.querySelector(".price");

      if (price) {
        price.style.textDecoration = "none";
        const discountPrice = price.parentNode.querySelector(".discount-price");
        discountPrice.remove();
      }
    });
  });
});

// ? Ödev-2_Kartlarda bulunan seç butonuna tıkladığımızda kartın tamamı yeşil renk olsun ve seç butonu yazısı ‘Seçildi olsun’. Tekrar tıkladığımızda ise kart ve buton önceki haline dönsün. Dilerseniz farklı bir kartın seç butonuna tıklanıldığında da diğer seçili kartın eski haline dönmesini de sağlayabilirsiniz.

cards.forEach(function (card) {
  const button = card.querySelector(".card-body-button button");
  const cardBody = card.querySelector(".card");

  button.addEventListener("click", () => {
    if (button.innerText === "Seçildi") {
      button.innerText = "Seç";
      cardBody.style.backgroundImage = "";
      return;
    }

    cards.forEach(function (otherCard) {
      const otherButton = otherCard.querySelector(".card-body-button button");
      const otherCardBody = otherCard.querySelector(".card");

      otherButton.innerText = "Seç";
      otherCardBody.style.backgroundImage = "";
    });

    button.innerText = "Seçildi";
    cardBody.style.backgroundImage =
      "linear-gradient(45deg, #4caf50, #81c784, #a5d6a7)";
  });
});

// ? Ödev-3_kullanıcı klavyeden 1 - 6 arasındaki tuşlardan birine basarsa karşılık gelen kart seçilsin ve seç butonuna tıklanıldığındaki aynı işlem yapılsın.

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key >= "1" && key <= "6") {
    const index = key - "1";
    if (index < cards.length) {
      const button = cards[index].querySelector(".card-body-button button");
      button.click();
    }
  }
});
