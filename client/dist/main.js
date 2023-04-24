/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../imgs/headerBackground.png */ \"./src/imgs/headerBackground.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../imgs/image 13.png */ \"./src/imgs/image 13.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../imgs/gluxie-stvorki.jpg */ \"./src/imgs/gluxie-stvorki.jpg\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800&family=Hind+Siliguri:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;1,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes wave {\\n  from {\\n    transform: scale(1);\\n    opacity: 1;\\n  }\\n  to {\\n    transform: scale(20);\\n    opacity: 0;\\n  }\\n}\\n@keyframes background-color-animation {\\n  from {\\n    background-color: #1BB2DE;\\n  }\\n  to {\\n    background-color: #56bedd;\\n  }\\n}\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 400;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\";\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n.mobile_menu {\\n  position: absolute;\\n  background: #02303F;\\n  display: flex;\\n  visibility: hidden;\\n  flex-direction: column;\\n  width: 100%;\\n  color: #fff;\\n  text-align: center;\\n  z-index: 10;\\n  gap: 2rem;\\n  transition: all 0.5s ease-in-out;\\n}\\n.mobile_menu a {\\n  color: #fff;\\n  font-size: 20px;\\n}\\n.mobile_menu nav {\\n  padding: 2rem;\\n}\\n.mobile_menu ul {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.mobile_menu footer {\\n  background: #1BB2DE;\\n  padding: 1rem 0%;\\n}\\n.mobile_menu footer p {\\n  font-size: 13px;\\n}\\n.mobile_menu footer h2 {\\n  margin-top: 1vmin;\\n  font-size: 35px;\\n}\\n\\n.block1 {\\n  position: relative;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  color: #02303F;\\n  padding-bottom: 2rem;\\n}\\n.block1::before {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  position: absolute;\\n  background: white;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0.5;\\n}\\n.block1__header {\\n  position: relative;\\n  padding: 1rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  border-bottom: 1px solid #A0A0A0;\\n  z-index: 20;\\n}\\n.block1__curtains {\\n  position: absolute;\\n  display: inline-block;\\n  background-color: #02303F;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  transition: all 0.1s ease-in-out;\\n  z-index: 1;\\n}\\n.block1__logo {\\n  width: 7rem;\\n  z-index: 1;\\n}\\n.block1__contacts {\\n  position: absolute;\\n  display: none;\\n  flex-direction: row;\\n  right: 15%;\\n  gap: 2rem;\\n  z-index: 0;\\n}\\n.block1__contacts li {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: right;\\n}\\n.block1__contacts h5 {\\n  font-size: 13px;\\n  color: #fff;\\n}\\n.block1__contacts p {\\n  font-size: 15px;\\n}\\n.block1__hamburger {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 1.8rem;\\n  height: 1.4rem;\\n  background: transparent;\\n  padding: 0;\\n  border: none;\\n  transition: all 0.5s ease-in-out;\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.block1__hamburger-item {\\n  position: relative;\\n  width: 100%;\\n  height: 0.2rem;\\n  background-color: #000;\\n  transition: all 0.2s ease-in-out;\\n}\\n.block1__hamburger::before {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  position: relative;\\n  width: 100%;\\n  height: 0.2rem;\\n  background-color: #000;\\n  transition: all 0.1s ease-in-out;\\n}\\n.block1__hamburger::after {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  position: relative;\\n  width: 100%;\\n  height: 0.2rem;\\n  background-color: #000;\\n  transition: all 0.3s ease-in-out;\\n}\\n.block1 h1 {\\n  position: relative;\\n  text-align: center;\\n  font-size: 30px;\\n  font-weight: 500;\\n  z-index: 1;\\n  margin: 4rem 8% 0;\\n}\\n.block1__content {\\n  width: 100%;\\n  padding: 1rem;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: auto auto auto auto;\\n  gap: 1rem;\\n}\\n.block1__content li {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  gap: 1rem;\\n  z-index: 1;\\n}\\n.block1__content h3 {\\n  font-size: 28px;\\n  font-weight: 500;\\n  width: 30%;\\n}\\n.block1__content p {\\n  font-size: 15px;\\n  width: 25%;\\n}\\n.block1 a {\\n  margin: 1rem;\\n  width: 90%;\\n  padding: 1rem 1%;\\n  font-size: 15px;\\n}\\n\\n.open {\\n  visibility: visible;\\n}\\n.open .block1__hamburger div {\\n  background: #fff;\\n}\\n.open .block1__hamburger::before {\\n  background: #fff;\\n}\\n.open .block1__hamburger::after {\\n  background: #fff;\\n}\\n\\n.block2 {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.block2__sections {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  margin: 1rem;\\n  width: 100%;\\n  gap: 2rem;\\n}\\n.block2 button[show] {\\n  width: 90%;\\n}\\n.block2 h3 {\\n  font-size: 21px;\\n  font-weight: 400;\\n  padding: 1rem 1rem;\\n}\\n.block2 ul {\\n  margin-top: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.block2 li {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin: 0 1rem;\\n}\\n.block2 li p {\\n  color: #929292;\\n  font-size: 14px;\\n}\\n.block2 li p:nth-child(2) {\\n  color: #1BB2DE;\\n}\\n.block2 li:nth-child(5) {\\n  border-top: 1px solid #B9B9B9;\\n  padding-top: 1rem;\\n}\\n.block2 li:nth-child(5) p:nth-child(2) {\\n  font-size: 18px;\\n}\\n.block2__item {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.block2__link {\\n  display: inline-block;\\n  width: 100%;\\n}\\n.block2__btn {\\n  border: 1px solid #02303F;\\n  font-size: 19px;\\n  padding: 1rem;\\n}\\n\\n.block3 {\\n  background: #1BB2DE;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-position: bottom;\\n  color: #fff;\\n  padding: 2rem 1rem 2rem;\\n}\\n.block3 h2 {\\n  text-align: center;\\n}\\n.block3 form {\\n  margin-top: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.block3 form input {\\n  font-size: 15px;\\n}\\n.block3 form button {\\n  font-size: 15px;\\n  background-color: #02303F;\\n  color: #fff;\\n}\\n\\n.block4 {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n.block4 h2 {\\n  margin: 0 2rem;\\n}\\n.block4 ol {\\n  list-style: decimal;\\n  margin-left: 3rem;\\n  margin-right: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.block4 li::marker {\\n  color: #1BB2DE;\\n  font-size: 26px;\\n}\\n.block4 h3 {\\n  color: #1BB2DE;\\n  font-size: 26px;\\n}\\n.block4 p {\\n  color: #727272;\\n}\\n\\n.block6 {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n.block6 section {\\n  position: absolute;\\n  padding: 2rem;\\n  display: grid;\\n  grid-template-columns: 25% 75%;\\n  row-gap: 1rem;\\n  border: 1px solid #B9B9B9;\\n  margin: 1rem;\\n  transition: all 0.3s ease-in-out;\\n  overflow: hidden;\\n}\\n.block6__img {\\n  position: relative;\\n  position: relative;\\n  width: fit-content;\\n}\\n.block6__img img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.block6 h4 span {\\n  color: #1BB2DE;\\n}\\n.block6 p {\\n  grid-column: 1/2 span;\\n}\\n.block6__controlls {\\n  margin-top: 2rem;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 2rem;\\n  gap: 0.5rem;\\n}\\n.block6__controlls a {\\n  color: #1BB2DE;\\n  border: 1px solid #1BB2DE;\\n  padding: 1rem 2rem;\\n  height: 100%;\\n}\\n.block6__btn {\\n  color: #1BB2DE;\\n  border: 1px solid #1BB2DE;\\n  height: 53px;\\n}\\n.block6__slider {\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  overflow: hidden;\\n}\\n\\n.block7 {\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  background-image: linear-gradient(to top, rgb(255, 255, 255), #ffffff, rgba(255, 255, 255, 0)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  margin: 0 1rem;\\n  padding-top: 4rem;\\n  gap: 2rem;\\n  z-index: 2;\\n}\\n.block7 h2 {\\n  margin-top: 4rem;\\n  z-index: 2;\\n}\\n.block7 h4 {\\n  font-size: 20px;\\n  z-index: 2;\\n}\\n.block7 p[main-p] {\\n  text-align: center;\\n  line-height: 150%;\\n  z-index: 2;\\n}\\n.block7 section {\\n  margin: 0 25%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1rem;\\n  z-index: 2;\\n}\\n.block7 section p {\\n  text-align: center;\\n  color: #727272;\\n  z-index: 2;\\n}\\n\\n.block8 {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  gap: 1rem;\\n}\\n.block8 p {\\n  font-size: 17px;\\n  margin: 0 1rem;\\n  line-height: 150%;\\n}\\n.block8 h2 {\\n  margin: 2rem 0 1rem 0;\\n}\\n.block8 ul {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin: 2rem 1rem;\\n  row-gap: 1rem;\\n}\\n.block8 ul h3 {\\n  color: #1BB2DE;\\n  font-size: 30px;\\n}\\n\\n.block9 {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n.block9 section {\\n  margin: 0 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.block9 h3 {\\n  font-size: 20px;\\n  font-weight: 500;\\n}\\n.block9__slider_desktop {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n\\n.block10 {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 1rem;\\n  gap: 2rem;\\n}\\n.block10__team {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr 1fr;\\n  row-gap: 2rem;\\n}\\n.block10__team section {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.block10__team section p {\\n  margin-top: 0.5rem;\\n  color: #02303F;\\n}\\n.block10-img {\\n  margin-bottom: 1rem;\\n}\\n\\n.sectificats {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  align-items: center;\\n  gap: 2rem;\\n}\\n.sectificats__slider {\\n  position: relative;\\n  grid-column: 1/span 2;\\n  transition: all 0.3s ease-in-out;\\n  overflow: hidden;\\n}\\n.sectificats-item {\\n  position: absolute;\\n  transition: all 0.3s ease-in-out;\\n}\\n.sectificats__controll {\\n  margin-right: 1rem;\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 0.5rem;\\n}\\n.sectificats-btn {\\n  border: 1px solid #1BB2DE;\\n  padding: 0.5rem;\\n  color: #1BB2DE;\\n}\\n\\n.footer {\\n  background-color: #151618;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  padding: 2rem 0 2rem 0;\\n  color: #fff;\\n  gap: 3rem;\\n}\\n.footer h4[sub-head] {\\n  color: #676767;\\n  margin-bottom: 0.5rem;\\n}\\n.footer a {\\n  color: #fff;\\n  font-size: 16px;\\n}\\n.footer a:hover {\\n  display: inline-block;\\n  color: #1BB2DE;\\n  transform: scale(1.1, 1.1);\\n}\\n.footer img {\\n  width: 40%;\\n}\\n.footer ul {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n.footer li[head] {\\n  font-size: 18px;\\n  margin-bottom: 1rem;\\n  color: #676767;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4rem;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 3rem;\\n  margin: 0 1rem;\\n}\\n\\nh2[section] {\\n  font-size: 27px;\\n  font-weight: 400;\\n  text-align: center;\\n  color: #676767;\\n}\\nh2[section] span {\\n  color: #1BB2DE;\\n}\\n\\nh3 {\\n  font-size: 20px;\\n}\\n\\nbutton {\\n  border: none;\\n  padding: 1rem;\\n  cursor: pointer;\\n}\\n\\ninput {\\n  border: none;\\n  outline: none;\\n  padding: 1rem;\\n}\\n\\ndiv[img] {\\n  position: relative;\\n  width: 100%;\\n  aspect-ratio: 3/2;\\n}\\ndiv[img] img {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\na {\\n  color: #000;\\n  text-decoration: none;\\n  transition: all 0.1s ease-out;\\n}\\n\\na[main-btn] {\\n  background-color: #1BB2DE;\\n  border: none;\\n  text-align: center;\\n  padding: 1rem 1%;\\n  color: #fff;\\n  transition: all 0.3s ease-in-out;\\n  cursor: pointer;\\n}\\n\\na[wave] {\\n  position: relative;\\n  overflow: hidden;\\n}\\na[wave]::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: inline-block;\\n  background-color: transparent;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 100;\\n}\\na[wave]:hover {\\n  animation: background-color-animation 1s linear;\\n  background-color: #56bedd;\\n}\\n\\np {\\n  font-size: 17px;\\n}\\n\\n.wave {\\n  position: absolute;\\n  background: #fff;\\n  width: 10px;\\n  aspect-ratio: 1/1;\\n  border-radius: 50%;\\n  animation: wave 1s linear;\\n}\\n\\n@media screen and (min-width: 641px) {\\n  h2[section] {\\n    font-size: 30px;\\n  }\\n  .block1 {\\n    align-items: start;\\n    padding-bottom: 5rem;\\n  }\\n  .block1__contacts {\\n    display: flex;\\n  }\\n  .block1__header {\\n    padding: 1rem 2rem;\\n  }\\n  .block1 h1 {\\n    text-align: left;\\n    font-size: 40px;\\n    width: 65%;\\n    font-weight: 700;\\n    margin-left: 2rem;\\n  }\\n  .block1__content {\\n    grid-template-columns: auto auto;\\n    grid-template-rows: auto auto auto;\\n    width: 100%;\\n    column-gap: 0;\\n    row-gap: 1rem;\\n    margin: 1rem 2rem;\\n    padding: 0;\\n  }\\n  .block1__content li {\\n    flex-direction: row;\\n    align-items: center;\\n  }\\n  .block1__content h3 {\\n    font-size: 32px;\\n  }\\n  .block1__content p {\\n    font-size: 16px;\\n  }\\n  .block1__content a {\\n    margin-top: 2rem;\\n  }\\n  .block2__sections {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    margin: 1rem;\\n    gap: 2rem;\\n  }\\n  .block2 button {\\n    margin: 2rem 10%;\\n  }\\n}\\n@media screen and (min-width: 1008px) {\\n  body {\\n    background-color: black;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://client/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://client/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://client/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://client/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/imgs/gluxie-stvorki.jpg":
/*!*************************************!*\
  !*** ./src/imgs/gluxie-stvorki.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/gluxie-stvorki.9b6939406e76a8ba7b1fd634aa00701b.jpg\";\n\n//# sourceURL=webpack://client/./src/imgs/gluxie-stvorki.jpg?");

/***/ }),

