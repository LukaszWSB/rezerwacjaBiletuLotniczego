/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --success-color: #23cc71;\r\n  --error-color: #e74c3c;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #242333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"Lato\", sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.seat {\r\n  background-color: #fff;\r\n  height: 12px;\r\n  width: 15px;\r\n  margin: 3px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.city-container {\r\n  margin: 20px 0;\r\n}\r\n\r\n.city-container select {\r\n  background-color: #fff;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  margin-left: 10px;\r\n  padding: 5px 15px 5px 15px;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.seat.selected {\r\n  background-color: #6feaf6;\r\n}\r\n\r\n.seat.occupied {\r\n  background-color: #444451;\r\n}\r\n\r\n.seat:nth-of-type(3) {\r\n  margin-right: 18px;\r\n}\r\n\r\n.seat:not(.occupied):hover {\r\n  cursor: pointer;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.fly .seat:not(.occupied):hover {\r\n  cursor: default;\r\n  transform: scale(1);\r\n}\r\n\r\n.fly {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  color: #777;\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.fly li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n}\r\n\r\n.fly li small {\r\n  margin-left: 10px;\r\n}\r\n\r\n.plane {\r\n  background-color: #fff;\r\n  width: 140px;\r\n  height: 170px;\r\n  margin: 15px 0;\r\n  border-top-left-radius: 50%;\r\n  border-top-right-radius: 50%;\r\n}\r\n\r\n.container {\r\n  perspective: 1000px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container2 {\r\n  perspective: 1000px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\np.text {\r\n  margin: 5px 0;\r\n}\r\n\r\np.text span {\r\n  color: #6feaf6;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin: 0 0 20px;\r\n}\r\n\r\n.form {\r\n  padding: 30px 40px;\r\n}\r\n\r\n.form-control {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 20px;\r\n  position: relative;\r\n}\r\n\r\n.form-control label {\r\n  color: #777;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.form-control input {\r\n  border: 2px solid #f0f0f0;\r\n  border-radius: 4px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-control input:focus {\r\n  outline: 0;\r\n  border-color: #777;\r\n}\r\n\r\n.form-control.success input {\r\n  border-color: var(--success-color);\r\n}\r\n\r\n.form-control.error input {\r\n  border-color: var(--error-color);\r\n}\r\n\r\n.form-control small {\r\n  color: var(--error-color);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.form-control.error small {\r\n  visibility: visible;\r\n}\r\n\r\n.form button {\r\n  cursor: pointer;\r\n  background-color: #3498db;\r\n  border: 2px solid #3498db;\r\n  border-radius: 4px;\r\n  color: #fff;\r\n  display: block;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  width: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,+BAA+B;EAC/B,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,qBAAqB;EACrB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\r\n\r\n:root {\r\n  --success-color: #23cc71;\r\n  --error-color: #e74c3c;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #242333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"Lato\", sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.seat {\r\n  background-color: #fff;\r\n  height: 12px;\r\n  width: 15px;\r\n  margin: 3px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.city-container {\r\n  margin: 20px 0;\r\n}\r\n\r\n.city-container select {\r\n  background-color: #fff;\r\n  border: 0;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  margin-left: 10px;\r\n  padding: 5px 15px 5px 15px;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.seat.selected {\r\n  background-color: #6feaf6;\r\n}\r\n\r\n.seat.occupied {\r\n  background-color: #444451;\r\n}\r\n\r\n.seat:nth-of-type(3) {\r\n  margin-right: 18px;\r\n}\r\n\r\n.seat:not(.occupied):hover {\r\n  cursor: pointer;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.fly .seat:not(.occupied):hover {\r\n  cursor: default;\r\n  transform: scale(1);\r\n}\r\n\r\n.fly {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  color: #777;\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.fly li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n}\r\n\r\n.fly li small {\r\n  margin-left: 10px;\r\n}\r\n\r\n.plane {\r\n  background-color: #fff;\r\n  width: 140px;\r\n  height: 170px;\r\n  margin: 15px 0;\r\n  border-top-left-radius: 50%;\r\n  border-top-right-radius: 50%;\r\n}\r\n\r\n.container {\r\n  perspective: 1000px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container2 {\r\n  perspective: 1000px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\np.text {\r\n  margin: 5px 0;\r\n}\r\n\r\np.text span {\r\n  color: #6feaf6;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin: 0 0 20px;\r\n}\r\n\r\n.form {\r\n  padding: 30px 40px;\r\n}\r\n\r\n.form-control {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 20px;\r\n  position: relative;\r\n}\r\n\r\n.form-control label {\r\n  color: #777;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.form-control input {\r\n  border: 2px solid #f0f0f0;\r\n  border-radius: 4px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-control input:focus {\r\n  outline: 0;\r\n  border-color: #777;\r\n}\r\n\r\n.form-control.success input {\r\n  border-color: var(--success-color);\r\n}\r\n\r\n.form-control.error input {\r\n  border-color: var(--error-color);\r\n}\r\n\r\n.form-control small {\r\n  color: var(--error-color);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.form-control.error small {\r\n  visibility: visible;\r\n}\r\n\r\n.form button {\r\n  cursor: pointer;\r\n  background-color: #3498db;\r\n  border: 2px solid #3498db;\r\n  border-radius: 4px;\r\n  color: #fff;\r\n  display: block;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var container = document.querySelector(".container");
var count = document.getElementById("count");
var total = document.getElementById("total");
var flySelect = document.getElementById("city");
var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var myButton = document.getElementById("myButton");

// populateUI();
var ticketPrice = +flySelect.value;

// function setFlyData(flyIndex, flyPrice) {
//   localStorage.setItem("selectedFlyIndex", flyIndex);
//   localStorage.setItem("selectedFlyPrice", flyPrice);
// }

function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll(".row .seat.selected");

  // const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  var selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

//   const selectedFlyIndex = localStorage.getItem("selectedFlyIndex");

//   if (selectedFlyIndex != null) {
//     flySelect.selectedIndex = selectedFlyIndex;
//   }
// }

flySelect.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  // setFlyData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});

// updateSelectedCount();

function showError(input, message) {
  var formControl = input.parentElement;
  formControl.className = 'form-control error';
  var small = formControl.querySelector('small');
  small.innerText = message;
}
function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function checkEmail(input) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'adres E-mail jest nieprawidłowy');
  }
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, "pole jest wymagane");
    } else {
      showSuccess(input);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, "musi posiada\u0107 min. ".concat(min, " znak\xF3w"));
  } else if (input.value.length > max) {
    showError(input, "mo\u017Ce posiada\u0107 max. ".concat(max, " znak\xF3w"));
  } else {
    showSuccess(input);
  }
}
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'hasła nie zgadzają się');
  }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
myButton.addEventListener("click", function () {
  alert("Wyskakujące okienko!");
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map