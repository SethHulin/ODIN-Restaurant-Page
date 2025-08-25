/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact () {\n    const content = document.getElementById('content');\n\n    const contact = document.createElement('section')\n    contact.id = \"contact\";\n\n    const name = document.createElement('h3');\n    const address = document.createElement('address');\n    const phoneNumber = document.createElement('a');\n\n    name.textContent = \"My Restaurant\";\n    contact.appendChild(name);\n\n    address.textContent = \"1234 Main Street\";\n    contact.appendChild(address);\n\n    phoneNumber.textContent = \"(337) 552-5738\";\n    phoneNumber.href = \"tel:3375525738\";\n    contact.appendChild(phoneNumber);\n\n    content.appendChild(contact);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0ICgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IFwiTXkgUmVzdGF1cmFudFwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjM0IE1haW4gU3RyZWV0XCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCIoMzM3KSA1NTItNTczOFwiO1xuICAgIHBob25lTnVtYmVyLmhyZWYgPSBcInRlbDozMzc1NTI1NzM4XCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome () {\n    const content = document.getElementById('content');\n\n\n\n\n\n    const heading = document.createElement('h1');\n    const blurb = document.createElement('p');\n\n    heading.textContent = \"My Restaurant\"\n    blurb.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.\"\n\n    content.appendChild(heading);\n    content.appendChild(blurb);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjs7Ozs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUgKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cblxuXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk15IFJlc3RhdXJhbnRcIlxuICAgIGJsdXJiLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVmVzdGlidWx1bSB0b3J0b3IgcXVhbSwgZmV1Z2lhdCB2aXRhZSwgdWx0cmljaWVzIGVnZXQsIHRlbXBvciBzaXQgYW1ldCwgYW50ZS4gRG9uZWMgZXUgbGliZXJvIHNpdCBhbWV0IHF1YW0gZWdlc3RhcyBzZW1wZXIuIEFlbmVhbiB1bHRyaWNpZXMgbWkgdml0YWUgZXN0LiBNYXVyaXMgcGxhY2VyYXQgZWxlaWZlbmQgbGVvLlwiXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmx1cmIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu () {\n    const content = document.getElementById('content');\n    const menuItems = [chicken , salmon, steak]\n\n    menuItems.forEach(menuItem => {\n        const menuItemElement = document.createElement('div');\n\n        const itemName = document.createElement('h3');\n        const itemDescription = document.createElement('p');\n        const itemPrice = document.createElement('p');\n\n        itemName.textContent = menuItem.name;\n        menuItemElement.appendChild(itemName);\n\n        itemDescription.textContent = menuItem.description\n        menuItemElement.appendChild(itemDescription)\n\n        itemPrice.textContent = menuItem.price;\n        menuItemElement.appendChild(itemPrice)\n\n\n\n        content.appendChild(menuItemElement);\n    })\n}\n\nconst chicken = createMenuItem(\"Grilled Chicken\" , \"Grilled Chicken with a side of lettuce\" , \"$12.99\")\nconst salmon = createMenuItem(\"Baked Salmon\" , \"Baked Salmon with a side of lettuce\" , \"$15.99\")\nconst steak = createMenuItem(\"8oz Filet Mignon\" , \"8oz Filet Mignon with a side of lettuce\" , \"$21.99\")\n\n\nfunction createMenuItem (name , description , price) {\n    return {\n        name,\n        description,\n        price,\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUgKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtjaGlja2VuICwgc2FsbW9uLCBzdGVha11cblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLm5hbWU7XG4gICAgICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudUl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbilcblxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBtZW51SXRlbS5wcmljZTtcbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1QcmljZSlcblxuXG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbUVsZW1lbnQpO1xuICAgIH0pXG59XG5cbmNvbnN0IGNoaWNrZW4gPSBjcmVhdGVNZW51SXRlbShcIkdyaWxsZWQgQ2hpY2tlblwiICwgXCJHcmlsbGVkIENoaWNrZW4gd2l0aCBhIHNpZGUgb2YgbGV0dHVjZVwiICwgXCIkMTIuOTlcIilcbmNvbnN0IHNhbG1vbiA9IGNyZWF0ZU1lbnVJdGVtKFwiQmFrZWQgU2FsbW9uXCIgLCBcIkJha2VkIFNhbG1vbiB3aXRoIGEgc2lkZSBvZiBsZXR0dWNlXCIgLCBcIiQxNS45OVwiKVxuY29uc3Qgc3RlYWsgPSBjcmVhdGVNZW51SXRlbShcIjhveiBGaWxldCBNaWdub25cIiAsIFwiOG96IEZpbGV0IE1pZ25vbiB3aXRoIGEgc2lkZSBvZiBsZXR0dWNlXCIgLCBcIiQyMS45OVwiKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtIChuYW1lICwgZGVzY3JpcHRpb24gLCBwcmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBwcmljZSxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst homeButton = document.getElementById('home-button')\nconst menuButton = document.getElementById('menu-button')\nconst contactButton = document.getElementById('contact-button')\nconst activeSection = document.querySelector('.active');\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nhomeButton.addEventListener('click' , ()=>{\n\n    clearContent();\n    setActive(homeButton);\n\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nmenuButton.addEventListener('click' , ()=>{\n\n\n    clearContent();\n    setActive(menuButton);\n\n\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\ncontactButton.addEventListener('click' , ()=>{\n    clearContent();\n    setActive(contactButton);\n\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n\n\nfunction clearContent () {\n    const content = document.getElementById('content');\n    content.innerHTML = \"\";\n}\n\nfunction setActive (button) {\n    const activeSection = document.querySelector('.active');\n    if (activeSection) {\n        activeSection.classList.remove('active');\n    }\n    button.classList.add('active');\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzdGF1cmFudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlDO0FBQ0E7QUFDTTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxvREFBUTs7QUFFUjs7QUFFQTtBQUNBOzs7QUFHQSxJQUFJLG9EQUFRO0FBQ1osQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTs7O0FBR0EsSUFBSSxvREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLElBQUksdURBQVc7QUFDZixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3Jlc3RhdXJhbnQuanM/NjZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idXR0b24nKVxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ1dHRvbicpXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnV0dG9uJylcbmNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG5cblxuXG5sb2FkSG9tZSgpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpPT57XG5cbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBzZXRBY3RpdmUoaG9tZUJ1dHRvbik7XG5cblxuICAgIGxvYWRIb21lKCk7XG59KVxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpPT57XG5cblxuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIHNldEFjdGl2ZShtZW51QnV0dG9uKTtcblxuXG4gICAgbG9hZE1lbnUoKTtcbn0pXG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCk9PntcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBzZXRBY3RpdmUoY29udGFjdEJ1dHRvbik7XG5cbiAgICBsb2FkQ29udGFjdCgpO1xufSlcblxuXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmUgKGJ1dHRvbikge1xuICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgYWN0aXZlU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/restaurant.js\n\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/restaurant.js");
/******/ 	
/******/ })()
;