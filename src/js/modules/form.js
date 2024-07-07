import { closeModal } from "./modal";
function forms(formSelector, modalSelector) {
    const forms = document.querySelectorAll(formSelector);
    const addWordPairButton = document.querySelector("[data-add-new-word]");

    forms.forEach((item) => {
        bindPostData(item);
        addNewInputs(item);
    });

    function addNewInputs(form) {
        addWordPairButton.addEventListener("click", () => {
            const newWordPair = document.createElement("div");
            newWordPair.classList.add("word-pair");
            newWordPair.innerHTML = `
                    <input type="text" name="word" placeholder="Введіть слово" class="modal__input">
                    <input type="text" name="translate" placeholder="Введіть переклад" class="modal__input">
                `;
            form.insertBefore(
                newWordPair,
                form.querySelector(".btn")
            );
        });
    }

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let newWords = [];

            form.querySelectorAll(".word-pair").forEach((item) => {
                let wordElement = item.querySelector("[name='word']");
                let translateElement =
                    document.querySelector("[name='translate']");

                newWords.push({
                    word: wordElement.value,
                    translate: translateElement.value,
                    remember: false,
                });
            });

            let existingWords = localStorage.getItem("words");
            let arrOfExistingWords = existingWords
                ? JSON.parse(existingWords)
                : [];

            arrOfExistingWords.push(...newWords);

            localStorage.setItem("words", JSON.stringify(arrOfExistingWords));
            form.reset();
            closeModal(modalSelector);
            window.location.reload();
        });
    }
}
export default forms;
