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
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])("form");
    (0,_modules_card__WEBPACK_IMPORTED_MODULE_2__["default"])(".card");
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map