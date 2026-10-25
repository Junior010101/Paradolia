const cardList = document.getElementById("card-list");

if (!localStorage.getItem("cardListData")) {
  localStorage.setItem("cardListData", JSON.stringify([]));
}

const receiveNewItem = (data) => {
  const { id, title, content } = data;

  let cardListData = JSON.parse(localStorage.getItem("cardListData")) || [];

  cardListData.push({ id, title, content });

  if (cardListData.length > 5) {
    cardListData.shift();
  }

  localStorage.setItem("cardListData", JSON.stringify(cardListData));

  updateCardList();
};

const updateCardList = () => {
  cardList.replaceChildren();

  let cardListData = JSON.parse(localStorage.getItem("cardListData")) || [];

  cardListData.forEach((card) => {
    const article = document.createElement("article");
    article.classList.add("motivational-feed__card");

    const header = document.createElement("header");
    header.classList.add("motivational-feed__card-header");

    const img = document.createElement("img");
    img.src = "./assets/images/paradolia-perfil.png";
    img.alt = "";
    img.classList.add("motivational-feed__card-avatar");
    img.setAttribute("aria-hidden", "true");
    img.width = 36;
    img.height = 36;

    const authorInfo = document.createElement("div");
    authorInfo.classList.add("motivational-feed__card-author-info");

    const authorSpan = document.createElement("span");
    authorSpan.classList.add("motivational-feed__card-author");
    authorSpan.textContent = "Paradôlia";

    const categorySpan = document.createElement("span");
    categorySpan.classList.add("motivational-feed__card-category");
    categorySpan.textContent = "Inspiração";

    authorInfo.appendChild(authorSpan);
    authorInfo.appendChild(categorySpan);

    header.appendChild(img);
    header.appendChild(authorInfo);

    const quote = document.createElement("h3");
    quote.classList.add("motivational-feed__card-quote");
    quote.textContent = card.title;

    const hr = document.createElement("hr");
    hr.classList.add("motivational-feed__card-divider");
    hr.setAttribute("aria-hidden", "true");

    const body = document.createElement("p");
    body.classList.add("motivational-feed__card-body");
    body.textContent = card.content;

    article.appendChild(header);
    article.appendChild(quote);
    article.appendChild(hr);
    article.appendChild(body);

    cardList.append(article);
  });
};

updateCardList();
