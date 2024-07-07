const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    document.querySelector("[data-modal]").classList.remove("btn_main");
    document.querySelector("[data-modal]").classList.add("btn_not-active");
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    document.querySelector("[data-modal]").classList.add("btn_main");
    document.querySelector("[data-modal]").classList.remove("btn_not-active");
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
