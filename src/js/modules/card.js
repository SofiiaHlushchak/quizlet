// const card = document.querySelector(".card");

// card.addEventListener("click", function () {
//     this.querySelector(".card__inner").classList.toggle("is-flipped");
// });

function card(cardSelector) {
    const card = document.querySelector(cardSelector);

    function showRandonWord(localStorage) {
        const data = JSON.parse(localStorage);
        const randomElement = data[Math.floor(Math.random() * data.length)];
        const word = document.querySelector("[data-word]");
        const translate = document.querySelector("[data-translate]");

        word.textContent = randomElement.word;
        translate.textContent = randomElement.translate;
    }

    showRandonWord(localStorage.getItem("words"));

    card.addEventListener("click", function () {
        this.querySelector(".card__inner").classList.toggle("is-flipped");
    });
}

export default card;
