/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("\nvar todoItems = \"todoItems\";\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var inputBox = document.getElementById(\"text\");\n    var itemsBox = document.getElementById(\"items\");\n    inputBox === null || inputBox === void 0 ? void 0 : inputBox.addEventListener(\"keyup\", function (e) {\n        if (e.key === \"Enter\" && inputBox.value.trim() !== \"\") {\n            var value = inputBox.value.trim();\n            var todoObj = [];\n            if (localStorage.getItem(todoItems)) {\n                todoObj = JSON.parse(localStorage.getItem(todoItems));\n            }\n            var todoInfo = { name: value, status: false };\n            todoObj.push(todoInfo);\n            localStorage.setItem(todoItems, JSON.stringify(todoObj));\n            inputBox.value = \"\";\n            showTodos();\n        }\n    });\n    function showTodos() {\n        var todoObj = [];\n        if (localStorage.getItem(todoItems)) {\n            todoObj = JSON.parse(localStorage.getItem(todoItems));\n        }\n        var html = \"\";\n        todoObj.forEach(function (element, index) {\n            html += \"<div class=\\\"item\\\">\\n        <input type=\\\"checkbox\\\" class=\\\"check-box\\\" onclick=\\\"updateStatus(this)\\\" id=\\\"\".concat(index, \"\\\" \").concat(element.status ? \"checked\" : \"\", \">\\n        <h3 class=\\\"taskDetail \").concat(element.status ? \"done\" : \"\", \"\\\">\").concat(element.name, \"</h3>\\n        <i class=\\\"fa-solid fa-trash options\\\" onclick=\\\"deleteTodo(\").concat(index, \")\\\"></i>\\n      </div>\");\n        });\n        if (itemsBox) {\n            itemsBox.innerHTML = html;\n        }\n    }\n    window.updateStatus = function (selectedTodo) {\n        var h3 = selectedTodo.nextElementSibling;\n        var toDos = JSON.parse(localStorage.getItem(todoItems));\n        toDos[selectedTodo.id].status = selectedTodo.checked;\n        if (selectedTodo.checked) {\n            h3.classList.add(\"done\");\n        }\n        else {\n            h3.classList.remove(\"done\");\n        }\n        localStorage.setItem(todoItems, JSON.stringify(toDos));\n        showTodos();\n    };\n    window.deleteTodo = function (id) {\n        var toDos = JSON.parse(localStorage.getItem(todoItems));\n        toDos.splice(id, 1);\n        localStorage.setItem(todoItems, JSON.stringify(toDos));\n        showTodos();\n    };\n    showTodos();\n});\n\n\n//# sourceURL=webpack://to-do-app/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;