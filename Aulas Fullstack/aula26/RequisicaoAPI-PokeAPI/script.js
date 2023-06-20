const cardsContainer = document.querySelector(".cards-container");
cardsContainer.innerHTML = "";

for (let i = 1; i <= 649; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((res) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const img = document.createElement("img");
      img.src = res.sprites.other.dream_world.front_default;

      const title = document.createElement("h1");
      title.innerHTML = res.name;

      card.appendChild(img);
      card.appendChild(title);
      cardsContainer.appendChild(card);
    });
}