/***/ "./src/imgs/headerBackground.png":
/*!***************************************!*\
  !*** ./src/imgs/headerBackground.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/headerBackground.9cee7940b86302c50c91c59759e8a9d1.png\";\n\n//# sourceURL=webpack://client/./src/imgs/headerBackground.png?");

/***/ }),

/***/ "./src/imgs/image 13.png":
/*!*******************************!*\
  !*** ./src/imgs/image 13.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/image 13.8f4f5bda43643ee44015544269e5ddb8.png\";\n\n//# sourceURL=webpack://client/./src/imgs/image_13.png?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://client/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://client/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/animations/animations_btn-wave.js":
/*!**************************************************!*\
  !*** ./src/js/animations/animations_btn-wave.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnWave\": () => (/* binding */ BtnWave)\n/* harmony export */ });\nclass BtnWave {\r\n    constructor() {\r\n        this.checker = true;\r\n        this.currentWave = null;\r\n        this.listener();\r\n    }\r\n\r\n    listener() {\r\n        const handler = (e) => {\r\n            const target = e.target.closest('a[wave]');\r\n            if(!target) return;\r\n    \r\n            const posY = e.clientY - target.getBoundingClientRect().top,\r\n                posX = e.clientX - target.getBoundingClientRect().left;\r\n            this.checker = false;\r\n\r\n            const wave = this.createWaveEl(posX, posY, target);\r\n            window.removeEventListener('pointerover', handler);\r\n    \r\n            setTimeout(() => {\r\n                if(wave != undefined) {\r\n                    wave.remove();\r\n                }\r\n            }, 1000);\r\n    \r\n            window.addEventListener('pointerout', pointerOut);\r\n        }\r\n\r\n        const pointerOut = (e) => {\r\n            const target = e.target.closest('a[wave]');\r\n            if(!target && wave) return;\r\n    \r\n            window.addEventListener('pointerover', handler);\r\n            window.removeEventListener('pointerout', pointerOut);\r\n        }\r\n        \r\n        window.addEventListener('pointerover', handler);\r\n    }\r\n\r\n    createWaveEl(posX, posY, target) {\r\n        const wave = document.createElement('div');\r\n        wave.className = 'wave';\r\n        target.append(wave);\r\n\r\n        const PositionObj = this.getCenter(posX, posY, wave);\r\n\r\n        wave.style.top = `${PositionObj.posY}px`;\r\n        wave.style.left = `${PositionObj.posX}px`;\r\n\r\n        return wave;\r\n    }\r\n\r\n    getCenter(posX, posY, element) {\r\n        const elemHalfOfWidth = element.clientWidth/2,\r\n            elemHalfOfHeight = element.clientHeight/2;\r\n\r\n        return {\r\n            posX:  posX - elemHalfOfWidth,\r\n            posY: posY - elemHalfOfHeight\r\n        }\r\n    }\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://client/./src/js/animations/animations_btn-wave.js?");

/***/ }),

