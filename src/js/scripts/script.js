//Like
{
  let icon_heart_active = "src/assets/icon-heart-active.svg";
  let icon_heart = "src/assets/icon-heart.svg";
  const hearts = document.querySelectorAll(".icon-heart");

  hearts.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.getAttribute("src") == "src/assets/icon-heart.svg") {
        item.setAttribute("src", icon_heart_active);
      } else {
        item.setAttribute("src", icon_heart);
      }
    });
  });
}

//Filtro
{
  const searchBar = document.querySelector("#search-bar");
  const cards = document.querySelectorAll(".card-information");

  const search = () => {
    for (let card of cards) {
      const article = card.querySelector(".informations");
      console.log(article);
      const title = article.querySelector("h2").textContent.toLowerCase();
      if (searchBar.value != "") {
        if (title.includes(searchBar.value.toLowerCase())) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      } else {
        for (let card of cards) {
          card.style.display = "flex";
        }
      }
    }
  };
}
