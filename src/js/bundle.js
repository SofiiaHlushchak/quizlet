/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/card.js":
/*!****************************!*\
  !*** ./js/modules/card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);


/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalSelector);
            window.location.reload();
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card */ "./js/modules/card.js");




document.addEventListener("DOMContentLoaded", () => {
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-modal]", ".modal");
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])("form", ".modal");
    (0,_modules_card__WEBPACK_IMPORTED_MODULE_2__["default"])(".card");
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map