/***/ "./src/js/box-icons/setAtribute-toBoxIcxons.js":
/*!*****************************************************!*\
  !*** ./src/js/box-icons/setAtribute-toBoxIcxons.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoxIcons\": () => (/* binding */ BoxIcons)\n/* harmony export */ });\nclass BoxIcons {\r\n    constructor(classNameOfBlock) {\r\n        this.block = document.querySelector(`.${classNameOfBlock}`);\r\n        this.boxIcons = this.block.querySelectorAll('box-icon');\r\n        this.color = '#1BB2DE';\r\n\r\n        this.setColor();\r\n    }\r\n\r\n    setColor() {\r\n        const boxIcons = this.boxIcons;\r\n\r\n        boxIcons.forEach( item => {\r\n            item.setAttribute('color', this.color);\r\n        });\r\n    }\r\n\r\n    setSize(sm) {\r\n        const boxIcons = this.boxIcons;\r\n\r\n        boxIcons.forEach( item => {\r\n            item.setAttribute('size', sm);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://client/./src/js/box-icons/setAtribute-toBoxIcxons.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _animations_animations_btn_wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/animations_btn-wave */ \"./src/js/animations/animations_btn-wave.js\");\n/* harmony import */ var _mobile_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile/mobile_menu.js */ \"./src/js/mobile/mobile_menu.js\");\n/* harmony import */ var _box_icons_setAtribute_toBoxIcxons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-icons/setAtribute-toBoxIcxons.js */ \"./src/js/box-icons/setAtribute-toBoxIcxons.js\");\n/* harmony import */ var _scripts_scripts_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/scripts-slider.js */ \"./src/js/scripts/scripts-slider.js\");\n/* harmony import */ var _scripts_script_centralaze_sections_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/script-centralaze_sections.js */ \"./src/js/scripts/script-centralaze_sections.js\");\n// Styles\r\n\r\n\r\n// Main scripts\r\n\r\n\r\n//Mobile scripts\r\n\r\n\r\n//Main scripts\r\n\r\n\r\n\r\n\r\n\r\n (() => {\r\n    if (typeof document === 'undefined') return;\r\n\r\n    let hiddenBlock1;\r\n    let hiddenBlock2;\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      let boxicons = new _box_icons_setAtribute_toBoxIcxons_js__WEBPACK_IMPORTED_MODULE_3__.BoxIcons('block7');\r\n      boxicons.setSize('5rem')\r\n\r\n      // Mobile Slider\r\n      new _scripts_scripts_slider_js__WEBPACK_IMPORTED_MODULE_4__.Slider('block6__controlls', 'block6__slider-item', 'block6__slider');\r\n      // Sertificats Slider\r\n      new _scripts_scripts_slider_js__WEBPACK_IMPORTED_MODULE_4__.Slider('sectificats__controll', 'sectificats-item', 'sectificats__slider')\r\n\r\n      new _animations_animations_btn_wave__WEBPACK_IMPORTED_MODULE_1__.BtnWave();\r\n      new _mobile_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__.MobileMenu();\r\n\r\n      hiddenBlock1 = new _scripts_script_centralaze_sections_js__WEBPACK_IMPORTED_MODULE_5__.LastGridPosition( 'block2__section-1');\r\n      hiddenBlock2 = new _scripts_script_centralaze_sections_js__WEBPACK_IMPORTED_MODULE_5__.LastGridPosition( 'block2__section-2');\r\n    });\r\n\r\n    window.addEventListener('resize', () => {\r\n      let windowWidth = document.documentElement.clientWidth;\r\n\r\n      if(windowWidth > 640) {\r\n        hiddenBlock1.centralize();\r\n        hiddenBlock2.centralize();\r\n      } else {\r\n        hiddenBlock2.normalize();\r\n        hiddenBlock2.normalize();\r\n      }\r\n    });\r\n\r\n })();\n\n//# sourceURL=webpack://client/./src/js/index.js?");

/***/ }),

/***/ "./src/js/mobile/mobile_menu.js":
/*!**************************************!*\
  !*** ./src/js/mobile/mobile_menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MobileMenu\": () => (/* binding */ MobileMenu)\n/* harmony export */ });\nclass MobileMenu {\r\n    constructor() {\r\n        this.menuEl = document.querySelector('.mobile_menu');\r\n        this.hamburger = document.querySelector('.block1__hamburger');\r\n        this.header = document.querySelector('.block1__header');\r\n        this.curtains = document.querySelector('.block1__curtains');\r\n        this.checker = false;\r\n\r\n        this.setPositionOnClose();\r\n        this.listener();\r\n    }\r\n\r\n    positionOnOpen() {\r\n        const header = this.header;\r\n        const headerHeight = header.getBoundingClientRect().height;\r\n        return headerHeight;\r\n    }\r\n\r\n    positionOnClose() {\r\n        return -this.menuEl.offsetHeight;\r\n    }\r\n\r\n    listener() {\r\n        const button = this.hamburger;\r\n        const menu = this.menuEl;\r\n        const header = this.header;\r\n        const curtains = this.curtains;\r\n\r\n        button.addEventListener('click', handler);\r\n\r\n        let openY = this.positionOnOpen(),\r\n            closeY = this.positionOnClose() - 300;\r\n            \r\n        function handler() {\r\n\r\n            if(!this.checker) {\r\n                menu.classList.add('open');\r\n                header.classList.add('open');\r\n                menu.style.top = `${openY}px`;\r\n                curtains.style.top = `${0}px`;\r\n\r\n                this.checker = true;\r\n            } else {\r\n                menu.classList.remove('open');\r\n\r\n                menu.style.top = `${closeY}px`;\r\n        \r\n                setTimeout( () => {\r\n                    header.classList.remove('open');\r\n                    curtains.style.top = `${-curtains.offsetHeight}px`;\r\n                }, 450)\r\n\r\n                this.checker = false;\r\n            }\r\n\r\n        }\r\n        \r\n    }\r\n\r\n    setPositionOnClose() {\r\n        const menu = this.menuEl;\r\n        const curtains = this.curtains;\r\n\r\n        menu.style.top = `${-menu.offsetHeight - 300}px`;\r\n        curtains.style.top = `${-curtains.offsetHeight}px`;\r\n    }\r\n\r\n    menuState() {\r\n        return this.checker;\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://client/./src/js/mobile/mobile_menu.js?");

/***/ }),

