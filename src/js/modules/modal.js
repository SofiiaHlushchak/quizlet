const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.addEventListener("click", () => openModal(modalSelector));

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });
}

export default modal;
export { closeModal, openModal };
