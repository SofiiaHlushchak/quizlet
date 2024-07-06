function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((item) => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let wordElement = document.querySelector("[name='word']");
            let translateElement = document.querySelector("[name='translate']");

            let newWordObj = {
                word: wordElement.value,
                translate: translateElement.value,
            };

            let existingWords = localStorage.getItem("words");
            let arrOfExistingWords = existingWords
                ? JSON.parse(existingWords)
                : [];

            arrOfExistingWords.push(newWordObj);

            localStorage.setItem("words", JSON.stringify(arrOfExistingWords));

            // const stringifiedObj = JSON.stringify(obj);

            // localStorage.setItem("words", stringifiedObj);

            // const statusMessage = document.createElement("img");
            // statusMessage.src = message.loading;
            // statusMessage.style.cssText = `
            //     display: block;
            //     margin: 0 auto;
            // `;

            // form.insertAdjacentElement("afterend", statusMessage);

            // const formData = new FormData(form);

            // const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // postData("http://localhost:3000/requests", json)
            //     .then((data) => {
            //         console.log(data);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     })
            //     .catch(() => showThanksModal(message.failure))
            //     .finally(() => form.reset());
        });
    }
}
export default forms;