/***/ "./src/js/scripts/script-centralaze_sections.js":
/*!******************************************************!*\
  !*** ./src/js/scripts/script-centralaze_sections.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LastGridPosition\": () => (/* binding */ LastGridPosition)\n/* harmony export */ });\nclass LastGridPosition {\r\n    constructor(id) {\r\n        this.block = document.querySelector(`#${id}`);\r\n        this.elements = this.block.querySelectorAll('section');\r\n        this.button = this.block.querySelector('button');\r\n        this.length = this.elements.length;\r\n \r\n    }\r\n\r\n    centralize() {\r\n        const length = this.length;\r\n        if(length % 2 === 0) return;\r\n\r\n        const lastElm = this.elements[ length - 1 ];\r\n\r\n        lastElm.style.gridColumn = `1 / 2 span`;\r\n        lastElm.style.margin = `0 26%`;\r\n\r\n        this.hideButton();\r\n    }\r\n\r\n    hideButton() {\r\n        const button = this.button;\r\n        button.style.display = \"none\";\r\n    }\r\n\r\n    normalize() {\r\n        const length = this.length;\r\n        if(length % 2 === 0) return;\r\n\r\n        const lastElm = this.elements[ length - 1 ];\r\n\r\n        lastElm.style.gridColumn = '1 / 1';\r\n        lastElm.style.margin = `0`;\r\n\r\n        this.hideButton();\r\n    }\r\n}\n\n//# sourceURL=webpack://client/./src/js/scripts/script-centralaze_sections.js?");

/***/ }),

