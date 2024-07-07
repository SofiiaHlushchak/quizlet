function card(cardSelector) {
    const card = document.querySelector(cardSelector);
    const wordElement = document.querySelector("[data-word]");
    const translateElement = document.querySelector("[data-translate]");

    let currentIndex = 0;

    let words = JSON.parse(localStorage.getItem("words")) || [];

    function getFilteredItems() {
        let filteredWords = words.filter((word) => !word.remember);
        return filteredWords;
    }

    function displayWord(index) {
        let filteredWords = getFilteredItems();

        if (filteredWords.length === 0) {
            localStorage.clear();
            card.style.display = "none";
            document.querySelector("[data-modal]").classList.add("btn_main");
            document.querySelector(".card__controls").style.display = "none";
            return;
        }
        document.querySelector("[data-modal]").classList.remove("btn_main");
        wordElement.textContent = filteredWords[index].word;
        translateElement.textContent = filteredWords[index].translate;
    }

    function nextWord() {
        let filteredWords = getFilteredItems();
        currentIndex++;
        if (currentIndex >= filteredWords.length) {
            currentIndex = 0;
        }
        card.querySelector(".card__inner").classList.remove("is-flipped");
        displayWord(currentIndex);
    }

    card.addEventListener("click", function () {
        this.querySelector(".card__inner").classList.toggle("is-flipped");
    });

    document.querySelector("[data-remember]").addEventListener("click", () => {
        let filteredWords = getFilteredItems();
        filteredWords[currentIndex].remember = true;
        localStorage.setItem("words", JSON.stringify(words));
        nextWord();
    });

    document
        .querySelector("[data-not-remember]")
        .addEventListener("click", () => {
            nextWord();
        });

    displayWord(currentIndex);
}

export default card;