/***/ "./src/js/scripts/scripts-slider.js":
/*!******************************************!*\
  !*** ./src/js/scripts/scripts-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n    constructor(controllerClassName, slideClassName, sliderClassName) {\r\n        this.current = 1;\r\n        this.controll = document.querySelector(`.${controllerClassName}`);\r\n        this.slides = document.querySelectorAll(`.${slideClassName}`);\r\n        this.slider = document.querySelector(`.${sliderClassName}`);\r\n\r\n        this.setSliderHeight();\r\n        this.listener();\r\n        this.slide();\r\n    }\r\n\r\n    listener() {\r\n        const controll = this.controll;\r\n\r\n        const handler = (e) => {\r\n            let target = e.target.closest('button');\r\n\r\n            if(!target) return;\r\n\r\n            if(target.hasAttribute('left')) {\r\n                this.toLeft();\r\n\r\n            } else if(target.hasAttribute('right')) {\r\n                this.toRight();\r\n\r\n            }\r\n        }\r\n\r\n        controll.addEventListener('click', handler);\r\n    }\r\n\r\n    setSliderHeight() {\r\n        const slide = this.slides[0];\r\n        const slider = this.slider;\r\n\r\n        setTimeout( () => {\r\n            const height = slide.getBoundingClientRect().height;\r\n            slider.style.height = `${height + 20}px`;\r\n        }, 150)\r\n    }\r\n\r\n    slide() {\r\n        const slides = this.slides;\r\n\r\n        slides.forEach( (item, index ) => {\r\n            item.style.transform = `translateX(${index * 110}%)`;\r\n        });\r\n    }\r\n\r\n\r\n    toLeft() {\r\n        const slides = this.slides;\r\n        this.current++;\r\n\r\n        if(this.current > 1) {\r\n            this.current = 1;\r\n        } \r\n\r\n        slides.forEach( (item, index ) => {\r\n            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;\r\n        });\r\n    }\r\n\r\n    toRight() {\r\n        const slides = this.slides;\r\n        this.current--;\r\n\r\n        if(this.current < -slides.length + 2) {\r\n            this.current = -slides.length +2;\r\n        } \r\n\r\n        slides.forEach( (item, index ) => {\r\n            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://client/./src/js/scripts/scripts-slider.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;