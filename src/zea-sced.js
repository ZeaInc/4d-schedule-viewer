(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZeaSced"] = factory();
	else
		root["ZeaSced"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sced.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sced.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sced {\n  width: 100%;\n  height: 100%; }\n  .sced .grid-background {\n    fill: #f5f5f5; }\n  .sced .grid-header {\n    fill: #cacaca;\n    stroke: #e0e0e0;\n    stroke-width: 1.4; }\n  .sced .grid-row {\n    fill: #ffffff; }\n  .sced .grid-row:nth-child(even) {\n    fill: #f5f5f5; }\n  .sced .row-line {\n    stroke: #ebeff2; }\n  .sced .tick {\n    stroke: #8D99A6;\n    stroke-width: 0.4; }\n    .sced .tick.thick {\n      stroke-width: 0.6; }\n  .sced .today-highlight {\n    fill: #f00;\n    opacity: 0.5; }\n  .sced .arrow {\n    fill: none;\n    stroke: #666;\n    stroke-width: 1.4; }\n  .sced .bar {\n    stroke-width: 0;\n    transition: stroke-width .3s ease;\n    user-select: none; }\n  .sced .bar-progress {\n    fill: #a3a3ff; }\n  .sced .bar-invalid {\n    fill: transparent;\n    stroke: #8D99A6;\n    stroke-width: 1;\n    stroke-dasharray: 5; }\n    .sced .bar-invalid ~ .bar-label {\n      fill: #555; }\n  .sced .bar-label {\n    fill: #fff;\n    paint-order: stroke;\n    stroke-width: 2px;\n    stroke-linecap: round;\n    stroke: #aaaaaa3b;\n    dominant-baseline: central;\n    text-anchor: middle;\n    font-size: 12px;\n    font-weight: lighter; }\n    .sced .bar-label.big {\n      fill: #555;\n      text-anchor: start; }\n  .sced .handle {\n    fill: #ddd;\n    cursor: ew-resize;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .3s ease; }\n  .sced .bar-wrapper {\n    cursor: pointer;\n    outline: none; }\n    .sced .bar-wrapper:hover .bar {\n      fill: #a3d2fa; }\n    .sced .bar-wrapper:hover .handle {\n      visibility: visible;\n      opacity: 1; }\n    .sced .bar-wrapper.active .bar {\n      fill: #a3d2fa; }\n    .sced .bar-wrapper.active .bar-progress {\n      fill: #8a8aff; }\n  .sced .lower-text, .sced .upper-text {\n    font-size: 12px;\n    text-anchor: middle; }\n  .sced .upper-text {\n    fill: #555; }\n  .sced .lower-text {\n    fill: #333; }\n  .sced .hide {\n    display: none; }\n\n.sced-container {\n  position: relative;\n  height: '850px';\n  background-color: #4e4e4e;\n  font-size: 12px; }\n  .sced-container .popup-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    padding: 0;\n    color: #959da5;\n    border-radius: 3px; }\n    .sced-container .popup-wrapper .title {\n      border-bottom: 3px solid #a3a3ff;\n      padding: 10px; }\n    .sced-container .popup-wrapper .subtitle {\n      padding: 10px;\n      color: #dfe2e5; }\n    .sced-container .popup-wrapper .pointer {\n      position: absolute;\n      height: 5px;\n      margin: 0 0 0 -5px;\n      border: 5px solid transparent;\n      border-top-color: rgba(0, 0, 0, 0.8); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/AdvancedGroup.js":
/*!******************************!*\
  !*** ./src/AdvancedGroup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdvancedGroup; });
/* harmony import */ var _QuerySetParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuerySetParameter.js */ "./src/QuerySetParameter.js");
// import { StringParameter, TreeItemParameter } from './Parameters'
// import {
//   QUERY_TYPES,
//   QUERY_MATCH_TYPE,
//   QUERY_LOGIC,
// } from './Parameters/QueryParameter.js'
// import { QuerySet } from './Parameters/QuerySetParameter.js'
// import { Group } from './Group'
// import { sgFactory } from './SGFactory.js'




/** Class representing an advanced group in the scene tree.
 * @extends Group
 */
class AdvancedGroup extends ZeaEngine.Group {
  /**
   * Create an advanced group.
   * @param {string} name - The name of the advanced group.
   */
  constructor(name) {
    super(name)

    this.__searchRootParam = this.insertParameter(
      new ZeaEngine.TreeItemParameter('SearchRoot'),
      0
    )
    this.__searchRootParam.valueChanged.connect(changeType => {
      this.resolveQueries()
    })

    this.__searchSetParam = this.insertParameter(new _QuerySetParameter_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Queries'), 1)
    this.__searchSetParam.valueChanged.connect(changeType => {
      this.resolveQueries()
    })
  }

  /**
   * Sets the owner of the advanced group
   * @param {any} owner - The owner.
   */
  setOwner(owner) {
    super.setOwner(owner)

    if (this.__searchRootParam.getValue() == undefined)
      this.__searchRootParam.setValue(owner)
  }

  // ////////////////////////////////////////
  // Items

  /**
   * The resolveQueries mothod.
   */
  resolveQueries() {
    const searchRoot = this.__searchRootParam.getValue()
    if (searchRoot == undefined) return

    const queries = Array.from(this.__searchSetParam.getValue())
    if (queries.length == 0) return

    let result = []
    let set = [] // Each time we hit an OR operator, we start a new set.
    let prevset = []
    let first = true
    // Filter it down, and then merge into result.
    queries.forEach((query, index) => {
      try {
        if (!query.getEnabled() || query.getValue() == '') return

        const negate = query.getNegate()
        const applyTest = (res, item) => {
          if (negate && !res) set.push(item)
          else if (!negate && res) set.push(item)
        }
        // If we hit an 'OR' query, we want the prevset
        // to the set generated before the previous query.
        // So: TestA && TestB || TestC
        if (query.getLocicalOperator() == QUERY_LOGIC.AND) {
          prevset = set
        }
        if (first || query.getLocicalOperator() == QUERY_LOGIC.NEWSET) {
          first = false // The first enabled query.
          result = result.concat(set)
          set = []

          switch (query.getQueryType()) {
            case QUERY_TYPES.PATH: {
              if (query.getMatchType() == QUERY_MATCH_TYPE.EXACT) {
                const path = query.getValue()
                const treeItem = searchRoot.resolvePath(path)
                if (treeItem) {
                  set.push(treeItem)
                } else {
                  console.warn('Group could not resolve item:' + path)
                }
              } else if (query.getMatchType() == QUERY_MATCH_TYPE.REGEX) {
                const regex = query.getRegex()
                const searchRootPath = searchRoot.getPath()
                searchRoot.traverse(item => {
                  const itemPath = item.getPath().slice(searchRootPath.length)
                  applyTest(regex.test(String(itemPath)), item)
                }, false)
              }
              break
            }
            case QUERY_TYPES.NAME: {
              const regex = query.getRegex()
              searchRoot.traverse(item => {
                applyTest(regex.test(item.getName()), item)
              }, false)
              break
            }
            case QUERY_TYPES.PROPERTY: {
              const regex = query.getRegex()
              searchRoot.traverse(item => {
                let res = false
                if (item.hasParameter(query.getPropertyName())) {
                  const prop = item.getParameter(query.getPropertyName())
                  if (
                    prop instanceof StringParameter &&
                    regex.test(prop.getValue())
                  )
                    res = true
                }
                applyTest(res, item)
              }, false)
              break
            }
            case QUERY_TYPES.LEVEL: {
              const regex = query.getRegex()
              const searchRootPath = searchRoot.getPath()
              searchRoot.traverse(item => {
                const itemPath = item.getPath().slice(searchRootPath.length)
                // applyTest(itemPath.length > 4 && regex.test(itemPath[3]), item)
                applyTest(itemPath.length > 1 && regex.test(itemPath[0]), item)
              }, false)
              break
            }
            case QUERY_TYPES.LAYER: {
              const value = query.getValue()
              searchRoot.traverse(item => {
                applyTest(item.getLayers().indexOf(value) != -1, item)
              }, false)
              break
            }
            case QUERY_TYPES.MATERIAL: {
              const regex = query.getRegex()
              searchRoot.traverse(item => {
                let res = false
                if (item.hasParameter('material')) {
                  const material = item.getParameter('material').getValue()
                  if (regex.test(material.getName())) res = true
                }
                applyTest(res, item)
              }, false)
              break
            }
          }
        } else {
          switch (query.getQueryType()) {
            case QUERY_TYPES.PATH: {
              const regex = query.getRegex()
              const f = item =>
                negate
                  ? !regex.test(item.getPath())
                  : regex.test(item.getPath())

              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
            case QUERY_TYPES.NAME: {
              const regex = query.getRegex()
              const f = item =>
                negate
                  ? !regex.test(item.getName())
                  : regex.test(item.getName())

              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
            case QUERY_TYPES.PROPERTY: {
              const regex = query.getRegex()
              const f = item => {
                let res = false
                if (item.hasParameter(query.getPropertyName())) {
                  const prop = item.getParameter(query.getPropertyName())
                  // Note: the property must be a string property.
                  if (
                    prop instanceof StringParameter &&
                    regex.test(prop.getValue())
                  )
                    res = true
                }
                return negate ? !res : res
              }
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
            case QUERY_TYPES.LEVEL: {
              const searchRootPath = searchRoot.getPath()
              const regex = query.getRegex()
              const f = item => {
                let res = false
                const itemPath = item.getPath().slice(searchRootPath.length)
                // if (itemPath.length > 4 && regex.test(itemPath[3])) res = true
                if (itemPath.length > 1 && regex.test(itemPath[0])) res = true
                return negate ? !res : res
              }
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
            case QUERY_TYPES.LAYER: {
              const value = query.getValue()
              const f = item => {
                let res = false
                if (item.getLayers().indexOf(value) != -1) res = true
                return negate ? !res : res
              }
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
            case QUERY_TYPES.MATERIAL: {
              const regex = query.getRegex()
              const f = item => {
                let res = false
                if (item.hasParameter('material')) {
                  const material = item.getParameter('material').getValue()
                  if (regex.test(material.getName())) res = true
                }
                return negate ? !res : res
              }
              if (query.getLocicalOperator() == QUERY_LOGIC.AND)
                set = set.filter(f)
              else if (query.getLocicalOperator() == QUERY_LOGIC.OR)
                set = set.concat(prevset.filter(f))
              break
            }
          }
        }
      } catch (e) {
        // continue...
        console.warn(e.message)
      }
    })
    result = result.concat(set)
    // result.forEach((item) => {
    //   // console.log(item.getPath())
    //   this.addItem(item);
    // });
    this.setItems(new Set(result))
  }

  // ////////////////////////////////////////
  // Persistence

  /**
   * The toJSON method encodes this type as a json object for persistences.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   * @return {object} - Returns the json object.
   */
  toJSON(context, flags) {
    const j = super.toJSON(context, flags)
    return j
  }

  /**
   * The fromJSON method decodes a json object for this type.
   * @param {object} j - The json object this item must decode.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   */
  fromJSON(j, context, flags) {
    super.fromJSON(j, context, flags)
  }

  // ////////////////////////////////////////
  // Clone

  /**
   * The clone method constructs a new advanced group.
   * copies its values and returns it.
   * @param {number} flags - The flags value.
   * @return {AdvancedGroup} - Returns a new cloned advanced group.
   */
  clone(flags) {
    const cloned = new AdvancedGroup()
    cloned.copyFrom(this, flags)
    return cloned
  }
}

ZeaEngine.sgFactory.registerClass('AdvancedGroup', AdvancedGroup)



/***/ }),

/***/ "./src/QueryParameter.js":
/*!*******************************!*\
  !*** ./src/QueryParameter.js ***!
  \*******************************/
/*! exports provided: QueryParameter, QUERY_TYPES, QUERY_MATCH_TYPE, QUERY_LOGIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameter", function() { return QueryParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TYPES", function() { return QUERY_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_MATCH_TYPE", function() { return QUERY_MATCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_LOGIC", function() { return QUERY_LOGIC; });
// import { sgFactory } from '../SGFactory.js'
// import { ValueSetMode } from './Parameter.js'
// import { StringParameter } from './StringParameter.js'

const QUERY_TYPES = {
  NAME: 0,
  PATH: 1,
  PROPERTY: 2,
  MATERIAL: 3,
  LEVEL: 4,
  LAYER: 5,
  VOLUME: 6,
}

const QUERY_MATCH_TYPE = {
  EXACT: 0,
  REGEX: 1,
}

const QUERY_LOGIC = {
  AND: 0,
  OR: 1,
  NOT: 3,
  NEWSET: 4,
}

/** Class representing a query parameter.
 * @extends StringParameter
 */
class QueryParameter extends ZeaEngine.StringParameter {
  /**
   * Create a query parameter.
   * @param {string} name - The name of the query parameter.
   * @param {any} queryType - The queryType value.
   * @param {any} matchType - The matchType value.
   * @param {any} locicalOperator - The locicalOperator value.
   */
  constructor(
    name,
    queryType = QUERY_TYPES.PATH,
    matchType = QUERY_MATCH_TYPE.EXACT,
    locicalOperator = QUERY_LOGIC.AND
  ) {
    super(name, '', 'String')
    this.__enabled = true
    this.__queryType = queryType
    this.__matchType = matchType
    this.__locicalOperator = locicalOperator
    this.__negate = false
    this.__propName = ''
  }

  /**
   * Getter for QUERY_TYPES.
   * @return {any} - The return value.
   */
  static get QUERY_TYPES() {
    return QUERY_TYPES
  }
  /**
   * Getter for QUERY_MATCH_TYPE.
   * @return {any} - The return value.
   */
  static get QUERY_MATCH_TYPE() {
    return QUERY_MATCH_TYPE
  }

  /**
   * Getter for QUERY_LOGIC.
   * @return {any} - The return value.
   */
  static get QUERY_LOGIC() {
    return QUERY_LOGIC
  }

  /**
   * The getEnabled method.
   * @return {any} - The return value.
   */
  getEnabled() {
    return this.__enabled
  }

  /**
   * The setEnabled method.
   * @param {any} ngate - The ngate value.
   */
  setEnabled(ngate) {
    this.__enabled = ngate
    this.valueChanged.emit()
  }

  /**
   * The getQueryType method.
   * @return {any} - The return value.
   */
  getQueryType() {
    return this.__queryType
  }

  /**
   * The setEnabled method.
   * @param {any} queryType - The queryType value.
   */
  setQueryType(queryType) {
    this.__queryType = queryType
    this.valueChanged.emit()
  }

  /**
   * The getMatchType method.
   * @return {any} - The return value.
   */
  getMatchType() {
    return this.__matchType
  }

  /**
   * The setMatchType method.
   * @param {any} matchType - The matchType value.
   */
  setMatchType(matchType) {
    this.__matchType = matchType
    this.valueChanged.emit()
  }

  /**
   * The getLocicalOperator method.
   * @return {any} - The return value.
   */
  getLocicalOperator() {
    return this.__locicalOperator
  }

  /**
   * The setLocicalOperator method.
   * @param {any} locicalOperator - The locicalOperator value.
   */
  setLocicalOperator(locicalOperator) {
    this.__locicalOperator = locicalOperator
    this.valueChanged.emit()
  }

  /**
   * The getNegate method.
   * @return {any} - The return value.
   */
  getNegate() {
    return this.__negate
  }

  /**
   * The setNegate method.
   * @param {any} ngate - The ngate value.
   */
  setNegate(ngate) {
    this.__negate = ngate
    this.valueChanged.emit()
  }

  /**
   * The getPropertyName method.
   * @return {any} - The return value.
   */
  getPropertyName() {
    return this.__propName
  }

  /**
   * The setPropertyName method.
   * @param {any} val - The val value.
   */
  setPropertyName(val) {
    this.__propName = val
    this.valueChanged.emit()
  }

  /**
   * The getRegex method.
   * @return {any} - The return value.
   */
  getRegex() {
    // https://regex101.com/
    const value = this.getValue()
    switch (this.__matchType) {
      case QUERY_MATCH_TYPE.EXACT:
        return new RegExp(`^${value}$`)
        break
      case QUERY_MATCH_TYPE.CONTAINS:
        return new RegExp(value)
        break
      case QUERY_MATCH_TYPE.REGEX:
        return new RegExp(value)
        break
      case QUERY_MATCH_TYPE.IGNORECASE:
        return new RegExp(`^${value}$`, 'i')
        break
      case QUERY_MATCH_TYPE.CONTAINS_IGNORECASE:
        return new RegExp(`${value}`, 'i')
        break
      default:
        throw new Error('Unknown Match type')
    }
  }

  /**
   * The readBinary method.
   * @param {object} reader - The reader value.
   * @param {object} context - The context value.
   */
  readBinary(reader, context) {
    const value = reader.loadStr()
    this.setValue(value, ZeaEngine.ValueSetMode.DATA_LOAD)
  }

  // ////////////////////////////////////////
  // Clone

  /**
   * The clone method constructs a new query parameter, copies its values
   * from this parameter and returns it.
   * @param {number} flags - The flags value.
   * @return {QueryParameter} - Returns a new query parameter.
   */
  clone(flags) {
    const clonedParam = new QueryParameter(this.__name, this.__value)
    return clonedParam
  }
}

ZeaEngine.sgFactory.registerClass('QueryParameter', QueryParameter)




/***/ }),

/***/ "./src/QuerySetParameter.js":
/*!**********************************!*\
  !*** ./src/QuerySetParameter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuerySet; });
// import { sgFactory } from '../SGFactory.js'
// import { Parameter } from './Parameter.js'

/** Class representing a query set parameter.
 * @extends Parameter
 */
class QuerySet extends ZeaEngine.Parameter {
  /**
   * Create a query set parameter.
   * @param {string} name - The name of the query set parameter.
   */
  constructor(name) {
    super(name, undefined, 'QueryParameter')
    this.__items = new Set()
  }

  /**
   * The getItem method.
   * @param {number} index - The index value.
   * @return {any} - The return value.
   */
  getItem(index) {
    return Array.from(this.__items)[index]
  }

  /**
   * The addItem method.
   * @param {any} item - The item value.
   * @param {boolean} emit - The emit value.
   * @return {any} - The return value.
   */
  addItem(item, emit = true) {
    if (this.__filterFn && !this.__filterFn(item)) return false
    item.valueChanged.connect(this.valueChanged.emit)
    this.__items.add(item)
    if (emit) this.valueChanged.emit()
    return Array.from(this.__items).indexOf(item)
  }

  /**
   * The removeItem method.
   * @param {any} item - The item value.
   * @param {boolean} emit - The emit value.
   * @return {any} - The return value.
   */
  removeItem(item, emit = true) {
    const items = Array.from(this.__items)
    const index = items.indexOf(item)
    items[index].valueChanged.disconnect(this.valueChanged.emit)
    this.__items.delete(item)
    if (emit) this.valueChanged.emit()
    return index
  }

  /**
   * The getNumItems method.
   * @return {any} - The return value.
   */
  getNumItems() {
    return Array.from(this.__items).length
  }

  /**
   * The getValue method.
   * @return {any} - The return value.
   */
  getValue() {
    return this.__items
  }

  // ////////////////////////////////////////
  // Persistence

  /**
   * The toJSON method encodes this type as a json object for persistences.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   * @return {any} - The return value.
   */
  toJSON(context, flags) {
    return {}
  }

  /**
   * The fromJSON method decodes a json object for this type.
   * @param {object} j - The json object this item must decode.
   * @param {object} context - The context value.
   * @param {number} flags - The flags value.
   */
  fromJSON(j, context, flags) {}

  // ////////////////////////////////////////
  // Clone

  /**
   * The clone method constructs a new query set parameter, copies its values
   * from this parameter and returns it.
   * @param {number} flags - The flags value.
   * @return {QuerySet} - Returns a new query set parameter.
   */
  clone(flags) {
    const clonedParam = new QuerySet(this.__name, this.__filterFn)
    return clonedParam
  }
}

ZeaEngine.sgFactory.registerClass('QuerySet', QuerySet)

// export { QuerySet }


/***/ }),

/***/ "./src/QuerySetWidget.js":
/*!*******************************!*\
  !*** ./src/QuerySetWidget.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuerySetWidget; });
/* harmony import */ var _QuerySetParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuerySetParameter.js */ "./src/QuerySetParameter.js");
// import { ZeaUx } from "../../zea-ux/dist/zea-ux";


// import BaseWidget from './BaseWidget.js';

// import uxFactory from '../UxFactory.js';
// import ParameterValueChange from '../../undoredo/ParameterValueChange.js';



const addQueryWidget = (querySet, query, parentDomElem, appData) => {
  // const container = document.createElement('div');
  // container.className = 'container';

  const ul = document.createElement('ul');
  ul.className = 'flex-editvalues';
  // container.appendChild(ul);

  // /////////////////////////////////
  // Enabled
  {
    const input = document.createElement('input');
    input.setAttribute('id', 'Enabled');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('tabindex', 0);
    input.checked = query.getEnabled();

    const li = document.createElement('li');
    li.textContent = 'Enabled: ';
    li.appendChild(input);
    ul.appendChild(li);

    // ///////////////////////////
    // Handle Changes.

    let change;
    query.valueChanged.connect(() => {
      if (!change) input.checked = query.getEnabled();
    });
    input.addEventListener('input', () => {
      // change = new ParameterValueChange(query, input.checked);
      // appData.undoRedoManager.addChange(change);
      // change = undefined;
      query.setEnabled(input.checked);
    });
  }
  // /////////////////////////////////
  // QueryType
  {
    const selectQueryType = document.createElement('select');
    selectQueryType.setAttribute('size', 1);
    const addQueryTypeOption = (name, value) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(name));
      selectQueryType.appendChild(option);
    };
    const qt = ZeaEngine.QueryParameter.QUERY_TYPES;
    const map = {};
    Object.keys(qt).forEach((key, index) => {
      addQueryTypeOption(key, qt[key]);
      map[qt[key]] = index;
    });

    selectQueryType.selectedIndex = map[query.getQueryType()];
    selectQueryType.style.width = '100%';

    let changing = false;
    query.valueChanged.connect(() => {
      if (!changing) {
        selectQueryType.selectedIndex = map[query.getQueryType()];
      }
    });

    const valueChange = event => {
      changing = true;
      // const change = new ParameterValueChange(query, selectQueryType.selectedIndex);
      // appData.undoRedoManager.addChange(change);
      query.setQueryType(selectQueryType.selectedIndex);
      changing = false;
    };
    selectQueryType.addEventListener('change', valueChange);

    const li = document.createElement('li');
    li.appendChild(selectQueryType);
    ul.appendChild(li);
  }

  // /////////////////////////////////
  // QueryType
  {
    const selectMatchType = document.createElement('select');
    selectMatchType.setAttribute('size', 1);
    const addMathTypeOption = (name, value) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(name));
      selectMatchType.appendChild(option);
    };
    const mt = ZeaEngine.QueryParameter.QUERY_MATCH_TYPE;
    const map = {};
    Object.keys(mt).forEach((key, index) => {
      addMathTypeOption(key, mt[key]);
      map[mt[key]] = index;
    });

    selectMatchType.selectedIndex = map[query.getMatchType()];
    selectMatchType.style.width = '100%';

    let changing = false;
    query.valueChanged.connect(() => {
      if (!changing) {
        selectMatchType.selectedIndex = map[query.getMatchType()];
      }
    });

    const valueChange = event => {
      changing = true;
      // const change = new ParameterValueChange(query, selectMatchType.selectedIndex);
      // appData.undoRedoManager.addChange(change);
      query.setMatchType(selectMatchType.selectedIndex);
      changing = false;
    };
    selectMatchType.addEventListener('change', valueChange);

    const li = document.createElement('li');
    li.appendChild(selectMatchType);
    ul.appendChild(li);
  }

  // /////////////////////////////////
  // Logic
  {
    const selectLogicType = document.createElement('select');
    selectLogicType.setAttribute('size', 1);
    const addMathTypeOption = (name, value) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(name));
      selectLogicType.appendChild(option);
    };
    const ql = ZeaEngine.QueryParameter.QUERY_LOGIC;
    const map = {};
    Object.keys(ql).forEach((key, index) => {
      addMathTypeOption(key, ql[key]);
      map[ql[key]] = index;
    });

    selectLogicType.selectedIndex = map[query.getLocicalOperator()];
    selectLogicType.style.width = '100%';

    let changing = false;
    query.valueChanged.connect(() => {
      if (!changing) {
        selectLogicType.selectedIndex = map[query.getLocicalOperator()];
      }
    });

    const valueChange = event => {
      changing = true;
      // const change = new ParameterValueChange(query, selectLogicType.selectedIndex);
      // appData.undoRedoManager.addChange(change);
      query.setLocicalOperator(selectLogicType.selectedIndex);
      changing = false;
    };
    selectLogicType.addEventListener('change', valueChange);

    const li = document.createElement('li');
    li.appendChild(selectLogicType);
    ul.appendChild(li);
  }

  // /////////////////////////////////
  // Negate
  {
    const input = document.createElement('input');
    input.setAttribute('id', 'Negate');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('tabindex', 0);
    input.checked = query.getNegate();

    const li = document.createElement('li');
    li.textContent = 'Negate: ';
    li.appendChild(input);
    ul.appendChild(li);

    // ///////////////////////////
    // Handle Changes.

    let change;
    query.valueChanged.connect(() => {
      if (!change) input.checked = query.getNegate();
    });
    input.addEventListener('input', () => {
      // change = new ParameterValueChange(query, input.checked);
      // appData.undoRedoManager.addChange(change);
      // change = undefined;
      query.setNegate(input.checked);
    });
  }
  // /////////////////////////////////
  // Input
  {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', query.getValue());
    // input.setAttribute('tabindex', tabindex);
    input.style.width = '100%';

    // TODO: Please put these into a CSS file.
    input.style['background-color'] = '#EFEFEF';
    input.style['border-color'] = 'darkgrey';
    input.style['border-style'] = 'solid';
    input.style['border-width'] = 'thin';
    input.style['padding'] = '2px';

    const li = document.createElement('li');
    li.appendChild(input);
    ul.appendChild(li);
    query.valueChanged.connect(() => {
      input.value = query.getValue();
    });

    input.addEventListener('change', () => {
      const value = input.value;
      const change = new ParameterValueChange(query, value);
      appData.undoRedoManager.addChange(change);
    });
  }

  // /////////////////////////////////
  // Prop Name

  {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', query.getPropertyName());
    // input.setAttribute('tabindex', tabindex);
    input.style.width = '100%';

    // TODO: Please put these into a CSS file.
    input.style['background-color'] = '#EFEFEF';
    input.style['border-color'] = 'darkgrey';
    input.style['border-style'] = 'solid';
    input.style['border-width'] = 'thin';
    input.style['padding'] = '2px';
    input.disabled =
      query.getQueryType() != ZeaEngine.QueryParameter.QUERY_TYPES.PROPERTY;

    const li = document.createElement('li');
    li.appendChild(input);
    ul.appendChild(li);

    query.valueChanged.connect(() => {
      input.value = query.getPropertyName();
      input.disabled =
        query.getQueryType() != ZeaEngine.QueryParameter.QUERY_TYPES.PROPERTY;
    });

    input.addEventListener('change', () => {
      const value = input.value;
      const change = new ParameterValueChange(query, value);
      appData.undoRedoManager.addChange(change);
    });
  }

  const removeButton = document.createElement('button');
  removeButton.appendChild(document.createTextNode('Remove'));
  removeButton.addEventListener('click', e => {
    querySet.removeItem(query);
  });
  removeButton.style.margin = '2px';
  ul.appendChild(removeButton);

  // return container;
  return ul;
};

/**
 * Class representing a query set widget.
 * @extends BaseWidget
 */
class QuerySetWidget extends ZeaUx.BaseWidget {
  /**
   * Create a query set widget.
   * @param {any} parameter - The parameter value.
   * @param {any} parentDomElem - The parentDomElem value.
   * @param {any} appData - The appData value.
   */
  constructor(parameter, parentDomElem, appData) {
    super(parameter);

    const container = document.createElement('div');
    container.className = 'container';

    const ul0 = document.createElement('ul');
    container.appendChild(ul0);

    const queryList = document.createElement('ul');
    queryList.className = 'flex-editvalues';
    ul0.appendChild(queryList);

    // ///////////////////////////
    // Handle Changes.

    const updateDisplayedValue = () => {
      while (queryList.firstChild) {
        queryList.removeChild(queryList.firstChild);
      }

      const queries = parameter.getValue();
      Array.from(queries).forEach((item, index) => {
        queryList.appendChild(addQueryWidget(parameter, item, index, appData));
      });
    };

    parameter.valueChanged.connect(updateDisplayedValue);

    const queries = parameter.getValue();
    Array.from(queries).forEach((item, index) => {
      queryList.appendChild(addQueryWidget(parameter, item, index, appData));
    });

    const pickButton = document.createElement('button');
    pickButton.appendChild(document.createTextNode('Pick Geom'));
    pickButton.addEventListener('click', e => {
      console.log('Start picking mode.');
    });
    const addButton = document.createElement('button');
    addButton.appendChild(document.createTextNode('Add'));
    addButton.addEventListener('click', e => {
      parameter.addItem(new ZeaEngine.QueryParameter());
    });

    const li = document.createElement('li');
    li.style.display = 'block';
    addButton.style.margin = '2px';
    li.appendChild(addButton);
    ul0.appendChild(li);

    parentDomElem.appendChild(container);
  }
}

uxFactory.registerWidget(QuerySetWidget, p => p instanceof _QuerySetParameter_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg_utils */ "./src/svg_utils.js");


class Arrow {
    constructor(sced, from_task, to_task) {
        this.sced = sced;
        this.from_task = from_task;
        this.to_task = to_task;

        this.calculate_path();
        this.draw();
    }

    calculate_path() {
        let start_x =
            this.from_task.x + this.from_task.width / 2;

        const condition = () =>
            this.to_task.x < start_x + this.sced.options.padding &&
            start_x > this.from_task.x + this.sced.options.padding;

        while (condition()) {
            start_x -= 10;
        }

        const start_y =
            this.sced.options.header_height +
            this.sced.options.bar_height +
            (this.sced.options.padding + this.sced.options.bar_height) *
                this.from_task.task._index +
            this.sced.options.padding;

        const end_x = this.to_task.x// - this.sced.options.padding / 2;
        const end_y =
            this.sced.options.header_height +
            this.sced.options.bar_height / 2 +
            (this.sced.options.padding + this.sced.options.bar_height) *
                this.to_task.task._index +
            this.sced.options.padding;

        const from_is_below_to =
            this.from_task.task._index > this.to_task.task._index;
        const curve = this.sced.options.arrow_curve;
        const clockwise = from_is_below_to ? 1 : 0;
        const curve_y = from_is_below_to ? -curve : curve;
        const offset = from_is_below_to
            ? end_y + this.sced.options.arrow_curve
            : end_y - this.sced.options.arrow_curve;

        this.path = `
            M ${start_x} ${start_y}
            V ${offset}
            a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
            L ${end_x} ${end_y}
            m -5 -5
            l 5 5
            l -5 5`;

        if (
            this.to_task.x <
            this.from_task.x + this.sced.options.padding
        ) {
            const down_1 = this.sced.options.padding / 2 - curve;
            const down_2 =
                this.to_task.y +
                this.to_task.height / 2 -
                curve_y;
            const left = this.to_task.x - this.sced.options.padding;

            this.path = `
                M ${start_x} ${start_y}
                v ${down_1}
                a ${curve} ${curve} 0 0 1 -${curve} ${curve}
                H ${left}
                a ${curve} ${curve} 0 0 ${clockwise} -${curve} ${curve_y}
                V ${down_2}
                a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
                L ${end_x} ${end_y}
                m -5 -5
                l 5 5
                l -5 5`;
        }
    }

    draw() {
        this.element = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_0__["createSVG"])('path', {
            d: this.path,
            'data-from': this.from_task.task.id,
            'data-to': this.to_task.task.id
        });
    }

    update() {
        this.calculate_path();
        this.element.setAttribute('d', this.path);
    }
}


/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bar; });
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_utils */ "./src/date_utils.js");
/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg_utils */ "./src/svg_utils.js");



function doBoxesIntersect(a, b) {
    const a_cx = a.x + a.width * 0.5
    const a_cy = a.y + a.height * 0.5
    const b_cx = b.x + b.width * 0.5
    const b_cy = b.y + b.height * 0.5
    return (Math.abs(a_cx - b_cx) * 2 < (a.width + b.width)) &&
           (Math.abs(a_cy - b_cy) * 2 < (a.height + b.height));
}

class Bar {
    constructor(sced, task, parent, pos_y, sc_y = 1.0) {
        this.set_defaults(sced, task, parent);
        this.prepare(pos_y, sc_y);
        this.build();
        // this.bind();
    }

    get start(){
        return this.task.start;
    }

    get end(){
        return this.task.end;
    }

    set_defaults(sced, task, parent) {
        this.action_completed = false;
        this.sced = sced;
        this.task = task;
        this.parent = parent;
        this.child_bars = [];
    }

    prepare(pos_y, sc_y) {
        this.prepare_values(pos_y, sc_y);
        this.prepare_helpers();
    }

    prepare_values(pos_y, sc_y) {
        this.invalid = false;
        this.height = this.sced.options.bar_height;
        
        this.x = this.compute_x();
        this.y = pos_y;
        this.sc_y = sc_y;
        this.labelVisible = sc_y > this.sced.options.min_text_scY;
        this.visible = sc_y > this.sced.options.min_bar_scY;
        
        // console.log(this.task.name, this.x, this.y)
        this.corner_radius = this.sced.options.bar_corner_radius;
        this.duration =
            _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(this.task.end, this.task.start, 'hour') /
            this.sced.options.step;
        this.width = this.sced.options.column_width * this.duration;
        this.progress_width =
            this.sced.options.column_width *
                this.duration *
                (this.task.progress / 100) || 0;
        // this.group = createSVG('g', {
        //     class: 'bar-wrapper ' + (this.task.custom_class || ''),
        //     'data-id': this.task.id
        // });
        this.group = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'bar-group',
            'data-id': this.task.id,
            transform: `translate(${this.x},${this.y})`
        });

        // https://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection
        this.box = {
            x: this.parent.box.x + this.x,
            y: this.parent.box.y + (this.y * this.sc_y),
            width: this.width,
            height: this.height * this.sc_y
        }
        // this.compute_bbox([1, 1]);
    }
    
    // compute_bbox(sc) {
    //     this.p0 = { x: this.x * sc[0], y: this.y * sc[1] }
    //     this.p1 = {
    //         x: (this.x + this.width) * sc[0],
    //         y: (this.y + this.height) * sc[1]
    //     };
    // }

    prepare_helpers() {
        SVGElement.prototype.getX = function() {
            return +this.getAttribute('x');
        };
        SVGElement.prototype.getY = function() {
            return +this.getAttribute('y');
        };
        SVGElement.prototype.getWidth = function() {
            return +this.getAttribute('width');
        };
        SVGElement.prototype.getHeight = function() {
            return +this.getAttribute('height');
        };
        SVGElement.prototype.getEndX = function() {
            return this.getX() + this.getWidth();
        };
    }


    build() {
        if(this.visible)
            this.build_bar();

        // Note: even invisible bars contribute height to thier parents. 
        // so we must build the child bars.
        if (this.task.childTasks.length > 0) {
            // The height of a bar is based on the children.
            this.build_child_bars();
            if(this.visible)
                this.$bar.setAttribute('height', this.height);
        }
        // this.build_progress_bar();
        if (this.labelVisible)
            this.build_label();
        // this.build_resize_handles();
    }

    build_bar() {
        
        this.$bar = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('rect', {
            width: this.width,
            height: this.height,
            rx: this.corner_radius,
            ry: this.corner_radius,
            fill: this.task.color.toHex(),
            stroke: this.task.color.lerp(new ZeaEngine.Color(0,0,0), 0.5).toHex(),
            class: 'bar',
            append_to: this.group
        });

        Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["animateSVG"])(this.$bar, 'width', 0, this.width);

        if (this.invalid) {
            this.$bar.classList.add('bar-invalid');
        }

        this.setup_click_event();
    }

    get_task(id) {
        return this.childTasks[id];
    }

    // build_progress_bar() {
    //     if (this.invalid) return;
    //     this.$bar_progress = createSVG('rect', {
    //         width: this.progress_width,
    //         height: this.height,
    //         rx: this.corner_radius,
    //         ry: this.corner_radius,
    //         class: 'bar-progress',
    //         append_to: this.group
    //     });

    //     animateSVG(this.$bar_progress, 'width', 0, this.progress_width);
    // }

    build_child_bars() {
        const child_sc_y = this.sc_y * this.sced.options.child_y_scale;
        this.child_group = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'child-group',
            append_to: this.group,
            transform: `scale(1,${this.sced.options.child_y_scale})`
        });

        const compactLayout = false;
        if (compactLayout) {
            let height = 0;
            const end_dates = [this.start];
            this.child_bars_rows = [];
            const row_heights = [0];
            this.child_bars = this.task.childTasks.map(task => {
                let pos_y = this.sced.options.padding;
                let row = -1;
                end_dates.some((end_date, index) => {
                    if (task.start >= end_date) {
                        row = index;
                        return true;
                    }
                    pos_y += row_heights[index] + this.sced.options.padding;
                    return false;
                });
                if (row == -1) {
                    // Start a new row.
                    row = end_dates.length;
                }

                const bar = new Bar(this.sced, task, this, pos_y, child_sc_y);
                
                // bar.set_text_transform(child_text_sc);
                this.child_group.appendChild(bar.group);

                if(!this.child_bars_rows[row]) {
                    this.child_bars_rows[row] = [];
                    row_heights[row] = 0;
                    row_heights[row] = 0;
                    end_dates[row] = this.start;
                }
                this.child_bars_rows[row].push(bar);
                if (bar.height > row_heights[row]) {
                    const delta = bar.height - row_heights[row]
                    row_heights[row] = bar.height;
                    // If the row has grown, then we increment the owner height.
                    // height += delta;
                }
                if (task.end > end_dates[row])
                    end_dates[row] = task.end;

                if (pos_y + row_heights[row] > height)
                    height = pos_y + row_heights[row];
                return bar;
            });
            this.height = (height + this.sced.options.padding) * this.sced.options.child_y_scale;
        } else {
            let pos_y = this.sced.options.padding;
            this.child_bars = this.task.childTasks.map(task => {
                const bar = new Bar(this.sced, task, this, pos_y, child_sc_y);
                this.child_group.appendChild(bar.group);
                pos_y += bar.height + this.sced.options.padding * 0.5;
                return bar;
            });
            this.height =
                (pos_y + this.sced.options.padding) *
                this.sced.options.child_y_scale;
        }
        this.box.height = this.height * this.sc_y;
    }

    build_arrows() {
        this.arrows = [];
        for (let task of this.child_bars) {
            let arrows = [];
            arrows = task.dependencies
                .map(task_id => {
                    const dependency = this.get_task(task_id);
                    if (!dependency) return;
                    const arrow = new Arrow(
                        this,
                        this.child_bars[dependency._index], // from_task
                        this.child_bars[task._index] // to_task
                    );
                    this.layers.arrow.appendChild(arrow.element);
                    return arrow;
                })
                .filter(Boolean); // filter falsy values
            this.arrows = this.arrows.concat(arrows);
        }
    }
    
    build_label() {
        this.text_tr = [this.width / 2, this.height / 2];

        // Note: each child group of nodes is scaled in the Y axis by 
        // child_y_scale. This scaling is acumulated with each level of
        // nesting. To keep the labels 'square' we need to apply the 
        // inverse scaling in the x axis. we accumulate the sc_y
        // Down the hierarchy because it is not inherited.
        this.text_sc = this.sc_y;
        // console.log("build_label:", this.text_sc)
        this.text_g = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            transform: `translate(${this.text_tr[0]},${this.text_tr[1]}) scale(${this.text_sc},1)`,
            append_to: this.group
        });
        this.text = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('text', {
            innerHTML: this.task.name,
            class: 'bar-label',
            append_to: this.text_g
        });
        this.update_label_visiblity(this.sc_y);
        // labels get BBox in the next tick
        // requestAnimationFrame(() => this.update_label_position());
    }

    
    propagate_transform(root_sc, viewBox) {
        const sc_y = root_sc[1] * this.sc_y;
        this.text_sc = root_sc[1] / root_sc[0] * this.sc_y;

        const vis = sc_y > this.sced.options.min_bar_scY &&
            doBoxesIntersect(this.box, viewBox);
        if (vis) {
            if (!this.$bar) {
                this.build_bar();
            } else if(!this.visible) {
                this.$bar.setAttribute('visibility', "visible");
                this.visible = vis;
            }
            this.$bar.setAttribute('rx', this.corner_radius * this.text_sc);

            this.update_label_visiblity(sc_y)
            if (this.labelVisible) {
                this.update_label_transform();
            }
            
            this.child_bars.forEach(child_bar => {
                child_bar.propagate_transform(root_sc, viewBox);
            });
        } 
        else {
            if(this.visible && this.$bar)
                this.$bar.setAttribute('visibility', "hidden");
            this.visible = vis;
        }
    }

    update_label_visiblity(sc_y) {
        if(sc_y > this.sced.options.max_text_scY || sc_y < this.sced.options.min_text_scY) {
            // We can zoom in forever on the leaf nodes.
            if (this.child_bars.length == 0 && sc_y > this.sced.options.max_text_scY)
                return;
            if(this.labelVisible) {
                this.labelVisible = false;
                this.text.setAttribute('visibility', "hidden");
            }
        }
        else {
            if(!this.labelVisible) {
                if(!this.text)
                    this.build_label();
                this.text.setAttribute('visibility', "visible");
                this.labelVisible = true;
            }
        }
    }
    update_label_transform() {
        this.text_g.setAttribute("transform", `translate(${this.text_tr[0]},${this.text_tr[1]}) scale(${this.text_sc},1)`);
    }

    build_resize_handles() {
        if (this.invalid) return;

        this.handle_group = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'handle-group',
            append_to: this.group
        });

        const bar = this.$bar;
        const handle_width = 8;

        Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('rect', {
            x: bar.getWidth() - 9,
            y: 1,
            width: handle_width,
            height: this.height - 2,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: 'handle right',
            append_to: this.handle_group
        });

        Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('rect', {
            x: 1,
            y: 1,
            width: handle_width,
            height: this.height - 2,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: 'handle left',
            append_to: this.handle_group
        });

        if (this.task.progress && this.task.progress < 100) {
            this.$handle_progress = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('polygon', {
                points: this.get_progress_polygon_points().join(','),
                class: 'handle progress',
                append_to: this.handle_group
            });
        }
    }

    get_progress_polygon_points() {
        const bar_progress = this.$bar_progress;
        return [
            bar_progress.getEndX() - 5,
            bar_progress.getY() + bar_progress.getHeight(),
            bar_progress.getEndX() + 5,
            bar_progress.getY() + bar_progress.getHeight(),
            bar_progress.getEndX(),
            bar_progress.getY() + bar_progress.getHeight() - 8.66
        ];
    }

    // bind() {
    //     if (this.invalid) return;
    //     this.setup_click_event();
    // }

    setup_click_event() {

        let prevDownTime = 0;
        _svg_utils__WEBPACK_IMPORTED_MODULE_1__["$"].on(this.$bar, 'mousedown', (event, element) => {
            
            const downTime = Date.now();
            if((downTime - prevDownTime) < this.sced.options.double_click_time) {
                this.sced.frame_on_box(this.box);
                event.stopPropagation();
                event.preventDefault();
            }
            prevDownTime = downTime;

        });
        _svg_utils__WEBPACK_IMPORTED_MODULE_1__["$"].on(this.$bar, 'touchstart', (event, element) => {
            
            if (event.touches.length == 1) {
                const downTime = Date.now();
                if((downTime - prevDownTime) < this.sced.options.double_click_time) {
                    this.sced.frame_on_box(this.box);
                    event.stopPropagation();
                    event.preventDefault();
                }
                prevDownTime = downTime;
            }

        });
        // $.on(this.$bar, 'mousemove', e => {
        // });
        // document.addEventListener('mouseup', e => {
        //     // if (is_dragging || is_resizing_left || is_resizing_right) {
        //     //     bars.forEach(bar => bar.group.classList.remove('active'));
        //     // }

        //     is_dragging = false;
        // });

        // $.on(this.group, 'focus ' + this.sced.options.popup_trigger, e => {
        //     if (this.action_completed) {
        //         // just finished a move action, wait for a few seconds
        //         return;
        //     }

        //     if (e.type === 'click') {
        //         this.sced.trigger_event('click', [this.task]);
        //     }

        //     this.sced.unselect_all();
        //     // this.group.classList.toggle('active');

        //     // if (e.type === 'click') {
        //     //     this.show_popup(e);
        //     // }
        // });
    }

    show_popup(e) {
        if (this.sced.bar_being_dragged) return;

        const start_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(this.task.start, 'MMM D', this.sced.options.language);
        const end_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(
            _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.task.end, -1, 'second'),
            'MMM D',
            this.sced.options.language
        );
        const subtitle = start_date + ' - ' + end_date;

        this.sced.show_popup({
            target_element: this.$bar,
            position: "below",
            e,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            title: this.task.name,
            subtitle: subtitle,
            task: this.task
        });
    }

    // update_bar_position({ x = null, width = null }) {
    //     const bar = this.$bar;
    //     if (x) {
    //         // get all x values of parent task
    //         const xs = this.task.dependencies.map(dep => {
    //             return this.sced.get_bar(dep).$bar.getX();
    //         });
    //         // child task must not go before parent
    //         const valid_x = xs.reduce((prev, curr) => {
    //             return x >= curr;
    //         }, x);
    //         if (!valid_x) {
    //             width = null;
    //             return;
    //         }
    //         this.update_attr(bar, 'x', x);
    //     }
    //     if (width && width >= this.sced.options.column_width) {
    //         this.update_attr(bar, 'width', width);
    //     }
    //     this.update_label_position();
    //     this.update_handle_position();
    //     this.update_progressbar_position();
    //     this.update_arrow_position();
    // }

    date_changed() {
        let changed = false;
        const { new_start_date, new_end_date } = this.compute_start_end_date();

        if (Number(this.task.start) !== Number(new_start_date)) {
            changed = true;
            this.task.start = new_start_date;
        }

        if (Number(this.task.end) !== Number(new_end_date)) {
            changed = true;
            this.task.end = new_end_date;
        }

        if (!changed) return;

        this.sced.trigger_event('date_change', [
            this.task,
            new_start_date,
            _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(new_end_date, -1, 'second')
        ]);
    }

    progress_changed() {
        const new_progress = this.compute_progress();
        this.task.progress = new_progress;
        this.sced.trigger_event('progress_change', [this.task, new_progress]);
    }

    set_action_completed() {
        this.action_completed = true;
        setTimeout(() => (this.action_completed = false), 1000);
    }

    compute_start_end_date() {
        const bar = this.$bar;
        const x_in_units = bar.getX() / this.sced.options.column_width;
        const new_start_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(
            this.sced.gantt_start,
            x_in_units * this.sced.options.step,
            'hour'
        );
        const width_in_units = bar.getWidth() / this.sced.options.column_width;
        const new_end_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(
            new_start_date,
            width_in_units * this.sced.options.step,
            'hour'
        );

        return { new_start_date, new_end_date };
    }

    compute_progress() {
        const progress =
            this.$bar_progress.getWidth() / this.$bar.getWidth() * 100;
        return parseInt(progress, 10);
    }

    compute_x() {
        const { step, column_width } = this.sced.options;
        const task_start = this.task.start;
        const parent_start = this.parent.start;

        const diff = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(task_start, parent_start, 'hour');
        let x = diff / step * column_width;

        if (this.sced.view_is('Month')) {
            const diff = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(task_start, parent_start, 'day');
            x = diff * column_width / 30;
        }
        return x;
    }

    // compute_y() {
    //     return (
    //         this.sced.options.header_height +
    //         this.sced.options.padding +
    //         this.task.index * (this.height + this.sced.options.padding)
    //     );
    // }

    get_snap_position(dx) {
        let odx = dx,
            rem,
            position;

        if (this.sced.view_is('Week')) {
            rem = dx % (this.sced.options.column_width / 7);
            position =
                odx -
                rem +
                (rem < this.sced.options.column_width / 14
                    ? 0
                    : this.sced.options.column_width / 7);
        } else if (this.sced.view_is('Month')) {
            rem = dx % (this.sced.options.column_width / 30);
            position =
                odx -
                rem +
                (rem < this.sced.options.column_width / 60
                    ? 0
                    : this.sced.options.column_width / 30);
        } else {
            rem = dx % this.sced.options.column_width;
            position =
                odx -
                rem +
                (rem < this.sced.options.column_width / 2
                    ? 0
                    : this.sced.options.column_width);
        }
        return position;
    }

    update_attr(element, attr, value) {
        value = +value;
        if (!isNaN(value)) {
            element.setAttribute(attr, value);
        }
        return element;
    }

    update_progressbar_position() {
        // this.$bar_progress.setAttribute('x', this.$bar.getX());
        this.$bar_progress.setAttribute(
            'width',
            this.$bar.getWidth() * (this.task.progress / 100)
        );
    }

    // update_label_position() {
    //     const bar = this.$bar,
    //         label = this.group.querySelector('.bar-label');

    //     /*if (label.getBBox().width > bar.getWidth()) {
    //         label.classList.add('big');
    //         // label.setAttribute('x', bar.getX() + bar.getWidth() + 5);
            
    //         this.text_tr[0] = bar.getX() + bar.getWidth() + 5
    //     } else */{
    //         label.classList.remove('big');
    //         // label.setAttribute('x', bar.getX() + bar.getWidth() / 2);
    //         this.text_tr[0] = bar.getX() + bar.getWidth() / 2
    //     }
    //     this.update_label_transform()
    // }

    update_handle_position() {
        const bar = this.$bar;
        this.handle_group
            .querySelector('.handle.left')
            .setAttribute('x', 1);
        this.handle_group
            .querySelector('.handle.right')
            .setAttribute('x', this.width  - 9);
        const handle = this.group.querySelector('.handle.progress');
        handle &&
            handle.setAttribute('points', this.get_progress_polygon_points());
    }

    update_arrow_position() {
        this.arrows = this.arrows || [];
        for (let arrow of this.arrows) {
            arrow.update();
        }
    }
}

function isFunction(functionToCheck) {
    var getType = {};
    return (
        functionToCheck &&
        getType.toString.call(functionToCheck) === '[object Function]'
    );
}


/***/ }),

/***/ "./src/date_utils.js":
/*!***************************!*\
  !*** ./src/date_utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const YEAR = 'year';
const MONTH = 'month';
const DAY = 'day';
const HOUR = 'hour';
const MINUTE = 'minute';
const SECOND = 'second';
const MILLISECOND = 'millisecond';

const month_names = {
    // en: [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    // ],
    en: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    es: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    ru: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    ptBr: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    fr: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ]
};

/* harmony default export */ __webpack_exports__["default"] = ({
    parse(date, date_separator = '-', time_separator = /[.:]/) {
        if (date instanceof Date) {
            return date;
        }
        if (typeof date === 'string') {
            let date_parts, time_parts;
            const parts = date.split(' ');

            date_parts = parts[0]
                .split(date_separator)
                .map(val => parseInt(val, 10));
            time_parts = parts[1] && parts[1].split(time_separator);

            // month is 0 indexed
            date_parts[1] = date_parts[1] - 1;

            let vals = date_parts;

            if (time_parts && time_parts.length) {
                if (time_parts.length == 4) {
                    time_parts[3] = '0.' + time_parts[3];
                    time_parts[3] = parseFloat(time_parts[3]) * 1000;
                }
                vals = vals.concat(time_parts);
            }

            return new Date(...vals);
        }
    },

    parseXLSXDate(date) {// "MM/DD/YYYY"
    
        let date_parts, time_parts;
        const parts = date.split(' ');

        date_parts = parts[0]
            .split('/')
            .map(val => parseInt(val, 10));
        time_parts = parts[1] && parts[1].split(time_separator);

        // month is 0 indexed
        // date_parts[0] = date_parts[0] - 1;

        let vals = date_parts;

        if (time_parts && time_parts.length) {
            if (time_parts.length == 4) {
                time_parts[3] = '0.' + time_parts[3];
                time_parts[3] = parseFloat(time_parts[3]) * 1000;
            }
            vals = vals.concat(time_parts);
        }

        // return new Date(...vals);
        const str = `${vals[1]} ${month_names.en[vals[0]-1]} 20${vals[2]}`;
        return new Date(str);
    },

    to_string(date, with_time = false) {
        if (!(date instanceof Date)) {
            throw new TypeError('Invalid argument type');
        }
        const vals = this.get_date_values(date).map((val, i) => {
            if (i === 1) {
                // add 1 for month
                val = val + 1;
            }

            if (i === 6) {
                return padStart(val + '', 3, '0');
            }

            return padStart(val + '', 2, '0');
        });
        const date_string = `${vals[0]}-${vals[1]}-${vals[2]}`;
        const time_string = `${vals[3]}:${vals[4]}:${vals[5]}.${vals[6]}`;

        return date_string + (with_time ? ' ' + time_string : '');
    },

    format(date, format_string = 'YYYY-MM-DD HH:mm:ss.SSS', lang = 'en') {
        const values = this.get_date_values(date).map(d => padStart(d, 2, 0));
        const format_map = {
            YYYY: values[0],
            MM: padStart(+values[1] + 1, 2, 0),
            DD: values[2],
            HH: values[3],
            mm: values[4],
            ss: values[5],
            SSS:values[6],
            D: values[2],
            MMMM: month_names[lang][+values[1]],
            MMM: month_names[lang][+values[1]]
        };

        let str = format_string;
        const formatted_values = [];

        Object.keys(format_map)
            .sort((a, b) => b.length - a.length) // big string first
            .forEach(key => {
                if (str.includes(key)) {
                    str = str.replace(key, `$${formatted_values.length}`);
                    formatted_values.push(format_map[key]);
                }
            });

        formatted_values.forEach((value, i) => {
            str = str.replace(`$${i}`, value);
        });

        return str;
    },

    diff(date_a, date_b, scale = DAY) {
        let milliseconds, seconds, hours, minutes, days, months, years;

        milliseconds = date_a - date_b;
        seconds = milliseconds / 1000;
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        months = days / 30;
        years = months / 12;

        if (!scale.endsWith('s')) {
            scale += 's';
        }

        return Math.floor(
            {
                milliseconds,
                seconds,
                minutes,
                hours,
                days,
                months,
                years
            }[scale]
        );
    },

    today() {
        const vals = this.get_date_values(new Date()).slice(0, 3);
        return new Date(...vals);
    },

    now() {
        return new Date();
    },

    add(date, qty, scale) {
        qty = parseInt(qty, 10);
        const vals = [
            date.getFullYear() + (scale === YEAR ? qty : 0),
            date.getMonth() + (scale === MONTH ? qty : 0),
            date.getDate() + (scale === DAY ? qty : 0),
            date.getHours() + (scale === HOUR ? qty : 0),
            date.getMinutes() + (scale === MINUTE ? qty : 0),
            date.getSeconds() + (scale === SECOND ? qty : 0),
            date.getMilliseconds() + (scale === MILLISECOND ? qty : 0)
        ];
        return new Date(...vals);
    },

    start_of(date, scale) {
        const scores = {
            [YEAR]: 6,
            [MONTH]: 5,
            [DAY]: 4,
            [HOUR]: 3,
            [MINUTE]: 2,
            [SECOND]: 1,
            [MILLISECOND]: 0
        };

        function should_reset(_scale) {
            const max_score = scores[scale];
            return scores[_scale] <= max_score;
        }

        const vals = [
            date.getFullYear(),
            should_reset(YEAR) ? 0 : date.getMonth(),
            should_reset(MONTH) ? 1 : date.getDate(),
            should_reset(DAY) ? 0 : date.getHours(),
            should_reset(HOUR) ? 0 : date.getMinutes(),
            should_reset(MINUTE) ? 0 : date.getSeconds(),
            should_reset(SECOND) ? 0 : date.getMilliseconds()
        ];

        return new Date(...vals);
    },

    clone(date) {
        return new Date(...this.get_date_values(date));
    },

    get_date_values(date) {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
    },

    get_days_in_month(date) {
        const no_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const month = date.getMonth();

        if (month !== 1) {
            return no_of_days[month];
        }

        // Feb
        const year = date.getFullYear();
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return 29;
        }
        return 28;
    }
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
function padStart(str, targetLength, padString) {
    str = str + '';
    targetLength = targetLength >> 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (str.length > targetLength) {
        return String(str);
    } else {
        targetLength = targetLength - str.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(str);
    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Schedule, Viewer, QuerySetWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./src/schedule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return _schedule_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer.js */ "./src/viewer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewer", function() { return _viewer_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _QuerySetWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuerySetWidget.js */ "./src/QuerySetWidget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySetWidget", function() { return _QuerySetWidget_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _sced_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sced.scss */ "./src/sced.scss");
/* harmony import */ var _sced_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sced_scss__WEBPACK_IMPORTED_MODULE_3__);









/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
class Popup {
    constructor(parent, custom_html) {
        this.parent = parent;
        this.custom_html = custom_html;
        this.make();
    }

    make() {
        this.parent.innerHTML = `
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="pointer"></div>
        `;

        this.hide();

        this.title = this.parent.querySelector('.title');
        this.subtitle = this.parent.querySelector('.subtitle');
        this.pointer = this.parent.querySelector('.pointer');
    }

    show(options) {
        console.log("show(options):", options)
        if (!options.target_element) {
            throw new Error('target_element is required to show popup');
        }
        if (!options.position) {
            options.position = 'left';
        }
        const target_element = options.target_element;

        if (this.custom_html) {
            let html = this.custom_html(options.task);
            html += '<div class="pointer"></div>';
            this.parent.innerHTML = html;
            this.pointer = this.parent.querySelector('.pointer');
        } else {
            // set data
            this.title.innerHTML = options.title;
            this.subtitle.innerHTML = options.subtitle;
            this.parent.style.width = this.parent.clientWidth + 'px';
        }

        // set position
        let position_meta;
        if (target_element instanceof HTMLElement) {
            position_meta = target_element.getBoundingClientRect();
        } else if (target_element instanceof SVGElement) {
            position_meta = options.target_element.getBBox();
        }

        if (options.position === 'left') {
            const x = options.x || position_meta.x;
            const y = options.y || position_meta.y;
            this.parent.style.left = x + (position_meta.width + 10) + 'px';
            this.parent.style.top = y + 'px';

            this.pointer.style.transform = 'rotateZ(90deg)';
            this.pointer.style.left = '-7px';
            this.pointer.style.top = '2px';
        }
        else {
            const x = (options.e.clientX - 18);
            const y = options.y + options.height;
            this.parent.style.left = x + 'px';
            this.parent.style.top = y + 'px';

            this.pointer.style.transform = 'rotateZ(180deg)';
            this.pointer.style.left = '10px';
            this.pointer.style.top = '-15px';
        }

        // show
        this.parent.style.opacity = 1;
    }

    hide() {
        this.parent.style.opacity = 0;
    }
}


/***/ }),

/***/ "./src/sced.scss":
/*!***********************!*\
  !*** ./src/sced.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sced.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sced.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/schedule-colors.js":
/*!********************************!*\
  !*** ./src/schedule-colors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// https://material.io/design/color/#tools-for-picking-colors
/* harmony default export */ __webpack_exports__["default"] = ([
  {
    name: "Red 50",
    colors: [
      '#FFCDD2',
      '#EF9A9A',
      '#E57373',
      '#EF5350',
      '#F44336',
      '#E53935',
      '#D32F2F',
      '#C62828',
      '#B71C1C'
    ]
  },
  {
    name: "Pink 50",
    colors: [
      "#F8BBD0",
      "#F48FB1",
      "#F06292",
      "#EC407A",
      "#E91E63",
      "#D81B60",
      "#C2185B",
      "#AD1457",
      "#880E4F"
    ]
  },
  {
    name: "Purple 50",
    colors: [
      "#E1BEE7",
      "#CE93D8",
      "#BA68C8",
      "#AB47BC",
      "#9C27B0",
      "#8E24AA",
      "#7B1FA2",
      "#6A1B9A",
      "#4A148C"
    ]
  },
  {
    name: "Indigo 50",
    colors: [
      "#C5CAE9",
      "#9FA8DA",
      "#7986CB",
      "#5C6BC0",
      "#3F51B5",
      "#3949AB",
      "#303F9F",
      "#283593",
      "#1A237E"
    ]
  },
  {
    name: "Blue 50",
    colors: [
      "#BBDEFB",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#2196F3",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1"
    ]
  },
  {
    name: "Cyan 50",
    colors: [
      "#B2EBF2",
      "#80DEEA",
      "#4DD0E1",
      "#26C6DA",
      "#00BCD4",
      "#00ACC1",
      "#0097A7",
      "#00838F",
      "#006064"
    ]
  },
  {
    name: "Teal 50",
    colors: [
      "#B2DFDB",
      "#80CBC4",
      "#4DB6AC",
      "#26A69A",
      "#009688",
      "#00897B",
      "#00796B",
      "#00695C",
      "#004D40"
    ]
  },
  {
    name: "Green 50",
    colors: [
      "#C8E6C9",
      "#A5D6A7",
      "#81C784",
      "#66BB6A",
      "#4CAF50",
      "#43A047",
      "#388E3C",
      "#2E7D32",
      "#1B5E20"
    ]
  },
  {
    name: "Yellow 50",
    colors: [
      "#FFF9C4",
      "#FFF59D",
      "#FFF176",
      "#FFEE58",
      "#FFEB3B",
      "#FDD835",
      "#FBC02D",
      "#F9A825",
      "#F57F17"
    ]
  },
  {
    name: "Orange 50",
    colors: [
      "#FFE0B2",
      "#FFCC80",
      "#FFB74D",
      "#FFA726",
      "#FF9800",
      "#FB8C00",
      "#F57C00",
      "#EF6C00",
      "#E65100"
    ]
  },
  {
    name: "Brown 50",
    colors: [
      "#D7CCC8",
      "#BCAAA4",
      "#A1887F",
      "#8D6E63",
      "#795548",
      "#6D4C41",
      "#5D4037",
      "#4E342E",
      "#3E2723"
    ]
  },
  {
    name: "Blue Gray 50",
    colors: [
      "#CFD8DC",
      "#B0BEC5",
      "#90A4AE",
      "#78909C",
      "#607D8B",
      "#546E7A",
      "#455A64",
      "#37474F",
      "#263238"
    ]
  }
]);


/***/ }),

/***/ "./src/schedule.js":
/*!*************************!*\
  !*** ./src/schedule.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Schedule; });
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_utils */ "./src/date_utils.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _schedule_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-colors.js */ "./src/schedule-colors.js");
/* harmony import */ var _AdvancedGroup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdvancedGroup.js */ "./src/AdvancedGroup.js");
/* harmony import */ var _QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryParameter.js */ "./src/QueryParameter.js");






// Guessed based on the values of "Struct-Fndn-Concrete Slabs_Walls_Columns"
// Structural Foundations == NEGATE
// Concrete-Rectangular-Column == OR
const NAVISWORKS_FLAGS = {
  // IGNORE_STRING_VALUE_CASE: 1<<0,
  // IGNORE_STRING_DIACRITICS: 1<<1,
  // IGNORE_VALUE_CHARACTER_WIDTHS: 1<<2,
  // IGNORE_CATEGORY_USER_NAME: 1<<3,
  // IGNORE_CATEGORY_INTERNAL_NAME: 1<<4,
  // IGNORE_PROPERTY_USER_NAME: 1<<5,
  // IGNORE_PROPERTY_INTERNAL_NAME: 1<<6,

  NEGATE_CONDITION: 32,
  OR_CONDITION: 64,
  REGEX_CONDITION: 128
}


class Schedule {
    constructor(scene) {
        this.scene = scene;
        this.tasks = [];
        this.totalTasks = 0;
        this.isLoaded = false;
        this.loaded = new ZeaEngine.Signal();
        
        // this.selectionSets = new SelectionSetsRoot(this.scene.getRoot());
        this.sets = new ZeaEngine.TreeItem('Sets')
        if (this.scene)
          this.scene.getRoot().addChild(this.sets)

        this.tasksAdded = new ZeaEngine.Signal();
        this.currentDateChanged = new ZeaEngine.Signal();
    }

    loadJSON(tasks) {
        this.tasks = tasks.map((taskJson, index) => {
            const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](index);
            task.loadJSON(taskJson);
            return task;
        });
    }

    setup_dependencies() {
        this.dependency_map = {};
        for (let t of this.tasks) {
            for (let d of t.dependencies) {
                this.dependency_map[d] = this.dependency_map[d] || [];
                this.dependency_map[d].push(t.id);
            }
        }
    }


    loadMSProjectXLSX(url) {
      if (!window.XLSX) 
        throw("XLSX library required")

      return new Promise((resolve, reject) => {
  
        // Note: example taken from here..
        // https://stackoverflow.com/questions/8238407/how-to-parse-excel-file-in-javascript-html5
        // and here:
        // https://github.com/SheetJS/js-xlsx/tree/master/demos/xhr
        // const stem = file.name.split('.')[0]; // trim off the extension


        function checkStatus(response) {
            if (!response.ok) {
              throw new Error(`HTTP ${response.status} - ${response.statusText}`);
            }
            return response;
          }
        fetch(url)
            .then(response => checkStatus(response) && response.arrayBuffer())
            .then(buffer => {
                parseXLSX(buffer);
            })
            .catch(err => console.error(err)); // Never forget the final catch!

        const parseXLSX = (data)=>{
            
            var unit8array = new Uint8Array(data);
            var workbook = XLSX.read(unit8array, {
              type: 'array'
            });

            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            // Here is your object
            const rows = XLSX.utils.sheet_to_row_object_array(firstSheet);


            // this.projectStartDate = new Date(rows[0]['Planned Start']);
            // this.start = date_utils.parseXLSXDate(rows[0]['Planned Start'], '/');
            // this.projectStartDate = Date.parse(rows[0]['Planned Start'], "MM/DD/YYYY");

            const path = [];
            this.totalTasks = rows.length;
            let currColorSet;
            rows.some((row) => {
              const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
              const nesting = Number.parseInt(row['Task Nesting']);
              if (nesting == 0) {
                currColorSet = _schedule_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.tasks.length % _schedule_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].length];
                // console.log(row['Task Name'], currColorSet.name)
              }

              task.loadMSProjectXLSX(row, currColorSet.colors[nesting+2]);
              // if(task.selectionSet && this.tasks.length == 0)
              //   this.tasks.push(task);
              // return;

              if (nesting == 0) {
                // if (this.tasks.length > 0){
                //     return true;
                // }
                currColorSet = _schedule_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.tasks.length % _schedule_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].length]
                this.tasks.push(task);
                path.splice(0, path.length, task)
              } else if (nesting >= path.length) {
                const parentTask = path[path.length - 1];
                parentTask.addChildTask(task)
                path.push(task);
              } else if (nesting < path.length - 1) {
                // this.totalTasks += path[path.length - 1].generateLookaheadTasks();
                path.splice(nesting, path.length - nesting);
                const parentTask = path[path.length - 1];
                parentTask.addChildTask(task);
                path.push(task);
              } else {
                // this.totalTasks += path[path.length - 1].generateLookaheadTasks();
                const parentTask = path[path.length - 2];
                parentTask.addChildTask(task);
                path[path.length - 1] = task;
              }
              return false;
              // console.log(new Array(nesting + 1).join('  '), nesting, row)
            });
            // console.log("Duration:", this.projectStartDate, this.duration)
            console.log("Total Tasks:", this.totalTasks);
            this.isLoaded = true;
            this.loaded.emit();
            resolve();
        }
      }
    )
  }


  loadSelectionSet(filepath, assets) {

    return new Promise((resolve, reject) => {
      const file = this.scene.getResourceLoader().resolveFilepath(filepath);
      if (file) {
        const stem = file.name.split('.')[0]; // trim off the extension
        ZeaEngine.loadXMLfile(file.url,
          (xmlDoc) => {

            let searchRoot;

            const parseSelectionSet = (xmlNode) => {
              const name = xmlNode.getAttributeNode("name").value;
              // console.log("Set:", name);

              const group = new _AdvancedGroup_js__WEBPACK_IMPORTED_MODULE_3__["default"](name);
              
              if(searchRoot) {
                // TODO: EAch group should inherit off its parent.
                group.getParameter('SearchRoot').setValue(searchRoot);
                
                const asset = searchRoot;
                if(!asset.isLoaded()) {
                  asset.loaded.connect(()=>{
                    group.resolveQueries();
                  })
                }
              }

              const findSpec = xmlNode.children[0];
              const mode = findSpec.getAttributeNode("mode").value;
              if (mode == "all") {
                // selectionSet.setRuleCombineMode(SelectionSet.RULES_COMBINE_MODE.AND);
              } else if (mode == "some") {
                // selectionSet.setRuleCombineMode(SelectionSet.RULES_COMBINE_MODE.OR);
              }


              const conditions = findSpec.children[0];
              for (let i = 0; i < conditions.children.length; i++) {
                const condition = conditions.children[i]
                // const rule = new SelectionRule();

                const query = new _QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"]();
                if(i==0) {
                  query.setLocicalOperator(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_LOGIC.NEWSET);
                }
                // query.setMatchType(QueryParameter.QUERY_MATCH_TYPE.REGEX)

                if(condition.getAttributeNode("test").value == "equals") {
                  query.setMatchType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_MATCH_TYPE.EXACT)
                }
                else if(condition.getAttributeNode("test").value == "contains" ||
                        condition.getAttributeNode("test").value == "regex") {
                  query.setMatchType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_MATCH_TYPE.REGEX)
                }
                else if(condition.getAttributeNode("test").value == "not_equals") {
                  query.setNegate(true);
                }
                
                ///////////////////
                // Rule Type
                const propElement = condition.getElementsByTagName('property');
                const propType = propElement[0].children[0].getAttributeNode("internal").value;
                // const propType = propElement[0].children[0].textContent;
                const propValue = propElement[0].children[0].textContent;
                const getConditionValue = ()=>{
                  const valueElement = condition.getElementsByTagName('value');
                  return valueElement[0].children[0].textContent;
                }
                
                if (propType == "LcOaNodeSourceFile") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.SOURCEFILE);
                  // console.log(propType);
                  const value = getConditionValue();
                  if (value in assets) {
                    searchRoot = assets[value];
                    group.getParameter('SearchRoot').setValue(searchRoot);
                  }
                  else {
                    console.error("File not found:", value, " Amonst:", Object.keys(assets), " in XML:", filepath)
                  }
                  // 
                  // File is implicit inm the tree it is attached to.
                  continue;
                } else if (propType == "LcOaSceneBaseUserName") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.NAME);
                  const value = getConditionValue();
                  // console.log(propType, ":", value);

                  query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.NAME)
                  query.setValue(value)

                } else if (propType == "LcOaNodeLayer") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.LAYER);
                  const value = getConditionValue();
                  if(value.startsWith("Level ")) {
                    // Fo some reason I can't figure out, a lot of the 
                    // SearchSets in Architectural reference layers instead 
                    // of Leves, but our data doesn't have Layers, so swapping here.
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.LEVEL)
                    query.setValue(value)
                  }
                  else {
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.LAYER)
                    query.setValue(value)
                  }
                  // console.log(propType, ":", value);

                } else if (propType == "LcRevitPropertyElementCategory") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.CATEGORY);
                  // console.log(propType)
                  const value = getConditionValue();
                  // console.log(propType, ":", value);

                  query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.PROPERTY)
                  query.setPropertyName("Category")
                  query.setValue(value)

                  query.setEnabled(false);// Disabling Category untill we have parsed the Revit data.

                } else if (propType == "LcOaSceneBaseClassUserName") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                } else if (propType == "LcOaNodeMaterial") {
                  // rule.setRuleType(SelectionSet.RULES_TYPE.MATERIAL);
                  
                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                  query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.MATERIAL)
                  query.setValue(value)
                } else if (propType == "LcRevitPropertyElementName") {
                  
                  const categoryElement = condition.getElementsByTagName('category');
                  const categoryValue = categoryElement[0].children[0].textContent;

                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                  if (categoryValue == "Reference Level") {
                    // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.LEVEL)
                    query.setValue(value)
                  } else if (categoryValue == "Base Level") {
                    // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.LEVEL)
                    query.setValue(value)
                  } else if (propValue == "Name") {
                    // console.warn("Check me in Navisworks", name)
                    // rule.setRuleType(SelectionSet.RULES_TYPE.NAME);
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.NAME)
                    query.setValue(value)
                  } else {
                    console.log("support me", xmlNode);
                    throw ("stop")
                  }
                } else if (propType == "revit_System Type") {
                  
                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                  // console.log("Check me in Navisworks", name)
                  // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
                } else if (propType == "revit_OmniClass Title") {
                  
                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                  // console.log("Check me in Navisworks", name)
                  // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
                } else if (propType == "revit_System Classification") {
                  
                  const value = getConditionValue();
                  // console.log(propType, ":", value);
                  // console.log("Check me in Navisworks", name)
                  // rule.setRuleType(SelectionSet.RULES_TYPE.TYPE);
                } else {
                  
                  const categoryElement = condition.getElementsByTagName('category');
                  const categoryValue = categoryElement[0].children[0].textContent;
                  if (categoryValue == "Level") {
                    // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
                    const value = getConditionValue();
                    query.setQueryType(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_TYPES.LEVEL)
                    query.setValue(value)
                  } else {
                    console.log("support me", xmlNode);
                    throw ("stop")
                  }
                }
                // else if(propType == "LcRevitData") {
                //   // <name internal="LcRevitData">Base Level</name>
                //   // <name internal="LcRevitData">Reference Level</name>
                //   // <name internal="LcRevitData">Element</name>
                //   // <name internal="LcRevitData">Rebar Cover</name><name internal="LcRevitPropertyElementName">Name</name><data type="wstring">Interior (slabs, walls, joists) - 10M to 36M</data>


                //   // const propertyinternal = propElement[0].children[0].textContent;
                //   // if(propertyinternal == "Base Level" || propertyinternal == "Reference Level") {
                //   //   // rule.setRuleType(SelectionSet.RULES_TYPE.LEVEL);
                //   //   const value = getConditionValue();
                //   //   query.setQueryType(QueryParameter.QUERY_TYPES.LEVEL)
                //   //   query.setValue(value)
                //   // }
                //   // propElement
                //   // rule.setRuleType(SelectionSet.RULES_TYPE.PROPERTY);
                //   // rule.setPropName(propertyName);
                // }

                // const conditionValue = condition.getElementsByTagName('value')[0].children[0].textContent;
                // rule.setMatchValue(conditionValue);

                // ///////////////////
                // // Match Type
                // const test = condition.getAttributeNode("test").value;
                // if (test == "equals") {
                //   rule.setMatchType(SelectionSet.MATCH_TYPE.EXACT);
                // } else if (test == "not_equals") {
                //   rule.setMatchType(SelectionSet.MATCH_TYPE.EXACT);
                //   rule.setMatchFlag(SelectionSet.MATCH_FLAGS.NEGATE_CONDITION);
                // } else if (test == "contains") {
                //   rule.setMatchType(SelectionSet.MATCH_TYPE.CONTAINS);
                // } else if (test == "regex") {
                //   rule.setMatchType(SelectionSet.MATCH_TYPE.REGEX);
                // }

                ///////////////////
                // Flags
                const flags = Number.parseInt(condition.getAttributeNode("flags").value);
                if (flags & NAVISWORKS_FLAGS.OR_CONDITION) {
                  // rule.setMatchFlag(SelectionSet.MATCH_FLAGS.OR_CONDITION);
                  query.setLocicalOperator(_QueryParameter_js__WEBPACK_IMPORTED_MODULE_4__["QueryParameter"].QUERY_LOGIC.OR)
                }
                if (flags & NAVISWORKS_FLAGS.NEGATE_CONDITION){
                  // rule.setMatchFlag(SelectionSet.MATCH_FLAGS.NEGATE_CONDITION);
                  query.setNegate(true);
                }

                if (flags & NAVISWORKS_FLAGS.REGEX_CONDITION){
                  // rule.setMatchType(SelectionSet.MATCH_TYPE.REGEX);
                }

                // if (name == "Struct-Framing-L2") {
                //   console.log(rule.toString())
                // }
                // 
                //selectionSet.addRule(rule, false);
                
                group.getParameter('Queries').addItem(query, false);
              }

              if(!group.getParameter('SearchRoot').getValue())
                throw("Asset not bound for Search Set:", filepath)

              group.resolveQueries();

              // return selectionSet;
              return group;
            }
            const parseFolder = (xmlNode) => {
              const name = xmlNode.getAttributeNode("name").value;
              // const selSetFolder = new SelectionSetFolder(name)
              const treeItem = new ZeaEngine.TreeItem(name);

              for (let i = 0; i < xmlNode.children.length; i++) {
                const node = xmlNode.children[i]
                if (node.nodeName == "viewfolder") {
                  // selSetFolder.addSelectionSet(parseFolder(node));
                  const subTreeItem = parseFolder(node);
                  treeItem.addChild(subTreeItem)
                } else if (node.nodeName == "selectionset") {
                  // selSetFolder.addSelectionSet(parseSelectionSet(node))
                  const group = parseSelectionSet(node)
                  treeItem.addChild(group)
                }
              }

              // return selSetFolder;
              return treeItem;
            }

            if (xmlDoc.children[0].nodeName == "exchange") {
              const selectionSets = xmlDoc.children[0].children[0];
              // const treeItem = parseFolder(selectionSets);
              // asset.addChild(treeItem);

              for (let i = 0; i < selectionSets.children.length; i++) {
                const node = selectionSets.children[i]
                if (node.nodeName == "viewfolder") {
                  // selSetFolder.addSelectionSet(parseFolder(node));
                  const subTreeItem = parseFolder(node);
                  this.sets.addChild(subTreeItem)
                } else if (node.nodeName == "selectionset") {
                  // selSetFolder.addSelectionSet(parseSelectionSet(node))
                  const group = parseSelectionSet(node)
                  this.sets.addChild(group)
                }
              }
              // for (let i = 0; i < selectionSets.children.length; i++) {
              //   const node = selectionSets.children[i]
              //   if (node.nodeName == "viewfolder")
              //     // this.selectionSets.addSelectionSet(parseFolder(node));
              //   else if (node.nodeName == "selectionset") {
              //     this.selectionSets.addSelectionSet(parseSelectionSet(node))
              //   }
              // }
            }

            // this.selectionSets.recomputeAll();
            // resolve(this.selectionSets);
            resolve();
          },
          () => {
            reject("Unable to load file");
          }
        );
      } else reject("File does not exist in resources");
    })
  }

  bindTasksToSelectionSets() {

    this.gantt_start = this.gantt_end = null;
    
    this.tasks.forEach((task) => {
      task.bindToSelectionSet(this.scene.getRoot(), this.sets);

      
      // set global start and end date
      if (!this.gantt_start || task.start < this.gantt_start) {
        this.gantt_start = task.start;
      }
      if (!this.gantt_end || task.end > this.gantt_end) {
        this.gantt_end = task.end;
      }
    });

    this.setCurrentDate(this.gantt_start);
  }

  
  setCurrentDate(currentDate) {
    // console.log(`setCurrentDate(${currentDate})`)
    this.currentDateChanged.emit(currentDate);
    
    this.tasks.forEach((task) => {
      task.update(currentDate);
    });
  }
}

/***/ }),

/***/ "./src/svg_utils.js":
/*!**************************!*\
  !*** ./src/svg_utils.js ***!
  \**************************/
/*! exports provided: $, createSVG, animateSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVG", function() { return createSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateSVG", function() { return animateSVG; });
function $(expr, con) {
    return typeof expr === 'string'
        ? (con || document).querySelector(expr)
        : expr || null;
}

function createSVG(tag, attrs) {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (let attr in attrs) {
        if (attr === 'append_to') {
            const parent = attrs.append_to;
            parent.appendChild(elem);
        } else if (attr === 'innerHTML') {
            elem.innerHTML = attrs.innerHTML;
        } else {
            elem.setAttribute(attr, attrs[attr]);
        }
    }
    return elem;
}

function animateSVG(svgElement, attr, from, to) {
    const animatedSvgElement = getAnimationElement(svgElement, attr, from, to);

    if (animatedSvgElement === svgElement) {
        // triggered 2nd time programmatically
        // trigger artificial click event
        const event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, true);
        event.eventName = 'click';
        animatedSvgElement.dispatchEvent(event);
    }
}

function getAnimationElement(
    svgElement,
    attr,
    from,
    to,
    dur = '0.4s',
    begin = '0.1s'
) {
    const animEl = svgElement.querySelector('animate');
    if (animEl) {
        $.attr(animEl, {
            attributeName: attr,
            from,
            to,
            dur,
            begin: 'click + ' + begin // artificial click
        });
        return svgElement;
    }

    const animateElement = createSVG('animate', {
        attributeName: attr,
        from,
        to,
        dur,
        begin,
        calcMode: 'spline',
        values: from + ';' + to,
        keyTimes: '0; 1',
        keySplines: cubic_bezier('ease-out')
    });
    svgElement.appendChild(animateElement);

    return svgElement;
}

function cubic_bezier(name) {
    return {
        ease: '.25 .1 .25 1',
        linear: '0 0 1 1',
        'ease-in': '.42 0 1 1',
        'ease-out': '0 0 .58 1',
        'ease-in-out': '.42 0 .58 1'
    }[name];
}

$.on = (element, event, selector, callback) => {
    if (!callback) {
        callback = selector;
        $.bind(element, event, callback);
    } else {
        $.delegate(element, event, selector, callback);
    }
};

$.off = (element, event, handler) => {
    element.removeEventListener(event, handler);
};

$.bind = (element, event, callback) => {
    event.split(/\s+/).forEach(function(event) {
        element.addEventListener(event, callback);
    });
};

$.delegate = (element, event, selector, callback) => {
    element.addEventListener(event, function(e) {
        const delegatedTarget = e.target.closest(selector);
        if (delegatedTarget) {
            e.delegatedTarget = delegatedTarget;
            callback.call(this, e, delegatedTarget);
        }
    });
};

$.closest = (selector, element) => {
    if (!element) return null;

    if (element.matches(selector)) {
        return element;
    }

    return $.closest(selector, element.parentNode);
};

$.attr = (element, attr, value) => {
    if (!value && typeof attr === 'string') {
        return element.getAttribute(attr);
    }

    if (typeof attr === 'object') {
        for (let key in attr) {
            $.attr(element, key, attr[key]);
        }
        return;
    }

    element.setAttribute(attr, value);
};


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_utils */ "./src/date_utils.js");
/* harmony import */ var _schedule_colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-colors.js */ "./src/schedule-colors.js");


// import moment from 'moment';

function msToDays(ms) {
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function dateToString(date) {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generate_id(task) {
  return (
      task.name +
      '_' +
      Math.random()
          .toString(36)
          .slice(2, 12)
  );
}

// From Synchro Software: (https://www.youtube.com/watch?v=sX0NUKDJ3b4)
const TASK_COLORS = {
  EQUIPMENT: new ZeaEngine.Color(0, 0.8, 0, 0.25),
  NEW_CONSTRUCTION: new ZeaEngine.Color("#ADFF2F"),
  DEMOLITION: new ZeaEngine.Color("#B22222"),
  MEP: new ZeaEngine.Color(0.8, 0, 0, 0.25), /* MEP" stands for Mechanical, Electrical, and Plumbing.  */
  FITOUT_COMMISIONING: new ZeaEngine.Color('#F0E68C')
}


const STATE_TYPES = {
  INIT: -1,
  BEFORE: 0,
  DURING: 1,
  AFTER: 2
}
const TASK_TYPES = {
  Construction: 1,
  Equipment: 2,
  Demolition: 2
}

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function adjust(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
// function adjust(col,amt) {
//     var usePound = false;
//     if ( col[0] == "#" ) {
//         col = col.slice(1);
//         usePound = true;
//     }

//     var num = parseInt(col,16);

//     var r = (num >> 16) + amt;

//     if ( r > 255 ) r = 255;
//     else if  (r < 0) r = 0;

//     var b = ((num >> 8) & 0x00FF) + amt;

//     if ( b > 255 ) b = 255;
//     else if  (b < 0) b = 0;

//     var g = (num & 0x0000FF) + amt;

//     if ( g > 255 ) g = 255;
//     else if  ( g < 0 ) g = 0;

//     return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
// }


// const unhilightColor = new ZeaEngine.Color(0, 0, 0, 0);
// const hilightConstructionColor = new ZeaEngine.Color(1, 0, 0, 0.5);

class Task {
  constructor(index) {
    // this.active = false;
    this.name = "";
    this.index = index;
    this.selected = false;//new ZeaEngine.BooleanParameter();

    this.taskType = 1; // 1=Construction, 2=Equipment.
    this.state = -1; // 0 = Before, 1=During, 2=After.
    this.progress = 0;

    
    this.childTasks = [];
    this.color = ZeaEngine.Color.random(0.25)
    
    
    // this.scene = scene;
    this.__updateRange = this.__updateRange.bind(this)
    this.rangeChanged = new ZeaEngine.Signal();
    this.progressChanged = new ZeaEngine.Signal();
  }

  // getName() {
  //   return this.name;
  // }

  // getName() {
  //   return this.name;
  // }

  __updateRange(start, end) {
    let rangeChanged = false;
    if (!this.start || start < this.start) {
      this.start = start;
      rangeChanged = true;
    }
    if (!this.end || end > this.end) {
      this.end = end;
      rangeChanged = true;
    }
    if (rangeChanged) {
      this.duration = this.end - this.start;
      this.rangeChanged.emit(this.start, this.end);
    }
  }

  addChildTask(childTask) {
    childTask.color = this.color.lerp(new ZeaEngine.Color(0,0,0), 0.1);
    this.childTasks.push(childTask);
    if (childTask.start && childTask.end)
      this.__updateRange(childTask.start, childTask.end)
    childTask.rangeChanged.connect(this.__updateRange)
    // this.invalid = true;
  }

  generateLookaheadTasks(){
    
        // Generate Lookahdea tasks
        const numLookaheadTasks = randomInt(2, 8);
        const parentDuration = this.end - this.start;
        for(let i=0; i<numLookaheadTasks; i++) {
            // const start = new Date(this.start + Math.floor(parentDuration * Math.random() * 0.5));
            const hours = randomInt(1, 14);
            const start = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.start, hours, 'day');
            // const end=new Date(this.start + (hours * 24 * 60 * 60 * 1000));
            const end = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(start, hours, 'day');
            
            const childTask = new Task();
            childTask.name = "Lookahhead" + i;
            childTask.color = this.color.lerp(new ZeaEngine.Color(0,0,0), 0.2);
            childTask.index = i;
            childTask.id = this.id + "_" + i;
            childTask.start = start;
            childTask.end = end;
            this.childTasks.push(childTask);
        }
        return numLookaheadTasks;
  }

  loadJSON(json) {
    this.id = json.id ? json.id : generate_id(json);
    this.name = json.name;
    this.color = new ZeaEngine.Color(json.color);

    this.start = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].parse(json.start);
    this.end = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].parse(json.end);

    // make task invalid if duration too large
    // if (date_utils.diff(res._end, res._start, 'year') > 10) {
    //     json.end = null;
    // }

    // invalid dates
    // if (!json.start && !json.end) {
    //     const today = date_utils.today();
    //     res.start = today;
    //     res.end = date_utils.add(today, 2, 'day');
    // }

    // if (!json.start && json.end) {
    //     res.start = date_utils.add(res.end, -2, 'day');
    // }

    // if (json.start && !json.end) {
    //     res.end = date_utils.add(res.start, 2, 'day');
    // }

    // if hours is not set, assume the last day is full day
    // e.g: 2018-09-09 becomes 2018-09-09 23:59:59
    const task_end_values = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].get_date_values(this.end);
    if (task_end_values.slice(3).every(d => d === 0)) {
        this.end = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.end, 24, 'hour');
    }

    // invalid flag
    // if (!json.start || !json.end) {
    //     this.invalid = true;
    // }

    // dependencies
    if (typeof json.dependencies === 'string' || !json.dependencies) {
        let deps = [];
        if (json.dependencies) {
            deps = json.dependencies
                .split(',')
                .map(d => d.trim())
                .filter(d => d);
        }
        this.dependencies = deps;
    }


    // continue down the tree.
    if (json.child_tasks) {
        this.childTasks = json.child_tasks.map((taskJson, index) => {
            const task = new Task(index);
            task.loadJSON(taskJson);
            return task;
        });
    }
    else {
      this.generateLookaheadTasks();
    }
  }

  loadMSProjectXLSX(row, colorHex) {
    this.id = row['Display ID'];
    this.name = row['Task Name'];
    this.color = new ZeaEngine.Color(colorHex);

    if ('Task Type' in row) {
      const taskType = row['Task Type'];
      if(taskType == 'Temporary' || taskType == 'Equipment')
        this.taskType = 2;
    }

    // this.active = row['Active'] == '1';

    if ('Attached' in row) {
      this.attachedTo = row['Attached'];
      // if (attachedTo != "Explicit Selection")
        // this.selectionSet = selectionSets.resolvePath(attachedTo.split('->'), this.name);
    }

    if ('Planned Start' in row) {
      this.start = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].parseXLSXDate(row['Planned Start']);
      // this.start = moment(row['Planned Start'], "MM/DD/YYYY").toDate();
    }
    if ('Planned End' in row) {
      this.end = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].parseXLSXDate(row['Planned End']);
    }
    if (this.start && this.end) {
      this.duration = this.end - this.start;
    }
    // if ('Duration' in row) {
    //   this.duration = Number.parseInt(row['Duration']);
    // }

    // this.animation = row['Animation'];
    // this.animationBehaviour = row['Animation Behaviour'];
  }
  
  bindToSelectionSet(sceneRoot, selectionSets) {
    if (this.attachedTo && this.attachedTo != "Explicit Selection") {
      const path = this.attachedTo.split('->');
      let item = sceneRoot.resolvePath(path);
      if(item  && !(item instanceof ZeaEngine.Group)) {
        // Some tasks need to append the name to the path to get the
        // target group. This just seems to be a quirk of the schedule we have.
        item = item.getChildByName(this.name);
      }
      if(!item && path[1] == "Architectural") {
        item = sceneRoot.resolvePath(path);
      }
      if(item && item instanceof ZeaEngine.Group) {
        this.group = item;
        if(this.taskType == TASK_TYPES.Construction) {
          this.group.getParameter('HighlightColor').setValue(TASK_COLORS.NEW_CONSTRUCTION);
        }
        else if(this.taskType == TASK_TYPES.Equipment) {
          this.group.getParameter('HighlightColor').setValue(TASK_COLORS.EQUIPMENT);
        }
        this.group.getParameter('HighlightFill').setValue(0.25);
      }
      else {
        if(item)
          console.log(this.name, " Group found:", this.attachedTo)
        console.log(this.name, " Group not found:", this.attachedTo)
      }
    }
    this.childTasks.forEach((task) => {
      task.bindToSelectionSet(sceneRoot, selectionSets);
    });
  }

  activate() {
    // All states get inialized to the Before state.
  }

  loadAsset() {
    const asset = this.group.getParameter('SearchRoot').getValue();
    if (asset) {
      asset.setVisible(true);
      if(!asset.isLoaded()) {
        asset.loadDataFile();
      }
    }
  }

  setBefore() {
    if (this.group) {
      if (this.state == STATE_TYPES.DURING && this.taskType == TASK_TYPES.Construction) {
        // this.group.removeHighlight(this.name, true);
        this.group.getParameter('Highlighted').setValue(false)
      }
      this.group.setVisible(false);
    }

    if (this.progress != 0) {
      this.progress = 0;
      this.progressChanged.emit(this.progress)
    }
    this.state = STATE_TYPES.BEFORE;
  }

  setAfter() {
    if (this.group) {
      // console.log(this.name, "Deactivate After")
      this.loadAsset();

      if(this.taskType == TASK_TYPES.Construction) {
        if (this.state == STATE_TYPES.BEFORE) 
          this.group.setVisible(true);
        else if (this.state == STATE_TYPES.DURING) {
          // this.group.removeHighlight(this.name, true);
          this.group.getParameter('Highlighted').setValue(false)
        }
      }
      else if (this.taskType == TASK_TYPES.Equipment) {
        this.group.setVisible(false);
      }
    }

    if (this.progress != 100) {
      this.progress = 100;
      this.progressChanged.emit(this.progress)
    }
    this.state = STATE_TYPES.AFTER;
  }

  setDuring() {
    if (this.group) {
      // console.log(this.name, "Activate")
      this.loadAsset();

      if(this.taskType == TASK_TYPES.Construction) {
        if (this.state == STATE_TYPES.BEFORE) {
          this.group.setVisible(true);
        }
        // this.group.addHighlight(this.name, TASK_COLORS.NEW_CONSTRUCTION, true);
        this.group.getParameter('Highlighted').setValue(true)
      }
      else {
        this.group.setVisible(true);
      }
    }

    this.state = STATE_TYPES.DURING;
  }

  update(currentDate) {
    
    if (currentDate < this.start) {
      if (this.state != STATE_TYPES.BEFORE)
        this.setBefore();
    } else if (currentDate > (this.end)) {
      if (this.state != STATE_TYPES.AFTER)
        this.setAfter();
    } else {
      if (this.state != STATE_TYPES.DURING)
        this.setDuring();
      if(this.duration > 0) {
        this.progress = ((currentDate - this.start) / this.duration) * 100;
        this.progressChanged.emit(this.progress)
      }
    }

    this.childTasks.forEach((task) => {
      task.update(currentDate);
    });
  }
}



/***/ }),

/***/ "./src/viewer.js":
/*!***********************!*\
  !*** ./src/viewer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewer; });
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_utils */ "./src/date_utils.js");
/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg_utils */ "./src/svg_utils.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./src/bar.js");
/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrow */ "./src/arrow.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup */ "./src/popup.js");







function smoothStep(edge0, edge1, x) {
    const t = Math.clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
};

class Viewer {
    constructor(wrapper, schedule, options) {
        this.schedule = schedule;

        this.setup_options(options);
        this.setup_wrapper(wrapper);
        this.box = {
            x: 0,
            y: 0
        };
        // this.setup_tasks(tasks);
        // initialize with default view mode
        if(this.schedule.isLoaded)
            this.change_view_mode();
        this.schedule.loaded.connect(()=>{
            this.change_view_mode();
            this.bind_events();
        })
    }

    mount(wrapper) {
        // this.setup_wrapper(wrapper);
    }

    get start() {
        return this.gantt_start;
    }

    get end() {
        return this.gantt_end;
    }

    setup_wrapper(element) {

        // CSS Selector is passed
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        // wrapper element
        this.$container = document.createElement('div');
        this.$container.classList.add('sced-container');
        this.$container.style['position'] = 'relative';
        this.$container.style['height'] = '100%';
        this.$container.style['width'] = '100%';
        element.appendChild(this.$container);

        // create it
        this.$svg = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('svg', {
            append_to: this.$container,
            class: 'sced'
        });

        // popup wrapper
        this.popup_wrapper = document.createElement('div');
        this.popup_wrapper.classList.add('popup-wrapper');
        this.$container.appendChild(this.popup_wrapper);
        
        this.tr = [0,0];
        this.sc = [1,1];
    }

    setup_options(options) {
        const default_options = {
            header_height: 40,
            column_width: 30,
            step: 24,
            view_modes: [
                'Quarter Day',
                'Half Day',
                'Day',
                'Week',
                'Month',
                'Year'
            ],
            bar_height: 26,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 12,
            view_mode: 'Day',
            date_format: 'YYYY-MM-DD',
            popup_trigger: 'click',
            custom_popup_html: null,
            language: 'en',
            child_y_scale: 0.25,
            mouse_wheel_zoom_speed: -0.0004,
            min_bar_scY: 0.05,
            min_text_scY: 0.5,
            max_text_scY: 2.5,
            double_click_time: 250
        };
        this.options = Object.assign({}, default_options, options);
    }

    // setup_tasks(tasks) {
    //     // prepare tasks
    //     this.schedule.tasks = tasks.map((task, i) => {
    //         // convert to Date objects
    //         // task.start = date_utils.parse(task.start);
    //         // task.end = date_utils.parse(task.end);

    //         // // make task invalid if duration too large
    //         // if (date_utils.diff(task.end, task.start, 'year') > 10) {
    //         //     task.end = null;
    //         // }

    //         // // cache index
    //         // task.index = i;

    //         // // invalid dates
    //         // // if (!task.start && !task.end) {
    //         // //     const today = date_utils.today();
    //         // //     task.start = today;
    //         // //     task.end = date_utils.add(today, 2, 'day');
    //         // // }

    //         // // if (!task.start && task.end) {
    //         // //     task.start = date_utils.add(task.end, -2, 'day');
    //         // // }

    //         // // if (task.start && !task.end) {
    //         // //     task.end = date_utils.add(task.start, 2, 'day');
    //         // // }

    //         // // if hours is not set, assume the last day is full day
    //         // // e.g: 2018-09-09 becomes 2018-09-09 23:59:59
    //         // const task_end_values = date_utils.get_date_values(task.end);
    //         // if (task_end_values.slice(3).every(d => d === 0)) {
    //         //     task.end = date_utils.add(task.end, 24, 'hour');
    //         // }

    //         // // invalid flag
    //         // if (!task.start || !task.end) {
    //         //     task.invalid = true;
    //         // }

    //         // // dependencies
    //         // if (typeof task.dependencies === 'string' || !task.dependencies) {
    //         //     let deps = [];
    //         //     if (task.dependencies) {
    //         //         deps = task.dependencies
    //         //             .split(',')
    //         //             .map(d => d.trim())
    //         //             .filter(d => d);
    //         //     }
    //         //     task.dependencies = deps;
    //         // }

    //         // uids
    //         // if (!task.id) {
    //         //     task.id = generate_id(task);
    //         // }

    //         return task;
    //     });

    // }

    setup_dependencies() {
        this.dependency_map = {};
        for (let t of this.schedule.tasks) {
            for (let d of t.dependencies) {
                this.dependency_map[d] = this.dependency_map[d] || [];
                this.dependency_map[d].push(t.id);
            }
        }
    }

    refresh(schedule) {
        // this.setup_tasks(tasks);
        this.schedule;
        this.change_view_mode();
    }

    change_view_mode(mode = this.options.view_mode) {
        this.update_view_scale(mode);
        this.setup_dates();
        this.build();
        // fire viewmode_change event
        this.trigger_event('view_change', [mode]);
    }

    update_view_scale(view_mode) {
        this.options.view_mode = view_mode;

        if (view_mode === 'Day') {
            this.options.step = 24;
            this.options.column_width = 38;
        } else if (view_mode === 'Half Day') {
            this.options.step = 24 / 2;
            this.options.column_width = 38;
        } else if (view_mode === 'Quarter Day') {
            this.options.step = 24 / 4;
            this.options.column_width = 38;
        } else if (view_mode === 'Week') {
            this.options.step = 24 * 7;
            this.options.column_width = 140;
        } else if (view_mode === 'Month') {
            this.options.step = 24 * 30;
            this.options.column_width = 120;
        } else if (view_mode === 'Year') {
            this.options.step = 24 * 365;
            this.options.column_width = 120;
        }
    }

    setup_dates() {
        this.setup_gantt_dates();
        this.setup_date_values();
    }

    setup_gantt_dates() {
        this.gantt_start = this.gantt_end = null;

        for (let task of this.schedule.tasks) {
            // set global start and end date
            if (!this.gantt_start || task.start < this.gantt_start) {
                this.gantt_start = task.start;
            }
            if (!this.gantt_end || task.end > this.gantt_end) {
                this.gantt_end = task.end;
            }
        }

        this.gantt_start = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].start_of(this.gantt_start, 'day');
        this.gantt_end = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].start_of(this.gantt_end, 'day');
        
        this.current_date = this.gantt_start;

        // add date padding on both sides
        // if (this.view_is(['Quarter Day', 'Half Day'])) {
        //     this.gantt_start = date_utils.add(this.gantt_start, -7, 'day');
        //     this.gantt_end = date_utils.add(this.gantt_end, 7, 'day');
        // } else if (this.view_is('Month')) {
        //     this.gantt_start = date_utils.start_of(this.gantt_start, 'year');
        //     this.gantt_end = date_utils.add(this.gantt_end, 1, 'year');
        // } else if (this.view_is('Year')) {
        //     this.gantt_start = date_utils.add(this.gantt_start, -2, 'year');
        //     this.gantt_end = date_utils.add(this.gantt_end, 2, 'year');
        // } else {
        //     this.gantt_start = date_utils.add(this.gantt_start, -1, 'month');
        //     this.gantt_end = date_utils.add(this.gantt_end, 1, 'month');
        // }
    }

    setup_date_values() {
        this.dates = [];
        let cur_date = null;

        while (cur_date === null || cur_date < this.gantt_end) {
            if (!cur_date) {
                cur_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(this.gantt_start);
            } else {
                if (this.view_is('Year')) {
                    cur_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(cur_date, 1, 'year');
                } else if (this.view_is('Month')) {
                    cur_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(cur_date, 1, 'month');
                } else {
                    cur_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(
                        cur_date,
                        this.options.step,
                        'hour'
                    );
                }
            }
            this.dates.push(cur_date);
        }
    }

    build() {
        this.clear();
        this.setup_layers();
        this.make_grid();
        this.make_bars();

        // this.setup_dependencies();
        // this.make_arrows();
        // this.map_arrows_on_bars();
        
        this.make_dates();
        this.make_time_slider();

        this.set_width();
        // this.set_scroll_position();
        
        this.frame_on_box(this.box);
        
        // this.set_transform([-200, -500], [1.6, 4])
    }

    setup_layers() {
        this.layers = {};

        this.layers.grid = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'grid',
            append_to: this.$svg
        });
        this.layers.gridTicks = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'gridTicks',
            append_to: this.$svg
        });
        this.gantttransform = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'transform',
            append_to: this.$svg
        });
        const layers = ['arrow', 'bar', 'details'];
        // make group layers
        for (let layer of layers) {
            this.layers[layer] = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
                class: layer,
                append_to: this.gantttransform
            });
        }
        // this.headertransform = createSVG('g', {
        //     class: 'transform',
        //     append_to: this.$svg
        // });
        this.layers.date = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
            class: 'date',
            append_to:  this.$svg
        });

    }

    set_transform(tr, sc) {
        this.tr = tr;
        this.sc = sc;
        
        this.layers.gridTicks.setAttribute("transform", `translate(${this.tr[0]}, ${this.options.header_height}) scale(${this.sc[0]}, ${this.tick_height})`);
        this.layers.date.setAttribute("transform", `translate(${tr[0]}, 0) scale(${sc[0]},1.0)`);
        this.gantttransform.setAttribute("transform", `translate(${tr[0] }, ${tr[1]}) scale(${sc[0]},${sc[1]}) `);
        
        // const viewBox = this.$svg.getAttribute('viewBox');
        const clientRect = this.$svg.getBoundingClientRect();
        
        // Now we build a box based on the current view transform.
        // The box x/y are at the center of the viewBox. (rather than top left.)
        // Add 10 to header height. Really quite confusing. See make_dates..
        const header_height = this.options.header_height + 10;
        const viewSize = {
            width: clientRect.width / this.sc[0],
            height: clientRect.height / this.sc[1]
        };
        const viewBox = {
            x: (-this.tr[0] / this.sc[0]),
            y: ((-this.tr[1] + header_height) / this.sc[1]),
            width: viewSize.width,
            height: viewSize.height
        }
        // console.log(this.tr, this.sc, viewBox)

        this.bars.forEach(bar => {
            // if (doBoxesIntersect(bar.box, viewBox))
                bar.propagate_transform(sc, viewBox)
        });
        const sc_inv = [1 / sc[0], 1];
        this.update_dates_text_transform(sc_inv);
    }

    zoom_on_point(pt, zoom) {
        const sc = [this.sc[0] + zoom[0], this.sc[1] + zoom[1]];

        const prev_sc_tr = [pt[0] * this.sc[0], pt[1] * this.sc[1]];
        const new_sc_tr = [pt[0] * sc[0], pt[1] * sc[1]];
        const dxy = [
            prev_sc_tr[0] - new_sc_tr[0],
            prev_sc_tr[1] - new_sc_tr[1]
        ];
        const tr = [this.tr[0] + dxy[0], this.tr[1] + dxy[1]];
        this.set_transform(tr, sc);
    }

    frame_on_box(box) {
        const clientRect = this.$svg.getBoundingClientRect();
        const header_height = this.options.header_height + 10;
        const targetsc = [
            (clientRect.width - this.options.padding * 2) / box.width,
            (clientRect.height - header_height - this.options.padding * 2) /
                box.height
        ];
        const targettr = [
            (-box.x * targetsc[0]) + this.options.padding,
            (-box.y * targetsc[1]) + header_height + this.options.padding
        ];
        const starttr = [this.tr[0], this.tr[1]];
        const startsc = [this.sc[0], this.sc[1]];
        if(this.__focusIntervalId) {
            clearInterval(this.__focusIntervalId);
        }
        const count = 30;
        let i = 0;
        const applyMovement = () => {
            i++;
            const t = smoothStep(0.0, 1.0, i / count);
            const tr = [
                starttr[0] + ((targettr[0] - starttr[0]) * t),
                starttr[1] + ((targettr[1] - starttr[1]) * t)
            ];
            const sc = [
                startsc[0] + ((targetsc[0] - startsc[0]) * t),
                startsc[1] + ((targetsc[1] - startsc[1]) * t)
            ];
            this.set_transform(tr, sc);

            if(i < count){
                this.__focusIntervalId = setTimeout(applyMovement, 20);
            } else {
                this.__focusIntervalId = null;
            }
        }
        applyMovement();
    }

    make_grid() {
        // this.make_grid_background();
        // this.make_grid_rows();
        this.make_grid_ticks();
        // this.make_grid_header();
    }

    make_grid_background() {
        // const grid_width = this.dates.length * this.options.column_width;
        // const grid_height =
        //     this.options.header_height +
        //     this.options.padding +
        //     (this.options.bar_height + this.options.padding) *
        //         this.schedule.tasks.length;

        // createSVG('rect', {
        //     x: 0,
        //     y: 0,
        //     width: grid_width,
        //     height: grid_height,
        //     class: 'grid-background',
        //     append_to: this.layers.grid
        // });

        // $.attr(this.$svg, {
        //     height: '100%',
        //     width: '100%'
        // });
    }

    // make_grid_rows() {
    //     const rows_layer = createSVG('g', { append_to: this.layers.grid });
    //     const lines_layer = createSVG('g', { append_to: this.layers.grid });

    //     const row_width = this.dates.length * this.options.column_width;
    //     const row_height = this.options.bar_height + this.options.padding;

    //     let row_y = this.options.header_height + this.options.padding / 2;

    //     for (let task of this.schedule.tasks) {
    //         createSVG('rect', {
    //             x: 0,
    //             y: row_y,
    //             width: row_width,
    //             height: row_height,
    //             class: 'grid-row',
    //             append_to: rows_layer
    //         });

    //         createSVG('line', {
    //             x1: 0,
    //             y1: row_y + row_height,
    //             x2: row_width,
    //             y2: row_y + row_height,
    //             class: 'row-line',
    //             append_to: lines_layer
    //         });

    //         row_y += this.options.bar_height + this.options.padding;
    //     }
    // }

    // make_grid_header() {
    //     const header_width = this.dates.length * this.options.column_width;
    //     const header_height = this.options.header_height + 10;
    //     createSVG('rect', {
    //         x: 0,
    //         y: 0,
    //         width: header_width,
    //         height: header_height,
    //         class: 'grid-header',
    //         append_to: this.layers.date
    //     });
    // }

    make_grid_ticks() {
        let tick_x = 0;
        const tick_y = 0;//this.options.header_height + this.options.padding / 2;
        const cur_height = this.$svg.getBoundingClientRect().height;
        this.tick_height = cur_height - this.options.header_height;
            // (this.options.bar_height + this.options.padding) *
            // this.schedule.tasks.length;

        for (let date of this.dates) {
            let tick_class = 'tick';
            // thick tick for monday
            if (this.view_is('Day') && date.getDate() === 1) {
                tick_class += ' thick';
            }
            // thick tick for first week
            if (
                this.view_is('Week') &&
                date.getDate() >= 1 &&
                date.getDate() < 8
            ) {
                tick_class += ' thick';
            }
            // thick ticks for quarters
            if (this.view_is('Month') && (date.getMonth() + 1) % 3 === 0) {
                tick_class += ' thick';
            }

            Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('path', {
                d: `M ${tick_x} ${tick_y} v 1`,
                class: tick_class,
                append_to: this.layers.gridTicks
            });

            if (this.view_is('Month')) {
                tick_x +=
                    _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].get_days_in_month(date) *
                    this.options.column_width /
                    30;
            } else {
                tick_x += this.options.column_width;
            }
        }
        
        ZeaEngine.onResize(this.$container, ()=>{
            const cur_height = this.$container.clientHeight;
            this.tick_height = cur_height - this.options.header_height;
            this.layers.gridTicks.setAttribute("transform", `translate(${this.tr[0]}, ${this.options.header_height}) scale(${this.sc[0]}, ${this.tick_height})`);
        })
    }


    make_dates() {
        const header_width = this.dates.length * this.options.column_width;
        const header_height = this.options.header_height + 10;
        this.$datesRect = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('rect', {
            x: 0,
            y: 0,
            width: header_width,
            height: header_height,
            class: 'grid-header',
            append_to: this.layers.date
        });
        const sc_x = 1/this.sc[0];
        const sc_y = 1/this.sc[1];

        this.drawn_dates = [];
        for (let date of this.get_dates_to_draw()) {
            
            const g = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
                transform: `translate(${date.lower_x},${date.lower_y}) scale(${sc_x},${sc_y})`,
                append_to: this.layers.date
            });
            date.lower_g = g;

            Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('text', {
                innerHTML: date.lower_text,
                class: 'lower-text',
                append_to: g
            });

            if (date.upper_text) {
                const g = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
                    transform: `translate(${date.upper_x},${date.upper_y}) scale(${sc_x},${sc_y})`,
                    append_to: this.layers.date
                });
                const $upper_text = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('text', {
                    innerHTML: date.upper_text,
                    class: 'upper-text',
                    append_to: g
                });

                // remove out-of-bound dates
                if ($upper_text.getBBox().x2 > this.layers.grid.getBBox().width) {
                    $upper_text.remove();
                }
                else {
                    date.upper_g = g;
                }
            }
            this.drawn_dates.push(date);
        }
    }

    
    make_time_slider() {
        console.log("make_time_slider")
        const cur_height = this.$svg.getBoundingClientRect().height;
        
        const sc_x = 1/this.sc[0];
        const sc_y = 1/this.sc[1];
        // highlight today's date
        // if (this.view_is('Day')) {
            this.timeSliderX =
                _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(this.current_date, this.gantt_start, 'hour') /
                this.options.step *
                this.options.column_width;
            const y = 0;

            this.timeSliderG = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('g', {
                transform: `translate(${this.timeSliderX},1) scale(${sc_x},1)`,
                append_to: this.layers.date
            });

            const width = 10;//this.options.column_width;
            const height = cur_height;
                // (this.options.bar_height + this.options.padding) *
                //     this.schedule.tasks.length +
                // this.options.header_height +
                // this.options.padding / 2;

            this.timeSlider = Object(_svg_utils__WEBPACK_IMPORTED_MODULE_1__["createSVG"])('rect', {
                x: 0,
                y: 0,
                width,
                height,
                class: 'today-highlight',
                append_to: this.timeSliderG
            });
            ZeaEngine.onResize(this.$container, ()=>{
                const cur_height = this.$container.clientHeight;
                this.timeSlider.setAttribute("height", cur_height);
            })
        // }
    }

    set_current_date(current_date, trigger_event=true) {
        this.current_date = current_date;
        // console.log("set_current_date:", this.current_date)

        this.timeSliderX =
            (_date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(this.current_date, this.gantt_start, 'hour') /
            this.options.step *
            this.options.column_width);
            
        const sc_x = 1/this.sc[0];
        this.timeSliderG.setAttribute("transform", `translate(${this.timeSliderX},0) scale(${sc_x},1)`)

        if(trigger_event){
            this.schedule.setCurrentDate(current_date)

            this.trigger_event('set_current_date', [this.current_date]);
        }
    }

    update_dates_text_transform(sc_inv) {
        this.drawn_dates.forEach(date => {
            date.lower_g.setAttribute("transform", `translate(${date.lower_x},${date.lower_y}) scale(${sc_inv[0]},${sc_inv[1]})`)
            if (date.upper_g) {
                date.upper_g.setAttribute("transform", `translate(${date.upper_x},${date.upper_y}) scale(${sc_inv[0]},${sc_inv[1]})`)
            }
        })
        this.timeSliderG.setAttribute("transform", `translate(${this.timeSliderX},0) scale(${sc_inv[0]},1)`)
    }

    get_dates_to_draw() {
        let last_date = null;
        const dates = this.dates.map((date, i) => {
            const d = this.get_date_info(date, last_date, i);
            last_date = date;
            return d;
        });
        return dates;
    }

    get_date_info(date, last_date, i) {
        if (!last_date) {
            last_date = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(date, 1, 'year');
        }
        const date_text = {
            'Quarter Day_lower': _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                date,
                'HH',
                this.options.language
            ),
            'Half Day_lower': _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                date,
                'HH',
                this.options.language
            ),
            Day_lower:
                date.getDate() !== last_date.getDate()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D', this.options.language)
                    : '',
            Week_lower:
                date.getMonth() !== last_date.getMonth()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D MMM', this.options.language)
                    : _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D', this.options.language),
            Month_lower: _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'MMMM', this.options.language),
            Year_lower: _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'YYYY', this.options.language),
            'Quarter Day_upper':
                date.getDate() !== last_date.getDate()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D MMM', this.options.language)
                    : '',
            'Half Day_upper':
                date.getDate() !== last_date.getDate()
                    ? date.getMonth() !== last_date.getMonth()
                      ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D MMM', this.options.language)
                      : _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'D', this.options.language)
                    : '',
            Day_upper:
                date.getMonth() !== last_date.getMonth()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'MMMM', this.options.language)
                    : '',
            Week_upper:
                date.getMonth() !== last_date.getMonth()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'MMMM', this.options.language)
                    : '',
            Month_upper:
                date.getFullYear() !== last_date.getFullYear()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'YYYY', this.options.language)
                    : '',
            Year_upper:
                date.getFullYear() !== last_date.getFullYear()
                    ? _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].format(date, 'YYYY', this.options.language)
                    : ''
        };

        const base_pos = {
            x: i * this.options.column_width,
            lower_y: this.options.header_height,
            upper_y: this.options.header_height - 20
        };

        const x_pos = {
            'Quarter Day_lower': this.options.column_width * 4 / 2,
            'Quarter Day_upper': 0,
            'Half Day_lower': this.options.column_width * 2 / 2,
            'Half Day_upper': 0,
            Day_lower: this.options.column_width / 2,
            Day_upper: this.options.column_width * 30 / 2,
            Week_lower: 0,
            Week_upper: this.options.column_width * 4 / 2,
            Month_lower: this.options.column_width / 2,
            Month_upper: this.options.column_width * 12 / 2,
            Year_lower: this.options.column_width / 2,
            Year_upper: this.options.column_width * 30 / 2
        };

        return {
            upper_text: date_text[`${this.options.view_mode}_upper`],
            lower_text: date_text[`${this.options.view_mode}_lower`],
            upper_x: base_pos.x + x_pos[`${this.options.view_mode}_upper`],
            upper_y: base_pos.upper_y,
            lower_x: base_pos.x + x_pos[`${this.options.view_mode}_lower`],
            lower_y: base_pos.lower_y
        };
    }

    make_bars() {
        let pos_y = 0;
        let width = 0;
        this.bars = this.schedule.tasks.map(task => {
            const bar = new _bar__WEBPACK_IMPORTED_MODULE_2__["default"](this, task, this, pos_y);
            this.layers.bar.appendChild(bar.group);
            pos_y += bar.height + (this.options.padding * 0.5);
            if (bar.box.width > width) width = bar.box.width;
            // console.log(bar.task.name, {x: bar.x, y: bar.y, width: bar.width,height: bar.height})
            return bar;
        });

        this.box.height = pos_y;
        this.box.width = width;
    }

    make_arrows() {
        this.dependency_map = {};
        for (let t of this.schedule.tasks) {
            for (let d of t.dependencies) {
                this.dependency_map[d] = this.dependency_map[d] || [];
                this.dependency_map[d].push(t.id);
            }
        }

        this.arrows = [];
        for (let task of this.schedule.tasks) {
            let arrows = [];
            arrows = task.dependencies
                .map(task_id => {
                    const dependency = this.get_task(task_id);
                    if (!dependency) return;
                    const arrow = new _arrow__WEBPACK_IMPORTED_MODULE_3__["default"](
                        this,
                        this.bars[dependency.index], // from_task
                        this.bars[task.index] // to_task
                    );
                    this.layers.arrow.appendChild(arrow.element);
                    return arrow;
                })
                .filter(Boolean); // filter falsy values
            this.arrows = this.arrows.concat(arrows);
        }
    }

    map_arrows_on_bars() {
        for (let bar of this.bars) {
            bar.arrows = this.arrows.filter(arrow => {
                return (
                    arrow.from_task.task.id === bar.task.id ||
                    arrow.to_task.task.id === bar.task.id
                );
            });
        }
    }

    set_width() {
        const cur_width = this.$svg.getBoundingClientRect().width;
        // const actual_width = this.$svg
        //     .querySelector('.grid .grid-row')
        //     .getAttribute('width');
        // const actual_width = this.layers.grid.querySelector('.grid-row').getAttribute('width');
        const actual_width = this.layers.date.querySelector('.grid-header').getAttribute('width');
        if (cur_width < actual_width) {
            this.$svg.setAttribute('width', actual_width);
        }
    }

    set_scroll_position() {
        // const parent_element = this.$svg.parentElement;
        // if (!parent_element) return;

        const hours_before_first_task = _date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].diff(
            this.get_oldest_starting_date(),
            this.gantt_start,
            'hour'
        );

        const scroll_pos =
            hours_before_first_task /
                this.options.step *
                this.options.column_width -
            this.options.column_width;

        console.log("scroll_pos:", scroll_pos)
        // parent_element.scrollLeft = scroll_pos;
        this.set_transform([-scroll_pos, 0], [1, 1])
    }


    bind_events() {
        let is_down = false;
        let is_dragging = false;
        let mousedown_pos = null;
        let mousedown_tr = null;
        
        let is_resizing_left = false;
        let is_resizing_right = false;
        // let parent_bar_id = null;
        // let bars = []; // instanceof Bar
        // let bar_being_dragged = null;
        let prevDownTime = 0;
        let is_dragging_current_date = false;
        let currentdate_on_start = 0;
        let x_on_start = 0;

        function action_in_progress() {
            return is_dragging || is_resizing_left || is_resizing_right;
        }

        // If the mouse clicks on the header...
        // Hide the pop-up if it is displayed.
        _svg_utils__WEBPACK_IMPORTED_MODULE_1__["$"].on(
            this.$svg,
            this.options.popup_trigger,
            '.grid-row, .grid-header',
            () => {
                this.unselect_all();
                this.hide_popup();
            }
        );
        _svg_utils__WEBPACK_IMPORTED_MODULE_1__["$"].on(this.$svg, 'mousedown', (e, element) => {
            if (e.target == this.timeSlider) {
                x_on_start = e.offsetX;
                is_dragging_current_date = true;
                currentdate_on_start = this.current_date;
                e.preventDefault();
                return;
            }
            mousedown_pos = [e.clientX, e.clientY];
            mousedown_tr = [this.tr[0], this.tr[1]];
            is_down = true;
            
            const downTime = Date.now();
            if((downTime - prevDownTime) < this.options.double_click_time) {
                // Double click.
                if (e.srcElement == this.$svg) {
                    console.log("frame_on_box:", this.box)
                    this.frame_on_box(this.box);
                } else if (event.target == this.$datesRect) {
                    const dx = ((e.clientX - this.tr[0]) / this.sc[0])/this.options.column_width;
                    this.set_current_date(_date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.gantt_start, dx*30, 'day'));
                    event.preventDefault();
                    return;
                }
            }
            prevDownTime = downTime;
        });
        
        // $.on(this.$svg, 'mousedown', '.bar-wrapper, .handle', (e, element) => {
        //     console.log('mousedown')
        //     // const bar_wrapper = $.closest('.bar-wrapper', element);

        //     // if (element.classList.contains('left')) {
        //     //     is_resizing_left = true;
        //     // } else if (element.classList.contains('right')) {
        //     //     is_resizing_right = true;
        //     // } else if (element.classList.contains('bar-wrapper')) {
        //     //     is_dragging = true;
        //     // }

        //     // bar_wrapper.classList.add('active');

        //     // x_on_start = e.clientX;
        //     // y_on_start = e.clientY;

        //     // parent_bar_id = bar_wrapper.getAttribute('data-id');
        //     // const ids = [
        //     //     parent_bar_id,
        //     //     ...this.get_all_dependent_tasks(parent_bar_id)
        //     // ];
        //     // bars = ids.map(id => this.get_bar(id));

        //     // bar_being_dragged = parent_bar_id;

        //     // bars.forEach(bar => {
        //     //     const $bar = bar.$bar;
        //     //     $bar.ox = $bar.getX();
        //     //     $bar.oy = $bar.getY();
        //     //     $bar.owidth = $bar.getWidth();
        //     //     $bar.finaldx = 0;
        //     // });
        // });

        document.addEventListener('mousemove', e => {
            if (is_dragging_current_date) {
                const dx = ((e.offsetX - x_on_start) / this.sc[0])/this.options.column_width;
                this.set_current_date(_date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(currentdate_on_start, dx*30, 'day'));
                e.preventDefault();
                return;
            }
            if (is_down) {
                const dx = e.clientX - mousedown_pos[0];
                const dy = e.clientY - mousedown_pos[1];
                const tr = [mousedown_tr[0] + dx, mousedown_tr[1] + dy];

                if (Math.abs(dx) > 0 && Math.abs(dy) > 0) {
                    // Cancel any zooming that might be happening.
                    if (this.__focusIntervalId) {
                        clearInterval(this.__focusIntervalId);
                        this.__focusIntervalId = null;
                    }
                    this.set_transform(tr, this.sc);
                    is_dragging = true;
                }
            }

            // if (!action_in_progress()) return;
            // const dx = e.clientX - x_on_start;
            // const dy = e.clientY - y_on_start;

            // bars.forEach(bar => {
            //     const $bar = bar.$bar;
            //     $bar.finaldx = this.get_snap_position(dx);

            //     if (is_resizing_left) {
            //         if (parent_bar_id === bar.task.id) {
            //             bar.update_bar_position({
            //                 x: $bar.ox + $bar.finaldx,
            //                 width: $bar.owidth - $bar.finaldx
            //             });
            //         } else {
            //             bar.update_bar_position({
            //                 x: $bar.ox + $bar.finaldx
            //             });
            //         }
            //     } else if (is_resizing_right) {
            //         if (parent_bar_id === bar.task.id) {
            //             bar.update_bar_position({
            //                 width: $bar.owidth + $bar.finaldx
            //             });
            //         }
            //     } else if (is_dragging) {
            //         bar.update_bar_position({ x: $bar.ox + $bar.finaldx });
            //     }
            // });
        });

        document.addEventListener('mouseup', e => {
            // if (is_dragging || is_resizing_left || is_resizing_right) {
            //     bars.forEach(bar => bar.group.classList.remove('active'));
            // }

            if(is_dragging_current_date) {
                is_dragging_current_date = false;
                return;
            }
            is_down = false;
            is_dragging = false;
            is_resizing_left = false;
            is_resizing_right = false;
        });

        // $.on(this.$svg, 'mouseup', e => {
        //     console.log("this.$svg mouseup");
        //     // bar_being_dragged = null;
        //     // bars.forEach(bar => {
        //     //     const $bar = bar.$bar;
        //     //     if (!$bar.finaldx) return;
        //     //     bar.date_changed();
        //     //     bar.set_action_completed();
        //     // });
        // });

        const onWheel = (e) => {
            // Check to see if the mouse wheel event orriginates from 
            // something in our svg tree. If not, ignore it.
            // It could be for the GL viewport.
            let el = e.target;
            while (el != this.$svg)
                el = el.parentElement
            if (el != this.$svg)
                return;
            
            const modulator = 1.0;//event.shiftKey ? 0.2 : 1.0;
            const zoomDist = event.deltaY * this.options.mouse_wheel_zoom_speed * modulator;
        
            const dx = (event.altKey ? 0.0 : zoomDist) * this.sc[0];
            const dy = (event.shiftKey ? 0.0 : zoomDist) * this.sc[1];

            // Calculate the point in the transformed graph.
            const pt = [(e.offsetX - this.tr[0]) / this.sc[0], (e.offsetY - this.tr[1]) / this.sc[1]];
            this.zoom_on_point(pt, [dx, dy]);

            if(!window.addEventListener)
                e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (window.addEventListener)
        /** DOMMouseScroll is for mozilla. */
        window.addEventListener('wheel', onWheel, {passive: true});
        else {
        /** IE/Opera. */
        window.onmousewheel = document.onmousewheel = onWheel;
        }
        
        window.oncontextmenu = function() {
            return false;
        }
    
        //////////////////////////////////////////
        // Touch events
        const ongoingTouches = {};
        let moveMode = "";
        const startTouch = touch => {
            // console.log("startTouch:", touch.identifier)
            ongoingTouches[touch.identifier] = {
                pos: new ZeaEngine.Vec2(touch.clientX, touch.clientY)
            };
        }
        const endTouch = touch => {
            delete ongoingTouches[touch.identifier];
        }
        
        let mousedown_sc;
        let mousedown_pt;
        // $.on(this.$svg, 'touchstart', '.grid-header', (event, element) => {
        this.$svg.addEventListener("touchstart", (event) => {
            event.stopPropagation();
            event.preventDefault();
            for (let i = 0; i < event.changedTouches.length; i++) {
                startTouch(event.changedTouches[i]);
            }
            if (event.touches.length == 1) {
                mousedown_tr = [this.tr[0], this.tr[1]];
                const downTime = Date.now();
                if((downTime - prevDownTime) < this.options.double_click_time) {
                    // Double click.
                    if (event.srcElement == this.$svg) {
                        // console.log("frame_on_box:", this.box)
                        this.frame_on_box(this.box);
                    } else if (event.target == this.$datesRect) {
                        const touch = event.touches[0];
                        const dx = ((touch.clientX - this.tr[0]) / this.sc[0])/this.options.column_width;
                        this.set_current_date(_date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.gantt_start, dx*30, 'day'));
                        event.preventDefault();
                        return;
                    }
                }
                else {
                    if (event.target == this.timeSlider) {
                        x_on_start = event.touches[0].clientX;
                        is_dragging_current_date = true;
                        currentdate_on_start = this.current_date;
                        event.preventDefault();
                        return;
                    }
                    prevDownTime = downTime;
                }
            } else if (event.touches.length == 2) {
                mousedown_tr = [this.tr[0], this.tr[1]];
                mousedown_sc = [this.sc[0], this.sc[1]];
                for (let i = 0; i < event.touches.length; i++) {
                    startTouch(event.touches[i]);
                }
                // Calculate the point in the transformed graph.
                
                const touches = event.touches;
                const touch0 = touches[0];
                const touchData0 = ongoingTouches[touch0.identifier];
                const touch1 = touches[1];
                const touchData1 = ongoingTouches[touch1.identifier];
                if(touchData0 && touchData1){
                    const touchStartCenter = touchData1.pos.add(touchData0.pos).scale(0.5);
                    mousedown_pt = [(touchStartCenter.x - this.tr[0]) / this.sc[0], (touchStartCenter.y - this.tr[1]) / this.sc[1]];
                }
            }
        }, false);
        this.$svg.addEventListener("touchmove", (event) => {
            event.stopPropagation();
            event.preventDefault();
            
            const touches = event.touches;
            if (touches.length == 1 && moveMode !== "panAndZoom") {
                const touch = touches[0];
                const touchData = ongoingTouches[touch.identifier];

                if (is_dragging_current_date) {
                    const dx = ((touch.clientX - x_on_start) / this.sc[0])/this.options.column_width;
                    this.set_current_date(_date_utils__WEBPACK_IMPORTED_MODULE_0__["default"].add(currentdate_on_start, dx*30, 'day'));
                    event.preventDefault();
                    return;
                }
                
                // During double taps we seem to have no touch data.
                if(!touchData)
                    return;
                const touchPos = new ZeaEngine.Vec2(touch.clientX, touch.clientY);
                const dragVec = touchPos.subtract(touchData.pos);
                if (Math.abs(dragVec.x) > 0 && Math.abs(dragVec.y) > 0) {
                    // Cancel any zooming that might be happening.
                    if (this.__focusIntervalId) {
                        clearInterval(this.__focusIntervalId);
                        this.__focusIntervalId = null;
                    }
                    const tr = [mousedown_tr[0] + dragVec.x, mousedown_tr[1] + dragVec.y];
                    this.set_transform(tr, this.sc);
                    is_dragging = true;
                }
                moveMode = "pan";
            } else if (touches.length >= 2) {
                const touch0 = touches[0];
                const touchData0 = ongoingTouches[touch0.identifier];
                const touch1 = touches[1];
                const touchData1 = ongoingTouches[touch1.identifier];
                if(!touchData0 || !touchData1)
                    return;
 
                const touchStartCenter = touchData1.pos.add(touchData0.pos).scale(0.5);

                const touch0Pos = new ZeaEngine.Vec2(touch0.clientX, touch0.clientY);
                const touch1Pos = new ZeaEngine.Vec2(touch1.clientX, touch1.clientY);
                const touchCenter = touch0Pos.add(touch1Pos).scale(0.5);
                const dragVec = touchCenter.subtract(touchStartCenter);

                // Now measure the vector between the touches so we 
                // can see how much scaling we should apply on x and y
                const modulatorVec = touchData1.pos.subtract(touchData0.pos);
                modulatorVec.normalizeInPlace();
                modulatorVec.x = Math.abs(modulatorVec.x);
                modulatorVec.y = Math.abs(modulatorVec.y);
                if(modulatorVec.x < 0.45)
                    modulatorVec.x = 0.0;
                if(modulatorVec.y < 0.45)
                    modulatorVec.y = 0.0;

                const startSeparationX = touchData1.pos.x - touchData0.pos.x;
                const startSeparationY = touchData1.pos.y - touchData0.pos.y;
                const dragSeparationX = touch1Pos.x - touch0Pos.x;
                const dragSeparationY = touch1Pos.y - touch0Pos.y;
                const zoomX = dragSeparationX / startSeparationX;
                const zoomY = dragSeparationY / startSeparationY;

                
                const tr = [mousedown_tr[0] + dragVec.x, mousedown_tr[1] + dragVec.y];
                const zoom = [
                    ((zoomX * mousedown_sc[0]) - mousedown_sc[0]) * modulatorVec.x,
                    ((zoomY * mousedown_sc[1]) - mousedown_sc[1]) * modulatorVec.y
                ];
                const sc = [mousedown_sc[0] + zoom[0], mousedown_sc[1] + zoom[1]]
                // this.set_transform(tr, sc);

                // Calculate the point in the transformed graph.
                // const pt = [(touchCenter.x - tr[0]) / sc[0], (touchCenter.y - tr[1]) / sc[1]];
                const prev_sc_tr = [mousedown_pt[0] * mousedown_sc[0], mousedown_pt[1] * mousedown_sc[1]];
                const new_sc_tr = [mousedown_pt[0] * sc[0], mousedown_pt[1] * sc[1]];
                const dxy = [
                    prev_sc_tr[0] - new_sc_tr[0],
                    prev_sc_tr[1] - new_sc_tr[1]
                ];
                
                this.set_transform([tr[0] + dxy[0], tr[1] + dxy[1]], sc);

                moveMode = "panAndZoom";
            }
        }, false);
        this.$svg.addEventListener("touchend", (event) => {
            event.stopPropagation();
            for (let i = 0; i < event.changedTouches.length; i++) {
                endTouch(event.changedTouches[i]);
            }
            for (let i = 0; i < event.touches.length; i++) {
                startTouch(event.touches[i]);
            }
            mousedown_tr = [this.tr[0], this.tr[1]];
            mousedown_sc = [this.sc[0], this.sc[1]];
            moveMode = "";
            is_dragging = false;
            is_dragging_current_date = false;
        }, false);
        this.$svg.addEventListener("touchcancel", (event) => {
            event.stopPropagation();
            event.preventDefault();
        }, false);

        // this.bind_bar_progress();
    }

    // bind_bar_progress() {
    //     let x_on_start = 0;
    //     let y_on_start = 0;
    //     let is_resizing = null;
    //     let bar = null;
    //     let $bar_progress = null;
    //     let $bar = null;

    //     $.on(this.$svg, 'mousedown', '.handle.progress', (e, handle) => {
    //         is_resizing = true;
    //         x_on_start = e.offsetX;
    //         y_on_start = e.offsetY;

    //         const $bar_wrapper = $.closest('.bar-wrapper', handle);
    //         const id = $bar_wrapper.getAttribute('data-id');
    //         bar = this.get_bar(id);

    //         $bar_progress = bar.$bar_progress;
    //         $bar = bar.$bar;

    //         $bar_progress.finaldx = 0;
    //         $bar_progress.owidth = $bar_progress.getWidth();
    //         $bar_progress.min_dx = -$bar_progress.getWidth();
    //         $bar_progress.max_dx = $bar.getWidth() - $bar_progress.getWidth();
    //     });

    //     $.on(this.$svg, 'mousemove', e => {
    //         if (!is_resizing) return;
    //         let dx = e.offsetX - x_on_start;
    //         let dy = e.offsetY - y_on_start;

    //         if (dx > $bar_progress.max_dx) {
    //             dx = $bar_progress.max_dx;
    //         }
    //         if (dx < $bar_progress.min_dx) {
    //             dx = $bar_progress.min_dx;
    //         }

    //         const $handle = bar.$handle_progress;
    //         $.attr($bar_progress, 'width', $bar_progress.owidth + dx);
    //         $.attr($handle, 'points', bar.get_progress_polygon_points());
    //         $bar_progress.finaldx = dx;
    //     });

    //     $.on(this.$svg, 'mouseup', () => {
    //         is_resizing = false;
    //         if (!($bar_progress && $bar_progress.finaldx)) return;
    //         bar.progress_changed();
    //         bar.set_action_completed();
    //     });
    // }

    get_all_dependent_tasks(task_id) {
        let out = [];
        let to_process = [task_id];
        while (to_process.length) {
            const deps = to_process.reduce((acc, curr) => {
                acc = acc.concat(this.dependency_map[curr]);
                return acc;
            }, []);

            out = out.concat(deps);
            to_process = deps.filter(d => !to_process.includes(d));
        }

        return out.filter(Boolean);
    }

    get_snap_position(dx) {
        let odx = dx,
            rem,
            position;

        if (this.view_is('Week')) {
            rem = dx % (this.options.column_width / 7);
            position =
                odx -
                rem +
                (rem < this.options.column_width / 14
                    ? 0
                    : this.options.column_width / 7);
        } else if (this.view_is('Month')) {
            rem = dx % (this.options.column_width / 30);
            position =
                odx -
                rem +
                (rem < this.options.column_width / 60
                    ? 0
                    : this.options.column_width / 30);
        } else {
            rem = dx % this.options.column_width;
            position =
                odx -
                rem +
                (rem < this.options.column_width / 2
                    ? 0
                    : this.options.column_width);
        }
        return position;
    }

    unselect_all() {
        [...this.$svg.querySelectorAll('.bar-wrapper')].forEach(el => {
            el.classList.remove('active');
        });
    }

    view_is(modes) {
        if (typeof modes === 'string') {
            return this.options.view_mode === modes;
        }

        if (Array.isArray(modes)) {
            return modes.some(mode => this.options.view_mode === mode);
        }

        return false;
    }

    get_task(id) {
        return this.schedule.tasks.find(task => {
            return task.id === id;
        });
    }

    get_bar(id) {
        return this.bars.find(bar => {
            return bar.task.id === id;
        });
    }

    show_popup(options) {
        if (!this.popup) {
            this.popup = new _popup__WEBPACK_IMPORTED_MODULE_4__["default"](
                this.popup_wrapper,
                this.options.custom_popup_html
            );
        }
        this.popup.show(options);
    }

    hide_popup() {
        this.popup && this.popup.hide();
    }

    trigger_event(event, args) {
        if (this.options['on_' + event]) {
            this.options['on_' + event].apply(null, args);
        }
    }

    /**
     * Gets the oldest starting date from the list of tasks
     *
     * @returns Date
     * @memberof Sced
     */
    get_oldest_starting_date() {
        return this.schedule.tasks
            .map(task => task.start)
            .reduce(
                (prev_date, cur_date) =>
                    cur_date <= prev_date ? cur_date : prev_date
            );
    }

    /**
     * Clear all elements from the parent svg element
     *
     * @memberof Sced
     */
    clear() {
        this.$svg.innerHTML = '';
    }
}

function generate_id(task) {
    return (
        task.name +
        '_' +
        Math.random()
            .toString(36)
            .slice(2, 12)
    );
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9aZWFTY2VkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9aZWFTY2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvc2NlZC5zY3NzIiwid2VicGFjazovL1plYVNjZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1plYVNjZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9BZHZhbmNlZEdyb3VwLmpzIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvUXVlcnlQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9RdWVyeVNldFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9aZWFTY2VkLy4vc3JjL1F1ZXJ5U2V0V2lkZ2V0LmpzIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9iYXIuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9kYXRlX3V0aWxzLmpzIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9aZWFTY2VkLy4vc3JjL3NjZWQuc2Nzcz9hOTA0Iiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvc2NoZWR1bGUtY29sb3JzLmpzIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy9zdmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vWmVhU2NlZC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL1plYVNjZWQvLi9zcmMvdmlld2VyLmpzIl0sIm5h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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQixhQUFhLElBQUk7QUFDakIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxJQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsSUFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxJQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JxQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixRQUFRLEdBQUcsMEJBQTBCLEtBQUssUUFBUTtBQUN6RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRO0FBQzdELCtCQUErQixRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFROztBQUV4RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QjtBQUN2RTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLGtDQUFrQyxFQUFFO0FBQ3BDLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pWcUM7QUFDSjtBQUNnQjs7QUFFNUI7Ozs7Ozs7Ozs7Ozs7O0FDTHJCO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9FQSxjQUFjLG1CQUFPLENBQUMsaU1BQThGOztBQUVwSDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNUO0FBQ21CO0FBQ0Q7QUFDTTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQUk7QUFD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QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDVTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsMEJBQTBCLG1EQUFVO0FBQ3BDO0FBQ0Esd0JBQXdCLG1EQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtREFBVTtBQUMzQixlQUFlLG1EQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFVO0FBQ3RDO0FBQ0EsbUJBQW1CLG1EQUFVO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1WUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDSztBQUNuQjtBQUNJO0FBQ0E7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNERBQVM7QUFDN0I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG1EQUFVO0FBQ3JDLHlCQUF5QixtREFBVTs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFVO0FBQ3JDLGFBQWE7QUFDYjtBQUNBLCtCQUErQixtREFBVTtBQUN6QyxpQkFBaUI7QUFDakIsK0JBQStCLG1EQUFVO0FBQ3pDLGlCQUFpQjtBQUNqQiwrQkFBK0IsbURBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLDREQUFTO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0NBQWdDLDREQUFTO0FBQ3pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCLDREQUFTO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDREQUFTO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osMkJBQTJCLDREQUFTO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUUsV0FBVyxJQUFJLDJCQUEyQixVQUFVLFdBQVcsSUFBSSxpQkFBaUI7QUFDekosZ0VBQWdFLE1BQU0sYUFBYSxNQUFNO0FBQ3pGLG1FQUFtRSxPQUFPLElBQUksTUFBTSxVQUFVLE1BQU0sR0FBRyxNQUFNOztBQUU3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLDhDQUE4Qyw4QkFBOEI7QUFDNUUsK0NBQStDLDhCQUE4Qjs7QUFFN0U7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksNERBQVM7QUFDckIsd0JBQXdCLE9BQU8sR0FBRyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFdBQVcsSUFBSSwyQkFBMkIsVUFBVSxXQUFXLElBQUksaUJBQWlCO0FBQzdKLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDREQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLDREQUFTO0FBQy9CLHdDQUF3QyxhQUFhLEdBQUcsYUFBYSxVQUFVLEtBQUssR0FBRyxLQUFLO0FBQzVGO0FBQ0EsYUFBYTtBQUNiOztBQUVBLFlBQVksNERBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLDBCQUEwQiw0REFBUztBQUNuQyw0Q0FBNEMsYUFBYSxHQUFHLGFBQWEsVUFBVSxLQUFLLEdBQUcsS0FBSztBQUNoRztBQUNBLGlCQUFpQjtBQUNqQixvQ0FBb0MsNERBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBVTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDREQUFTO0FBQ3hDLHdDQUF3QyxpQkFBaUIsWUFBWSxLQUFLO0FBQzFFO0FBQ0EsYUFBYTs7QUFFYiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsNERBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxpQkFBaUIsWUFBWSxLQUFLOztBQUVsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFLGFBQWEsR0FBRyxhQUFhLFVBQVUsVUFBVSxHQUFHLFVBQVU7QUFDOUg7QUFDQSxvRUFBb0UsYUFBYSxHQUFHLGFBQWEsVUFBVSxVQUFVLEdBQUcsVUFBVTtBQUNsSTtBQUNBLFNBQVM7QUFDVCxnRUFBZ0UsaUJBQWlCLFlBQVksVUFBVTtBQUN2Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFVO0FBQ2xDO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBVTtBQUNoQyxzQkFBc0IsbURBQVU7QUFDaEMseUJBQXlCLG1EQUFVO0FBQ25DLHdCQUF3QixtREFBVTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFVO0FBQ2xDLHdCQUF3QixtREFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQVU7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVELHFDQUFxQyx1QkFBdUI7QUFDNUQsMkNBQTJDLHVCQUF1QjtBQUNsRTtBQUNBLDJDQUEyQyx1QkFBdUI7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRDQUFHO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3REFBd0Q7QUFDbkc7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLG1EQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDRDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQUM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwwQ0FBMEMsbURBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbURBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLG9CQUFvQjtBQUNwQixnREFBZ0QsNEJBQTRCO0FBQzVFO0FBQ0EsZ0JBQWdCO0FBQ2hCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYztBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsOENBQThDLG1EQUFVO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLG1EQUFVO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InplYS1zY2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiWmVhU2NlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJaZWFTY2VkXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjZWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5zY2VkIC5ncmlkLWJhY2tncm91bmQge1xcbiAgICBmaWxsOiAjZjVmNWY1OyB9XFxuICAuc2NlZCAuZ3JpZC1oZWFkZXIge1xcbiAgICBmaWxsOiAjY2FjYWNhO1xcbiAgICBzdHJva2U6ICNlMGUwZTA7XFxuICAgIHN0cm9rZS13aWR0aDogMS40OyB9XFxuICAuc2NlZCAuZ3JpZC1yb3cge1xcbiAgICBmaWxsOiAjZmZmZmZmOyB9XFxuICAuc2NlZCAuZ3JpZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgZmlsbDogI2Y1ZjVmNTsgfVxcbiAgLnNjZWQgLnJvdy1saW5lIHtcXG4gICAgc3Ryb2tlOiAjZWJlZmYyOyB9XFxuICAuc2NlZCAudGljayB7XFxuICAgIHN0cm9rZTogIzhEOTlBNjtcXG4gICAgc3Ryb2tlLXdpZHRoOiAwLjQ7IH1cXG4gICAgLnNjZWQgLnRpY2sudGhpY2sge1xcbiAgICAgIHN0cm9rZS13aWR0aDogMC42OyB9XFxuICAuc2NlZCAudG9kYXktaGlnaGxpZ2h0IHtcXG4gICAgZmlsbDogI2YwMDtcXG4gICAgb3BhY2l0eTogMC41OyB9XFxuICAuc2NlZCAuYXJyb3cge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6ICM2NjY7XFxuICAgIHN0cm9rZS13aWR0aDogMS40OyB9XFxuICAuc2NlZCAuYmFyIHtcXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBzdHJva2Utd2lkdGggLjNzIGVhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuc2NlZCAuYmFyLXByb2dyZXNzIHtcXG4gICAgZmlsbDogI2EzYTNmZjsgfVxcbiAgLnNjZWQgLmJhci1pbnZhbGlkIHtcXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XFxuICAgIHN0cm9rZTogIzhEOTlBNjtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxO1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1OyB9XFxuICAgIC5zY2VkIC5iYXItaW52YWxpZCB+IC5iYXItbGFiZWwge1xcbiAgICAgIGZpbGw6ICM1NTU7IH1cXG4gIC5zY2VkIC5iYXItbGFiZWwge1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBwYWludC1vcmRlcjogc3Ryb2tlO1xcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBzdHJva2U6ICNhYWFhYWEzYjtcXG4gICAgZG9taW5hbnQtYmFzZWxpbmU6IGNlbnRyYWw7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IH1cXG4gICAgLnNjZWQgLmJhci1sYWJlbC5iaWcge1xcbiAgICAgIGZpbGw6ICM1NTU7XFxuICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0OyB9XFxuICAuc2NlZCAuaGFuZGxlIHtcXG4gICAgZmlsbDogI2RkZDtcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTsgfVxcbiAgLnNjZWQgLmJhci13cmFwcGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5zY2VkIC5iYXItd3JhcHBlcjpob3ZlciAuYmFyIHtcXG4gICAgICBmaWxsOiAjYTNkMmZhOyB9XFxuICAgIC5zY2VkIC5iYXItd3JhcHBlcjpob3ZlciAuaGFuZGxlIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLnNjZWQgLmJhci13cmFwcGVyLmFjdGl2ZSAuYmFyIHtcXG4gICAgICBmaWxsOiAjYTNkMmZhOyB9XFxuICAgIC5zY2VkIC5iYXItd3JhcHBlci5hY3RpdmUgLmJhci1wcm9ncmVzcyB7XFxuICAgICAgZmlsbDogIzhhOGFmZjsgfVxcbiAgLnNjZWQgLmxvd2VyLXRleHQsIC5zY2VkIC51cHBlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOyB9XFxuICAuc2NlZCAudXBwZXItdGV4dCB7XFxuICAgIGZpbGw6ICM1NTU7IH1cXG4gIC5zY2VkIC5sb3dlci10ZXh0IHtcXG4gICAgZmlsbDogIzMzMzsgfVxcbiAgLnNjZWQgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNjZWQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogJzg1MHB4JztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG4gIC5zY2VkLWNvbnRhaW5lciAucG9wdXAtd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiAjOTU5ZGE1O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gICAgLnNjZWQtY29udGFpbmVyIC5wb3B1cC13cmFwcGVyIC50aXRsZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNhM2EzZmY7XFxuICAgICAgcGFkZGluZzogMTBweDsgfVxcbiAgICAuc2NlZC1jb250YWluZXIgLnBvcHVwLXdyYXBwZXIgLnN1YnRpdGxlIHtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGNvbG9yOiAjZGZlMmU1OyB9XFxuICAgIC5zY2VkLWNvbnRhaW5lciAucG9wdXAtd3JhcHBlciAucG9pbnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIG1hcmdpbjogMCAwIDAgLTVweDtcXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCIvLyBpbXBvcnQgeyBTdHJpbmdQYXJhbWV0ZXIsIFRyZWVJdGVtUGFyYW1ldGVyIH0gZnJvbSAnLi9QYXJhbWV0ZXJzJ1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIFFVRVJZX1RZUEVTLFxyXG4vLyAgIFFVRVJZX01BVENIX1RZUEUsXHJcbi8vICAgUVVFUllfTE9HSUMsXHJcbi8vIH0gZnJvbSAnLi9QYXJhbWV0ZXJzL1F1ZXJ5UGFyYW1ldGVyLmpzJ1xyXG4vLyBpbXBvcnQgeyBRdWVyeVNldCB9IGZyb20gJy4vUGFyYW1ldGVycy9RdWVyeVNldFBhcmFtZXRlci5qcydcclxuLy8gaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL0dyb3VwJ1xyXG4vLyBpbXBvcnQgeyBzZ0ZhY3RvcnkgfSBmcm9tICcuL1NHRmFjdG9yeS5qcydcclxuXHJcbmltcG9ydCBRdWVyeVNldCBmcm9tICcuL1F1ZXJ5U2V0UGFyYW1ldGVyLmpzJ1xyXG5cclxuXHJcbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gYWR2YW5jZWQgZ3JvdXAgaW4gdGhlIHNjZW5lIHRyZWUuXHJcbiAqIEBleHRlbmRzIEdyb3VwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZhbmNlZEdyb3VwIGV4dGVuZHMgWmVhRW5naW5lLkdyb3VwIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gYWR2YW5jZWQgZ3JvdXAuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgYWR2YW5jZWQgZ3JvdXAuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgc3VwZXIobmFtZSlcclxuXHJcbiAgICB0aGlzLl9fc2VhcmNoUm9vdFBhcmFtID0gdGhpcy5pbnNlcnRQYXJhbWV0ZXIoXHJcbiAgICAgIG5ldyBaZWFFbmdpbmUuVHJlZUl0ZW1QYXJhbWV0ZXIoJ1NlYXJjaFJvb3QnKSxcclxuICAgICAgMFxyXG4gICAgKVxyXG4gICAgdGhpcy5fX3NlYXJjaFJvb3RQYXJhbS52YWx1ZUNoYW5nZWQuY29ubmVjdChjaGFuZ2VUeXBlID0+IHtcclxuICAgICAgdGhpcy5yZXNvbHZlUXVlcmllcygpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuX19zZWFyY2hTZXRQYXJhbSA9IHRoaXMuaW5zZXJ0UGFyYW1ldGVyKG5ldyBRdWVyeVNldCgnUXVlcmllcycpLCAxKVxyXG4gICAgdGhpcy5fX3NlYXJjaFNldFBhcmFtLnZhbHVlQ2hhbmdlZC5jb25uZWN0KGNoYW5nZVR5cGUgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVRdWVyaWVzKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBvd25lciBvZiB0aGUgYWR2YW5jZWQgZ3JvdXBcclxuICAgKiBAcGFyYW0ge2FueX0gb3duZXIgLSBUaGUgb3duZXIuXHJcbiAgICovXHJcbiAgc2V0T3duZXIob3duZXIpIHtcclxuICAgIHN1cGVyLnNldE93bmVyKG93bmVyKVxyXG5cclxuICAgIGlmICh0aGlzLl9fc2VhcmNoUm9vdFBhcmFtLmdldFZhbHVlKCkgPT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aGlzLl9fc2VhcmNoUm9vdFBhcmFtLnNldFZhbHVlKG93bmVyKVxyXG4gIH1cclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIEl0ZW1zXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZXNvbHZlUXVlcmllcyBtb3Rob2QuXHJcbiAgICovXHJcbiAgcmVzb2x2ZVF1ZXJpZXMoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hSb290ID0gdGhpcy5fX3NlYXJjaFJvb3RQYXJhbS5nZXRWYWx1ZSgpXHJcbiAgICBpZiAoc2VhcmNoUm9vdCA9PSB1bmRlZmluZWQpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHF1ZXJpZXMgPSBBcnJheS5mcm9tKHRoaXMuX19zZWFyY2hTZXRQYXJhbS5nZXRWYWx1ZSgpKVxyXG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID09IDApIHJldHVyblxyXG5cclxuICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgbGV0IHNldCA9IFtdIC8vIEVhY2ggdGltZSB3ZSBoaXQgYW4gT1Igb3BlcmF0b3IsIHdlIHN0YXJ0IGEgbmV3IHNldC5cclxuICAgIGxldCBwcmV2c2V0ID0gW11cclxuICAgIGxldCBmaXJzdCA9IHRydWVcclxuICAgIC8vIEZpbHRlciBpdCBkb3duLCBhbmQgdGhlbiBtZXJnZSBpbnRvIHJlc3VsdC5cclxuICAgIHF1ZXJpZXMuZm9yRWFjaCgocXVlcnksIGluZGV4KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFxdWVyeS5nZXRFbmFibGVkKCkgfHwgcXVlcnkuZ2V0VmFsdWUoKSA9PSAnJykgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IG5lZ2F0ZSA9IHF1ZXJ5LmdldE5lZ2F0ZSgpXHJcbiAgICAgICAgY29uc3QgYXBwbHlUZXN0ID0gKHJlcywgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5lZ2F0ZSAmJiAhcmVzKSBzZXQucHVzaChpdGVtKVxyXG4gICAgICAgICAgZWxzZSBpZiAoIW5lZ2F0ZSAmJiByZXMpIHNldC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHdlIGhpdCBhbiAnT1InIHF1ZXJ5LCB3ZSB3YW50IHRoZSBwcmV2c2V0XHJcbiAgICAgICAgLy8gdG8gdGhlIHNldCBnZW5lcmF0ZWQgYmVmb3JlIHRoZSBwcmV2aW91cyBxdWVyeS5cclxuICAgICAgICAvLyBTbzogVGVzdEEgJiYgVGVzdEIgfHwgVGVzdENcclxuICAgICAgICBpZiAocXVlcnkuZ2V0TG9jaWNhbE9wZXJhdG9yKCkgPT0gUVVFUllfTE9HSUMuQU5EKSB7XHJcbiAgICAgICAgICBwcmV2c2V0ID0gc2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaXJzdCB8fCBxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5ORVdTRVQpIHtcclxuICAgICAgICAgIGZpcnN0ID0gZmFsc2UgLy8gVGhlIGZpcnN0IGVuYWJsZWQgcXVlcnkuXHJcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHNldClcclxuICAgICAgICAgIHNldCA9IFtdXHJcblxyXG4gICAgICAgICAgc3dpdGNoIChxdWVyeS5nZXRRdWVyeVR5cGUoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLlBBVEg6IHtcclxuICAgICAgICAgICAgICBpZiAocXVlcnkuZ2V0TWF0Y2hUeXBlKCkgPT0gUVVFUllfTUFUQ0hfVFlQRS5FWEFDVCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IHF1ZXJ5LmdldFZhbHVlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyZWVJdGVtID0gc2VhcmNoUm9vdC5yZXNvbHZlUGF0aChwYXRoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyZWVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldC5wdXNoKHRyZWVJdGVtKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdHcm91cCBjb3VsZCBub3QgcmVzb2x2ZSBpdGVtOicgKyBwYXRoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnkuZ2V0TWF0Y2hUeXBlKCkgPT0gUVVFUllfTUFUQ0hfVFlQRS5SRUdFWCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBxdWVyeS5nZXRSZWdleCgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSb290UGF0aCA9IHNlYXJjaFJvb3QuZ2V0UGF0aCgpXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSb290LnRyYXZlcnNlKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpdGVtUGF0aCA9IGl0ZW0uZ2V0UGF0aCgpLnNsaWNlKHNlYXJjaFJvb3RQYXRoLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUZXN0KHJlZ2V4LnRlc3QoU3RyaW5nKGl0ZW1QYXRoKSksIGl0ZW0pXHJcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLk5BTUU6IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHF1ZXJ5LmdldFJlZ2V4KClcclxuICAgICAgICAgICAgICBzZWFyY2hSb290LnRyYXZlcnNlKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlUZXN0KHJlZ2V4LnRlc3QoaXRlbS5nZXROYW1lKCkpLCBpdGVtKVxyXG4gICAgICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBRVUVSWV9UWVBFUy5QUk9QRVJUWToge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gcXVlcnkuZ2V0UmVnZXgoKVxyXG4gICAgICAgICAgICAgIHNlYXJjaFJvb3QudHJhdmVyc2UoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhhc1BhcmFtZXRlcihxdWVyeS5nZXRQcm9wZXJ0eU5hbWUoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGl0ZW0uZ2V0UGFyYW1ldGVyKHF1ZXJ5LmdldFByb3BlcnR5TmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcCBpbnN0YW5jZW9mIFN0cmluZ1BhcmFtZXRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4LnRlc3QocHJvcC5nZXRWYWx1ZSgpKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwbHlUZXN0KHJlcywgaXRlbSlcclxuICAgICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUVVFUllfVFlQRVMuTEVWRUw6IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHF1ZXJ5LmdldFJlZ2V4KClcclxuICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSb290UGF0aCA9IHNlYXJjaFJvb3QuZ2V0UGF0aCgpXHJcbiAgICAgICAgICAgICAgc2VhcmNoUm9vdC50cmF2ZXJzZShpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1QYXRoID0gaXRlbS5nZXRQYXRoKCkuc2xpY2Uoc2VhcmNoUm9vdFBhdGgubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgLy8gYXBwbHlUZXN0KGl0ZW1QYXRoLmxlbmd0aCA+IDQgJiYgcmVnZXgudGVzdChpdGVtUGF0aFszXSksIGl0ZW0pXHJcbiAgICAgICAgICAgICAgICBhcHBseVRlc3QoaXRlbVBhdGgubGVuZ3RoID4gMSAmJiByZWdleC50ZXN0KGl0ZW1QYXRoWzBdKSwgaXRlbSlcclxuICAgICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUVVFUllfVFlQRVMuTEFZRVI6IHtcclxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5LmdldFZhbHVlKClcclxuICAgICAgICAgICAgICBzZWFyY2hSb290LnRyYXZlcnNlKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlUZXN0KGl0ZW0uZ2V0TGF5ZXJzKCkuaW5kZXhPZih2YWx1ZSkgIT0gLTEsIGl0ZW0pXHJcbiAgICAgICAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLk1BVEVSSUFMOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBxdWVyeS5nZXRSZWdleCgpXHJcbiAgICAgICAgICAgICAgc2VhcmNoUm9vdC50cmF2ZXJzZShpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzUGFyYW1ldGVyKCdtYXRlcmlhbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gaXRlbS5nZXRQYXJhbWV0ZXIoJ21hdGVyaWFsJykuZ2V0VmFsdWUoKVxyXG4gICAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChtYXRlcmlhbC5nZXROYW1lKCkpKSByZXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHBseVRlc3QocmVzLCBpdGVtKVxyXG4gICAgICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChxdWVyeS5nZXRRdWVyeVR5cGUoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLlBBVEg6IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHF1ZXJ5LmdldFJlZ2V4KClcclxuICAgICAgICAgICAgICBjb25zdCBmID0gaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgbmVnYXRlXHJcbiAgICAgICAgICAgICAgICAgID8gIXJlZ2V4LnRlc3QoaXRlbS5nZXRQYXRoKCkpXHJcbiAgICAgICAgICAgICAgICAgIDogcmVnZXgudGVzdChpdGVtLmdldFBhdGgoKSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmdldExvY2ljYWxPcGVyYXRvcigpID09IFFVRVJZX0xPR0lDLkFORClcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5maWx0ZXIoZilcclxuICAgICAgICAgICAgICBlbHNlIGlmIChxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5PUilcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5jb25jYXQocHJldnNldC5maWx0ZXIoZikpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLk5BTUU6IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHF1ZXJ5LmdldFJlZ2V4KClcclxuICAgICAgICAgICAgICBjb25zdCBmID0gaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgbmVnYXRlXHJcbiAgICAgICAgICAgICAgICAgID8gIXJlZ2V4LnRlc3QoaXRlbS5nZXROYW1lKCkpXHJcbiAgICAgICAgICAgICAgICAgIDogcmVnZXgudGVzdChpdGVtLmdldE5hbWUoKSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmdldExvY2ljYWxPcGVyYXRvcigpID09IFFVRVJZX0xPR0lDLkFORClcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5maWx0ZXIoZilcclxuICAgICAgICAgICAgICBlbHNlIGlmIChxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5PUilcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5jb25jYXQocHJldnNldC5maWx0ZXIoZikpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLlBST1BFUlRZOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBxdWVyeS5nZXRSZWdleCgpXHJcbiAgICAgICAgICAgICAgY29uc3QgZiA9IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5oYXNQYXJhbWV0ZXIocXVlcnkuZ2V0UHJvcGVydHlOYW1lKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBpdGVtLmdldFBhcmFtZXRlcihxdWVyeS5nZXRQcm9wZXJ0eU5hbWUoKSlcclxuICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdGhlIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgcHJvcGVydHkuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wIGluc3RhbmNlb2YgU3RyaW5nUGFyYW1ldGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnZXgudGVzdChwcm9wLmdldFZhbHVlKCkpXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVnYXRlID8gIXJlcyA6IHJlc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocXVlcnkuZ2V0TG9jaWNhbE9wZXJhdG9yKCkgPT0gUVVFUllfTE9HSUMuQU5EKVxyXG4gICAgICAgICAgICAgICAgc2V0ID0gc2V0LmZpbHRlcihmKVxyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKHF1ZXJ5LmdldExvY2ljYWxPcGVyYXRvcigpID09IFFVRVJZX0xPR0lDLk9SKVxyXG4gICAgICAgICAgICAgICAgc2V0ID0gc2V0LmNvbmNhdChwcmV2c2V0LmZpbHRlcihmKSlcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUVVFUllfVFlQRVMuTEVWRUw6IHtcclxuICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSb290UGF0aCA9IHNlYXJjaFJvb3QuZ2V0UGF0aCgpXHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBxdWVyeS5nZXRSZWdleCgpXHJcbiAgICAgICAgICAgICAgY29uc3QgZiA9IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtUGF0aCA9IGl0ZW0uZ2V0UGF0aCgpLnNsaWNlKHNlYXJjaFJvb3RQYXRoLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpdGVtUGF0aC5sZW5ndGggPiA0ICYmIHJlZ2V4LnRlc3QoaXRlbVBhdGhbM10pKSByZXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVBhdGgubGVuZ3RoID4gMSAmJiByZWdleC50ZXN0KGl0ZW1QYXRoWzBdKSkgcmVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5lZ2F0ZSA/ICFyZXMgOiByZXNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmdldExvY2ljYWxPcGVyYXRvcigpID09IFFVRVJZX0xPR0lDLkFORClcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5maWx0ZXIoZilcclxuICAgICAgICAgICAgICBlbHNlIGlmIChxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5PUilcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5jb25jYXQocHJldnNldC5maWx0ZXIoZikpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLkxBWUVSOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeS5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgY29uc3QgZiA9IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZXRMYXllcnMoKS5pbmRleE9mKHZhbHVlKSAhPSAtMSkgcmVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5lZ2F0ZSA/ICFyZXMgOiByZXNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmdldExvY2ljYWxPcGVyYXRvcigpID09IFFVRVJZX0xPR0lDLkFORClcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5maWx0ZXIoZilcclxuICAgICAgICAgICAgICBlbHNlIGlmIChxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5PUilcclxuICAgICAgICAgICAgICAgIHNldCA9IHNldC5jb25jYXQocHJldnNldC5maWx0ZXIoZikpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFFVRVJZX1RZUEVTLk1BVEVSSUFMOiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBxdWVyeS5nZXRSZWdleCgpXHJcbiAgICAgICAgICAgICAgY29uc3QgZiA9IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5oYXNQYXJhbWV0ZXIoJ21hdGVyaWFsJykpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBpdGVtLmdldFBhcmFtZXRlcignbWF0ZXJpYWwnKS5nZXRWYWx1ZSgpXHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWdleC50ZXN0KG1hdGVyaWFsLmdldE5hbWUoKSkpIHJlcyA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZWdhdGUgPyAhcmVzIDogcmVzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChxdWVyeS5nZXRMb2NpY2FsT3BlcmF0b3IoKSA9PSBRVUVSWV9MT0dJQy5BTkQpXHJcbiAgICAgICAgICAgICAgICBzZXQgPSBzZXQuZmlsdGVyKGYpXHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAocXVlcnkuZ2V0TG9jaWNhbE9wZXJhdG9yKCkgPT0gUVVFUllfTE9HSUMuT1IpXHJcbiAgICAgICAgICAgICAgICBzZXQgPSBzZXQuY29uY2F0KHByZXZzZXQuZmlsdGVyKGYpKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBjb250aW51ZS4uLlxyXG4gICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHNldClcclxuICAgIC8vIHJlc3VsdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uZ2V0UGF0aCgpKVxyXG4gICAgLy8gICB0aGlzLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuc2V0SXRlbXMobmV3IFNldChyZXN1bHQpKVxyXG4gIH1cclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIFBlcnNpc3RlbmNlXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0b0pTT04gbWV0aG9kIGVuY29kZXMgdGhpcyB0eXBlIGFzIGEganNvbiBvYmplY3QgZm9yIHBlcnNpc3RlbmNlcy5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBjb250ZXh0IHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyAtIFRoZSBmbGFncyB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gUmV0dXJucyB0aGUganNvbiBvYmplY3QuXHJcbiAgICovXHJcbiAgdG9KU09OKGNvbnRleHQsIGZsYWdzKSB7XHJcbiAgICBjb25zdCBqID0gc3VwZXIudG9KU09OKGNvbnRleHQsIGZsYWdzKVxyXG4gICAgcmV0dXJuIGpcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmcm9tSlNPTiBtZXRob2QgZGVjb2RlcyBhIGpzb24gb2JqZWN0IGZvciB0aGlzIHR5cGUuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGogLSBUaGUganNvbiBvYmplY3QgdGhpcyBpdGVtIG11c3QgZGVjb2RlLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIGNvbnRleHQgdmFsdWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIC0gVGhlIGZsYWdzIHZhbHVlLlxyXG4gICAqL1xyXG4gIGZyb21KU09OKGosIGNvbnRleHQsIGZsYWdzKSB7XHJcbiAgICBzdXBlci5mcm9tSlNPTihqLCBjb250ZXh0LCBmbGFncylcclxuICB9XHJcblxyXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBDbG9uZVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY2xvbmUgbWV0aG9kIGNvbnN0cnVjdHMgYSBuZXcgYWR2YW5jZWQgZ3JvdXAuXHJcbiAgICogY29waWVzIGl0cyB2YWx1ZXMgYW5kIHJldHVybnMgaXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIC0gVGhlIGZsYWdzIHZhbHVlLlxyXG4gICAqIEByZXR1cm4ge0FkdmFuY2VkR3JvdXB9IC0gUmV0dXJucyBhIG5ldyBjbG9uZWQgYWR2YW5jZWQgZ3JvdXAuXHJcbiAgICovXHJcbiAgY2xvbmUoZmxhZ3MpIHtcclxuICAgIGNvbnN0IGNsb25lZCA9IG5ldyBBZHZhbmNlZEdyb3VwKClcclxuICAgIGNsb25lZC5jb3B5RnJvbSh0aGlzLCBmbGFncylcclxuICAgIHJldHVybiBjbG9uZWRcclxuICB9XHJcbn1cclxuXHJcblplYUVuZ2luZS5zZ0ZhY3RvcnkucmVnaXN0ZXJDbGFzcygnQWR2YW5jZWRHcm91cCcsIEFkdmFuY2VkR3JvdXApXHJcblxyXG4iLCIvLyBpbXBvcnQgeyBzZ0ZhY3RvcnkgfSBmcm9tICcuLi9TR0ZhY3RvcnkuanMnXHJcbi8vIGltcG9ydCB7IFZhbHVlU2V0TW9kZSB9IGZyb20gJy4vUGFyYW1ldGVyLmpzJ1xyXG4vLyBpbXBvcnQgeyBTdHJpbmdQYXJhbWV0ZXIgfSBmcm9tICcuL1N0cmluZ1BhcmFtZXRlci5qcydcclxuXHJcbmNvbnN0IFFVRVJZX1RZUEVTID0ge1xyXG4gIE5BTUU6IDAsXHJcbiAgUEFUSDogMSxcclxuICBQUk9QRVJUWTogMixcclxuICBNQVRFUklBTDogMyxcclxuICBMRVZFTDogNCxcclxuICBMQVlFUjogNSxcclxuICBWT0xVTUU6IDYsXHJcbn1cclxuXHJcbmNvbnN0IFFVRVJZX01BVENIX1RZUEUgPSB7XHJcbiAgRVhBQ1Q6IDAsXHJcbiAgUkVHRVg6IDEsXHJcbn1cclxuXHJcbmNvbnN0IFFVRVJZX0xPR0lDID0ge1xyXG4gIEFORDogMCxcclxuICBPUjogMSxcclxuICBOT1Q6IDMsXHJcbiAgTkVXU0VUOiA0LFxyXG59XHJcblxyXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcXVlcnkgcGFyYW1ldGVyLlxyXG4gKiBAZXh0ZW5kcyBTdHJpbmdQYXJhbWV0ZXJcclxuICovXHJcbmNsYXNzIFF1ZXJ5UGFyYW1ldGVyIGV4dGVuZHMgWmVhRW5naW5lLlN0cmluZ1BhcmFtZXRlciB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgcXVlcnkgcGFyYW1ldGVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlci5cclxuICAgKiBAcGFyYW0ge2FueX0gcXVlcnlUeXBlIC0gVGhlIHF1ZXJ5VHlwZSB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge2FueX0gbWF0Y2hUeXBlIC0gVGhlIG1hdGNoVHlwZSB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge2FueX0gbG9jaWNhbE9wZXJhdG9yIC0gVGhlIGxvY2ljYWxPcGVyYXRvciB2YWx1ZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWUsXHJcbiAgICBxdWVyeVR5cGUgPSBRVUVSWV9UWVBFUy5QQVRILFxyXG4gICAgbWF0Y2hUeXBlID0gUVVFUllfTUFUQ0hfVFlQRS5FWEFDVCxcclxuICAgIGxvY2ljYWxPcGVyYXRvciA9IFFVRVJZX0xPR0lDLkFORFxyXG4gICkge1xyXG4gICAgc3VwZXIobmFtZSwgJycsICdTdHJpbmcnKVxyXG4gICAgdGhpcy5fX2VuYWJsZWQgPSB0cnVlXHJcbiAgICB0aGlzLl9fcXVlcnlUeXBlID0gcXVlcnlUeXBlXHJcbiAgICB0aGlzLl9fbWF0Y2hUeXBlID0gbWF0Y2hUeXBlXHJcbiAgICB0aGlzLl9fbG9jaWNhbE9wZXJhdG9yID0gbG9jaWNhbE9wZXJhdG9yXHJcbiAgICB0aGlzLl9fbmVnYXRlID0gZmFsc2VcclxuICAgIHRoaXMuX19wcm9wTmFtZSA9ICcnXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXR0ZXIgZm9yIFFVRVJZX1RZUEVTLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgUVVFUllfVFlQRVMoKSB7XHJcbiAgICByZXR1cm4gUVVFUllfVFlQRVNcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0dGVyIGZvciBRVUVSWV9NQVRDSF9UWVBFLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgUVVFUllfTUFUQ0hfVFlQRSgpIHtcclxuICAgIHJldHVybiBRVUVSWV9NQVRDSF9UWVBFXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXR0ZXIgZm9yIFFVRVJZX0xPR0lDLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgUVVFUllfTE9HSUMoKSB7XHJcbiAgICByZXR1cm4gUVVFUllfTE9HSUNcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnZXRFbmFibGVkIG1ldGhvZC5cclxuICAgKiBAcmV0dXJuIHthbnl9IC0gVGhlIHJldHVybiB2YWx1ZS5cclxuICAgKi9cclxuICBnZXRFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19lbmFibGVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2V0RW5hYmxlZCBtZXRob2QuXHJcbiAgICogQHBhcmFtIHthbnl9IG5nYXRlIC0gVGhlIG5nYXRlIHZhbHVlLlxyXG4gICAqL1xyXG4gIHNldEVuYWJsZWQobmdhdGUpIHtcclxuICAgIHRoaXMuX19lbmFibGVkID0gbmdhdGVcclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGdldFF1ZXJ5VHlwZSBtZXRob2QuXHJcbiAgICogQHJldHVybiB7YW55fSAtIFRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICovXHJcbiAgZ2V0UXVlcnlUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19xdWVyeVR5cGVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXRFbmFibGVkIG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge2FueX0gcXVlcnlUeXBlIC0gVGhlIHF1ZXJ5VHlwZSB2YWx1ZS5cclxuICAgKi9cclxuICBzZXRRdWVyeVR5cGUocXVlcnlUeXBlKSB7XHJcbiAgICB0aGlzLl9fcXVlcnlUeXBlID0gcXVlcnlUeXBlXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnZXRNYXRjaFR5cGUgbWV0aG9kLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIGdldE1hdGNoVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9fbWF0Y2hUeXBlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2V0TWF0Y2hUeXBlIG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge2FueX0gbWF0Y2hUeXBlIC0gVGhlIG1hdGNoVHlwZSB2YWx1ZS5cclxuICAgKi9cclxuICBzZXRNYXRjaFR5cGUobWF0Y2hUeXBlKSB7XHJcbiAgICB0aGlzLl9fbWF0Y2hUeXBlID0gbWF0Y2hUeXBlXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnZXRMb2NpY2FsT3BlcmF0b3IgbWV0aG9kLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIGdldExvY2ljYWxPcGVyYXRvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9fbG9jaWNhbE9wZXJhdG9yXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2V0TG9jaWNhbE9wZXJhdG9yIG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge2FueX0gbG9jaWNhbE9wZXJhdG9yIC0gVGhlIGxvY2ljYWxPcGVyYXRvciB2YWx1ZS5cclxuICAgKi9cclxuICBzZXRMb2NpY2FsT3BlcmF0b3IobG9jaWNhbE9wZXJhdG9yKSB7XHJcbiAgICB0aGlzLl9fbG9jaWNhbE9wZXJhdG9yID0gbG9jaWNhbE9wZXJhdG9yXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnZXROZWdhdGUgbWV0aG9kLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIGdldE5lZ2F0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9fbmVnYXRlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2V0TmVnYXRlIG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge2FueX0gbmdhdGUgLSBUaGUgbmdhdGUgdmFsdWUuXHJcbiAgICovXHJcbiAgc2V0TmVnYXRlKG5nYXRlKSB7XHJcbiAgICB0aGlzLl9fbmVnYXRlID0gbmdhdGVcclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGdldFByb3BlcnR5TmFtZSBtZXRob2QuXHJcbiAgICogQHJldHVybiB7YW55fSAtIFRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICovXHJcbiAgZ2V0UHJvcGVydHlOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19wcm9wTmFtZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNldFByb3BlcnR5TmFtZSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHthbnl9IHZhbCAtIFRoZSB2YWwgdmFsdWUuXHJcbiAgICovXHJcbiAgc2V0UHJvcGVydHlOYW1lKHZhbCkge1xyXG4gICAgdGhpcy5fX3Byb3BOYW1lID0gdmFsXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnZXRSZWdleCBtZXRob2QuXHJcbiAgICogQHJldHVybiB7YW55fSAtIFRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICovXHJcbiAgZ2V0UmVnZXgoKSB7XHJcbiAgICAvLyBodHRwczovL3JlZ2V4MTAxLmNvbS9cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXHJcbiAgICBzd2l0Y2ggKHRoaXMuX19tYXRjaFR5cGUpIHtcclxuICAgICAgY2FzZSBRVUVSWV9NQVRDSF9UWVBFLkVYQUNUOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt2YWx1ZX0kYClcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIFFVRVJZX01BVENIX1RZUEUuQ09OVEFJTlM6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSBRVUVSWV9NQVRDSF9UWVBFLlJFR0VYOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHZhbHVlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgUVVFUllfTUFUQ0hfVFlQRS5JR05PUkVDQVNFOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt2YWx1ZX0kYCwgJ2knKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgUVVFUllfTUFUQ0hfVFlQRS5DT05UQUlOU19JR05PUkVDQVNFOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGAke3ZhbHVlfWAsICdpJylcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBNYXRjaCB0eXBlJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZWFkQmluYXJ5IG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVhZGVyIC0gVGhlIHJlYWRlciB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBjb250ZXh0IHZhbHVlLlxyXG4gICAqL1xyXG4gIHJlYWRCaW5hcnkocmVhZGVyLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHJlYWRlci5sb2FkU3RyKClcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIFplYUVuZ2luZS5WYWx1ZVNldE1vZGUuREFUQV9MT0FEKVxyXG4gIH1cclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIENsb25lXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbG9uZSBtZXRob2QgY29uc3RydWN0cyBhIG5ldyBxdWVyeSBwYXJhbWV0ZXIsIGNvcGllcyBpdHMgdmFsdWVzXHJcbiAgICogZnJvbSB0aGlzIHBhcmFtZXRlciBhbmQgcmV0dXJucyBpdC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgLSBUaGUgZmxhZ3MgdmFsdWUuXHJcbiAgICogQHJldHVybiB7UXVlcnlQYXJhbWV0ZXJ9IC0gUmV0dXJucyBhIG5ldyBxdWVyeSBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgY2xvbmUoZmxhZ3MpIHtcclxuICAgIGNvbnN0IGNsb25lZFBhcmFtID0gbmV3IFF1ZXJ5UGFyYW1ldGVyKHRoaXMuX19uYW1lLCB0aGlzLl9fdmFsdWUpXHJcbiAgICByZXR1cm4gY2xvbmVkUGFyYW1cclxuICB9XHJcbn1cclxuXHJcblplYUVuZ2luZS5zZ0ZhY3RvcnkucmVnaXN0ZXJDbGFzcygnUXVlcnlQYXJhbWV0ZXInLCBRdWVyeVBhcmFtZXRlcilcclxuXHJcbmV4cG9ydCB7IFF1ZXJ5UGFyYW1ldGVyLCBRVUVSWV9UWVBFUywgUVVFUllfTUFUQ0hfVFlQRSwgUVVFUllfTE9HSUMgfVxyXG4iLCIvLyBpbXBvcnQgeyBzZ0ZhY3RvcnkgfSBmcm9tICcuLi9TR0ZhY3RvcnkuanMnXHJcbi8vIGltcG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vUGFyYW1ldGVyLmpzJ1xyXG5cclxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHF1ZXJ5IHNldCBwYXJhbWV0ZXIuXHJcbiAqIEBleHRlbmRzIFBhcmFtZXRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlTZXQgZXh0ZW5kcyBaZWFFbmdpbmUuUGFyYW1ldGVyIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBxdWVyeSBzZXQgcGFyYW1ldGVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IHNldCBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgc3VwZXIobmFtZSwgdW5kZWZpbmVkLCAnUXVlcnlQYXJhbWV0ZXInKVxyXG4gICAgdGhpcy5fX2l0ZW1zID0gbmV3IFNldCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZ2V0SXRlbSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGluZGV4IHZhbHVlLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX19pdGVtcylbaW5kZXhdXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWRkSXRlbSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHthbnl9IGl0ZW0gLSBUaGUgaXRlbSB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVtaXQgLSBUaGUgZW1pdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHthbnl9IC0gVGhlIHJldHVybiB2YWx1ZS5cclxuICAgKi9cclxuICBhZGRJdGVtKGl0ZW0sIGVtaXQgPSB0cnVlKSB7XHJcbiAgICBpZiAodGhpcy5fX2ZpbHRlckZuICYmICF0aGlzLl9fZmlsdGVyRm4oaXRlbSkpIHJldHVybiBmYWxzZVxyXG4gICAgaXRlbS52YWx1ZUNoYW5nZWQuY29ubmVjdCh0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KVxyXG4gICAgdGhpcy5fX2l0ZW1zLmFkZChpdGVtKVxyXG4gICAgaWYgKGVtaXQpIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQoKVxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fX2l0ZW1zKS5pbmRleE9mKGl0ZW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVtb3ZlSXRlbSBtZXRob2QuXHJcbiAgICogQHBhcmFtIHthbnl9IGl0ZW0gLSBUaGUgaXRlbSB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVtaXQgLSBUaGUgZW1pdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHthbnl9IC0gVGhlIHJldHVybiB2YWx1ZS5cclxuICAgKi9cclxuICByZW1vdmVJdGVtKGl0ZW0sIGVtaXQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odGhpcy5fX2l0ZW1zKVxyXG4gICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKGl0ZW0pXHJcbiAgICBpdGVtc1tpbmRleF0udmFsdWVDaGFuZ2VkLmRpc2Nvbm5lY3QodGhpcy52YWx1ZUNoYW5nZWQuZW1pdClcclxuICAgIHRoaXMuX19pdGVtcy5kZWxldGUoaXRlbSlcclxuICAgIGlmIChlbWl0KSB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KClcclxuICAgIHJldHVybiBpbmRleFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGdldE51bUl0ZW1zIG1ldGhvZC5cclxuICAgKiBAcmV0dXJuIHthbnl9IC0gVGhlIHJldHVybiB2YWx1ZS5cclxuICAgKi9cclxuICBnZXROdW1JdGVtcygpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX19pdGVtcykubGVuZ3RoXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZ2V0VmFsdWUgbWV0aG9kLlxyXG4gICAqIEByZXR1cm4ge2FueX0gLSBUaGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqL1xyXG4gIGdldFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19pdGVtc1xyXG4gIH1cclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIFBlcnNpc3RlbmNlXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0b0pTT04gbWV0aG9kIGVuY29kZXMgdGhpcyB0eXBlIGFzIGEganNvbiBvYmplY3QgZm9yIHBlcnNpc3RlbmNlcy5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBjb250ZXh0IHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyAtIFRoZSBmbGFncyB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHthbnl9IC0gVGhlIHJldHVybiB2YWx1ZS5cclxuICAgKi9cclxuICB0b0pTT04oY29udGV4dCwgZmxhZ3MpIHtcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZyb21KU09OIG1ldGhvZCBkZWNvZGVzIGEganNvbiBvYmplY3QgZm9yIHRoaXMgdHlwZS5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gaiAtIFRoZSBqc29uIG9iamVjdCB0aGlzIGl0ZW0gbXVzdCBkZWNvZGUuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgY29udGV4dCB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgLSBUaGUgZmxhZ3MgdmFsdWUuXHJcbiAgICovXHJcbiAgZnJvbUpTT04oaiwgY29udGV4dCwgZmxhZ3MpIHt9XHJcblxyXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBDbG9uZVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY2xvbmUgbWV0aG9kIGNvbnN0cnVjdHMgYSBuZXcgcXVlcnkgc2V0IHBhcmFtZXRlciwgY29waWVzIGl0cyB2YWx1ZXNcclxuICAgKiBmcm9tIHRoaXMgcGFyYW1ldGVyIGFuZCByZXR1cm5zIGl0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyAtIFRoZSBmbGFncyB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIHtRdWVyeVNldH0gLSBSZXR1cm5zIGEgbmV3IHF1ZXJ5IHNldCBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgY2xvbmUoZmxhZ3MpIHtcclxuICAgIGNvbnN0IGNsb25lZFBhcmFtID0gbmV3IFF1ZXJ5U2V0KHRoaXMuX19uYW1lLCB0aGlzLl9fZmlsdGVyRm4pXHJcbiAgICByZXR1cm4gY2xvbmVkUGFyYW1cclxuICB9XHJcbn1cclxuXHJcblplYUVuZ2luZS5zZ0ZhY3RvcnkucmVnaXN0ZXJDbGFzcygnUXVlcnlTZXQnLCBRdWVyeVNldClcclxuXHJcbi8vIGV4cG9ydCB7IFF1ZXJ5U2V0IH1cclxuIiwiLy8gaW1wb3J0IHsgWmVhVXggfSBmcm9tIFwiLi4vLi4vemVhLXV4L2Rpc3QvemVhLXV4XCI7XHJcblxyXG5cclxuLy8gaW1wb3J0IEJhc2VXaWRnZXQgZnJvbSAnLi9CYXNlV2lkZ2V0LmpzJztcclxuXHJcbi8vIGltcG9ydCB1eEZhY3RvcnkgZnJvbSAnLi4vVXhGYWN0b3J5LmpzJztcclxuLy8gaW1wb3J0IFBhcmFtZXRlclZhbHVlQ2hhbmdlIGZyb20gJy4uLy4uL3VuZG9yZWRvL1BhcmFtZXRlclZhbHVlQ2hhbmdlLmpzJztcclxuXHJcbmltcG9ydCBRdWVyeVNldCBmcm9tICcuL1F1ZXJ5U2V0UGFyYW1ldGVyLmpzJ1xyXG5cclxuY29uc3QgYWRkUXVlcnlXaWRnZXQgPSAocXVlcnlTZXQsIHF1ZXJ5LCBwYXJlbnREb21FbGVtLCBhcHBEYXRhKSA9PiB7XHJcbiAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG5cclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgdWwuY2xhc3NOYW1lID0gJ2ZsZXgtZWRpdHZhbHVlcyc7XHJcbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gRW5hYmxlZFxyXG4gIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnRW5hYmxlZCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gcXVlcnkuZ2V0RW5hYmxlZCgpO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLnRleHRDb250ZW50ID0gJ0VuYWJsZWQ6ICc7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBIYW5kbGUgQ2hhbmdlcy5cclxuXHJcbiAgICBsZXQgY2hhbmdlO1xyXG4gICAgcXVlcnkudmFsdWVDaGFuZ2VkLmNvbm5lY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWNoYW5nZSkgaW5wdXQuY2hlY2tlZCA9IHF1ZXJ5LmdldEVuYWJsZWQoKTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIC8vIGNoYW5nZSA9IG5ldyBQYXJhbWV0ZXJWYWx1ZUNoYW5nZShxdWVyeSwgaW5wdXQuY2hlY2tlZCk7XHJcbiAgICAgIC8vIGFwcERhdGEudW5kb1JlZG9NYW5hZ2VyLmFkZENoYW5nZShjaGFuZ2UpO1xyXG4gICAgICAvLyBjaGFuZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHF1ZXJ5LnNldEVuYWJsZWQoaW5wdXQuY2hlY2tlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gUXVlcnlUeXBlXHJcbiAge1xyXG4gICAgY29uc3Qgc2VsZWN0UXVlcnlUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBzZWxlY3RRdWVyeVR5cGUuc2V0QXR0cmlidXRlKCdzaXplJywgMSk7XHJcbiAgICBjb25zdCBhZGRRdWVyeVR5cGVPcHRpb24gPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgIHNlbGVjdFF1ZXJ5VHlwZS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHF0ID0gWmVhRW5naW5lLlF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTO1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhxdCkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBhZGRRdWVyeVR5cGVPcHRpb24oa2V5LCBxdFtrZXldKTtcclxuICAgICAgbWFwW3F0W2tleV1dID0gaW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxlY3RRdWVyeVR5cGUuc2VsZWN0ZWRJbmRleCA9IG1hcFtxdWVyeS5nZXRRdWVyeVR5cGUoKV07XHJcbiAgICBzZWxlY3RRdWVyeVR5cGUuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblxyXG4gICAgbGV0IGNoYW5naW5nID0gZmFsc2U7XHJcbiAgICBxdWVyeS52YWx1ZUNoYW5nZWQuY29ubmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghY2hhbmdpbmcpIHtcclxuICAgICAgICBzZWxlY3RRdWVyeVR5cGUuc2VsZWN0ZWRJbmRleCA9IG1hcFtxdWVyeS5nZXRRdWVyeVR5cGUoKV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICBjaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgIC8vIGNvbnN0IGNoYW5nZSA9IG5ldyBQYXJhbWV0ZXJWYWx1ZUNoYW5nZShxdWVyeSwgc2VsZWN0UXVlcnlUeXBlLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAvLyBhcHBEYXRhLnVuZG9SZWRvTWFuYWdlci5hZGRDaGFuZ2UoY2hhbmdlKTtcclxuICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKHNlbGVjdFF1ZXJ5VHlwZS5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgY2hhbmdpbmcgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzZWxlY3RRdWVyeVR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdmFsdWVDaGFuZ2UpO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHNlbGVjdFF1ZXJ5VHlwZSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG5cclxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBRdWVyeVR5cGVcclxuICB7XHJcbiAgICBjb25zdCBzZWxlY3RNYXRjaFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHNlbGVjdE1hdGNoVHlwZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAxKTtcclxuICAgIGNvbnN0IGFkZE1hdGhUeXBlT3B0aW9uID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xyXG4gICAgICBzZWxlY3RNYXRjaFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtdCA9IFplYUVuZ2luZS5RdWVyeVBhcmFtZXRlci5RVUVSWV9NQVRDSF9UWVBFO1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhtdCkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBhZGRNYXRoVHlwZU9wdGlvbihrZXksIG10W2tleV0pO1xyXG4gICAgICBtYXBbbXRba2V5XV0gPSBpbmRleDtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlbGVjdE1hdGNoVHlwZS5zZWxlY3RlZEluZGV4ID0gbWFwW3F1ZXJ5LmdldE1hdGNoVHlwZSgpXTtcclxuICAgIHNlbGVjdE1hdGNoVHlwZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcbiAgICBsZXQgY2hhbmdpbmcgPSBmYWxzZTtcclxuICAgIHF1ZXJ5LnZhbHVlQ2hhbmdlZC5jb25uZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFjaGFuZ2luZykge1xyXG4gICAgICAgIHNlbGVjdE1hdGNoVHlwZS5zZWxlY3RlZEluZGV4ID0gbWFwW3F1ZXJ5LmdldE1hdGNoVHlwZSgpXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdmFsdWVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgIGNoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgLy8gY29uc3QgY2hhbmdlID0gbmV3IFBhcmFtZXRlclZhbHVlQ2hhbmdlKHF1ZXJ5LCBzZWxlY3RNYXRjaFR5cGUuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgIC8vIGFwcERhdGEudW5kb1JlZG9NYW5hZ2VyLmFkZENoYW5nZShjaGFuZ2UpO1xyXG4gICAgICBxdWVyeS5zZXRNYXRjaFR5cGUoc2VsZWN0TWF0Y2hUeXBlLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICBjaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHNlbGVjdE1hdGNoVHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB2YWx1ZUNoYW5nZSk7XHJcblxyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoc2VsZWN0TWF0Y2hUeXBlKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICB9XHJcblxyXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIExvZ2ljXHJcbiAge1xyXG4gICAgY29uc3Qgc2VsZWN0TG9naWNUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBzZWxlY3RMb2dpY1R5cGUuc2V0QXR0cmlidXRlKCdzaXplJywgMSk7XHJcbiAgICBjb25zdCBhZGRNYXRoVHlwZU9wdGlvbiA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcclxuICAgICAgc2VsZWN0TG9naWNUeXBlLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcWwgPSBaZWFFbmdpbmUuUXVlcnlQYXJhbWV0ZXIuUVVFUllfTE9HSUM7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKHFsKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGFkZE1hdGhUeXBlT3B0aW9uKGtleSwgcWxba2V5XSk7XHJcbiAgICAgIG1hcFtxbFtrZXldXSA9IGluZGV4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZWN0TG9naWNUeXBlLnNlbGVjdGVkSW5kZXggPSBtYXBbcXVlcnkuZ2V0TG9jaWNhbE9wZXJhdG9yKCldO1xyXG4gICAgc2VsZWN0TG9naWNUeXBlLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cclxuICAgIGxldCBjaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgcXVlcnkudmFsdWVDaGFuZ2VkLmNvbm5lY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWNoYW5naW5nKSB7XHJcbiAgICAgICAgc2VsZWN0TG9naWNUeXBlLnNlbGVjdGVkSW5kZXggPSBtYXBbcXVlcnkuZ2V0TG9jaWNhbE9wZXJhdG9yKCldO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgY2hhbmdpbmcgPSB0cnVlO1xyXG4gICAgICAvLyBjb25zdCBjaGFuZ2UgPSBuZXcgUGFyYW1ldGVyVmFsdWVDaGFuZ2UocXVlcnksIHNlbGVjdExvZ2ljVHlwZS5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgLy8gYXBwRGF0YS51bmRvUmVkb01hbmFnZXIuYWRkQ2hhbmdlKGNoYW5nZSk7XHJcbiAgICAgIHF1ZXJ5LnNldExvY2ljYWxPcGVyYXRvcihzZWxlY3RMb2dpY1R5cGUuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgIGNoYW5naW5nID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgc2VsZWN0TG9naWNUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHZhbHVlQ2hhbmdlKTtcclxuXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChzZWxlY3RMb2dpY1R5cGUpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH1cclxuXHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gTmVnYXRlXHJcbiAge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdOZWdhdGUnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IHF1ZXJ5LmdldE5lZ2F0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLnRleHRDb250ZW50ID0gJ05lZ2F0ZTogJztcclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEhhbmRsZSBDaGFuZ2VzLlxyXG5cclxuICAgIGxldCBjaGFuZ2U7XHJcbiAgICBxdWVyeS52YWx1ZUNoYW5nZWQuY29ubmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghY2hhbmdlKSBpbnB1dC5jaGVja2VkID0gcXVlcnkuZ2V0TmVnYXRlKCk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAvLyBjaGFuZ2UgPSBuZXcgUGFyYW1ldGVyVmFsdWVDaGFuZ2UocXVlcnksIGlucHV0LmNoZWNrZWQpO1xyXG4gICAgICAvLyBhcHBEYXRhLnVuZG9SZWRvTWFuYWdlci5hZGRDaGFuZ2UoY2hhbmdlKTtcclxuICAgICAgLy8gY2hhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgICBxdWVyeS5zZXROZWdhdGUoaW5wdXQuY2hlY2tlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gSW5wdXRcclxuICB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHF1ZXJ5LmdldFZhbHVlKCkpO1xyXG4gICAgLy8gaW5wdXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYmluZGV4KTtcclxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cclxuICAgIC8vIFRPRE86IFBsZWFzZSBwdXQgdGhlc2UgaW50byBhIENTUyBmaWxlLlxyXG4gICAgaW5wdXQuc3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9ICcjRUZFRkVGJztcclxuICAgIGlucHV0LnN0eWxlWydib3JkZXItY29sb3InXSA9ICdkYXJrZ3JleSc7XHJcbiAgICBpbnB1dC5zdHlsZVsnYm9yZGVyLXN0eWxlJ10gPSAnc29saWQnO1xyXG4gICAgaW5wdXQuc3R5bGVbJ2JvcmRlci13aWR0aCddID0gJ3RoaW4nO1xyXG4gICAgaW5wdXQuc3R5bGVbJ3BhZGRpbmcnXSA9ICcycHgnO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIHF1ZXJ5LnZhbHVlQ2hhbmdlZC5jb25uZWN0KCgpID0+IHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBxdWVyeS5nZXRWYWx1ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjaGFuZ2UgPSBuZXcgUGFyYW1ldGVyVmFsdWVDaGFuZ2UocXVlcnksIHZhbHVlKTtcclxuICAgICAgYXBwRGF0YS51bmRvUmVkb01hbmFnZXIuYWRkQ2hhbmdlKGNoYW5nZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIFByb3AgTmFtZVxyXG5cclxuICB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHF1ZXJ5LmdldFByb3BlcnR5TmFtZSgpKTtcclxuICAgIC8vIGlucHV0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0YWJpbmRleCk7XHJcbiAgICBpbnB1dC5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcbiAgICAvLyBUT0RPOiBQbGVhc2UgcHV0IHRoZXNlIGludG8gYSBDU1MgZmlsZS5cclxuICAgIGlucHV0LnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnI0VGRUZFRic7XHJcbiAgICBpbnB1dC5zdHlsZVsnYm9yZGVyLWNvbG9yJ10gPSAnZGFya2dyZXknO1xyXG4gICAgaW5wdXQuc3R5bGVbJ2JvcmRlci1zdHlsZSddID0gJ3NvbGlkJztcclxuICAgIGlucHV0LnN0eWxlWydib3JkZXItd2lkdGgnXSA9ICd0aGluJztcclxuICAgIGlucHV0LnN0eWxlWydwYWRkaW5nJ10gPSAnMnB4JztcclxuICAgIGlucHV0LmRpc2FibGVkID1cclxuICAgICAgcXVlcnkuZ2V0UXVlcnlUeXBlKCkgIT0gWmVhRW5naW5lLlF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLlBST1BFUlRZO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICBxdWVyeS52YWx1ZUNoYW5nZWQuY29ubmVjdCgoKSA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gcXVlcnkuZ2V0UHJvcGVydHlOYW1lKCk7XHJcbiAgICAgIGlucHV0LmRpc2FibGVkID1cclxuICAgICAgICBxdWVyeS5nZXRRdWVyeVR5cGUoKSAhPSBaZWFFbmdpbmUuUXVlcnlQYXJhbWV0ZXIuUVVFUllfVFlQRVMuUFJPUEVSVFk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGNoYW5nZSA9IG5ldyBQYXJhbWV0ZXJWYWx1ZUNoYW5nZShxdWVyeSwgdmFsdWUpO1xyXG4gICAgICBhcHBEYXRhLnVuZG9SZWRvTWFuYWdlci5hZGRDaGFuZ2UoY2hhbmdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVtb3ZlQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdSZW1vdmUnKSk7XHJcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBxdWVyeVNldC5yZW1vdmVJdGVtKHF1ZXJ5KTtcclxuICB9KTtcclxuICByZW1vdmVCdXR0b24uc3R5bGUubWFyZ2luID0gJzJweCc7XHJcbiAgdWwuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcclxuXHJcbiAgLy8gcmV0dXJuIGNvbnRhaW5lcjtcclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcXVlcnkgc2V0IHdpZGdldC5cclxuICogQGV4dGVuZHMgQmFzZVdpZGdldFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlTZXRXaWRnZXQgZXh0ZW5kcyBaZWFVeC5CYXNlV2lkZ2V0IHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBxdWVyeSBzZXQgd2lkZ2V0LlxyXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbWV0ZXIgLSBUaGUgcGFyYW1ldGVyIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7YW55fSBwYXJlbnREb21FbGVtIC0gVGhlIHBhcmVudERvbUVsZW0gdmFsdWUuXHJcbiAgICogQHBhcmFtIHthbnl9IGFwcERhdGEgLSBUaGUgYXBwRGF0YSB2YWx1ZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXIsIHBhcmVudERvbUVsZW0sIGFwcERhdGEpIHtcclxuICAgIHN1cGVyKHBhcmFtZXRlcik7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcblxyXG4gICAgY29uc3QgdWwwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bDApO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBxdWVyeUxpc3QuY2xhc3NOYW1lID0gJ2ZsZXgtZWRpdHZhbHVlcyc7XHJcbiAgICB1bDAuYXBwZW5kQ2hpbGQocXVlcnlMaXN0KTtcclxuXHJcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIEhhbmRsZSBDaGFuZ2VzLlxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURpc3BsYXllZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICB3aGlsZSAocXVlcnlMaXN0LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBxdWVyeUxpc3QucmVtb3ZlQ2hpbGQocXVlcnlMaXN0LmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBxdWVyaWVzID0gcGFyYW1ldGVyLmdldFZhbHVlKCk7XHJcbiAgICAgIEFycmF5LmZyb20ocXVlcmllcykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBxdWVyeUxpc3QuYXBwZW5kQ2hpbGQoYWRkUXVlcnlXaWRnZXQocGFyYW1ldGVyLCBpdGVtLCBpbmRleCwgYXBwRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcGFyYW1ldGVyLnZhbHVlQ2hhbmdlZC5jb25uZWN0KHVwZGF0ZURpc3BsYXllZFZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBxdWVyaWVzID0gcGFyYW1ldGVyLmdldFZhbHVlKCk7XHJcbiAgICBBcnJheS5mcm9tKHF1ZXJpZXMpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIHF1ZXJ5TGlzdC5hcHBlbmRDaGlsZChhZGRRdWVyeVdpZGdldChwYXJhbWV0ZXIsIGl0ZW0sIGluZGV4LCBhcHBEYXRhKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwaWNrQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQaWNrIEdlb20nKSk7XHJcbiAgICBwaWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydCBwaWNraW5nIG1vZGUuJyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGQnKSk7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgcGFyYW1ldGVyLmFkZEl0ZW0obmV3IFplYUVuZ2luZS5RdWVyeVBhcmFtZXRlcigpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgYWRkQnV0dG9uLnN0eWxlLm1hcmdpbiA9ICcycHgnO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIHVsMC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgcGFyZW50RG9tRWxlbS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxufVxyXG5cclxudXhGYWN0b3J5LnJlZ2lzdGVyV2lkZ2V0KFF1ZXJ5U2V0V2lkZ2V0LCBwID0+IHAgaW5zdGFuY2VvZiBRdWVyeVNldCk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNWRyB9IGZyb20gJy4vc3ZnX3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZWQsIGZyb21fdGFzaywgdG9fdGFzaykge1xyXG4gICAgICAgIHRoaXMuc2NlZCA9IHNjZWQ7XHJcbiAgICAgICAgdGhpcy5mcm9tX3Rhc2sgPSBmcm9tX3Rhc2s7XHJcbiAgICAgICAgdGhpcy50b190YXNrID0gdG9fdGFzaztcclxuXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVfcGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZV9wYXRoKCkge1xyXG4gICAgICAgIGxldCBzdGFydF94ID1cclxuICAgICAgICAgICAgdGhpcy5mcm9tX3Rhc2sueCArIHRoaXMuZnJvbV90YXNrLndpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy50b190YXNrLnggPCBzdGFydF94ICsgdGhpcy5zY2VkLm9wdGlvbnMucGFkZGluZyAmJlxyXG4gICAgICAgICAgICBzdGFydF94ID4gdGhpcy5mcm9tX3Rhc2sueCArIHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmc7XHJcblxyXG4gICAgICAgIHdoaWxlIChjb25kaXRpb24oKSkge1xyXG4gICAgICAgICAgICBzdGFydF94IC09IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRfeSA9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlZC5vcHRpb25zLmhlYWRlcl9oZWlnaHQgK1xyXG4gICAgICAgICAgICB0aGlzLnNjZWQub3B0aW9ucy5iYXJfaGVpZ2h0ICtcclxuICAgICAgICAgICAgKHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmcgKyB0aGlzLnNjZWQub3B0aW9ucy5iYXJfaGVpZ2h0KSAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21fdGFzay50YXNrLl9pbmRleCArXHJcbiAgICAgICAgICAgIHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZF94ID0gdGhpcy50b190YXNrLngvLyAtIHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmcgLyAyO1xyXG4gICAgICAgIGNvbnN0IGVuZF95ID1cclxuICAgICAgICAgICAgdGhpcy5zY2VkLm9wdGlvbnMuaGVhZGVyX2hlaWdodCArXHJcbiAgICAgICAgICAgIHRoaXMuc2NlZC5vcHRpb25zLmJhcl9oZWlnaHQgLyAyICtcclxuICAgICAgICAgICAgKHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmcgKyB0aGlzLnNjZWQub3B0aW9ucy5iYXJfaGVpZ2h0KSAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvX3Rhc2sudGFzay5faW5kZXggK1xyXG4gICAgICAgICAgICB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nO1xyXG5cclxuICAgICAgICBjb25zdCBmcm9tX2lzX2JlbG93X3RvID1cclxuICAgICAgICAgICAgdGhpcy5mcm9tX3Rhc2sudGFzay5faW5kZXggPiB0aGlzLnRvX3Rhc2sudGFzay5faW5kZXg7XHJcbiAgICAgICAgY29uc3QgY3VydmUgPSB0aGlzLnNjZWQub3B0aW9ucy5hcnJvd19jdXJ2ZTtcclxuICAgICAgICBjb25zdCBjbG9ja3dpc2UgPSBmcm9tX2lzX2JlbG93X3RvID8gMSA6IDA7XHJcbiAgICAgICAgY29uc3QgY3VydmVfeSA9IGZyb21faXNfYmVsb3dfdG8gPyAtY3VydmUgOiBjdXJ2ZTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBmcm9tX2lzX2JlbG93X3RvXHJcbiAgICAgICAgICAgID8gZW5kX3kgKyB0aGlzLnNjZWQub3B0aW9ucy5hcnJvd19jdXJ2ZVxyXG4gICAgICAgICAgICA6IGVuZF95IC0gdGhpcy5zY2VkLm9wdGlvbnMuYXJyb3dfY3VydmU7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aCA9IGBcclxuICAgICAgICAgICAgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1cclxuICAgICAgICAgICAgViAke29mZnNldH1cclxuICAgICAgICAgICAgYSAke2N1cnZlfSAke2N1cnZlfSAwIDAgJHtjbG9ja3dpc2V9ICR7Y3VydmV9ICR7Y3VydmVfeX1cclxuICAgICAgICAgICAgTCAke2VuZF94fSAke2VuZF95fVxyXG4gICAgICAgICAgICBtIC01IC01XHJcbiAgICAgICAgICAgIGwgNSA1XHJcbiAgICAgICAgICAgIGwgLTUgNWA7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy50b190YXNrLnggPFxyXG4gICAgICAgICAgICB0aGlzLmZyb21fdGFzay54ICsgdGhpcy5zY2VkLm9wdGlvbnMucGFkZGluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBkb3duXzEgPSB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nIC8gMiAtIGN1cnZlO1xyXG4gICAgICAgICAgICBjb25zdCBkb3duXzIgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b190YXNrLnkgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b190YXNrLmhlaWdodCAvIDIgLVxyXG4gICAgICAgICAgICAgICAgY3VydmVfeTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudG9fdGFzay54IC0gdGhpcy5zY2VkLm9wdGlvbnMucGFkZGluZztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGBcclxuICAgICAgICAgICAgICAgIE0gJHtzdGFydF94fSAke3N0YXJ0X3l9XHJcbiAgICAgICAgICAgICAgICB2ICR7ZG93bl8xfVxyXG4gICAgICAgICAgICAgICAgYSAke2N1cnZlfSAke2N1cnZlfSAwIDAgMSAtJHtjdXJ2ZX0gJHtjdXJ2ZX1cclxuICAgICAgICAgICAgICAgIEggJHtsZWZ0fVxyXG4gICAgICAgICAgICAgICAgYSAke2N1cnZlfSAke2N1cnZlfSAwIDAgJHtjbG9ja3dpc2V9IC0ke2N1cnZlfSAke2N1cnZlX3l9XHJcbiAgICAgICAgICAgICAgICBWICR7ZG93bl8yfVxyXG4gICAgICAgICAgICAgICAgYSAke2N1cnZlfSAke2N1cnZlfSAwIDAgJHtjbG9ja3dpc2V9ICR7Y3VydmV9ICR7Y3VydmVfeX1cclxuICAgICAgICAgICAgICAgIEwgJHtlbmRfeH0gJHtlbmRfeX1cclxuICAgICAgICAgICAgICAgIG0gLTUgLTVcclxuICAgICAgICAgICAgICAgIGwgNSA1XHJcbiAgICAgICAgICAgICAgICBsIC01IDVgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZVNWRygncGF0aCcsIHtcclxuICAgICAgICAgICAgZDogdGhpcy5wYXRoLFxyXG4gICAgICAgICAgICAnZGF0YS1mcm9tJzogdGhpcy5mcm9tX3Rhc2sudGFzay5pZCxcclxuICAgICAgICAgICAgJ2RhdGEtdG8nOiB0aGlzLnRvX3Rhc2sudGFzay5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZV9wYXRoKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMucGF0aCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGRhdGVfdXRpbHMgZnJvbSAnLi9kYXRlX3V0aWxzJztcclxuaW1wb3J0IHsgJCwgY3JlYXRlU1ZHLCBhbmltYXRlU1ZHIH0gZnJvbSAnLi9zdmdfdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gZG9Cb3hlc0ludGVyc2VjdChhLCBiKSB7XHJcbiAgICBjb25zdCBhX2N4ID0gYS54ICsgYS53aWR0aCAqIDAuNVxyXG4gICAgY29uc3QgYV9jeSA9IGEueSArIGEuaGVpZ2h0ICogMC41XHJcbiAgICBjb25zdCBiX2N4ID0gYi54ICsgYi53aWR0aCAqIDAuNVxyXG4gICAgY29uc3QgYl9jeSA9IGIueSArIGIuaGVpZ2h0ICogMC41XHJcbiAgICByZXR1cm4gKE1hdGguYWJzKGFfY3ggLSBiX2N4KSAqIDIgPCAoYS53aWR0aCArIGIud2lkdGgpKSAmJlxyXG4gICAgICAgICAgIChNYXRoLmFicyhhX2N5IC0gYl9jeSkgKiAyIDwgKGEuaGVpZ2h0ICsgYi5oZWlnaHQpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZWQsIHRhc2ssIHBhcmVudCwgcG9zX3ksIHNjX3kgPSAxLjApIHtcclxuICAgICAgICB0aGlzLnNldF9kZWZhdWx0cyhzY2VkLCB0YXNrLCBwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZShwb3NfeSwgc2NfeSk7XHJcbiAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgIC8vIHRoaXMuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGFydCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2suc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2suZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldF9kZWZhdWx0cyhzY2VkLCB0YXNrLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbl9jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjZWQgPSBzY2VkO1xyXG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZF9iYXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZShwb3NfeSwgc2NfeSkge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZV92YWx1ZXMocG9zX3ksIHNjX3kpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZV9oZWxwZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZV92YWx1ZXMocG9zX3ksIHNjX3kpIHtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc2NlZC5vcHRpb25zLmJhcl9oZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jb21wdXRlX3goKTtcclxuICAgICAgICB0aGlzLnkgPSBwb3NfeTtcclxuICAgICAgICB0aGlzLnNjX3kgPSBzY195O1xyXG4gICAgICAgIHRoaXMubGFiZWxWaXNpYmxlID0gc2NfeSA+IHRoaXMuc2NlZC5vcHRpb25zLm1pbl90ZXh0X3NjWTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBzY195ID4gdGhpcy5zY2VkLm9wdGlvbnMubWluX2Jhcl9zY1k7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50YXNrLm5hbWUsIHRoaXMueCwgdGhpcy55KVxyXG4gICAgICAgIHRoaXMuY29ybmVyX3JhZGl1cyA9IHRoaXMuc2NlZC5vcHRpb25zLmJhcl9jb3JuZXJfcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPVxyXG4gICAgICAgICAgICBkYXRlX3V0aWxzLmRpZmYodGhpcy50YXNrLmVuZCwgdGhpcy50YXNrLnN0YXJ0LCAnaG91cicpIC9cclxuICAgICAgICAgICAgdGhpcy5zY2VkLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoICogdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzX3dpZHRoID1cclxuICAgICAgICAgICAgdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoICpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gKlxyXG4gICAgICAgICAgICAgICAgKHRoaXMudGFzay5wcm9ncmVzcyAvIDEwMCkgfHwgMDtcclxuICAgICAgICAvLyB0aGlzLmdyb3VwID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgIC8vICAgICBjbGFzczogJ2Jhci13cmFwcGVyICcgKyAodGhpcy50YXNrLmN1c3RvbV9jbGFzcyB8fCAnJyksXHJcbiAgICAgICAgLy8gICAgICdkYXRhLWlkJzogdGhpcy50YXNrLmlkXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGNyZWF0ZVNWRygnZycsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdiYXItZ3JvdXAnLFxyXG4gICAgICAgICAgICAnZGF0YS1pZCc6IHRoaXMudGFzay5pZCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy54fSwke3RoaXMueX0pYFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBodHRwczovL2dhbWVkZXYuc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzU4Ni93aGF0LWlzLXRoZS1mYXN0ZXN0LXdheS10by13b3JrLW91dC0yZC1ib3VuZGluZy1ib3gtaW50ZXJzZWN0aW9uXHJcbiAgICAgICAgdGhpcy5ib3ggPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucGFyZW50LmJveC54ICsgdGhpcy54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnBhcmVudC5ib3gueSArICh0aGlzLnkgKiB0aGlzLnNjX3kpLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCAqIHRoaXMuc2NfeVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmNvbXB1dGVfYmJveChbMSwgMV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjb21wdXRlX2Jib3goc2MpIHtcclxuICAgIC8vICAgICB0aGlzLnAwID0geyB4OiB0aGlzLnggKiBzY1swXSwgeTogdGhpcy55ICogc2NbMV0gfVxyXG4gICAgLy8gICAgIHRoaXMucDEgPSB7XHJcbiAgICAvLyAgICAgICAgIHg6ICh0aGlzLnggKyB0aGlzLndpZHRoKSAqIHNjWzBdLFxyXG4gICAgLy8gICAgICAgICB5OiAodGhpcy55ICsgdGhpcy5oZWlnaHQpICogc2NbMV1cclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByZXBhcmVfaGVscGVycygpIHtcclxuICAgICAgICBTVkdFbGVtZW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiArdGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNWR0VsZW1lbnQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICt0aGlzLmdldEF0dHJpYnV0ZSgneScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU1ZHRWxlbWVudC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICt0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNWR0VsZW1lbnQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gK3RoaXMuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNWR0VsZW1lbnQucHJvdG90eXBlLmdldEVuZFggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy5nZXRXaWR0aCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSlcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9iYXIoKTtcclxuXHJcbiAgICAgICAgLy8gTm90ZTogZXZlbiBpbnZpc2libGUgYmFycyBjb250cmlidXRlIGhlaWdodCB0byB0aGllciBwYXJlbnRzLiBcclxuICAgICAgICAvLyBzbyB3ZSBtdXN0IGJ1aWxkIHRoZSBjaGlsZCBiYXJzLlxyXG4gICAgICAgIGlmICh0aGlzLnRhc2suY2hpbGRUYXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBoZWlnaHQgb2YgYSBiYXIgaXMgYmFzZWQgb24gdGhlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkX2NoaWxkX2JhcnMoKTtcclxuICAgICAgICAgICAgaWYodGhpcy52aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFyLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmJ1aWxkX3Byb2dyZXNzX2JhcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsVmlzaWJsZSlcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9sYWJlbCgpO1xyXG4gICAgICAgIC8vIHRoaXMuYnVpbGRfcmVzaXplX2hhbmRsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZF9iYXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy4kYmFyID0gY3JlYXRlU1ZHKCdyZWN0Jywge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgcng6IHRoaXMuY29ybmVyX3JhZGl1cyxcclxuICAgICAgICAgICAgcnk6IHRoaXMuY29ybmVyX3JhZGl1cyxcclxuICAgICAgICAgICAgZmlsbDogdGhpcy50YXNrLmNvbG9yLnRvSGV4KCksXHJcbiAgICAgICAgICAgIHN0cm9rZTogdGhpcy50YXNrLmNvbG9yLmxlcnAobmV3IFplYUVuZ2luZS5Db2xvcigwLDAsMCksIDAuNSkudG9IZXgoKSxcclxuICAgICAgICAgICAgY2xhc3M6ICdiYXInLFxyXG4gICAgICAgICAgICBhcHBlbmRfdG86IHRoaXMuZ3JvdXBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZVNWRyh0aGlzLiRiYXIsICd3aWR0aCcsIDAsIHRoaXMud2lkdGgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGJhci5jbGFzc0xpc3QuYWRkKCdiYXItaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cF9jbGlja19ldmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldF90YXNrKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRUYXNrc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVpbGRfcHJvZ3Jlc3NfYmFyKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmludmFsaWQpIHJldHVybjtcclxuICAgIC8vICAgICB0aGlzLiRiYXJfcHJvZ3Jlc3MgPSBjcmVhdGVTVkcoJ3JlY3QnLCB7XHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiB0aGlzLnByb2dyZXNzX3dpZHRoLFxyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgLy8gICAgICAgICByeDogdGhpcy5jb3JuZXJfcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICByeTogdGhpcy5jb3JuZXJfcmFkaXVzLFxyXG4gICAgLy8gICAgICAgICBjbGFzczogJ2Jhci1wcm9ncmVzcycsXHJcbiAgICAvLyAgICAgICAgIGFwcGVuZF90bzogdGhpcy5ncm91cFxyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBhbmltYXRlU1ZHKHRoaXMuJGJhcl9wcm9ncmVzcywgJ3dpZHRoJywgMCwgdGhpcy5wcm9ncmVzc193aWR0aCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYnVpbGRfY2hpbGRfYmFycygpIHtcclxuICAgICAgICBjb25zdCBjaGlsZF9zY195ID0gdGhpcy5zY195ICogdGhpcy5zY2VkLm9wdGlvbnMuY2hpbGRfeV9zY2FsZTtcclxuICAgICAgICB0aGlzLmNoaWxkX2dyb3VwID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2NoaWxkLWdyb3VwJyxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmdyb3VwLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxLCR7dGhpcy5zY2VkLm9wdGlvbnMuY2hpbGRfeV9zY2FsZX0pYFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wYWN0TGF5b3V0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbXBhY3RMYXlvdXQpIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZF9kYXRlcyA9IFt0aGlzLnN0YXJ0XTtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZF9iYXJzX3Jvd3MgPSBbXTtcclxuICAgICAgICAgICAgY29uc3Qgcm93X2hlaWdodHMgPSBbMF07XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRfYmFycyA9IHRoaXMudGFzay5jaGlsZFRhc2tzLm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NfeSA9IHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZXMuc29tZSgoZW5kX2RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhcnQgPj0gZW5kX2RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3NfeSArPSByb3dfaGVpZ2h0c1tpbmRleF0gKyB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IHJvdy5cclxuICAgICAgICAgICAgICAgICAgICByb3cgPSBlbmRfZGF0ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhciA9IG5ldyBCYXIodGhpcy5zY2VkLCB0YXNrLCB0aGlzLCBwb3NfeSwgY2hpbGRfc2NfeSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGJhci5zZXRfdGV4dF90cmFuc2Zvcm0oY2hpbGRfdGV4dF9zYyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkX2dyb3VwLmFwcGVuZENoaWxkKGJhci5ncm91cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hpbGRfYmFyc19yb3dzW3Jvd10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkX2JhcnNfcm93c1tyb3ddID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcm93X2hlaWdodHNbcm93XSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93X2hlaWdodHNbcm93XSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGVzW3Jvd10gPSB0aGlzLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZF9iYXJzX3Jvd3Nbcm93XS5wdXNoKGJhcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFyLmhlaWdodCA+IHJvd19oZWlnaHRzW3Jvd10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGJhci5oZWlnaHQgLSByb3dfaGVpZ2h0c1tyb3ddXHJcbiAgICAgICAgICAgICAgICAgICAgcm93X2hlaWdodHNbcm93XSA9IGJhci5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJvdyBoYXMgZ3Jvd24sIHRoZW4gd2UgaW5jcmVtZW50IHRoZSBvd25lciBoZWlnaHQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0ICs9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZW5kID4gZW5kX2RhdGVzW3Jvd10pXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGVzW3Jvd10gPSB0YXNrLmVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocG9zX3kgKyByb3dfaGVpZ2h0c1tyb3ddID4gaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHBvc195ICsgcm93X2hlaWdodHNbcm93XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IChoZWlnaHQgKyB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nKSAqIHRoaXMuc2NlZC5vcHRpb25zLmNoaWxkX3lfc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBvc195ID0gdGhpcy5zY2VkLm9wdGlvbnMucGFkZGluZztcclxuICAgICAgICAgICAgdGhpcy5jaGlsZF9iYXJzID0gdGhpcy50YXNrLmNoaWxkVGFza3MubWFwKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFyID0gbmV3IEJhcih0aGlzLnNjZWQsIHRhc2ssIHRoaXMsIHBvc195LCBjaGlsZF9zY195KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRfZ3JvdXAuYXBwZW5kQ2hpbGQoYmFyLmdyb3VwKTtcclxuICAgICAgICAgICAgICAgIHBvc195ICs9IGJhci5oZWlnaHQgKyB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nICogMC41O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID1cclxuICAgICAgICAgICAgICAgIChwb3NfeSArIHRoaXMuc2NlZC5vcHRpb25zLnBhZGRpbmcpICpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlZC5vcHRpb25zLmNoaWxkX3lfc2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm94LmhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY195O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkX2Fycm93cygpIHtcclxuICAgICAgICB0aGlzLmFycm93cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGhpcy5jaGlsZF9iYXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgYXJyb3dzID0gdGFzay5kZXBlbmRlbmNpZXNcclxuICAgICAgICAgICAgICAgIC5tYXAodGFza19pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeSA9IHRoaXMuZ2V0X3Rhc2sodGFza19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXBlbmRlbmN5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBuZXcgQXJyb3coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRfYmFyc1tkZXBlbmRlbmN5Ll9pbmRleF0sIC8vIGZyb21fdGFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkX2JhcnNbdGFzay5faW5kZXhdIC8vIHRvX3Rhc2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmFycm93LmFwcGVuZENoaWxkKGFycm93LmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJvdztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pOyAvLyBmaWx0ZXIgZmFsc3kgdmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5hcnJvd3MuY29uY2F0KGFycm93cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidWlsZF9sYWJlbCgpIHtcclxuICAgICAgICB0aGlzLnRleHRfdHIgPSBbdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMl07XHJcblxyXG4gICAgICAgIC8vIE5vdGU6IGVhY2ggY2hpbGQgZ3JvdXAgb2Ygbm9kZXMgaXMgc2NhbGVkIGluIHRoZSBZIGF4aXMgYnkgXHJcbiAgICAgICAgLy8gY2hpbGRfeV9zY2FsZS4gVGhpcyBzY2FsaW5nIGlzIGFjdW11bGF0ZWQgd2l0aCBlYWNoIGxldmVsIG9mXHJcbiAgICAgICAgLy8gbmVzdGluZy4gVG8ga2VlcCB0aGUgbGFiZWxzICdzcXVhcmUnIHdlIG5lZWQgdG8gYXBwbHkgdGhlIFxyXG4gICAgICAgIC8vIGludmVyc2Ugc2NhbGluZyBpbiB0aGUgeCBheGlzLiB3ZSBhY2N1bXVsYXRlIHRoZSBzY195XHJcbiAgICAgICAgLy8gRG93biB0aGUgaGllcmFyY2h5IGJlY2F1c2UgaXQgaXMgbm90IGluaGVyaXRlZC5cclxuICAgICAgICB0aGlzLnRleHRfc2MgPSB0aGlzLnNjX3k7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJidWlsZF9sYWJlbDpcIiwgdGhpcy50ZXh0X3NjKVxyXG4gICAgICAgIHRoaXMudGV4dF9nID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnRleHRfdHJbMF19LCR7dGhpcy50ZXh0X3RyWzFdfSkgc2NhbGUoJHt0aGlzLnRleHRfc2N9LDEpYCxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmdyb3VwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gY3JlYXRlU1ZHKCd0ZXh0Jywge1xyXG4gICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMudGFzay5uYW1lLFxyXG4gICAgICAgICAgICBjbGFzczogJ2Jhci1sYWJlbCcsXHJcbiAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy50ZXh0X2dcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9sYWJlbF92aXNpYmxpdHkodGhpcy5zY195KTtcclxuICAgICAgICAvLyBsYWJlbHMgZ2V0IEJCb3ggaW4gdGhlIG5leHQgdGlja1xyXG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZV9sYWJlbF9wb3NpdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByb3BhZ2F0ZV90cmFuc2Zvcm0ocm9vdF9zYywgdmlld0JveCkge1xyXG4gICAgICAgIGNvbnN0IHNjX3kgPSByb290X3NjWzFdICogdGhpcy5zY195O1xyXG4gICAgICAgIHRoaXMudGV4dF9zYyA9IHJvb3Rfc2NbMV0gLyByb290X3NjWzBdICogdGhpcy5zY195O1xyXG5cclxuICAgICAgICBjb25zdCB2aXMgPSBzY195ID4gdGhpcy5zY2VkLm9wdGlvbnMubWluX2Jhcl9zY1kgJiZcclxuICAgICAgICAgICAgZG9Cb3hlc0ludGVyc2VjdCh0aGlzLmJveCwgdmlld0JveCk7XHJcbiAgICAgICAgaWYgKHZpcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGJhcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZF9iYXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhci5zZXRBdHRyaWJ1dGUoJ3Zpc2liaWxpdHknLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB2aXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYmFyLnNldEF0dHJpYnV0ZSgncngnLCB0aGlzLmNvcm5lcl9yYWRpdXMgKiB0aGlzLnRleHRfc2MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbGFiZWxfdmlzaWJsaXR5KHNjX3kpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfbGFiZWxfdHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRfYmFycy5mb3JFYWNoKGNoaWxkX2JhciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZF9iYXIucHJvcGFnYXRlX3RyYW5zZm9ybShyb290X3NjLCB2aWV3Qm94KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy52aXNpYmxlICYmIHRoaXMuJGJhcilcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhci5zZXRBdHRyaWJ1dGUoJ3Zpc2liaWxpdHknLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfbGFiZWxfdmlzaWJsaXR5KHNjX3kpIHtcclxuICAgICAgICBpZihzY195ID4gdGhpcy5zY2VkLm9wdGlvbnMubWF4X3RleHRfc2NZIHx8IHNjX3kgPCB0aGlzLnNjZWQub3B0aW9ucy5taW5fdGV4dF9zY1kpIHtcclxuICAgICAgICAgICAgLy8gV2UgY2FuIHpvb20gaW4gZm9yZXZlciBvbiB0aGUgbGVhZiBub2Rlcy5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRfYmFycy5sZW5ndGggPT0gMCAmJiBzY195ID4gdGhpcy5zY2VkLm9wdGlvbnMubWF4X3RleHRfc2NZKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZih0aGlzLmxhYmVsVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ3Zpc2liaWxpdHknLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMubGFiZWxWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy50ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRfbGFiZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dC5zZXRBdHRyaWJ1dGUoJ3Zpc2liaWxpdHknLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfbGFiZWxfdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHRoaXMudGV4dF9nLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy50ZXh0X3RyWzBdfSwke3RoaXMudGV4dF90clsxXX0pIHNjYWxlKCR7dGhpcy50ZXh0X3NjfSwxKWApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkX3Jlc2l6ZV9oYW5kbGVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmludmFsaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVfZ3JvdXAgPSBjcmVhdGVTVkcoJ2cnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnaGFuZGxlLWdyb3VwJyxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmdyb3VwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhciA9IHRoaXMuJGJhcjtcclxuICAgICAgICBjb25zdCBoYW5kbGVfd2lkdGggPSA4O1xyXG5cclxuICAgICAgICBjcmVhdGVTVkcoJ3JlY3QnLCB7XHJcbiAgICAgICAgICAgIHg6IGJhci5nZXRXaWR0aCgpIC0gOSxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgd2lkdGg6IGhhbmRsZV93aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCAtIDIsXHJcbiAgICAgICAgICAgIHJ4OiB0aGlzLmNvcm5lcl9yYWRpdXMsXHJcbiAgICAgICAgICAgIHJ5OiB0aGlzLmNvcm5lcl9yYWRpdXMsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnaGFuZGxlIHJpZ2h0JyxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmhhbmRsZV9ncm91cFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjcmVhdGVTVkcoJ3JlY3QnLCB7XHJcbiAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVfd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQgLSAyLFxyXG4gICAgICAgICAgICByeDogdGhpcy5jb3JuZXJfcmFkaXVzLFxyXG4gICAgICAgICAgICByeTogdGhpcy5jb3JuZXJfcmFkaXVzLFxyXG4gICAgICAgICAgICBjbGFzczogJ2hhbmRsZSBsZWZ0JyxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmhhbmRsZV9ncm91cFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50YXNrLnByb2dyZXNzICYmIHRoaXMudGFzay5wcm9ncmVzcyA8IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLiRoYW5kbGVfcHJvZ3Jlc3MgPSBjcmVhdGVTVkcoJ3BvbHlnb24nLCB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMuZ2V0X3Byb2dyZXNzX3BvbHlnb25fcG9pbnRzKCkuam9pbignLCcpLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdoYW5kbGUgcHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmhhbmRsZV9ncm91cFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X3Byb2dyZXNzX3BvbHlnb25fcG9pbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGJhcl9wcm9ncmVzcyA9IHRoaXMuJGJhcl9wcm9ncmVzcztcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBiYXJfcHJvZ3Jlc3MuZ2V0RW5kWCgpIC0gNSxcclxuICAgICAgICAgICAgYmFyX3Byb2dyZXNzLmdldFkoKSArIGJhcl9wcm9ncmVzcy5nZXRIZWlnaHQoKSxcclxuICAgICAgICAgICAgYmFyX3Byb2dyZXNzLmdldEVuZFgoKSArIDUsXHJcbiAgICAgICAgICAgIGJhcl9wcm9ncmVzcy5nZXRZKCkgKyBiYXJfcHJvZ3Jlc3MuZ2V0SGVpZ2h0KCksXHJcbiAgICAgICAgICAgIGJhcl9wcm9ncmVzcy5nZXRFbmRYKCksXHJcbiAgICAgICAgICAgIGJhcl9wcm9ncmVzcy5nZXRZKCkgKyBiYXJfcHJvZ3Jlc3MuZ2V0SGVpZ2h0KCkgLSA4LjY2XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiaW5kKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmludmFsaWQpIHJldHVybjtcclxuICAgIC8vICAgICB0aGlzLnNldHVwX2NsaWNrX2V2ZW50KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2V0dXBfY2xpY2tfZXZlbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBwcmV2RG93blRpbWUgPSAwO1xyXG4gICAgICAgICQub24odGhpcy4kYmFyLCAnbW91c2Vkb3duJywgKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkb3duVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKChkb3duVGltZSAtIHByZXZEb3duVGltZSkgPCB0aGlzLnNjZWQub3B0aW9ucy5kb3VibGVfY2xpY2tfdGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VkLmZyYW1lX29uX2JveCh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldkRvd25UaW1lID0gZG93blRpbWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQub24odGhpcy4kYmFyLCAndG91Y2hzdGFydCcsIChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGlmKChkb3duVGltZSAtIHByZXZEb3duVGltZSkgPCB0aGlzLnNjZWQub3B0aW9ucy5kb3VibGVfY2xpY2tfdGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlZC5mcmFtZV9vbl9ib3godGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2RG93blRpbWUgPSBkb3duVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyAkLm9uKHRoaXMuJGJhciwgJ21vdXNlbW92ZScsIGUgPT4ge1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gaWYgKGlzX2RyYWdnaW5nIHx8IGlzX3Jlc2l6aW5nX2xlZnQgfHwgaXNfcmVzaXppbmdfcmlnaHQpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGJhcnMuZm9yRWFjaChiYXIgPT4gYmFyLmdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgaXNfZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gJC5vbih0aGlzLmdyb3VwLCAnZm9jdXMgJyArIHRoaXMuc2NlZC5vcHRpb25zLnBvcHVwX3RyaWdnZXIsIGUgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5hY3Rpb25fY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBqdXN0IGZpbmlzaGVkIGEgbW92ZSBhY3Rpb24sIHdhaXQgZm9yIGEgZmV3IHNlY29uZHNcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgaWYgKGUudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zY2VkLnRyaWdnZXJfZXZlbnQoJ2NsaWNrJywgW3RoaXMudGFza10pO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjZWQudW5zZWxlY3RfYWxsKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZ3JvdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyBpZiAoZS50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzLnNob3dfcG9wdXAoZSk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93X3BvcHVwKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zY2VkLmJhcl9iZWluZ19kcmFnZ2VkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0X2RhdGUgPSBkYXRlX3V0aWxzLmZvcm1hdCh0aGlzLnRhc2suc3RhcnQsICdNTU0gRCcsIHRoaXMuc2NlZC5vcHRpb25zLmxhbmd1YWdlKTtcclxuICAgICAgICBjb25zdCBlbmRfZGF0ZSA9IGRhdGVfdXRpbHMuZm9ybWF0KFxyXG4gICAgICAgICAgICBkYXRlX3V0aWxzLmFkZCh0aGlzLnRhc2suZW5kLCAtMSwgJ3NlY29uZCcpLFxyXG4gICAgICAgICAgICAnTU1NIEQnLFxyXG4gICAgICAgICAgICB0aGlzLnNjZWQub3B0aW9ucy5sYW5ndWFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBzdGFydF9kYXRlICsgJyAtICcgKyBlbmRfZGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VkLnNob3dfcG9wdXAoe1xyXG4gICAgICAgICAgICB0YXJnZXRfZWxlbWVudDogdGhpcy4kYmFyLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJiZWxvd1wiLFxyXG4gICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICB4OiB0aGlzLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMueSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRhc2submFtZSxcclxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlLFxyXG4gICAgICAgICAgICB0YXNrOiB0aGlzLnRhc2tcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVfYmFyX3Bvc2l0aW9uKHsgeCA9IG51bGwsIHdpZHRoID0gbnVsbCB9KSB7XHJcbiAgICAvLyAgICAgY29uc3QgYmFyID0gdGhpcy4kYmFyO1xyXG4gICAgLy8gICAgIGlmICh4KSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGdldCBhbGwgeCB2YWx1ZXMgb2YgcGFyZW50IHRhc2tcclxuICAgIC8vICAgICAgICAgY29uc3QgeHMgPSB0aGlzLnRhc2suZGVwZW5kZW5jaWVzLm1hcChkZXAgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlZC5nZXRfYmFyKGRlcCkuJGJhci5nZXRYKCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAvLyBjaGlsZCB0YXNrIG11c3Qgbm90IGdvIGJlZm9yZSBwYXJlbnRcclxuICAgIC8vICAgICAgICAgY29uc3QgdmFsaWRfeCA9IHhzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHggPj0gY3VycjtcclxuICAgIC8vICAgICAgICAgfSwgeCk7XHJcbiAgICAvLyAgICAgICAgIGlmICghdmFsaWRfeCkge1xyXG4gICAgLy8gICAgICAgICAgICAgd2lkdGggPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlX2F0dHIoYmFyLCAneCcsIHgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAod2lkdGggJiYgd2lkdGggPj0gdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlX2F0dHIoYmFyLCAnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlX2xhYmVsX3Bvc2l0aW9uKCk7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVfaGFuZGxlX3Bvc2l0aW9uKCk7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVfcHJvZ3Jlc3NiYXJfcG9zaXRpb24oKTtcclxuICAgIC8vICAgICB0aGlzLnVwZGF0ZV9hcnJvd19wb3NpdGlvbigpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRhdGVfY2hhbmdlZCgpIHtcclxuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHsgbmV3X3N0YXJ0X2RhdGUsIG5ld19lbmRfZGF0ZSB9ID0gdGhpcy5jb21wdXRlX3N0YXJ0X2VuZF9kYXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIodGhpcy50YXNrLnN0YXJ0KSAhPT0gTnVtYmVyKG5ld19zdGFydF9kYXRlKSkge1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXNrLnN0YXJ0ID0gbmV3X3N0YXJ0X2RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKHRoaXMudGFzay5lbmQpICE9PSBOdW1iZXIobmV3X2VuZF9kYXRlKSkge1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXNrLmVuZCA9IG5ld19lbmRfZGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hhbmdlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNjZWQudHJpZ2dlcl9ldmVudCgnZGF0ZV9jaGFuZ2UnLCBbXHJcbiAgICAgICAgICAgIHRoaXMudGFzayxcclxuICAgICAgICAgICAgbmV3X3N0YXJ0X2RhdGUsXHJcbiAgICAgICAgICAgIGRhdGVfdXRpbHMuYWRkKG5ld19lbmRfZGF0ZSwgLTEsICdzZWNvbmQnKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2dyZXNzX2NoYW5nZWQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3X3Byb2dyZXNzID0gdGhpcy5jb21wdXRlX3Byb2dyZXNzKCk7XHJcbiAgICAgICAgdGhpcy50YXNrLnByb2dyZXNzID0gbmV3X3Byb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuc2NlZC50cmlnZ2VyX2V2ZW50KCdwcm9ncmVzc19jaGFuZ2UnLCBbdGhpcy50YXNrLCBuZXdfcHJvZ3Jlc3NdKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRfYWN0aW9uX2NvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbl9jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuYWN0aW9uX2NvbXBsZXRlZCA9IGZhbHNlKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZV9zdGFydF9lbmRfZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLiRiYXI7XHJcbiAgICAgICAgY29uc3QgeF9pbl91bml0cyA9IGJhci5nZXRYKCkgLyB0aGlzLnNjZWQub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcbiAgICAgICAgY29uc3QgbmV3X3N0YXJ0X2RhdGUgPSBkYXRlX3V0aWxzLmFkZChcclxuICAgICAgICAgICAgdGhpcy5zY2VkLmdhbnR0X3N0YXJ0LFxyXG4gICAgICAgICAgICB4X2luX3VuaXRzICogdGhpcy5zY2VkLm9wdGlvbnMuc3RlcCxcclxuICAgICAgICAgICAgJ2hvdXInXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB3aWR0aF9pbl91bml0cyA9IGJhci5nZXRXaWR0aCgpIC8gdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgICAgIGNvbnN0IG5ld19lbmRfZGF0ZSA9IGRhdGVfdXRpbHMuYWRkKFxyXG4gICAgICAgICAgICBuZXdfc3RhcnRfZGF0ZSxcclxuICAgICAgICAgICAgd2lkdGhfaW5fdW5pdHMgKiB0aGlzLnNjZWQub3B0aW9ucy5zdGVwLFxyXG4gICAgICAgICAgICAnaG91cidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4geyBuZXdfc3RhcnRfZGF0ZSwgbmV3X2VuZF9kYXRlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZV9wcm9ncmVzcygpIHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9XHJcbiAgICAgICAgICAgIHRoaXMuJGJhcl9wcm9ncmVzcy5nZXRXaWR0aCgpIC8gdGhpcy4kYmFyLmdldFdpZHRoKCkgKiAxMDA7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHByb2dyZXNzLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZV94KCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcCwgY29sdW1uX3dpZHRoIH0gPSB0aGlzLnNjZWQub3B0aW9ucztcclxuICAgICAgICBjb25zdCB0YXNrX3N0YXJ0ID0gdGhpcy50YXNrLnN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IHBhcmVudF9zdGFydCA9IHRoaXMucGFyZW50LnN0YXJ0O1xyXG5cclxuICAgICAgICBjb25zdCBkaWZmID0gZGF0ZV91dGlscy5kaWZmKHRhc2tfc3RhcnQsIHBhcmVudF9zdGFydCwgJ2hvdXInKTtcclxuICAgICAgICBsZXQgeCA9IGRpZmYgLyBzdGVwICogY29sdW1uX3dpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VkLnZpZXdfaXMoJ01vbnRoJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGRhdGVfdXRpbHMuZGlmZih0YXNrX3N0YXJ0LCBwYXJlbnRfc3RhcnQsICdkYXknKTtcclxuICAgICAgICAgICAgeCA9IGRpZmYgKiBjb2x1bW5fd2lkdGggLyAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcHV0ZV95KCkge1xyXG4gICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NlZC5vcHRpb25zLmhlYWRlcl9oZWlnaHQgK1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjZWQub3B0aW9ucy5wYWRkaW5nICtcclxuICAgIC8vICAgICAgICAgdGhpcy50YXNrLmluZGV4ICogKHRoaXMuaGVpZ2h0ICsgdGhpcy5zY2VkLm9wdGlvbnMucGFkZGluZylcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldF9zbmFwX3Bvc2l0aW9uKGR4KSB7XHJcbiAgICAgICAgbGV0IG9keCA9IGR4LFxyXG4gICAgICAgICAgICByZW0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VkLnZpZXdfaXMoJ1dlZWsnKSkge1xyXG4gICAgICAgICAgICByZW0gPSBkeCAlICh0aGlzLnNjZWQub3B0aW9ucy5jb2x1bW5fd2lkdGggLyA3KTtcclxuICAgICAgICAgICAgcG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgb2R4IC1cclxuICAgICAgICAgICAgICAgIHJlbSArXHJcbiAgICAgICAgICAgICAgICAocmVtIDwgdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoIC8gMTRcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2NlZC5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY2VkLnZpZXdfaXMoJ01vbnRoJykpIHtcclxuICAgICAgICAgICAgcmVtID0gZHggJSAodGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoIC8gMzApO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICBvZHggLVxyXG4gICAgICAgICAgICAgICAgcmVtICtcclxuICAgICAgICAgICAgICAgIChyZW0gPCB0aGlzLnNjZWQub3B0aW9ucy5jb2x1bW5fd2lkdGggLyA2MFxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoIC8gMzApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbSA9IGR4ICUgdGhpcy5zY2VkLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICBvZHggLVxyXG4gICAgICAgICAgICAgICAgcmVtICtcclxuICAgICAgICAgICAgICAgIChyZW0gPCB0aGlzLnNjZWQub3B0aW9ucy5jb2x1bW5fd2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNjZWQub3B0aW9ucy5jb2x1bW5fd2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX2F0dHIoZWxlbWVudCwgYXR0ciwgdmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZV9wcm9ncmVzc2Jhcl9wb3NpdGlvbigpIHtcclxuICAgICAgICAvLyB0aGlzLiRiYXJfcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCd4JywgdGhpcy4kYmFyLmdldFgoKSk7XHJcbiAgICAgICAgdGhpcy4kYmFyX3Byb2dyZXNzLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgICAgdGhpcy4kYmFyLmdldFdpZHRoKCkgKiAodGhpcy50YXNrLnByb2dyZXNzIC8gMTAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlX2xhYmVsX3Bvc2l0aW9uKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhciA9IHRoaXMuJGJhcixcclxuICAgIC8vICAgICAgICAgbGFiZWwgPSB0aGlzLmdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5iYXItbGFiZWwnKTtcclxuXHJcbiAgICAvLyAgICAgLyppZiAobGFiZWwuZ2V0QkJveCgpLndpZHRoID4gYmFyLmdldFdpZHRoKCkpIHtcclxuICAgIC8vICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnYmlnJyk7XHJcbiAgICAvLyAgICAgICAgIC8vIGxhYmVsLnNldEF0dHJpYnV0ZSgneCcsIGJhci5nZXRYKCkgKyBiYXIuZ2V0V2lkdGgoKSArIDUpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgdGhpcy50ZXh0X3RyWzBdID0gYmFyLmdldFgoKSArIGJhci5nZXRXaWR0aCgpICsgNVxyXG4gICAgLy8gICAgIH0gZWxzZSAqL3tcclxuICAgIC8vICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmlnJyk7XHJcbiAgICAvLyAgICAgICAgIC8vIGxhYmVsLnNldEF0dHJpYnV0ZSgneCcsIGJhci5nZXRYKCkgKyBiYXIuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRleHRfdHJbMF0gPSBiYXIuZ2V0WCgpICsgYmFyLmdldFdpZHRoKCkgLyAyXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlX2xhYmVsX3RyYW5zZm9ybSgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgdXBkYXRlX2hhbmRsZV9wb3NpdGlvbigpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLiRiYXI7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVfZ3JvdXBcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5oYW5kbGUubGVmdCcpXHJcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3gnLCAxKTtcclxuICAgICAgICB0aGlzLmhhbmRsZV9ncm91cFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmhhbmRsZS5yaWdodCcpXHJcbiAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3gnLCB0aGlzLndpZHRoICAtIDkpO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ3JvdXAucXVlcnlTZWxlY3RvcignLmhhbmRsZS5wcm9ncmVzcycpO1xyXG4gICAgICAgIGhhbmRsZSAmJlxyXG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0aGlzLmdldF9wcm9ncmVzc19wb2x5Z29uX3BvaW50cygpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfYXJyb3dfcG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFycm93cyB8fCBbXTtcclxuICAgICAgICBmb3IgKGxldCBhcnJvdyBvZiB0aGlzLmFycm93cykge1xyXG4gICAgICAgICAgICBhcnJvdy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XHJcbiAgICB2YXIgZ2V0VHlwZSA9IHt9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBmdW5jdGlvblRvQ2hlY2sgJiZcclxuICAgICAgICBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG4gICAgKTtcclxufVxyXG4iLCJjb25zdCBZRUFSID0gJ3llYXInO1xyXG5jb25zdCBNT05USCA9ICdtb250aCc7XHJcbmNvbnN0IERBWSA9ICdkYXknO1xyXG5jb25zdCBIT1VSID0gJ2hvdXInO1xyXG5jb25zdCBNSU5VVEUgPSAnbWludXRlJztcclxuY29uc3QgU0VDT05EID0gJ3NlY29uZCc7XHJcbmNvbnN0IE1JTExJU0VDT05EID0gJ21pbGxpc2Vjb25kJztcclxuXHJcbmNvbnN0IG1vbnRoX25hbWVzID0ge1xyXG4gICAgLy8gZW46IFtcclxuICAgIC8vICAgICAnSmFudWFyeScsXHJcbiAgICAvLyAgICAgJ0ZlYnJ1YXJ5JyxcclxuICAgIC8vICAgICAnTWFyY2gnLFxyXG4gICAgLy8gICAgICdBcHJpbCcsXHJcbiAgICAvLyAgICAgJ01heScsXHJcbiAgICAvLyAgICAgJ0p1bmUnLFxyXG4gICAgLy8gICAgICdKdWx5JyxcclxuICAgIC8vICAgICAnQXVndXN0JyxcclxuICAgIC8vICAgICAnU2VwdGVtYmVyJyxcclxuICAgIC8vICAgICAnT2N0b2JlcicsXHJcbiAgICAvLyAgICAgJ05vdmVtYmVyJyxcclxuICAgIC8vICAgICAnRGVjZW1iZXInXHJcbiAgICAvLyBdLFxyXG4gICAgZW46IFtcclxuICAgICAgICAnSmFuJyxcclxuICAgICAgICAnRmViJyxcclxuICAgICAgICAnTWFyJyxcclxuICAgICAgICAnQXByJyxcclxuICAgICAgICAnTWF5JyxcclxuICAgICAgICAnSnVuJyxcclxuICAgICAgICAnSnVsJyxcclxuICAgICAgICAnQXVnJyxcclxuICAgICAgICAnU2VwJyxcclxuICAgICAgICAnT2N0JyxcclxuICAgICAgICAnTm92JyxcclxuICAgICAgICAnRGVjJ1xyXG4gICAgXSxcclxuICAgIGVzOiBbXHJcbiAgICAgICAgJ0VuZXJvJyxcclxuICAgICAgICAnRmVicmVybycsXHJcbiAgICAgICAgJ01hcnpvJyxcclxuICAgICAgICAnQWJyaWwnLFxyXG4gICAgICAgICdNYXlvJyxcclxuICAgICAgICAnSnVuaW8nLFxyXG4gICAgICAgICdKdWxpbycsXHJcbiAgICAgICAgJ0Fnb3N0bycsXHJcbiAgICAgICAgJ1NlcHRpZW1icmUnLFxyXG4gICAgICAgICdPY3R1YnJlJyxcclxuICAgICAgICAnTm92aWVtYnJlJyxcclxuICAgICAgICAnRGljaWVtYnJlJ1xyXG4gICAgXSxcclxuICAgIHJ1OiBbXHJcbiAgICAgICAgJ9Cv0L3QstCw0YDRjCcsXHJcbiAgICAgICAgJ9Ck0LXQstGA0LDQu9GMJyxcclxuICAgICAgICAn0JzQsNGA0YInLFxyXG4gICAgICAgICfQkNC/0YDQtdC70YwnLFxyXG4gICAgICAgICfQnNCw0LknLFxyXG4gICAgICAgICfQmNGO0L3RjCcsXHJcbiAgICAgICAgJ9CY0Y7Qu9GMJyxcclxuICAgICAgICAn0JDQstCz0YPRgdGCJyxcclxuICAgICAgICAn0KHQtdC90YLRj9Cx0YDRjCcsXHJcbiAgICAgICAgJ9Ce0LrRgtGP0LHRgNGMJyxcclxuICAgICAgICAn0J3QvtGP0LHRgNGMJyxcclxuICAgICAgICAn0JTQtdC60LDQsdGA0YwnXHJcbiAgICBdLFxyXG4gICAgcHRCcjogW1xyXG4gICAgICAgICdKYW5laXJvJyxcclxuICAgICAgICAnRmV2ZXJlaXJvJyxcclxuICAgICAgICAnTWFyw6dvJyxcclxuICAgICAgICAnQWJyaWwnLFxyXG4gICAgICAgICdNYWlvJyxcclxuICAgICAgICAnSnVuaG8nLFxyXG4gICAgICAgICdKdWxobycsXHJcbiAgICAgICAgJ0Fnb3N0bycsXHJcbiAgICAgICAgJ1NldGVtYnJvJyxcclxuICAgICAgICAnT3V0dWJybycsXHJcbiAgICAgICAgJ05vdmVtYnJvJyxcclxuICAgICAgICAnRGV6ZW1icm8nXHJcbiAgICBdLFxyXG4gICAgZnI6IFtcclxuICAgICAgICAnSmFudmllcicsXHJcbiAgICAgICAgJ0bDqXZyaWVyJyxcclxuICAgICAgICAnTWFycycsXHJcbiAgICAgICAgJ0F2cmlsJyxcclxuICAgICAgICAnTWFpJyxcclxuICAgICAgICAnSnVpbicsXHJcbiAgICAgICAgJ0p1aWxsZXQnLFxyXG4gICAgICAgICdBb8O7dCcsXHJcbiAgICAgICAgJ1NlcHRlbWJyZScsXHJcbiAgICAgICAgJ09jdG9icmUnLFxyXG4gICAgICAgICdOb3ZlbWJyZScsXHJcbiAgICAgICAgJ0TDqWNlbWJyZSdcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHBhcnNlKGRhdGUsIGRhdGVfc2VwYXJhdG9yID0gJy0nLCB0aW1lX3NlcGFyYXRvciA9IC9bLjpdLykge1xyXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZV9wYXJ0cywgdGltZV9wYXJ0cztcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBkYXRlLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgICAgICBkYXRlX3BhcnRzID0gcGFydHNbMF1cclxuICAgICAgICAgICAgICAgIC5zcGxpdChkYXRlX3NlcGFyYXRvcilcclxuICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHBhcnNlSW50KHZhbCwgMTApKTtcclxuICAgICAgICAgICAgdGltZV9wYXJ0cyA9IHBhcnRzWzFdICYmIHBhcnRzWzFdLnNwbGl0KHRpbWVfc2VwYXJhdG9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vbnRoIGlzIDAgaW5kZXhlZFxyXG4gICAgICAgICAgICBkYXRlX3BhcnRzWzFdID0gZGF0ZV9wYXJ0c1sxXSAtIDE7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFscyA9IGRhdGVfcGFydHM7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZV9wYXJ0cyAmJiB0aW1lX3BhcnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVfcGFydHMubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lX3BhcnRzWzNdID0gJzAuJyArIHRpbWVfcGFydHNbM107XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZV9wYXJ0c1szXSA9IHBhcnNlRmxvYXQodGltZV9wYXJ0c1szXSkgKiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFscyA9IHZhbHMuY29uY2F0KHRpbWVfcGFydHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoLi4udmFscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJzZVhMU1hEYXRlKGRhdGUpIHsvLyBcIk1NL0REL1lZWVlcIlxyXG4gICAgXHJcbiAgICAgICAgbGV0IGRhdGVfcGFydHMsIHRpbWVfcGFydHM7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBkYXRlLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGRhdGVfcGFydHMgPSBwYXJ0c1swXVxyXG4gICAgICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgICAubWFwKHZhbCA9PiBwYXJzZUludCh2YWwsIDEwKSk7XHJcbiAgICAgICAgdGltZV9wYXJ0cyA9IHBhcnRzWzFdICYmIHBhcnRzWzFdLnNwbGl0KHRpbWVfc2VwYXJhdG9yKTtcclxuXHJcbiAgICAgICAgLy8gbW9udGggaXMgMCBpbmRleGVkXHJcbiAgICAgICAgLy8gZGF0ZV9wYXJ0c1swXSA9IGRhdGVfcGFydHNbMF0gLSAxO1xyXG5cclxuICAgICAgICBsZXQgdmFscyA9IGRhdGVfcGFydHM7XHJcblxyXG4gICAgICAgIGlmICh0aW1lX3BhcnRzICYmIHRpbWVfcGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lX3BhcnRzLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lX3BhcnRzWzNdID0gJzAuJyArIHRpbWVfcGFydHNbM107XHJcbiAgICAgICAgICAgICAgICB0aW1lX3BhcnRzWzNdID0gcGFyc2VGbG9hdCh0aW1lX3BhcnRzWzNdKSAqIDEwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFscyA9IHZhbHMuY29uY2F0KHRpbWVfcGFydHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBEYXRlKC4uLnZhbHMpO1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGAke3ZhbHNbMV19ICR7bW9udGhfbmFtZXMuZW5bdmFsc1swXS0xXX0gMjAke3ZhbHNbMl19YDtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoc3RyKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9fc3RyaW5nKGRhdGUsIHdpdGhfdGltZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgdHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWxzID0gdGhpcy5nZXRfZGF0ZV92YWx1ZXMoZGF0ZSkubWFwKCh2YWwsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCAxIGZvciBtb250aFxyXG4gICAgICAgICAgICAgICAgdmFsID0gdmFsICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYWRTdGFydCh2YWwgKyAnJywgMywgJzAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhZFN0YXJ0KHZhbCArICcnLCAyLCAnMCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGVfc3RyaW5nID0gYCR7dmFsc1swXX0tJHt2YWxzWzFdfS0ke3ZhbHNbMl19YDtcclxuICAgICAgICBjb25zdCB0aW1lX3N0cmluZyA9IGAke3ZhbHNbM119OiR7dmFsc1s0XX06JHt2YWxzWzVdfS4ke3ZhbHNbNl19YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGVfc3RyaW5nICsgKHdpdGhfdGltZSA/ICcgJyArIHRpbWVfc3RyaW5nIDogJycpO1xyXG4gICAgfSxcclxuXHJcbiAgICBmb3JtYXQoZGF0ZSwgZm9ybWF0X3N0cmluZyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycsIGxhbmcgPSAnZW4nKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRfZGF0ZV92YWx1ZXMoZGF0ZSkubWFwKGQgPT4gcGFkU3RhcnQoZCwgMiwgMCkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdF9tYXAgPSB7XHJcbiAgICAgICAgICAgIFlZWVk6IHZhbHVlc1swXSxcclxuICAgICAgICAgICAgTU06IHBhZFN0YXJ0KCt2YWx1ZXNbMV0gKyAxLCAyLCAwKSxcclxuICAgICAgICAgICAgREQ6IHZhbHVlc1syXSxcclxuICAgICAgICAgICAgSEg6IHZhbHVlc1szXSxcclxuICAgICAgICAgICAgbW06IHZhbHVlc1s0XSxcclxuICAgICAgICAgICAgc3M6IHZhbHVlc1s1XSxcclxuICAgICAgICAgICAgU1NTOnZhbHVlc1s2XSxcclxuICAgICAgICAgICAgRDogdmFsdWVzWzJdLFxyXG4gICAgICAgICAgICBNTU1NOiBtb250aF9uYW1lc1tsYW5nXVsrdmFsdWVzWzFdXSxcclxuICAgICAgICAgICAgTU1NOiBtb250aF9uYW1lc1tsYW5nXVsrdmFsdWVzWzFdXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSBmb3JtYXRfc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZF92YWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybWF0X21hcClcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpIC8vIGJpZyBzdHJpbmcgZmlyc3RcclxuICAgICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGtleSwgYCQke2Zvcm1hdHRlZF92YWx1ZXMubGVuZ3RofWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF92YWx1ZXMucHVzaChmb3JtYXRfbWFwW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9ybWF0dGVkX3ZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShgJCR7aX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZmYoZGF0ZV9hLCBkYXRlX2IsIHNjYWxlID0gREFZKSB7XHJcbiAgICAgICAgbGV0IG1pbGxpc2Vjb25kcywgc2Vjb25kcywgaG91cnMsIG1pbnV0ZXMsIGRheXMsIG1vbnRocywgeWVhcnM7XHJcblxyXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IGRhdGVfYSAtIGRhdGVfYjtcclxuICAgICAgICBzZWNvbmRzID0gbWlsbGlzZWNvbmRzIC8gMTAwMDtcclxuICAgICAgICBtaW51dGVzID0gc2Vjb25kcyAvIDYwO1xyXG4gICAgICAgIGhvdXJzID0gbWludXRlcyAvIDYwO1xyXG4gICAgICAgIGRheXMgPSBob3VycyAvIDI0O1xyXG4gICAgICAgIG1vbnRocyA9IGRheXMgLyAzMDtcclxuICAgICAgICB5ZWFycyA9IG1vbnRocyAvIDEyO1xyXG5cclxuICAgICAgICBpZiAoIXNjYWxlLmVuZHNXaXRoKCdzJykpIHtcclxuICAgICAgICAgICAgc2NhbGUgKz0gJ3MnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kcyxcclxuICAgICAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgaG91cnMsXHJcbiAgICAgICAgICAgICAgICBkYXlzLFxyXG4gICAgICAgICAgICAgICAgbW9udGhzLFxyXG4gICAgICAgICAgICAgICAgeWVhcnNcclxuICAgICAgICAgICAgfVtzY2FsZV1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2RheSgpIHtcclxuICAgICAgICBjb25zdCB2YWxzID0gdGhpcy5nZXRfZGF0ZV92YWx1ZXMobmV3IERhdGUoKSkuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKC4uLnZhbHMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBub3coKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZChkYXRlLCBxdHksIHNjYWxlKSB7XHJcbiAgICAgICAgcXR5ID0gcGFyc2VJbnQocXR5LCAxMCk7XHJcbiAgICAgICAgY29uc3QgdmFscyA9IFtcclxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICsgKHNjYWxlID09PSBZRUFSID8gcXR5IDogMCksXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSArIChzY2FsZSA9PT0gTU9OVEggPyBxdHkgOiAwKSxcclxuICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgKyAoc2NhbGUgPT09IERBWSA/IHF0eSA6IDApLFxyXG4gICAgICAgICAgICBkYXRlLmdldEhvdXJzKCkgKyAoc2NhbGUgPT09IEhPVVIgPyBxdHkgOiAwKSxcclxuICAgICAgICAgICAgZGF0ZS5nZXRNaW51dGVzKCkgKyAoc2NhbGUgPT09IE1JTlVURSA/IHF0eSA6IDApLFxyXG4gICAgICAgICAgICBkYXRlLmdldFNlY29uZHMoKSArIChzY2FsZSA9PT0gU0VDT05EID8gcXR5IDogMCksXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgKyAoc2NhbGUgPT09IE1JTExJU0VDT05EID8gcXR5IDogMClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSguLi52YWxzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnRfb2YoZGF0ZSwgc2NhbGUpIHtcclxuICAgICAgICBjb25zdCBzY29yZXMgPSB7XHJcbiAgICAgICAgICAgIFtZRUFSXTogNixcclxuICAgICAgICAgICAgW01PTlRIXTogNSxcclxuICAgICAgICAgICAgW0RBWV06IDQsXHJcbiAgICAgICAgICAgIFtIT1VSXTogMyxcclxuICAgICAgICAgICAgW01JTlVURV06IDIsXHJcbiAgICAgICAgICAgIFtTRUNPTkRdOiAxLFxyXG4gICAgICAgICAgICBbTUlMTElTRUNPTkRdOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkX3Jlc2V0KF9zY2FsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhfc2NvcmUgPSBzY29yZXNbc2NhbGVdO1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcmVzW19zY2FsZV0gPD0gbWF4X3Njb3JlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFscyA9IFtcclxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBzaG91bGRfcmVzZXQoWUVBUikgPyAwIDogZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICBzaG91bGRfcmVzZXQoTU9OVEgpID8gMSA6IGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICBzaG91bGRfcmVzZXQoREFZKSA/IDAgOiBkYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgICAgIHNob3VsZF9yZXNldChIT1VSKSA/IDAgOiBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgc2hvdWxkX3Jlc2V0KE1JTlVURSkgPyAwIDogZGF0ZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgIHNob3VsZF9yZXNldChTRUNPTkQpID8gMCA6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKClcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoLi4udmFscyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lKGRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoLi4udGhpcy5nZXRfZGF0ZV92YWx1ZXMoZGF0ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRfZGF0ZV92YWx1ZXMoZGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICBkYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgZGF0ZS5nZXRIb3VycygpLFxyXG4gICAgICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKClcclxuICAgICAgICBdO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRfZGF5c19pbl9tb250aChkYXRlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9fb2ZfZGF5cyA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcblxyXG4gICAgICAgIGlmIChtb250aCAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9fb2ZfZGF5c1ttb250aF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGZWJcclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGlmICgoeWVhciAlIDQgPT0gMCAmJiB5ZWFyICUgMTAwICE9IDApIHx8IHllYXIgJSA0MDAgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAyODtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9wYWRTdGFydFxyXG5mdW5jdGlvbiBwYWRTdGFydChzdHIsIHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XHJcbiAgICBzdHIgPSBzdHIgKyAnJztcclxuICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aCA+PiAwO1xyXG4gICAgcGFkU3RyaW5nID0gU3RyaW5nKHR5cGVvZiBwYWRTdHJpbmcgIT09ICd1bmRlZmluZWQnID8gcGFkU3RyaW5nIDogJyAnKTtcclxuICAgIGlmIChzdHIubGVuZ3RoID4gdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGggLSBzdHIubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0YXJnZXRMZW5ndGggPiBwYWRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhZFN0cmluZyArPSBwYWRTdHJpbmcucmVwZWF0KHRhcmdldExlbmd0aCAvIHBhZFN0cmluZy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFkU3RyaW5nLnNsaWNlKDAsIHRhcmdldExlbmd0aCkgKyBTdHJpbmcoc3RyKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IFNjaGVkdWxlIGZyb20gJy4vc2NoZWR1bGUuanMnO1xyXG5pbXBvcnQgVmlld2VyIGZyb20gJy4vdmlld2VyLmpzJztcclxuaW1wb3J0IFF1ZXJ5U2V0V2lkZ2V0IGZyb20gJy4vUXVlcnlTZXRXaWRnZXQuanMnO1xyXG5cclxuaW1wb3J0ICcuL3NjZWQuc2Nzcyc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgU2NoZWR1bGUsXHJcbiAgICBWaWV3ZXIsXHJcbiAgICBRdWVyeVNldFdpZGdldFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBjdXN0b21faHRtbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tX2h0bWwgPSBjdXN0b21faHRtbDtcclxuICAgICAgICB0aGlzLm1ha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJ0aXRsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlclwiPjwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5zdWJ0aXRsZSA9IHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJ0aXRsZScpO1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93KG9wdGlvbnMpOlwiLCBvcHRpb25zKVxyXG4gICAgICAgIGlmICghb3B0aW9ucy50YXJnZXRfZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldF9lbGVtZW50IGlzIHJlcXVpcmVkIHRvIHNob3cgcG9wdXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucG9zaXRpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRhcmdldF9lbGVtZW50ID0gb3B0aW9ucy50YXJnZXRfZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tX2h0bWwpIHtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmN1c3RvbV9odG1sKG9wdGlvbnMudGFzayk7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJwb2ludGVyXCI+PC9kaXY+JztcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcignLnBvaW50ZXInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzZXQgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IG9wdGlvbnMudGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuc3VidGl0bGUuaW5uZXJIVE1MID0gb3B0aW9ucy5zdWJ0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUud2lkdGggPSB0aGlzLnBhcmVudC5jbGllbnRXaWR0aCArICdweCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cclxuICAgICAgICBsZXQgcG9zaXRpb25fbWV0YTtcclxuICAgICAgICBpZiAodGFyZ2V0X2VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbl9tZXRhID0gdGFyZ2V0X2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRfZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgcG9zaXRpb25fbWV0YSA9IG9wdGlvbnMudGFyZ2V0X2VsZW1lbnQuZ2V0QkJveCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucG9zaXRpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IHBvc2l0aW9uX21ldGEueDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IG9wdGlvbnMueSB8fCBwb3NpdGlvbl9tZXRhLnk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmxlZnQgPSB4ICsgKHBvc2l0aW9uX21ldGEud2lkdGggKyAxMCkgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlci5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWig5MGRlZyknO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIuc3R5bGUubGVmdCA9ICctN3B4JztcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyLnN0eWxlLnRvcCA9ICcycHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IChvcHRpb25zLmUuY2xpZW50WCAtIDE4KTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IG9wdGlvbnMueSArIG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKDE4MGRlZyknO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXIuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyLnN0eWxlLnRvcCA9ICctMTVweCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NjZWQuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJcclxuLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvI3Rvb2xzLWZvci1waWNraW5nLWNvbG9yc1xyXG5leHBvcnQgZGVmYXVsdCAgW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVkIDUwXCIsXHJcbiAgICBjb2xvcnM6IFtcclxuICAgICAgJyNGRkNERDInLFxyXG4gICAgICAnI0VGOUE5QScsXHJcbiAgICAgICcjRTU3MzczJyxcclxuICAgICAgJyNFRjUzNTAnLFxyXG4gICAgICAnI0Y0NDMzNicsXHJcbiAgICAgICcjRTUzOTM1JyxcclxuICAgICAgJyNEMzJGMkYnLFxyXG4gICAgICAnI0M2MjgyOCcsXHJcbiAgICAgICcjQjcxQzFDJ1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaW5rIDUwXCIsXHJcbiAgICBjb2xvcnM6IFtcclxuICAgICAgXCIjRjhCQkQwXCIsXHJcbiAgICAgIFwiI0Y0OEZCMVwiLFxyXG4gICAgICBcIiNGMDYyOTJcIixcclxuICAgICAgXCIjRUM0MDdBXCIsXHJcbiAgICAgIFwiI0U5MUU2M1wiLFxyXG4gICAgICBcIiNEODFCNjBcIixcclxuICAgICAgXCIjQzIxODVCXCIsXHJcbiAgICAgIFwiI0FEMTQ1N1wiLFxyXG4gICAgICBcIiM4ODBFNEZcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQdXJwbGUgNTBcIixcclxuICAgIGNvbG9yczogW1xyXG4gICAgICBcIiNFMUJFRTdcIixcclxuICAgICAgXCIjQ0U5M0Q4XCIsXHJcbiAgICAgIFwiI0JBNjhDOFwiLFxyXG4gICAgICBcIiNBQjQ3QkNcIixcclxuICAgICAgXCIjOUMyN0IwXCIsXHJcbiAgICAgIFwiIzhFMjRBQVwiLFxyXG4gICAgICBcIiM3QjFGQTJcIixcclxuICAgICAgXCIjNkExQjlBXCIsXHJcbiAgICAgIFwiIzRBMTQ4Q1wiXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkluZGlnbyA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0M1Q0FFOVwiLFxyXG4gICAgICBcIiM5RkE4REFcIixcclxuICAgICAgXCIjNzk4NkNCXCIsXHJcbiAgICAgIFwiIzVDNkJDMFwiLFxyXG4gICAgICBcIiMzRjUxQjVcIixcclxuICAgICAgXCIjMzk0OUFCXCIsXHJcbiAgICAgIFwiIzMwM0Y5RlwiLFxyXG4gICAgICBcIiMyODM1OTNcIixcclxuICAgICAgXCIjMUEyMzdFXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmx1ZSA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0JCREVGQlwiLFxyXG4gICAgICBcIiM5MENBRjlcIixcclxuICAgICAgXCIjNjRCNUY2XCIsXHJcbiAgICAgIFwiIzQyQTVGNVwiLFxyXG4gICAgICBcIiMyMTk2RjNcIixcclxuICAgICAgXCIjMUU4OEU1XCIsXHJcbiAgICAgIFwiIzE5NzZEMlwiLFxyXG4gICAgICBcIiMxNTY1QzBcIixcclxuICAgICAgXCIjMEQ0N0ExXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ3lhbiA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0IyRUJGMlwiLFxyXG4gICAgICBcIiM4MERFRUFcIixcclxuICAgICAgXCIjNEREMEUxXCIsXHJcbiAgICAgIFwiIzI2QzZEQVwiLFxyXG4gICAgICBcIiMwMEJDRDRcIixcclxuICAgICAgXCIjMDBBQ0MxXCIsXHJcbiAgICAgIFwiIzAwOTdBN1wiLFxyXG4gICAgICBcIiMwMDgzOEZcIixcclxuICAgICAgXCIjMDA2MDY0XCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGVhbCA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0IyREZEQlwiLFxyXG4gICAgICBcIiM4MENCQzRcIixcclxuICAgICAgXCIjNERCNkFDXCIsXHJcbiAgICAgIFwiIzI2QTY5QVwiLFxyXG4gICAgICBcIiMwMDk2ODhcIixcclxuICAgICAgXCIjMDA4OTdCXCIsXHJcbiAgICAgIFwiIzAwNzk2QlwiLFxyXG4gICAgICBcIiMwMDY5NUNcIixcclxuICAgICAgXCIjMDA0RDQwXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JlZW4gNTBcIixcclxuICAgIGNvbG9yczogW1xyXG4gICAgICBcIiNDOEU2QzlcIixcclxuICAgICAgXCIjQTVENkE3XCIsXHJcbiAgICAgIFwiIzgxQzc4NFwiLFxyXG4gICAgICBcIiM2NkJCNkFcIixcclxuICAgICAgXCIjNENBRjUwXCIsXHJcbiAgICAgIFwiIzQzQTA0N1wiLFxyXG4gICAgICBcIiMzODhFM0NcIixcclxuICAgICAgXCIjMkU3RDMyXCIsXHJcbiAgICAgIFwiIzFCNUUyMFwiXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlllbGxvdyA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0ZGRjlDNFwiLFxyXG4gICAgICBcIiNGRkY1OURcIixcclxuICAgICAgXCIjRkZGMTc2XCIsXHJcbiAgICAgIFwiI0ZGRUU1OFwiLFxyXG4gICAgICBcIiNGRkVCM0JcIixcclxuICAgICAgXCIjRkREODM1XCIsXHJcbiAgICAgIFwiI0ZCQzAyRFwiLFxyXG4gICAgICBcIiNGOUE4MjVcIixcclxuICAgICAgXCIjRjU3RjE3XCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiT3JhbmdlIDUwXCIsXHJcbiAgICBjb2xvcnM6IFtcclxuICAgICAgXCIjRkZFMEIyXCIsXHJcbiAgICAgIFwiI0ZGQ0M4MFwiLFxyXG4gICAgICBcIiNGRkI3NERcIixcclxuICAgICAgXCIjRkZBNzI2XCIsXHJcbiAgICAgIFwiI0ZGOTgwMFwiLFxyXG4gICAgICBcIiNGQjhDMDBcIixcclxuICAgICAgXCIjRjU3QzAwXCIsXHJcbiAgICAgIFwiI0VGNkMwMFwiLFxyXG4gICAgICBcIiNFNjUxMDBcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCcm93biA1MFwiLFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIFwiI0Q3Q0NDOFwiLFxyXG4gICAgICBcIiNCQ0FBQTRcIixcclxuICAgICAgXCIjQTE4ODdGXCIsXHJcbiAgICAgIFwiIzhENkU2M1wiLFxyXG4gICAgICBcIiM3OTU1NDhcIixcclxuICAgICAgXCIjNkQ0QzQxXCIsXHJcbiAgICAgIFwiIzVENDAzN1wiLFxyXG4gICAgICBcIiM0RTM0MkVcIixcclxuICAgICAgXCIjM0UyNzIzXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmx1ZSBHcmF5IDUwXCIsXHJcbiAgICBjb2xvcnM6IFtcclxuICAgICAgXCIjQ0ZEOERDXCIsXHJcbiAgICAgIFwiI0IwQkVDNVwiLFxyXG4gICAgICBcIiM5MEE0QUVcIixcclxuICAgICAgXCIjNzg5MDlDXCIsXHJcbiAgICAgIFwiIzYwN0Q4QlwiLFxyXG4gICAgICBcIiM1NDZFN0FcIixcclxuICAgICAgXCIjNDU1QTY0XCIsXHJcbiAgICAgIFwiIzM3NDc0RlwiLFxyXG4gICAgICBcIiMyNjMyMzhcIlxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuIiwiaW1wb3J0IGRhdGVfdXRpbHMgZnJvbSAnLi9kYXRlX3V0aWxzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IGNvbG9yUGFsZXR0ZSBmcm9tICcuL3NjaGVkdWxlLWNvbG9ycy5qcyc7XHJcbmltcG9ydCBBZHZhbmNlZEdyb3VwIGZyb20gJy4vQWR2YW5jZWRHcm91cC5qcyc7XHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1ldGVyIH0gZnJvbSAnLi9RdWVyeVBhcmFtZXRlci5qcyc7XHJcblxyXG4vLyBHdWVzc2VkIGJhc2VkIG9uIHRoZSB2YWx1ZXMgb2YgXCJTdHJ1Y3QtRm5kbi1Db25jcmV0ZSBTbGFic19XYWxsc19Db2x1bW5zXCJcclxuLy8gU3RydWN0dXJhbCBGb3VuZGF0aW9ucyA9PSBORUdBVEVcclxuLy8gQ29uY3JldGUtUmVjdGFuZ3VsYXItQ29sdW1uID09IE9SXHJcbmNvbnN0IE5BVklTV09SS1NfRkxBR1MgPSB7XHJcbiAgLy8gSUdOT1JFX1NUUklOR19WQUxVRV9DQVNFOiAxPDwwLFxyXG4gIC8vIElHTk9SRV9TVFJJTkdfRElBQ1JJVElDUzogMTw8MSxcclxuICAvLyBJR05PUkVfVkFMVUVfQ0hBUkFDVEVSX1dJRFRIUzogMTw8MixcclxuICAvLyBJR05PUkVfQ0FURUdPUllfVVNFUl9OQU1FOiAxPDwzLFxyXG4gIC8vIElHTk9SRV9DQVRFR09SWV9JTlRFUk5BTF9OQU1FOiAxPDw0LFxyXG4gIC8vIElHTk9SRV9QUk9QRVJUWV9VU0VSX05BTUU6IDE8PDUsXHJcbiAgLy8gSUdOT1JFX1BST1BFUlRZX0lOVEVSTkFMX05BTUU6IDE8PDYsXHJcblxyXG4gIE5FR0FURV9DT05ESVRJT046IDMyLFxyXG4gIE9SX0NPTkRJVElPTjogNjQsXHJcbiAgUkVHRVhfQ09ORElUSU9OOiAxMjhcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLnRvdGFsVGFza3MgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBaZWFFbmdpbmUuU2lnbmFsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZWxlY3Rpb25TZXRzID0gbmV3IFNlbGVjdGlvblNldHNSb290KHRoaXMuc2NlbmUuZ2V0Um9vdCgpKTtcclxuICAgICAgICB0aGlzLnNldHMgPSBuZXcgWmVhRW5naW5lLlRyZWVJdGVtKCdTZXRzJylcclxuICAgICAgICBpZiAodGhpcy5zY2VuZSlcclxuICAgICAgICAgIHRoaXMuc2NlbmUuZ2V0Um9vdCgpLmFkZENoaWxkKHRoaXMuc2V0cylcclxuXHJcbiAgICAgICAgdGhpcy50YXNrc0FkZGVkID0gbmV3IFplYUVuZ2luZS5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZCA9IG5ldyBaZWFFbmdpbmUuU2lnbmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEpTT04odGFza3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3MubWFwKCh0YXNrSnNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGluZGV4KTtcclxuICAgICAgICAgICAgdGFzay5sb2FkSlNPTih0YXNrSnNvbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwX2RlcGVuZGVuY2llcygpIHtcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lfbWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiB0aGlzLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgb2YgdC5kZXBlbmRlbmNpZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeV9tYXBbZF0gPSB0aGlzLmRlcGVuZGVuY3lfbWFwW2RdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBlbmRlbmN5X21hcFtkXS5wdXNoKHQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkTVNQcm9qZWN0WExTWCh1cmwpIHtcclxuICAgICAgaWYgKCF3aW5kb3cuWExTWCkgXHJcbiAgICAgICAgdGhyb3coXCJYTFNYIGxpYnJhcnkgcmVxdWlyZWRcIilcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgXHJcbiAgICAgICAgLy8gTm90ZTogZXhhbXBsZSB0YWtlbiBmcm9tIGhlcmUuLlxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzgyMzg0MDcvaG93LXRvLXBhcnNlLWV4Y2VsLWZpbGUtaW4tamF2YXNjcmlwdC1odG1sNVxyXG4gICAgICAgIC8vIGFuZCBoZXJlOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TaGVldEpTL2pzLXhsc3gvdHJlZS9tYXN0ZXIvZGVtb3MveGhyXHJcbiAgICAgICAgLy8gY29uc3Qgc3RlbSA9IGZpbGUubmFtZS5zcGxpdCgnLicpWzBdOyAvLyB0cmltIG9mZiB0aGUgZXh0ZW5zaW9uXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfSAtICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjaGVja1N0YXR1cyhyZXNwb25zZSkgJiYgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcnNlWExTWChidWZmZXIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7IC8vIE5ldmVyIGZvcmdldCB0aGUgZmluYWwgY2F0Y2ghXHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnNlWExTWCA9IChkYXRhKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHVuaXQ4YXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgdmFyIHdvcmtib29rID0gWExTWC5yZWFkKHVuaXQ4YXJyYXksIHtcclxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlyc3RTaGVldCA9IHdvcmtib29rLlNoZWV0c1t3b3JrYm9vay5TaGVldE5hbWVzWzBdXTtcclxuICAgICAgICAgICAgLy8gSGVyZSBpcyB5b3VyIG9iamVjdFxyXG4gICAgICAgICAgICBjb25zdCByb3dzID0gWExTWC51dGlscy5zaGVldF90b19yb3dfb2JqZWN0X2FycmF5KGZpcnN0U2hlZXQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvamVjdFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHJvd3NbMF1bJ1BsYW5uZWQgU3RhcnQnXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RhcnQgPSBkYXRlX3V0aWxzLnBhcnNlWExTWERhdGUocm93c1swXVsnUGxhbm5lZCBTdGFydCddLCAnLycpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByb2plY3RTdGFydERhdGUgPSBEYXRlLnBhcnNlKHJvd3NbMF1bJ1BsYW5uZWQgU3RhcnQnXSwgXCJNTS9ERC9ZWVlZXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsVGFza3MgPSByb3dzLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGN1cnJDb2xvclNldDtcclxuICAgICAgICAgICAgcm93cy5zb21lKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soKTtcclxuICAgICAgICAgICAgICBjb25zdCBuZXN0aW5nID0gTnVtYmVyLnBhcnNlSW50KHJvd1snVGFzayBOZXN0aW5nJ10pO1xyXG4gICAgICAgICAgICAgIGlmIChuZXN0aW5nID09IDApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJDb2xvclNldCA9IGNvbG9yUGFsZXR0ZVt0aGlzLnRhc2tzLmxlbmd0aCAlIGNvbG9yUGFsZXR0ZS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93WydUYXNrIE5hbWUnXSwgY3VyckNvbG9yU2V0Lm5hbWUpXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0YXNrLmxvYWRNU1Byb2plY3RYTFNYKHJvdywgY3VyckNvbG9yU2V0LmNvbG9yc1tuZXN0aW5nKzJdKTtcclxuICAgICAgICAgICAgICAvLyBpZih0YXNrLnNlbGVjdGlvblNldCAmJiB0aGlzLnRhc2tzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgIC8vICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG5lc3RpbmcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMudGFza3MubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBjdXJyQ29sb3JTZXQgPSBjb2xvclBhbGV0dGVbdGhpcy50YXNrcy5sZW5ndGggJSBjb2xvclBhbGV0dGUubGVuZ3RoXVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpY2UoMCwgcGF0aC5sZW5ndGgsIHRhc2spXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXN0aW5nID49IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUYXNrID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50VGFzay5hZGRDaGlsZFRhc2sodGFzaylcclxuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5lc3RpbmcgPCBwYXRoLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG90YWxUYXNrcyArPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV0uZ2VuZXJhdGVMb29rYWhlYWRUYXNrcygpO1xyXG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpY2UobmVzdGluZywgcGF0aC5sZW5ndGggLSBuZXN0aW5nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRhc2sgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRUYXNrLmFkZENoaWxkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3RhbFRhc2tzICs9IHBhdGhbcGF0aC5sZW5ndGggLSAxXS5nZW5lcmF0ZUxvb2thaGVhZFRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUYXNrID0gcGF0aFtwYXRoLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50VGFzay5hZGRDaGlsZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPSB0YXNrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3IEFycmF5KG5lc3RpbmcgKyAxKS5qb2luKCcgICcpLCBuZXN0aW5nLCByb3cpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkR1cmF0aW9uOlwiLCB0aGlzLnByb2plY3RTdGFydERhdGUsIHRoaXMuZHVyYXRpb24pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgVGFza3M6XCIsIHRoaXMudG90YWxUYXNrcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICBsb2FkU2VsZWN0aW9uU2V0KGZpbGVwYXRoLCBhc3NldHMpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5zY2VuZS5nZXRSZXNvdXJjZUxvYWRlcigpLnJlc29sdmVGaWxlcGF0aChmaWxlcGF0aCk7XHJcbiAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlbSA9IGZpbGUubmFtZS5zcGxpdCgnLicpWzBdOyAvLyB0cmltIG9mZiB0aGUgZXh0ZW5zaW9uXHJcbiAgICAgICAgWmVhRW5naW5lLmxvYWRYTUxmaWxlKGZpbGUudXJsLFxyXG4gICAgICAgICAgKHhtbERvYykgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlYXJjaFJvb3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZVNlbGVjdGlvblNldCA9ICh4bWxOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHhtbE5vZGUuZ2V0QXR0cmlidXRlTm9kZShcIm5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZXQ6XCIsIG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBBZHZhbmNlZEdyb3VwKG5hbWUpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmKHNlYXJjaFJvb3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEVBY2ggZ3JvdXAgc2hvdWxkIGluaGVyaXQgb2ZmIGl0cyBwYXJlbnQuXHJcbiAgICAgICAgICAgICAgICBncm91cC5nZXRQYXJhbWV0ZXIoJ1NlYXJjaFJvb3QnKS5zZXRWYWx1ZShzZWFyY2hSb290KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBzZWFyY2hSb290O1xyXG4gICAgICAgICAgICAgICAgaWYoIWFzc2V0LmlzTG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgYXNzZXQubG9hZGVkLmNvbm5lY3QoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5yZXNvbHZlUXVlcmllcygpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZmluZFNwZWMgPSB4bWxOb2RlLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBmaW5kU3BlYy5nZXRBdHRyaWJ1dGVOb2RlKFwibW9kZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAobW9kZSA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3Rpb25TZXQuc2V0UnVsZUNvbWJpbmVNb2RlKFNlbGVjdGlvblNldC5SVUxFU19DT01CSU5FX01PREUuQU5EKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT0gXCJzb21lXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGlvblNldC5zZXRSdWxlQ29tYmluZU1vZGUoU2VsZWN0aW9uU2V0LlJVTEVTX0NPTUJJTkVfTU9ERS5PUik7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IGZpbmRTcGVjLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gY29uZGl0aW9ucy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcnVsZSA9IG5ldyBTZWxlY3Rpb25SdWxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnlQYXJhbWV0ZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmKGk9PTApIHtcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0TG9jaWNhbE9wZXJhdG9yKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX0xPR0lDLk5FV1NFVCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBxdWVyeS5zZXRNYXRjaFR5cGUoUXVlcnlQYXJhbWV0ZXIuUVVFUllfTUFUQ0hfVFlQRS5SRUdFWClcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb25kaXRpb24uZ2V0QXR0cmlidXRlTm9kZShcInRlc3RcIikudmFsdWUgPT0gXCJlcXVhbHNcIikge1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5zZXRNYXRjaFR5cGUoUXVlcnlQYXJhbWV0ZXIuUVVFUllfTUFUQ0hfVFlQRS5FWEFDVClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY29uZGl0aW9uLmdldEF0dHJpYnV0ZU5vZGUoXCJ0ZXN0XCIpLnZhbHVlID09IFwiY29udGFpbnNcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uZ2V0QXR0cmlidXRlTm9kZShcInRlc3RcIikudmFsdWUgPT0gXCJyZWdleFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldE1hdGNoVHlwZShRdWVyeVBhcmFtZXRlci5RVUVSWV9NQVRDSF9UWVBFLlJFR0VYKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb25kaXRpb24uZ2V0QXR0cmlidXRlTm9kZShcInRlc3RcIikudmFsdWUgPT0gXCJub3RfZXF1YWxzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0TmVnYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAvLyBSdWxlIFR5cGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BFbGVtZW50ID0gY29uZGl0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwcm9wZXJ0eScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcFR5cGUgPSBwcm9wRWxlbWVudFswXS5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGVOb2RlKFwiaW50ZXJuYWxcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcm9wVHlwZSA9IHByb3BFbGVtZW50WzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gcHJvcEVsZW1lbnRbMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRDb25kaXRpb25WYWx1ZSA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRWxlbWVudCA9IGNvbmRpdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgndmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudFswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BUeXBlID09IFwiTGNPYU5vZGVTb3VyY2VGaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gcnVsZS5zZXRSdWxlVHlwZShTZWxlY3Rpb25TZXQuUlVMRVNfVFlQRS5TT1VSQ0VGSUxFKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldENvbmRpdGlvblZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbiBhc3NldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSb290ID0gYXNzZXRzW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5nZXRQYXJhbWV0ZXIoJ1NlYXJjaFJvb3QnKS5zZXRWYWx1ZShzZWFyY2hSb290KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSBub3QgZm91bmQ6XCIsIHZhbHVlLCBcIiBBbW9uc3Q6XCIsIE9iamVjdC5rZXlzKGFzc2V0cyksIFwiIGluIFhNTDpcIiwgZmlsZXBhdGgpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICAgIC8vIEZpbGUgaXMgaW1wbGljaXQgaW5tIHRoZSB0cmVlIGl0IGlzIGF0dGFjaGVkIHRvLlxyXG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gXCJMY09hU2NlbmVCYXNlVXNlck5hbWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAvLyBydWxlLnNldFJ1bGVUeXBlKFNlbGVjdGlvblNldC5SVUxFU19UWVBFLk5BTUUpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldENvbmRpdGlvblZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BUeXBlLCBcIjpcIiwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLk5BTUUpXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldFZhbHVlKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gXCJMY09hTm9kZUxheWVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gcnVsZS5zZXRSdWxlVHlwZShTZWxlY3Rpb25TZXQuUlVMRVNfVFlQRS5MQVlFUik7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0Q29uZGl0aW9uVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgaWYodmFsdWUuc3RhcnRzV2l0aChcIkxldmVsIFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvIHNvbWUgcmVhc29uIEkgY2FuJ3QgZmlndXJlIG91dCwgYSBsb3Qgb2YgdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlYXJjaFNldHMgaW4gQXJjaGl0ZWN0dXJhbCByZWZlcmVuY2UgbGF5ZXJzIGluc3RlYWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgTGV2ZXMsIGJ1dCBvdXIgZGF0YSBkb2Vzbid0IGhhdmUgTGF5ZXJzLCBzbyBzd2FwcGluZyBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldFF1ZXJ5VHlwZShRdWVyeVBhcmFtZXRlci5RVUVSWV9UWVBFUy5MRVZFTClcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5zZXRWYWx1ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5zZXRRdWVyeVR5cGUoUXVlcnlQYXJhbWV0ZXIuUVVFUllfVFlQRVMuTEFZRVIpXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcFR5cGUsIFwiOlwiLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSBcIkxjUmV2aXRQcm9wZXJ0eUVsZW1lbnRDYXRlZ29yeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuQ0FURUdPUlkpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wVHlwZSlcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDb25kaXRpb25WYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wVHlwZSwgXCI6XCIsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldFF1ZXJ5VHlwZShRdWVyeVBhcmFtZXRlci5RVUVSWV9UWVBFUy5QUk9QRVJUWSlcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UHJvcGVydHlOYW1lKFwiQ2F0ZWdvcnlcIilcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0VmFsdWUodmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5zZXRFbmFibGVkKGZhbHNlKTsvLyBEaXNhYmxpbmcgQ2F0ZWdvcnkgdW50aWxsIHdlIGhhdmUgcGFyc2VkIHRoZSBSZXZpdCBkYXRhLlxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gXCJMY09hU2NlbmVCYXNlQ2xhc3NVc2VyTmFtZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuVFlQRSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0Q29uZGl0aW9uVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcFR5cGUsIFwiOlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BUeXBlID09IFwiTGNPYU5vZGVNYXRlcmlhbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuTUFURVJJQUwpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDb25kaXRpb25WYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wVHlwZSwgXCI6XCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLk1BVEVSSUFMKVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5zZXRWYWx1ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gXCJMY1Jldml0UHJvcGVydHlFbGVtZW50TmFtZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBjb25kaXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBjYXRlZ29yeUVsZW1lbnRbMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldENvbmRpdGlvblZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BUeXBlLCBcIjpcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlWYWx1ZSA9PSBcIlJlZmVyZW5jZSBMZXZlbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcnVsZS5zZXRSdWxlVHlwZShTZWxlY3Rpb25TZXQuUlVMRVNfVFlQRS5MRVZFTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLkxFVkVMKVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldFZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5VmFsdWUgPT0gXCJCYXNlIExldmVsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBydWxlLnNldFJ1bGVUeXBlKFNlbGVjdGlvblNldC5SVUxFU19UWVBFLkxFVkVMKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5zZXRRdWVyeVR5cGUoUXVlcnlQYXJhbWV0ZXIuUVVFUllfVFlQRVMuTEVWRUwpXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlID09IFwiTmFtZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKFwiQ2hlY2sgbWUgaW4gTmF2aXN3b3Jrc1wiLCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLk5BTUUpXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXBwb3J0IG1lXCIsIHhtbE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInN0b3BcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSBcInJldml0X1N5c3RlbSBUeXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0Q29uZGl0aW9uVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcFR5cGUsIFwiOlwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2hlY2sgbWUgaW4gTmF2aXN3b3Jrc1wiLCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAvLyBydWxlLnNldFJ1bGVUeXBlKFNlbGVjdGlvblNldC5SVUxFU19UWVBFLlRZUEUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSBcInJldml0X09tbmlDbGFzcyBUaXRsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldENvbmRpdGlvblZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BUeXBlLCBcIjpcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNoZWNrIG1lIGluIE5hdmlzd29ya3NcIiwgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgLy8gcnVsZS5zZXRSdWxlVHlwZShTZWxlY3Rpb25TZXQuUlVMRVNfVFlQRS5UWVBFKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gXCJyZXZpdF9TeXN0ZW0gQ2xhc3NpZmljYXRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDb25kaXRpb25WYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wVHlwZSwgXCI6XCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDaGVjayBtZSBpbiBOYXZpc3dvcmtzXCIsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuVFlQRSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gY29uZGl0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYXRlZ29yeScpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlFbGVtZW50WzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlWYWx1ZSA9PSBcIkxldmVsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBydWxlLnNldFJ1bGVUeXBlKFNlbGVjdGlvblNldC5SVUxFU19UWVBFLkxFVkVMKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldENvbmRpdGlvblZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0UXVlcnlUeXBlKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX1RZUEVTLkxFVkVMKVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNldFZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VwcG9ydCBtZVwiLCB4bWxOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJzdG9wXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYocHJvcFR5cGUgPT0gXCJMY1Jldml0RGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIC8vIDxuYW1lIGludGVybmFsPVwiTGNSZXZpdERhdGFcIj5CYXNlIExldmVsPC9uYW1lPlxyXG4gICAgICAgICAgICAgICAgLy8gICAvLyA8bmFtZSBpbnRlcm5hbD1cIkxjUmV2aXREYXRhXCI+UmVmZXJlbmNlIExldmVsPC9uYW1lPlxyXG4gICAgICAgICAgICAgICAgLy8gICAvLyA8bmFtZSBpbnRlcm5hbD1cIkxjUmV2aXREYXRhXCI+RWxlbWVudDwvbmFtZT5cclxuICAgICAgICAgICAgICAgIC8vICAgLy8gPG5hbWUgaW50ZXJuYWw9XCJMY1Jldml0RGF0YVwiPlJlYmFyIENvdmVyPC9uYW1lPjxuYW1lIGludGVybmFsPVwiTGNSZXZpdFByb3BlcnR5RWxlbWVudE5hbWVcIj5OYW1lPC9uYW1lPjxkYXRhIHR5cGU9XCJ3c3RyaW5nXCI+SW50ZXJpb3IgKHNsYWJzLCB3YWxscywgam9pc3RzKSAtIDEwTSB0byAzNk08L2RhdGE+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgLy8gY29uc3QgcHJvcGVydHlpbnRlcm5hbCA9IHByb3BFbGVtZW50WzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gICAvLyBpZihwcm9wZXJ0eWludGVybmFsID09IFwiQmFzZSBMZXZlbFwiIHx8IHByb3BlcnR5aW50ZXJuYWwgPT0gXCJSZWZlcmVuY2UgTGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAvLyAgIC8vIHJ1bGUuc2V0UnVsZVR5cGUoU2VsZWN0aW9uU2V0LlJVTEVTX1RZUEUuTEVWRUwpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAvLyAgIGNvbnN0IHZhbHVlID0gZ2V0Q29uZGl0aW9uVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgLy8gICBxdWVyeS5zZXRRdWVyeVR5cGUoUXVlcnlQYXJhbWV0ZXIuUVVFUllfVFlQRVMuTEVWRUwpXHJcbiAgICAgICAgICAgICAgICAvLyAgIC8vICAgcXVlcnkuc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAvLyAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vICAgLy8gcHJvcEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC8vICAgLy8gcnVsZS5zZXRSdWxlVHlwZShTZWxlY3Rpb25TZXQuUlVMRVNfVFlQRS5QUk9QRVJUWSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIC8vIHJ1bGUuc2V0UHJvcE5hbWUocHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjb25kaXRpb25WYWx1ZSA9IGNvbmRpdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgndmFsdWUnKVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIC8vIHJ1bGUuc2V0TWF0Y2hWYWx1ZShjb25kaXRpb25WYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gTWF0Y2ggVHlwZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdGVzdCA9IGNvbmRpdGlvbi5nZXRBdHRyaWJ1dGVOb2RlKFwidGVzdFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0ZXN0ID09IFwiZXF1YWxzXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgcnVsZS5zZXRNYXRjaFR5cGUoU2VsZWN0aW9uU2V0Lk1BVENIX1RZUEUuRVhBQ1QpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0ZXN0ID09IFwibm90X2VxdWFsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHJ1bGUuc2V0TWF0Y2hUeXBlKFNlbGVjdGlvblNldC5NQVRDSF9UWVBFLkVYQUNUKTtcclxuICAgICAgICAgICAgICAgIC8vICAgcnVsZS5zZXRNYXRjaEZsYWcoU2VsZWN0aW9uU2V0Lk1BVENIX0ZMQUdTLk5FR0FURV9DT05ESVRJT04pO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmICh0ZXN0ID09IFwiY29udGFpbnNcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gICBydWxlLnNldE1hdGNoVHlwZShTZWxlY3Rpb25TZXQuTUFUQ0hfVFlQRS5DT05UQUlOUyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHRlc3QgPT0gXCJyZWdleFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHJ1bGUuc2V0TWF0Y2hUeXBlKFNlbGVjdGlvblNldC5NQVRDSF9UWVBFLlJFR0VYKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAvLyBGbGFnc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZ3MgPSBOdW1iZXIucGFyc2VJbnQoY29uZGl0aW9uLmdldEF0dHJpYnV0ZU5vZGUoXCJmbGFnc1wiKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmxhZ3MgJiBOQVZJU1dPUktTX0ZMQUdTLk9SX0NPTkRJVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAvLyBydWxlLnNldE1hdGNoRmxhZyhTZWxlY3Rpb25TZXQuTUFUQ0hfRkxBR1MuT1JfQ09ORElUSU9OKTtcclxuICAgICAgICAgICAgICAgICAgcXVlcnkuc2V0TG9jaWNhbE9wZXJhdG9yKFF1ZXJ5UGFyYW1ldGVyLlFVRVJZX0xPR0lDLk9SKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZsYWdzICYgTkFWSVNXT1JLU19GTEFHUy5ORUdBVEVfQ09ORElUSU9OKXtcclxuICAgICAgICAgICAgICAgICAgLy8gcnVsZS5zZXRNYXRjaEZsYWcoU2VsZWN0aW9uU2V0Lk1BVENIX0ZMQUdTLk5FR0FURV9DT05ESVRJT04pO1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeS5zZXROZWdhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZsYWdzICYgTkFWSVNXT1JLU19GTEFHUy5SRUdFWF9DT05ESVRJT04pe1xyXG4gICAgICAgICAgICAgICAgICAvLyBydWxlLnNldE1hdGNoVHlwZShTZWxlY3Rpb25TZXQuTUFUQ0hfVFlQRS5SRUdFWCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5hbWUgPT0gXCJTdHJ1Y3QtRnJhbWluZy1MMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJ1bGUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAgICAgLy9zZWxlY3Rpb25TZXQuYWRkUnVsZShydWxlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGdyb3VwLmdldFBhcmFtZXRlcignUXVlcmllcycpLmFkZEl0ZW0ocXVlcnksIGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKCFncm91cC5nZXRQYXJhbWV0ZXIoJ1NlYXJjaFJvb3QnKS5nZXRWYWx1ZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJBc3NldCBub3QgYm91bmQgZm9yIFNlYXJjaCBTZXQ6XCIsIGZpbGVwYXRoKVxyXG5cclxuICAgICAgICAgICAgICBncm91cC5yZXNvbHZlUXVlcmllcygpO1xyXG5cclxuICAgICAgICAgICAgICAvLyByZXR1cm4gc2VsZWN0aW9uU2V0O1xyXG4gICAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZUZvbGRlciA9ICh4bWxOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHhtbE5vZGUuZ2V0QXR0cmlidXRlTm9kZShcIm5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgLy8gY29uc3Qgc2VsU2V0Rm9sZGVyID0gbmV3IFNlbGVjdGlvblNldEZvbGRlcihuYW1lKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHRyZWVJdGVtID0gbmV3IFplYUVuZ2luZS5UcmVlSXRlbShuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4bWxOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0geG1sTm9kZS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT0gXCJ2aWV3Zm9sZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gc2VsU2V0Rm9sZGVyLmFkZFNlbGVjdGlvblNldChwYXJzZUZvbGRlcihub2RlKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YlRyZWVJdGVtID0gcGFyc2VGb2xkZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyZWVJdGVtLmFkZENoaWxkKHN1YlRyZWVJdGVtKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09IFwic2VsZWN0aW9uc2V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gc2VsU2V0Rm9sZGVyLmFkZFNlbGVjdGlvblNldChwYXJzZVNlbGVjdGlvblNldChub2RlKSlcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBwYXJzZVNlbGVjdGlvblNldChub2RlKVxyXG4gICAgICAgICAgICAgICAgICB0cmVlSXRlbS5hZGRDaGlsZChncm91cClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIHJldHVybiBzZWxTZXRGb2xkZXI7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRyZWVJdGVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoeG1sRG9jLmNoaWxkcmVuWzBdLm5vZGVOYW1lID09IFwiZXhjaGFuZ2VcIikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvblNldHMgPSB4bWxEb2MuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgLy8gY29uc3QgdHJlZUl0ZW0gPSBwYXJzZUZvbGRlcihzZWxlY3Rpb25TZXRzKTtcclxuICAgICAgICAgICAgICAvLyBhc3NldC5hZGRDaGlsZCh0cmVlSXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uU2V0cy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdGlvblNldHMuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09IFwidmlld2ZvbGRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHNlbFNldEZvbGRlci5hZGRTZWxlY3Rpb25TZXQocGFyc2VGb2xkZXIobm9kZSkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzdWJUcmVlSXRlbSA9IHBhcnNlRm9sZGVyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldHMuYWRkQ2hpbGQoc3ViVHJlZUl0ZW0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT0gXCJzZWxlY3Rpb25zZXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAvLyBzZWxTZXRGb2xkZXIuYWRkU2VsZWN0aW9uU2V0KHBhcnNlU2VsZWN0aW9uU2V0KG5vZGUpKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IHBhcnNlU2VsZWN0aW9uU2V0KG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0cy5hZGRDaGlsZChncm91cClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25TZXRzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgLy8gICBjb25zdCBub2RlID0gc2VsZWN0aW9uU2V0cy5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICAgIC8vICAgaWYgKG5vZGUubm9kZU5hbWUgPT0gXCJ2aWV3Zm9sZGVyXCIpXHJcbiAgICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMuc2VsZWN0aW9uU2V0cy5hZGRTZWxlY3Rpb25TZXQocGFyc2VGb2xkZXIobm9kZSkpO1xyXG4gICAgICAgICAgICAgIC8vICAgZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PSBcInNlbGVjdGlvbnNldFwiKSB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2VsZWN0aW9uU2V0cy5hZGRTZWxlY3Rpb25TZXQocGFyc2VTZWxlY3Rpb25TZXQobm9kZSkpXHJcbiAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnNlbGVjdGlvblNldHMucmVjb21wdXRlQWxsKCk7XHJcbiAgICAgICAgICAgIC8vIHJlc29sdmUodGhpcy5zZWxlY3Rpb25TZXRzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KFwiVW5hYmxlIHRvIGxvYWQgZmlsZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgcmVqZWN0KFwiRmlsZSBkb2VzIG5vdCBleGlzdCBpbiByZXNvdXJjZXNcIik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYmluZFRhc2tzVG9TZWxlY3Rpb25TZXRzKCkge1xyXG5cclxuICAgIHRoaXMuZ2FudHRfc3RhcnQgPSB0aGlzLmdhbnR0X2VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0YXNrLmJpbmRUb1NlbGVjdGlvblNldCh0aGlzLnNjZW5lLmdldFJvb3QoKSwgdGhpcy5zZXRzKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAvLyBzZXQgZ2xvYmFsIHN0YXJ0IGFuZCBlbmQgZGF0ZVxyXG4gICAgICBpZiAoIXRoaXMuZ2FudHRfc3RhcnQgfHwgdGFzay5zdGFydCA8IHRoaXMuZ2FudHRfc3RhcnQpIHtcclxuICAgICAgICB0aGlzLmdhbnR0X3N0YXJ0ID0gdGFzay5zdGFydDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuZ2FudHRfZW5kIHx8IHRhc2suZW5kID4gdGhpcy5nYW50dF9lbmQpIHtcclxuICAgICAgICB0aGlzLmdhbnR0X2VuZCA9IHRhc2suZW5kO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldEN1cnJlbnREYXRlKHRoaXMuZ2FudHRfc3RhcnQpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgc2V0Q3VycmVudERhdGUoY3VycmVudERhdGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBzZXRDdXJyZW50RGF0ZSgke2N1cnJlbnREYXRlfSlgKVxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWQuZW1pdChjdXJyZW50RGF0ZSk7XHJcbiAgICBcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0YXNrLnVwZGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gJChleHByLCBjb24pIHtcclxuICAgIHJldHVybiB0eXBlb2YgZXhwciA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IChjb24gfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IoZXhwcilcclxuICAgICAgICA6IGV4cHIgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWRyh0YWcsIGF0dHJzKSB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZyk7XHJcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgaWYgKGF0dHIgPT09ICdhcHBlbmRfdG8nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGF0dHJzLmFwcGVuZF90bztcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2lubmVySFRNTCcpIHtcclxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBhdHRycy5pbm5lckhUTUw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZVNWRyhzdmdFbGVtZW50LCBhdHRyLCBmcm9tLCB0bykge1xyXG4gICAgY29uc3QgYW5pbWF0ZWRTdmdFbGVtZW50ID0gZ2V0QW5pbWF0aW9uRWxlbWVudChzdmdFbGVtZW50LCBhdHRyLCBmcm9tLCB0byk7XHJcblxyXG4gICAgaWYgKGFuaW1hdGVkU3ZnRWxlbWVudCA9PT0gc3ZnRWxlbWVudCkge1xyXG4gICAgICAgIC8vIHRyaWdnZXJlZCAybmQgdGltZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgICAgLy8gdHJpZ2dlciBhcnRpZmljaWFsIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICBldmVudC5ldmVudE5hbWUgPSAnY2xpY2snO1xyXG4gICAgICAgIGFuaW1hdGVkU3ZnRWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uRWxlbWVudChcclxuICAgIHN2Z0VsZW1lbnQsXHJcbiAgICBhdHRyLFxyXG4gICAgZnJvbSxcclxuICAgIHRvLFxyXG4gICAgZHVyID0gJzAuNHMnLFxyXG4gICAgYmVnaW4gPSAnMC4xcydcclxuKSB7XHJcbiAgICBjb25zdCBhbmltRWwgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FuaW1hdGUnKTtcclxuICAgIGlmIChhbmltRWwpIHtcclxuICAgICAgICAkLmF0dHIoYW5pbUVsLCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHIsXHJcbiAgICAgICAgICAgIGZyb20sXHJcbiAgICAgICAgICAgIHRvLFxyXG4gICAgICAgICAgICBkdXIsXHJcbiAgICAgICAgICAgIGJlZ2luOiAnY2xpY2sgKyAnICsgYmVnaW4gLy8gYXJ0aWZpY2lhbCBjbGlja1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFuaW1hdGVFbGVtZW50ID0gY3JlYXRlU1ZHKCdhbmltYXRlJywge1xyXG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHIsXHJcbiAgICAgICAgZnJvbSxcclxuICAgICAgICB0byxcclxuICAgICAgICBkdXIsXHJcbiAgICAgICAgYmVnaW4sXHJcbiAgICAgICAgY2FsY01vZGU6ICdzcGxpbmUnLFxyXG4gICAgICAgIHZhbHVlczogZnJvbSArICc7JyArIHRvLFxyXG4gICAgICAgIGtleVRpbWVzOiAnMDsgMScsXHJcbiAgICAgICAga2V5U3BsaW5lczogY3ViaWNfYmV6aWVyKCdlYXNlLW91dCcpXHJcbiAgICB9KTtcclxuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoYW5pbWF0ZUVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdWJpY19iZXppZXIobmFtZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlYXNlOiAnLjI1IC4xIC4yNSAxJyxcclxuICAgICAgICBsaW5lYXI6ICcwIDAgMSAxJyxcclxuICAgICAgICAnZWFzZS1pbic6ICcuNDIgMCAxIDEnLFxyXG4gICAgICAgICdlYXNlLW91dCc6ICcwIDAgLjU4IDEnLFxyXG4gICAgICAgICdlYXNlLWluLW91dCc6ICcuNDIgMCAuNTggMSdcclxuICAgIH1bbmFtZV07XHJcbn1cclxuXHJcbiQub24gPSAoZWxlbWVudCwgZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3I7XHJcbiAgICAgICAgJC5iaW5kKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQuZGVsZWdhdGUoZWxlbWVudCwgZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4kLm9mZiA9IChlbGVtZW50LCBldmVudCwgaGFuZGxlcikgPT4ge1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxufTtcclxuXHJcbiQuYmluZCA9IChlbGVtZW50LCBldmVudCwgY2FsbGJhY2spID0+IHtcclxuICAgIGV2ZW50LnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4kLmRlbGVnYXRlID0gKGVsZW1lbnQsIGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlZFRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChkZWxlZ2F0ZWRUYXJnZXQpIHtcclxuICAgICAgICAgICAgZS5kZWxlZ2F0ZWRUYXJnZXQgPSBkZWxlZ2F0ZWRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSwgZGVsZWdhdGVkVGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiQuY2xvc2VzdCA9IChzZWxlY3RvciwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkLmNsb3Nlc3Qoc2VsZWN0b3IsIGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcbn07XHJcblxyXG4kLmF0dHIgPSAoZWxlbWVudCwgYXR0ciwgdmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgJiYgdHlwZW9mIGF0dHIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYXR0ciA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cikge1xyXG4gICAgICAgICAgICAkLmF0dHIoZWxlbWVudCwga2V5LCBhdHRyW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xyXG59O1xyXG4iLCJpbXBvcnQgZGF0ZV91dGlscyBmcm9tICcuL2RhdGVfdXRpbHMnO1xyXG5pbXBvcnQgY29sb3JQYWxldHRlIGZyb20gJy4vc2NoZWR1bGUtY29sb3JzLmpzJztcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZnVuY3Rpb24gbXNUb0RheXMobXMpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVUb1N0cmluZyhkYXRlKSB7XHJcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIGRhdGUuZ2V0TW9udGgoKSArICctJyArIGRhdGUuZ2V0RGF5KClcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlX2lkKHRhc2spIHtcclxuICByZXR1cm4gKFxyXG4gICAgICB0YXNrLm5hbWUgK1xyXG4gICAgICAnXycgK1xyXG4gICAgICBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgICAuc2xpY2UoMiwgMTIpXHJcbiAgKTtcclxufVxyXG5cclxuLy8gRnJvbSBTeW5jaHJvIFNvZnR3YXJlOiAoaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1zWDBOVUtESjNiNClcclxuY29uc3QgVEFTS19DT0xPUlMgPSB7XHJcbiAgRVFVSVBNRU5UOiBuZXcgWmVhRW5naW5lLkNvbG9yKDAsIDAuOCwgMCwgMC4yNSksXHJcbiAgTkVXX0NPTlNUUlVDVElPTjogbmV3IFplYUVuZ2luZS5Db2xvcihcIiNBREZGMkZcIiksXHJcbiAgREVNT0xJVElPTjogbmV3IFplYUVuZ2luZS5Db2xvcihcIiNCMjIyMjJcIiksXHJcbiAgTUVQOiBuZXcgWmVhRW5naW5lLkNvbG9yKDAuOCwgMCwgMCwgMC4yNSksIC8qIE1FUFwiIHN0YW5kcyBmb3IgTWVjaGFuaWNhbCwgRWxlY3RyaWNhbCwgYW5kIFBsdW1iaW5nLiAgKi9cclxuICBGSVRPVVRfQ09NTUlTSU9OSU5HOiBuZXcgWmVhRW5naW5lLkNvbG9yKCcjRjBFNjhDJylcclxufVxyXG5cclxuXHJcbmNvbnN0IFNUQVRFX1RZUEVTID0ge1xyXG4gIElOSVQ6IC0xLFxyXG4gIEJFRk9SRTogMCxcclxuICBEVVJJTkc6IDEsXHJcbiAgQUZURVI6IDJcclxufVxyXG5jb25zdCBUQVNLX1RZUEVTID0ge1xyXG4gIENvbnN0cnVjdGlvbjogMSxcclxuICBFcXVpcG1lbnQ6IDIsXHJcbiAgRGVtb2xpdGlvbjogMlxyXG59XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTYwMjQ4L3Byb2dyYW1tYXRpY2FsbHktbGlnaHRlbi1vci1kYXJrZW4tYS1oZXgtY29sb3Itb3ItcmdiLWFuZC1ibGVuZC1jb2xvcnNcclxuZnVuY3Rpb24gYWRqdXN0KGNvbG9yLCBhbW91bnQpIHtcclxuICByZXR1cm4gJyMnICsgY29sb3IucmVwbGFjZSgvXiMvLCAnJykucmVwbGFjZSgvLi4vZywgY29sb3IgPT4gKCcwJytNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHBhcnNlSW50KGNvbG9yLCAxNikgKyBhbW91bnQpKS50b1N0cmluZygxNikpLnN1YnN0cigtMikpO1xyXG59XHJcbi8vIGZ1bmN0aW9uIGFkanVzdChjb2wsYW10KSB7XHJcbi8vICAgICB2YXIgdXNlUG91bmQgPSBmYWxzZTtcclxuLy8gICAgIGlmICggY29sWzBdID09IFwiI1wiICkge1xyXG4vLyAgICAgICAgIGNvbCA9IGNvbC5zbGljZSgxKTtcclxuLy8gICAgICAgICB1c2VQb3VuZCA9IHRydWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdmFyIG51bSA9IHBhcnNlSW50KGNvbCwxNik7XHJcblxyXG4vLyAgICAgdmFyIHIgPSAobnVtID4+IDE2KSArIGFtdDtcclxuXHJcbi8vICAgICBpZiAoIHIgPiAyNTUgKSByID0gMjU1O1xyXG4vLyAgICAgZWxzZSBpZiAgKHIgPCAwKSByID0gMDtcclxuXHJcbi8vICAgICB2YXIgYiA9ICgobnVtID4+IDgpICYgMHgwMEZGKSArIGFtdDtcclxuXHJcbi8vICAgICBpZiAoIGIgPiAyNTUgKSBiID0gMjU1O1xyXG4vLyAgICAgZWxzZSBpZiAgKGIgPCAwKSBiID0gMDtcclxuXHJcbi8vICAgICB2YXIgZyA9IChudW0gJiAweDAwMDBGRikgKyBhbXQ7XHJcblxyXG4vLyAgICAgaWYgKCBnID4gMjU1ICkgZyA9IDI1NTtcclxuLy8gICAgIGVsc2UgaWYgICggZyA8IDAgKSBnID0gMDtcclxuXHJcbi8vICAgICByZXR1cm4gKHVzZVBvdW5kP1wiI1wiOlwiXCIpICsgKGcgfCAoYiA8PCA4KSB8IChyIDw8IDE2KSkudG9TdHJpbmcoMTYpO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gY29uc3QgdW5oaWxpZ2h0Q29sb3IgPSBuZXcgWmVhRW5naW5lLkNvbG9yKDAsIDAsIDAsIDApO1xyXG4vLyBjb25zdCBoaWxpZ2h0Q29uc3RydWN0aW9uQ29sb3IgPSBuZXcgWmVhRW5naW5lLkNvbG9yKDEsIDAsIDAsIDAuNSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihpbmRleCkge1xyXG4gICAgLy8gdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7Ly9uZXcgWmVhRW5naW5lLkJvb2xlYW5QYXJhbWV0ZXIoKTtcclxuXHJcbiAgICB0aGlzLnRhc2tUeXBlID0gMTsgLy8gMT1Db25zdHJ1Y3Rpb24sIDI9RXF1aXBtZW50LlxyXG4gICAgdGhpcy5zdGF0ZSA9IC0xOyAvLyAwID0gQmVmb3JlLCAxPUR1cmluZywgMj1BZnRlci5cclxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5jaGlsZFRhc2tzID0gW107XHJcbiAgICB0aGlzLmNvbG9yID0gWmVhRW5naW5lLkNvbG9yLnJhbmRvbSgwLjI1KVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuX191cGRhdGVSYW5nZSA9IHRoaXMuX191cGRhdGVSYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnJhbmdlQ2hhbmdlZCA9IG5ldyBaZWFFbmdpbmUuU2lnbmFsKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzQ2hhbmdlZCA9IG5ldyBaZWFFbmdpbmUuU2lnbmFsKCk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXROYW1lKCkge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGdldE5hbWUoKSB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIC8vIH1cclxuXHJcbiAgX191cGRhdGVSYW5nZShzdGFydCwgZW5kKSB7XHJcbiAgICBsZXQgcmFuZ2VDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMuc3RhcnQgfHwgc3RhcnQgPCB0aGlzLnN0YXJ0KSB7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgcmFuZ2VDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5lbmQgfHwgZW5kID4gdGhpcy5lbmQpIHtcclxuICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgIHJhbmdlQ2hhbmdlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAocmFuZ2VDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgIHRoaXMucmFuZ2VDaGFuZ2VkLmVtaXQodGhpcy5zdGFydCwgdGhpcy5lbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ2hpbGRUYXNrKGNoaWxkVGFzaykge1xyXG4gICAgY2hpbGRUYXNrLmNvbG9yID0gdGhpcy5jb2xvci5sZXJwKG5ldyBaZWFFbmdpbmUuQ29sb3IoMCwwLDApLCAwLjEpO1xyXG4gICAgdGhpcy5jaGlsZFRhc2tzLnB1c2goY2hpbGRUYXNrKTtcclxuICAgIGlmIChjaGlsZFRhc2suc3RhcnQgJiYgY2hpbGRUYXNrLmVuZClcclxuICAgICAgdGhpcy5fX3VwZGF0ZVJhbmdlKGNoaWxkVGFzay5zdGFydCwgY2hpbGRUYXNrLmVuZClcclxuICAgIGNoaWxkVGFzay5yYW5nZUNoYW5nZWQuY29ubmVjdCh0aGlzLl9fdXBkYXRlUmFuZ2UpXHJcbiAgICAvLyB0aGlzLmludmFsaWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVMb29rYWhlYWRUYXNrcygpe1xyXG4gICAgXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgTG9va2FoZGVhIHRhc2tzXHJcbiAgICAgICAgY29uc3QgbnVtTG9va2FoZWFkVGFza3MgPSByYW5kb21JbnQoMiwgOCk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RHVyYXRpb24gPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bnVtTG9va2FoZWFkVGFza3M7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuc3RhcnQgKyBNYXRoLmZsb29yKHBhcmVudER1cmF0aW9uICogTWF0aC5yYW5kb20oKSAqIDAuNSkpO1xyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IHJhbmRvbUludCgxLCAxNCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZGF0ZV91dGlscy5hZGQodGhpcy5zdGFydCwgaG91cnMsICdkYXknKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgZW5kPW5ldyBEYXRlKHRoaXMuc3RhcnQgKyAoaG91cnMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IGRhdGVfdXRpbHMuYWRkKHN0YXJ0LCBob3VycywgJ2RheScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRUYXNrID0gbmV3IFRhc2soKTtcclxuICAgICAgICAgICAgY2hpbGRUYXNrLm5hbWUgPSBcIkxvb2thaGhlYWRcIiArIGk7XHJcbiAgICAgICAgICAgIGNoaWxkVGFzay5jb2xvciA9IHRoaXMuY29sb3IubGVycChuZXcgWmVhRW5naW5lLkNvbG9yKDAsMCwwKSwgMC4yKTtcclxuICAgICAgICAgICAgY2hpbGRUYXNrLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgY2hpbGRUYXNrLmlkID0gdGhpcy5pZCArIFwiX1wiICsgaTtcclxuICAgICAgICAgICAgY2hpbGRUYXNrLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIGNoaWxkVGFzay5lbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRUYXNrcy5wdXNoKGNoaWxkVGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1Mb29rYWhlYWRUYXNrcztcclxuICB9XHJcblxyXG4gIGxvYWRKU09OKGpzb24pIHtcclxuICAgIHRoaXMuaWQgPSBqc29uLmlkID8ganNvbi5pZCA6IGdlbmVyYXRlX2lkKGpzb24pO1xyXG4gICAgdGhpcy5uYW1lID0ganNvbi5uYW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IG5ldyBaZWFFbmdpbmUuQ29sb3IoanNvbi5jb2xvcik7XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGRhdGVfdXRpbHMucGFyc2UoanNvbi5zdGFydCk7XHJcbiAgICB0aGlzLmVuZCA9IGRhdGVfdXRpbHMucGFyc2UoanNvbi5lbmQpO1xyXG5cclxuICAgIC8vIG1ha2UgdGFzayBpbnZhbGlkIGlmIGR1cmF0aW9uIHRvbyBsYXJnZVxyXG4gICAgLy8gaWYgKGRhdGVfdXRpbHMuZGlmZihyZXMuX2VuZCwgcmVzLl9zdGFydCwgJ3llYXInKSA+IDEwKSB7XHJcbiAgICAvLyAgICAganNvbi5lbmQgPSBudWxsO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGludmFsaWQgZGF0ZXNcclxuICAgIC8vIGlmICghanNvbi5zdGFydCAmJiAhanNvbi5lbmQpIHtcclxuICAgIC8vICAgICBjb25zdCB0b2RheSA9IGRhdGVfdXRpbHMudG9kYXkoKTtcclxuICAgIC8vICAgICByZXMuc3RhcnQgPSB0b2RheTtcclxuICAgIC8vICAgICByZXMuZW5kID0gZGF0ZV91dGlscy5hZGQodG9kYXksIDIsICdkYXknKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoIWpzb24uc3RhcnQgJiYganNvbi5lbmQpIHtcclxuICAgIC8vICAgICByZXMuc3RhcnQgPSBkYXRlX3V0aWxzLmFkZChyZXMuZW5kLCAtMiwgJ2RheScpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChqc29uLnN0YXJ0ICYmICFqc29uLmVuZCkge1xyXG4gICAgLy8gICAgIHJlcy5lbmQgPSBkYXRlX3V0aWxzLmFkZChyZXMuc3RhcnQsIDIsICdkYXknKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiBob3VycyBpcyBub3Qgc2V0LCBhc3N1bWUgdGhlIGxhc3QgZGF5IGlzIGZ1bGwgZGF5XHJcbiAgICAvLyBlLmc6IDIwMTgtMDktMDkgYmVjb21lcyAyMDE4LTA5LTA5IDIzOjU5OjU5XHJcbiAgICBjb25zdCB0YXNrX2VuZF92YWx1ZXMgPSBkYXRlX3V0aWxzLmdldF9kYXRlX3ZhbHVlcyh0aGlzLmVuZCk7XHJcbiAgICBpZiAodGFza19lbmRfdmFsdWVzLnNsaWNlKDMpLmV2ZXJ5KGQgPT4gZCA9PT0gMCkpIHtcclxuICAgICAgICB0aGlzLmVuZCA9IGRhdGVfdXRpbHMuYWRkKHRoaXMuZW5kLCAyNCwgJ2hvdXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnZhbGlkIGZsYWdcclxuICAgIC8vIGlmICghanNvbi5zdGFydCB8fCAhanNvbi5lbmQpIHtcclxuICAgIC8vICAgICB0aGlzLmludmFsaWQgPSB0cnVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGRlcGVuZGVuY2llc1xyXG4gICAgaWYgKHR5cGVvZiBqc29uLmRlcGVuZGVuY2llcyA9PT0gJ3N0cmluZycgfHwgIWpzb24uZGVwZW5kZW5jaWVzKSB7XHJcbiAgICAgICAgbGV0IGRlcHMgPSBbXTtcclxuICAgICAgICBpZiAoanNvbi5kZXBlbmRlbmNpZXMpIHtcclxuICAgICAgICAgICAgZGVwcyA9IGpzb24uZGVwZW5kZW5jaWVzXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICAgICAgLm1hcChkID0+IGQudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihkID0+IGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IGRlcHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnRpbnVlIGRvd24gdGhlIHRyZWUuXHJcbiAgICBpZiAoanNvbi5jaGlsZF90YXNrcykge1xyXG4gICAgICAgIHRoaXMuY2hpbGRUYXNrcyA9IGpzb24uY2hpbGRfdGFza3MubWFwKCh0YXNrSnNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGluZGV4KTtcclxuICAgICAgICAgICAgdGFzay5sb2FkSlNPTih0YXNrSnNvbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVMb29rYWhlYWRUYXNrcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE1TUHJvamVjdFhMU1gocm93LCBjb2xvckhleCkge1xyXG4gICAgdGhpcy5pZCA9IHJvd1snRGlzcGxheSBJRCddO1xyXG4gICAgdGhpcy5uYW1lID0gcm93WydUYXNrIE5hbWUnXTtcclxuICAgIHRoaXMuY29sb3IgPSBuZXcgWmVhRW5naW5lLkNvbG9yKGNvbG9ySGV4KTtcclxuXHJcbiAgICBpZiAoJ1Rhc2sgVHlwZScgaW4gcm93KSB7XHJcbiAgICAgIGNvbnN0IHRhc2tUeXBlID0gcm93WydUYXNrIFR5cGUnXTtcclxuICAgICAgaWYodGFza1R5cGUgPT0gJ1RlbXBvcmFyeScgfHwgdGFza1R5cGUgPT0gJ0VxdWlwbWVudCcpXHJcbiAgICAgICAgdGhpcy50YXNrVHlwZSA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5hY3RpdmUgPSByb3dbJ0FjdGl2ZSddID09ICcxJztcclxuXHJcbiAgICBpZiAoJ0F0dGFjaGVkJyBpbiByb3cpIHtcclxuICAgICAgdGhpcy5hdHRhY2hlZFRvID0gcm93WydBdHRhY2hlZCddO1xyXG4gICAgICAvLyBpZiAoYXR0YWNoZWRUbyAhPSBcIkV4cGxpY2l0IFNlbGVjdGlvblwiKVxyXG4gICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uU2V0ID0gc2VsZWN0aW9uU2V0cy5yZXNvbHZlUGF0aChhdHRhY2hlZFRvLnNwbGl0KCctPicpLCB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgnUGxhbm5lZCBTdGFydCcgaW4gcm93KSB7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBkYXRlX3V0aWxzLnBhcnNlWExTWERhdGUocm93WydQbGFubmVkIFN0YXJ0J10pO1xyXG4gICAgICAvLyB0aGlzLnN0YXJ0ID0gbW9tZW50KHJvd1snUGxhbm5lZCBTdGFydCddLCBcIk1NL0REL1lZWVlcIikudG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJ1BsYW5uZWQgRW5kJyBpbiByb3cpIHtcclxuICAgICAgdGhpcy5lbmQgPSBkYXRlX3V0aWxzLnBhcnNlWExTWERhdGUocm93WydQbGFubmVkIEVuZCddKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXJ0ICYmIHRoaXMuZW5kKSB7XHJcbiAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoJ0R1cmF0aW9uJyBpbiByb3cpIHtcclxuICAgIC8vICAgdGhpcy5kdXJhdGlvbiA9IE51bWJlci5wYXJzZUludChyb3dbJ0R1cmF0aW9uJ10pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHRoaXMuYW5pbWF0aW9uID0gcm93WydBbmltYXRpb24nXTtcclxuICAgIC8vIHRoaXMuYW5pbWF0aW9uQmVoYXZpb3VyID0gcm93WydBbmltYXRpb24gQmVoYXZpb3VyJ107XHJcbiAgfVxyXG4gIFxyXG4gIGJpbmRUb1NlbGVjdGlvblNldChzY2VuZVJvb3QsIHNlbGVjdGlvblNldHMpIHtcclxuICAgIGlmICh0aGlzLmF0dGFjaGVkVG8gJiYgdGhpcy5hdHRhY2hlZFRvICE9IFwiRXhwbGljaXQgU2VsZWN0aW9uXCIpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYXR0YWNoZWRUby5zcGxpdCgnLT4nKTtcclxuICAgICAgbGV0IGl0ZW0gPSBzY2VuZVJvb3QucmVzb2x2ZVBhdGgocGF0aCk7XHJcbiAgICAgIGlmKGl0ZW0gICYmICEoaXRlbSBpbnN0YW5jZW9mIFplYUVuZ2luZS5Hcm91cCkpIHtcclxuICAgICAgICAvLyBTb21lIHRhc2tzIG5lZWQgdG8gYXBwZW5kIHRoZSBuYW1lIHRvIHRoZSBwYXRoIHRvIGdldCB0aGVcclxuICAgICAgICAvLyB0YXJnZXQgZ3JvdXAuIFRoaXMganVzdCBzZWVtcyB0byBiZSBhIHF1aXJrIG9mIHRoZSBzY2hlZHVsZSB3ZSBoYXZlLlxyXG4gICAgICAgIGl0ZW0gPSBpdGVtLmdldENoaWxkQnlOYW1lKHRoaXMubmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWl0ZW0gJiYgcGF0aFsxXSA9PSBcIkFyY2hpdGVjdHVyYWxcIikge1xyXG4gICAgICAgIGl0ZW0gPSBzY2VuZVJvb3QucmVzb2x2ZVBhdGgocGF0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoaXRlbSAmJiBpdGVtIGluc3RhbmNlb2YgWmVhRW5naW5lLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGl0ZW07XHJcbiAgICAgICAgaWYodGhpcy50YXNrVHlwZSA9PSBUQVNLX1RZUEVTLkNvbnN0cnVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5ncm91cC5nZXRQYXJhbWV0ZXIoJ0hpZ2hsaWdodENvbG9yJykuc2V0VmFsdWUoVEFTS19DT0xPUlMuTkVXX0NPTlNUUlVDVElPTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy50YXNrVHlwZSA9PSBUQVNLX1RZUEVTLkVxdWlwbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5ncm91cC5nZXRQYXJhbWV0ZXIoJ0hpZ2hsaWdodENvbG9yJykuc2V0VmFsdWUoVEFTS19DT0xPUlMuRVFVSVBNRU5UKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cC5nZXRQYXJhbWV0ZXIoJ0hpZ2hsaWdodEZpbGwnKS5zZXRWYWx1ZSgwLjI1KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZihpdGVtKVxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lLCBcIiBHcm91cCBmb3VuZDpcIiwgdGhpcy5hdHRhY2hlZFRvKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSwgXCIgR3JvdXAgbm90IGZvdW5kOlwiLCB0aGlzLmF0dGFjaGVkVG8pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2hpbGRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHRhc2suYmluZFRvU2VsZWN0aW9uU2V0KHNjZW5lUm9vdCwgc2VsZWN0aW9uU2V0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgLy8gQWxsIHN0YXRlcyBnZXQgaW5pYWxpemVkIHRvIHRoZSBCZWZvcmUgc3RhdGUuXHJcbiAgfVxyXG5cclxuICBsb2FkQXNzZXQoKSB7XHJcbiAgICBjb25zdCBhc3NldCA9IHRoaXMuZ3JvdXAuZ2V0UGFyYW1ldGVyKCdTZWFyY2hSb290JykuZ2V0VmFsdWUoKTtcclxuICAgIGlmIChhc3NldCkge1xyXG4gICAgICBhc3NldC5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICBpZighYXNzZXQuaXNMb2FkZWQoKSkge1xyXG4gICAgICAgIGFzc2V0LmxvYWREYXRhRmlsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRCZWZvcmUoKSB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PSBTVEFURV9UWVBFUy5EVVJJTkcgJiYgdGhpcy50YXNrVHlwZSA9PSBUQVNLX1RZUEVTLkNvbnN0cnVjdGlvbikge1xyXG4gICAgICAgIC8vIHRoaXMuZ3JvdXAucmVtb3ZlSGlnaGxpZ2h0KHRoaXMubmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5nZXRQYXJhbWV0ZXIoJ0hpZ2hsaWdodGVkJykuc2V0VmFsdWUoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ncm91cC5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9ncmVzcyAhPSAwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICB0aGlzLnByb2dyZXNzQ2hhbmdlZC5lbWl0KHRoaXMucHJvZ3Jlc3MpXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfVFlQRVMuQkVGT1JFO1xyXG4gIH1cclxuXHJcbiAgc2V0QWZ0ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsIFwiRGVhY3RpdmF0ZSBBZnRlclwiKVxyXG4gICAgICB0aGlzLmxvYWRBc3NldCgpO1xyXG5cclxuICAgICAgaWYodGhpcy50YXNrVHlwZSA9PSBUQVNLX1RZUEVTLkNvbnN0cnVjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFNUQVRFX1RZUEVTLkJFRk9SRSkgXHJcbiAgICAgICAgICB0aGlzLmdyb3VwLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSBTVEFURV9UWVBFUy5EVVJJTkcpIHtcclxuICAgICAgICAgIC8vIHRoaXMuZ3JvdXAucmVtb3ZlSGlnaGxpZ2h0KHRoaXMubmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLmdyb3VwLmdldFBhcmFtZXRlcignSGlnaGxpZ2h0ZWQnKS5zZXRWYWx1ZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy50YXNrVHlwZSA9PSBUQVNLX1RZUEVTLkVxdWlwbWVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9ncmVzcyAhPSAxMDApIHtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgdGhpcy5wcm9ncmVzc0NoYW5nZWQuZW1pdCh0aGlzLnByb2dyZXNzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1RZUEVTLkFGVEVSO1xyXG4gIH1cclxuXHJcbiAgc2V0RHVyaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYW1lLCBcIkFjdGl2YXRlXCIpXHJcbiAgICAgIHRoaXMubG9hZEFzc2V0KCk7XHJcblxyXG4gICAgICBpZih0aGlzLnRhc2tUeXBlID09IFRBU0tfVFlQRVMuQ29uc3RydWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gU1RBVEVfVFlQRVMuQkVGT1JFKSB7XHJcbiAgICAgICAgICB0aGlzLmdyb3VwLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZ3JvdXAuYWRkSGlnaGxpZ2h0KHRoaXMubmFtZSwgVEFTS19DT0xPUlMuTkVXX0NPTlNUUlVDVElPTiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5nZXRQYXJhbWV0ZXIoJ0hpZ2hsaWdodGVkJykuc2V0VmFsdWUodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfVFlQRVMuRFVSSU5HO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGN1cnJlbnREYXRlKSB7XHJcbiAgICBcclxuICAgIGlmIChjdXJyZW50RGF0ZSA8IHRoaXMuc3RhcnQpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gU1RBVEVfVFlQRVMuQkVGT1JFKVxyXG4gICAgICAgIHRoaXMuc2V0QmVmb3JlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREYXRlID4gKHRoaXMuZW5kKSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPSBTVEFURV9UWVBFUy5BRlRFUilcclxuICAgICAgICB0aGlzLnNldEFmdGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPSBTVEFURV9UWVBFUy5EVVJJTkcpXHJcbiAgICAgICAgdGhpcy5zZXREdXJpbmcoKTtcclxuICAgICAgaWYodGhpcy5kdXJhdGlvbiA+IDApIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gKChjdXJyZW50RGF0ZSAtIHRoaXMuc3RhcnQpIC8gdGhpcy5kdXJhdGlvbikgKiAxMDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NoYW5nZWQuZW1pdCh0aGlzLnByb2dyZXNzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGlsZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgdGFzay51cGRhdGUoY3VycmVudERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYXNrIH07IiwiaW1wb3J0IGRhdGVfdXRpbHMgZnJvbSAnLi9kYXRlX3V0aWxzJztcclxuaW1wb3J0IHsgJCwgY3JlYXRlU1ZHIH0gZnJvbSAnLi9zdmdfdXRpbHMnO1xyXG5pbXBvcnQgQmFyIGZyb20gJy4vYmFyJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3cnO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XHJcblxyXG5cclxuZnVuY3Rpb24gc21vb3RoU3RlcChlZGdlMCwgZWRnZTEsIHgpIHtcclxuICAgIGNvbnN0IHQgPSBNYXRoLmNsYW1wKCh4IC0gZWRnZTApIC8gKGVkZ2UxIC0gZWRnZTApLCAwLjAsIDEuMCk7XHJcbiAgICByZXR1cm4gdCAqIHQgKiAoMy4wIC0gMi4wICogdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3ZXIge1xyXG4gICAgY29uc3RydWN0b3Iod3JhcHBlciwgc2NoZWR1bGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlID0gc2NoZWR1bGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBfb3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnNldHVwX3dyYXBwZXIod3JhcHBlcik7XHJcbiAgICAgICAgdGhpcy5ib3ggPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHRoaXMuc2V0dXBfdGFza3ModGFza3MpO1xyXG4gICAgICAgIC8vIGluaXRpYWxpemUgd2l0aCBkZWZhdWx0IHZpZXcgbW9kZVxyXG4gICAgICAgIGlmKHRoaXMuc2NoZWR1bGUuaXNMb2FkZWQpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlX3ZpZXdfbW9kZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUubG9hZGVkLmNvbm5lY3QoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2Vfdmlld19tb2RlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZF9ldmVudHMoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KHdyYXBwZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnNldHVwX3dyYXBwZXIod3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbnR0X3N0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FudHRfZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwX3dyYXBwZXIoZWxlbWVudCkge1xyXG5cclxuICAgICAgICAvLyBDU1MgU2VsZWN0b3IgaXMgcGFzc2VkXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdyYXBwZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY2VkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5zdHlsZVsncG9zaXRpb24nXSA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLiRjb250YWluZXIuc3R5bGVbJ3dpZHRoJ10gPSAnMTAwJSc7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgaXRcclxuICAgICAgICB0aGlzLiRzdmcgPSBjcmVhdGVTVkcoJ3N2ZycsIHtcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLiRjb250YWluZXIsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnc2NlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcG9wdXAgd3JhcHBlclxyXG4gICAgICAgIHRoaXMucG9wdXBfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMucG9wdXBfd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwb3B1cC13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucG9wdXBfd3JhcHBlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ciA9IFswLDBdO1xyXG4gICAgICAgIHRoaXMuc2MgPSBbMSwxXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cF9vcHRpb25zKG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0X29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcl9oZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICBjb2x1bW5fd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICBzdGVwOiAyNCxcclxuICAgICAgICAgICAgdmlld19tb2RlczogW1xyXG4gICAgICAgICAgICAgICAgJ1F1YXJ0ZXIgRGF5JyxcclxuICAgICAgICAgICAgICAgICdIYWxmIERheScsXHJcbiAgICAgICAgICAgICAgICAnRGF5JyxcclxuICAgICAgICAgICAgICAgICdXZWVrJyxcclxuICAgICAgICAgICAgICAgICdNb250aCcsXHJcbiAgICAgICAgICAgICAgICAnWWVhcidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYmFyX2hlaWdodDogMjYsXHJcbiAgICAgICAgICAgIGJhcl9jb3JuZXJfcmFkaXVzOiAzLFxyXG4gICAgICAgICAgICBhcnJvd19jdXJ2ZTogNSxcclxuICAgICAgICAgICAgcGFkZGluZzogMTIsXHJcbiAgICAgICAgICAgIHZpZXdfbW9kZTogJ0RheScsXHJcbiAgICAgICAgICAgIGRhdGVfZm9ybWF0OiAnWVlZWS1NTS1ERCcsXHJcbiAgICAgICAgICAgIHBvcHVwX3RyaWdnZXI6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGN1c3RvbV9wb3B1cF9odG1sOiBudWxsLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgY2hpbGRfeV9zY2FsZTogMC4yNSxcclxuICAgICAgICAgICAgbW91c2Vfd2hlZWxfem9vbV9zcGVlZDogLTAuMDAwNCxcclxuICAgICAgICAgICAgbWluX2Jhcl9zY1k6IDAuMDUsXHJcbiAgICAgICAgICAgIG1pbl90ZXh0X3NjWTogMC41LFxyXG4gICAgICAgICAgICBtYXhfdGV4dF9zY1k6IDIuNSxcclxuICAgICAgICAgICAgZG91YmxlX2NsaWNrX3RpbWU6IDI1MFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdF9vcHRpb25zLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR1cF90YXNrcyh0YXNrcykge1xyXG4gICAgLy8gICAgIC8vIHByZXBhcmUgdGFza3NcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlLnRhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnZlcnQgdG8gRGF0ZSBvYmplY3RzXHJcbiAgICAvLyAgICAgICAgIC8vIHRhc2suc3RhcnQgPSBkYXRlX3V0aWxzLnBhcnNlKHRhc2suc3RhcnQpO1xyXG4gICAgLy8gICAgICAgICAvLyB0YXNrLmVuZCA9IGRhdGVfdXRpbHMucGFyc2UodGFzay5lbmQpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gLy8gbWFrZSB0YXNrIGludmFsaWQgaWYgZHVyYXRpb24gdG9vIGxhcmdlXHJcbiAgICAvLyAgICAgICAgIC8vIGlmIChkYXRlX3V0aWxzLmRpZmYodGFzay5lbmQsIHRhc2suc3RhcnQsICd5ZWFyJykgPiAxMCkge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgdGFzay5lbmQgPSBudWxsO1xyXG4gICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyAvLyBjYWNoZSBpbmRleFxyXG4gICAgLy8gICAgICAgICAvLyB0YXNrLmluZGV4ID0gaTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIC8vIGludmFsaWQgZGF0ZXNcclxuICAgIC8vICAgICAgICAgLy8gLy8gaWYgKCF0YXNrLnN0YXJ0ICYmICF0YXNrLmVuZCkge1xyXG4gICAgLy8gICAgICAgICAvLyAvLyAgICAgY29uc3QgdG9kYXkgPSBkYXRlX3V0aWxzLnRvZGF5KCk7XHJcbiAgICAvLyAgICAgICAgIC8vIC8vICAgICB0YXNrLnN0YXJ0ID0gdG9kYXk7XHJcbiAgICAvLyAgICAgICAgIC8vIC8vICAgICB0YXNrLmVuZCA9IGRhdGVfdXRpbHMuYWRkKHRvZGF5LCAyLCAnZGF5Jyk7XHJcbiAgICAvLyAgICAgICAgIC8vIC8vIH1cclxuXHJcbiAgICAvLyAgICAgICAgIC8vIC8vIGlmICghdGFzay5zdGFydCAmJiB0YXNrLmVuZCkge1xyXG4gICAgLy8gICAgICAgICAvLyAvLyAgICAgdGFzay5zdGFydCA9IGRhdGVfdXRpbHMuYWRkKHRhc2suZW5kLCAtMiwgJ2RheScpO1xyXG4gICAgLy8gICAgICAgICAvLyAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyAvLyBpZiAodGFzay5zdGFydCAmJiAhdGFzay5lbmQpIHtcclxuICAgIC8vICAgICAgICAgLy8gLy8gICAgIHRhc2suZW5kID0gZGF0ZV91dGlscy5hZGQodGFzay5zdGFydCwgMiwgJ2RheScpO1xyXG4gICAgLy8gICAgICAgICAvLyAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyAvLyBpZiBob3VycyBpcyBub3Qgc2V0LCBhc3N1bWUgdGhlIGxhc3QgZGF5IGlzIGZ1bGwgZGF5XHJcbiAgICAvLyAgICAgICAgIC8vIC8vIGUuZzogMjAxOC0wOS0wOSBiZWNvbWVzIDIwMTgtMDktMDkgMjM6NTk6NTlcclxuICAgIC8vICAgICAgICAgLy8gY29uc3QgdGFza19lbmRfdmFsdWVzID0gZGF0ZV91dGlscy5nZXRfZGF0ZV92YWx1ZXModGFzay5lbmQpO1xyXG4gICAgLy8gICAgICAgICAvLyBpZiAodGFza19lbmRfdmFsdWVzLnNsaWNlKDMpLmV2ZXJ5KGQgPT4gZCA9PT0gMCkpIHtcclxuICAgIC8vICAgICAgICAgLy8gICAgIHRhc2suZW5kID0gZGF0ZV91dGlscy5hZGQodGFzay5lbmQsIDI0LCAnaG91cicpO1xyXG4gICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICAvLyAvLyBpbnZhbGlkIGZsYWdcclxuICAgIC8vICAgICAgICAgLy8gaWYgKCF0YXNrLnN0YXJ0IHx8ICF0YXNrLmVuZCkge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgdGFzay5pbnZhbGlkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgIC8vICAgICAgICAgLy8gLy8gZGVwZW5kZW5jaWVzXHJcbiAgICAvLyAgICAgICAgIC8vIGlmICh0eXBlb2YgdGFzay5kZXBlbmRlbmNpZXMgPT09ICdzdHJpbmcnIHx8ICF0YXNrLmRlcGVuZGVuY2llcykge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgbGV0IGRlcHMgPSBbXTtcclxuICAgIC8vICAgICAgICAgLy8gICAgIGlmICh0YXNrLmRlcGVuZGVuY2llcykge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgICAgIGRlcHMgPSB0YXNrLmRlcGVuZGVuY2llc1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgLy8gICAgICAgICAvLyAgICAgICAgICAgICAubWFwKGQgPT4gZC50cmltKCkpXHJcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKTtcclxuICAgIC8vICAgICAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAgICAgLy8gICAgIHRhc2suZGVwZW5kZW5jaWVzID0gZGVwcztcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgIC8vICAgICAgICAgLy8gdWlkc1xyXG4gICAgLy8gICAgICAgICAvLyBpZiAoIXRhc2suaWQpIHtcclxuICAgIC8vICAgICAgICAgLy8gICAgIHRhc2suaWQgPSBnZW5lcmF0ZV9pZCh0YXNrKTtcclxuICAgIC8vICAgICAgICAgLy8gfVxyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldHVwX2RlcGVuZGVuY2llcygpIHtcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lfbWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiB0aGlzLnNjaGVkdWxlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgb2YgdC5kZXBlbmRlbmNpZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeV9tYXBbZF0gPSB0aGlzLmRlcGVuZGVuY3lfbWFwW2RdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBlbmRlbmN5X21hcFtkXS5wdXNoKHQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goc2NoZWR1bGUpIHtcclxuICAgICAgICAvLyB0aGlzLnNldHVwX3Rhc2tzKHRhc2tzKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlX3ZpZXdfbW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZV92aWV3X21vZGUobW9kZSA9IHRoaXMub3B0aW9ucy52aWV3X21vZGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZV92aWV3X3NjYWxlKG1vZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBfZGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgLy8gZmlyZSB2aWV3bW9kZV9jaGFuZ2UgZXZlbnRcclxuICAgICAgICB0aGlzLnRyaWdnZXJfZXZlbnQoJ3ZpZXdfY2hhbmdlJywgW21vZGVdKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfdmlld19zY2FsZSh2aWV3X21vZGUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMudmlld19tb2RlID0gdmlld19tb2RlO1xyXG5cclxuICAgICAgICBpZiAodmlld19tb2RlID09PSAnRGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RlcCA9IDI0O1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoID0gMzg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3X21vZGUgPT09ICdIYWxmIERheScpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgPSAyNCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggPSAzODtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdfbW9kZSA9PT0gJ1F1YXJ0ZXIgRGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RlcCA9IDI0IC8gNDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCA9IDM4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlld19tb2RlID09PSAnV2VlaycpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgPSAyNCAqIDc7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggPSAxNDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3X21vZGUgPT09ICdNb250aCcpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgPSAyNCAqIDMwO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoID0gMTIwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlld19tb2RlID09PSAnWWVhcicpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgPSAyNCAqIDM2NTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCA9IDEyMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBfZGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cF9nYW50dF9kYXRlcygpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBfZGF0ZV92YWx1ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cF9nYW50dF9kYXRlcygpIHtcclxuICAgICAgICB0aGlzLmdhbnR0X3N0YXJ0ID0gdGhpcy5nYW50dF9lbmQgPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHRoaXMuc2NoZWR1bGUudGFza3MpIHtcclxuICAgICAgICAgICAgLy8gc2V0IGdsb2JhbCBzdGFydCBhbmQgZW5kIGRhdGVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbnR0X3N0YXJ0IHx8IHRhc2suc3RhcnQgPCB0aGlzLmdhbnR0X3N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbnR0X3N0YXJ0ID0gdGFzay5zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FudHRfZW5kIHx8IHRhc2suZW5kID4gdGhpcy5nYW50dF9lbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FudHRfZW5kID0gdGFzay5lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FudHRfc3RhcnQgPSBkYXRlX3V0aWxzLnN0YXJ0X29mKHRoaXMuZ2FudHRfc3RhcnQsICdkYXknKTtcclxuICAgICAgICB0aGlzLmdhbnR0X2VuZCA9IGRhdGVfdXRpbHMuc3RhcnRfb2YodGhpcy5nYW50dF9lbmQsICdkYXknKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRfZGF0ZSA9IHRoaXMuZ2FudHRfc3RhcnQ7XHJcblxyXG4gICAgICAgIC8vIGFkZCBkYXRlIHBhZGRpbmcgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnZpZXdfaXMoWydRdWFydGVyIERheScsICdIYWxmIERheSddKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbnR0X3N0YXJ0ID0gZGF0ZV91dGlscy5hZGQodGhpcy5nYW50dF9zdGFydCwgLTcsICdkYXknKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW50dF9lbmQgPSBkYXRlX3V0aWxzLmFkZCh0aGlzLmdhbnR0X2VuZCwgNywgJ2RheScpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy52aWV3X2lzKCdNb250aCcpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FudHRfc3RhcnQgPSBkYXRlX3V0aWxzLnN0YXJ0X29mKHRoaXMuZ2FudHRfc3RhcnQsICd5ZWFyJyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FudHRfZW5kID0gZGF0ZV91dGlscy5hZGQodGhpcy5nYW50dF9lbmQsIDEsICd5ZWFyJyk7XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnZpZXdfaXMoJ1llYXInKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbnR0X3N0YXJ0ID0gZGF0ZV91dGlscy5hZGQodGhpcy5nYW50dF9zdGFydCwgLTIsICd5ZWFyJyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FudHRfZW5kID0gZGF0ZV91dGlscy5hZGQodGhpcy5nYW50dF9lbmQsIDIsICd5ZWFyJyk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW50dF9zdGFydCA9IGRhdGVfdXRpbHMuYWRkKHRoaXMuZ2FudHRfc3RhcnQsIC0xLCAnbW9udGgnKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW50dF9lbmQgPSBkYXRlX3V0aWxzLmFkZCh0aGlzLmdhbnR0X2VuZCwgMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwX2RhdGVfdmFsdWVzKCkge1xyXG4gICAgICAgIHRoaXMuZGF0ZXMgPSBbXTtcclxuICAgICAgICBsZXQgY3VyX2RhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICB3aGlsZSAoY3VyX2RhdGUgPT09IG51bGwgfHwgY3VyX2RhdGUgPCB0aGlzLmdhbnR0X2VuZCkge1xyXG4gICAgICAgICAgICBpZiAoIWN1cl9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJfZGF0ZSA9IGRhdGVfdXRpbHMuY2xvbmUodGhpcy5nYW50dF9zdGFydCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3X2lzKCdZZWFyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJfZGF0ZSA9IGRhdGVfdXRpbHMuYWRkKGN1cl9kYXRlLCAxLCAneWVhcicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdfaXMoJ01vbnRoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJfZGF0ZSA9IGRhdGVfdXRpbHMuYWRkKGN1cl9kYXRlLCAxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyX2RhdGUgPSBkYXRlX3V0aWxzLmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdGVwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG91cidcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaChjdXJfZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNldHVwX2xheWVycygpO1xyXG4gICAgICAgIHRoaXMubWFrZV9ncmlkKCk7XHJcbiAgICAgICAgdGhpcy5tYWtlX2JhcnMoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zZXR1cF9kZXBlbmRlbmNpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLm1ha2VfYXJyb3dzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tYXBfYXJyb3dzX29uX2JhcnMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1ha2VfZGF0ZXMoKTtcclxuICAgICAgICB0aGlzLm1ha2VfdGltZV9zbGlkZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRfd2lkdGgoKTtcclxuICAgICAgICAvLyB0aGlzLnNldF9zY3JvbGxfcG9zaXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZyYW1lX29uX2JveCh0aGlzLmJveCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXRfdHJhbnNmb3JtKFstMjAwLCAtNTAwXSwgWzEuNiwgNF0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBfbGF5ZXJzKCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLmdyaWQgPSBjcmVhdGVTVkcoJ2cnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnZ3JpZCcsXHJcbiAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy4kc3ZnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZ3JpZFRpY2tzID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2dyaWRUaWNrcycsXHJcbiAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy4kc3ZnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nYW50dHRyYW5zZm9ybSA9IGNyZWF0ZVNWRygnZycsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICBhcHBlbmRfdG86IHRoaXMuJHN2Z1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxheWVycyA9IFsnYXJyb3cnLCAnYmFyJywgJ2RldGFpbHMnXTtcclxuICAgICAgICAvLyBtYWtlIGdyb3VwIGxheWVyc1xyXG4gICAgICAgIGZvciAobGV0IGxheWVyIG9mIGxheWVycykge1xyXG4gICAgICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBjcmVhdGVTVkcoJ2cnLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogbGF5ZXIsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRfdG86IHRoaXMuZ2FudHR0cmFuc2Zvcm1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaGVhZGVydHJhbnNmb3JtID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgIC8vICAgICBjbGFzczogJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgLy8gICAgIGFwcGVuZF90bzogdGhpcy4kc3ZnXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZGF0ZSA9IGNyZWF0ZVNWRygnZycsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdkYXRlJyxcclxuICAgICAgICAgICAgYXBwZW5kX3RvOiAgdGhpcy4kc3ZnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldF90cmFuc2Zvcm0odHIsIHNjKSB7XHJcbiAgICAgICAgdGhpcy50ciA9IHRyO1xyXG4gICAgICAgIHRoaXMuc2MgPSBzYztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxheWVycy5ncmlkVGlja3Muc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLnRyWzBdfSwgJHt0aGlzLm9wdGlvbnMuaGVhZGVyX2hlaWdodH0pIHNjYWxlKCR7dGhpcy5zY1swXX0sICR7dGhpcy50aWNrX2hlaWdodH0pYCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RyWzBdfSwgMCkgc2NhbGUoJHtzY1swXX0sMS4wKWApO1xyXG4gICAgICAgIHRoaXMuZ2FudHR0cmFuc2Zvcm0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0clswXSB9LCAke3RyWzFdfSkgc2NhbGUoJHtzY1swXX0sJHtzY1sxXX0pIGApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN0IHZpZXdCb3ggPSB0aGlzLiRzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94Jyk7XHJcbiAgICAgICAgY29uc3QgY2xpZW50UmVjdCA9IHRoaXMuJHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb3cgd2UgYnVpbGQgYSBib3ggYmFzZWQgb24gdGhlIGN1cnJlbnQgdmlldyB0cmFuc2Zvcm0uXHJcbiAgICAgICAgLy8gVGhlIGJveCB4L3kgYXJlIGF0IHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdCb3guIChyYXRoZXIgdGhhbiB0b3AgbGVmdC4pXHJcbiAgICAgICAgLy8gQWRkIDEwIHRvIGhlYWRlciBoZWlnaHQuIFJlYWxseSBxdWl0ZSBjb25mdXNpbmcuIFNlZSBtYWtlX2RhdGVzLi5cclxuICAgICAgICBjb25zdCBoZWFkZXJfaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlYWRlcl9oZWlnaHQgKyAxMDtcclxuICAgICAgICBjb25zdCB2aWV3U2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNsaWVudFJlY3Qud2lkdGggLyB0aGlzLnNjWzBdLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNsaWVudFJlY3QuaGVpZ2h0IC8gdGhpcy5zY1sxXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgdmlld0JveCA9IHtcclxuICAgICAgICAgICAgeDogKC10aGlzLnRyWzBdIC8gdGhpcy5zY1swXSksXHJcbiAgICAgICAgICAgIHk6ICgoLXRoaXMudHJbMV0gKyBoZWFkZXJfaGVpZ2h0KSAvIHRoaXMuc2NbMV0pLFxyXG4gICAgICAgICAgICB3aWR0aDogdmlld1NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdmlld1NpemUuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHIsIHRoaXMuc2MsIHZpZXdCb3gpXHJcblxyXG4gICAgICAgIHRoaXMuYmFycy5mb3JFYWNoKGJhciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmIChkb0JveGVzSW50ZXJzZWN0KGJhci5ib3gsIHZpZXdCb3gpKVxyXG4gICAgICAgICAgICAgICAgYmFyLnByb3BhZ2F0ZV90cmFuc2Zvcm0oc2MsIHZpZXdCb3gpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2NfaW52ID0gWzEgLyBzY1swXSwgMV07XHJcbiAgICAgICAgdGhpcy51cGRhdGVfZGF0ZXNfdGV4dF90cmFuc2Zvcm0oc2NfaW52KTtcclxuICAgIH1cclxuXHJcbiAgICB6b29tX29uX3BvaW50KHB0LCB6b29tKSB7XHJcbiAgICAgICAgY29uc3Qgc2MgPSBbdGhpcy5zY1swXSArIHpvb21bMF0sIHRoaXMuc2NbMV0gKyB6b29tWzFdXTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldl9zY190ciA9IFtwdFswXSAqIHRoaXMuc2NbMF0sIHB0WzFdICogdGhpcy5zY1sxXV07XHJcbiAgICAgICAgY29uc3QgbmV3X3NjX3RyID0gW3B0WzBdICogc2NbMF0sIHB0WzFdICogc2NbMV1dO1xyXG4gICAgICAgIGNvbnN0IGR4eSA9IFtcclxuICAgICAgICAgICAgcHJldl9zY190clswXSAtIG5ld19zY190clswXSxcclxuICAgICAgICAgICAgcHJldl9zY190clsxXSAtIG5ld19zY190clsxXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdHIgPSBbdGhpcy50clswXSArIGR4eVswXSwgdGhpcy50clsxXSArIGR4eVsxXV07XHJcbiAgICAgICAgdGhpcy5zZXRfdHJhbnNmb3JtKHRyLCBzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWVfb25fYm94KGJveCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudFJlY3QgPSB0aGlzLiRzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX2hlaWdodCA9IHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0ICsgMTA7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0c2MgPSBbXHJcbiAgICAgICAgICAgIChjbGllbnRSZWN0LndpZHRoIC0gdGhpcy5vcHRpb25zLnBhZGRpbmcgKiAyKSAvIGJveC53aWR0aCxcclxuICAgICAgICAgICAgKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVhZGVyX2hlaWdodCAtIHRoaXMub3B0aW9ucy5wYWRkaW5nICogMikgL1xyXG4gICAgICAgICAgICAgICAgYm94LmhlaWdodFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0dHIgPSBbXHJcbiAgICAgICAgICAgICgtYm94LnggKiB0YXJnZXRzY1swXSkgKyB0aGlzLm9wdGlvbnMucGFkZGluZyxcclxuICAgICAgICAgICAgKC1ib3gueSAqIHRhcmdldHNjWzFdKSArIGhlYWRlcl9oZWlnaHQgKyB0aGlzLm9wdGlvbnMucGFkZGluZ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgc3RhcnR0ciA9IFt0aGlzLnRyWzBdLCB0aGlzLnRyWzFdXTtcclxuICAgICAgICBjb25zdCBzdGFydHNjID0gW3RoaXMuc2NbMF0sIHRoaXMuc2NbMV1dO1xyXG4gICAgICAgIGlmKHRoaXMuX19mb2N1c0ludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9fZm9jdXNJbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAzMDtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgY29uc3QgYXBwbHlNb3ZlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gc21vb3RoU3RlcCgwLjAsIDEuMCwgaSAvIGNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSBbXHJcbiAgICAgICAgICAgICAgICBzdGFydHRyWzBdICsgKCh0YXJnZXR0clswXSAtIHN0YXJ0dHJbMF0pICogdCksXHJcbiAgICAgICAgICAgICAgICBzdGFydHRyWzFdICsgKCh0YXJnZXR0clsxXSAtIHN0YXJ0dHJbMV0pICogdClcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3Qgc2MgPSBbXHJcbiAgICAgICAgICAgICAgICBzdGFydHNjWzBdICsgKCh0YXJnZXRzY1swXSAtIHN0YXJ0c2NbMF0pICogdCksXHJcbiAgICAgICAgICAgICAgICBzdGFydHNjWzFdICsgKCh0YXJnZXRzY1sxXSAtIHN0YXJ0c2NbMV0pICogdClcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRfdHJhbnNmb3JtKHRyLCBzYyk7XHJcblxyXG4gICAgICAgICAgICBpZihpIDwgY291bnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2ZvY3VzSW50ZXJ2YWxJZCA9IHNldFRpbWVvdXQoYXBwbHlNb3ZlbWVudCwgMjApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2ZvY3VzSW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwbHlNb3ZlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VfZ3JpZCgpIHtcclxuICAgICAgICAvLyB0aGlzLm1ha2VfZ3JpZF9iYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tYWtlX2dyaWRfcm93cygpO1xyXG4gICAgICAgIHRoaXMubWFrZV9ncmlkX3RpY2tzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tYWtlX2dyaWRfaGVhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZV9ncmlkX2JhY2tncm91bmQoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZ3JpZF93aWR0aCA9IHRoaXMuZGF0ZXMubGVuZ3RoICogdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aDtcclxuICAgICAgICAvLyBjb25zdCBncmlkX2hlaWdodCA9XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0ICtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRpb25zLnBhZGRpbmcgK1xyXG4gICAgICAgIC8vICAgICAodGhpcy5vcHRpb25zLmJhcl9oZWlnaHQgKyB0aGlzLm9wdGlvbnMucGFkZGluZykgKlxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZS50YXNrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZVNWRygncmVjdCcsIHtcclxuICAgICAgICAvLyAgICAgeDogMCxcclxuICAgICAgICAvLyAgICAgeTogMCxcclxuICAgICAgICAvLyAgICAgd2lkdGg6IGdyaWRfd2lkdGgsXHJcbiAgICAgICAgLy8gICAgIGhlaWdodDogZ3JpZF9oZWlnaHQsXHJcbiAgICAgICAgLy8gICAgIGNsYXNzOiAnZ3JpZC1iYWNrZ3JvdW5kJyxcclxuICAgICAgICAvLyAgICAgYXBwZW5kX3RvOiB0aGlzLmxheWVycy5ncmlkXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vICQuYXR0cih0aGlzLiRzdmcsIHtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAnMTAwJSdcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWtlX2dyaWRfcm93cygpIHtcclxuICAgIC8vICAgICBjb25zdCByb3dzX2xheWVyID0gY3JlYXRlU1ZHKCdnJywgeyBhcHBlbmRfdG86IHRoaXMubGF5ZXJzLmdyaWQgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgbGluZXNfbGF5ZXIgPSBjcmVhdGVTVkcoJ2cnLCB7IGFwcGVuZF90bzogdGhpcy5sYXllcnMuZ3JpZCB9KTtcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgcm93X3dpZHRoID0gdGhpcy5kYXRlcy5sZW5ndGggKiB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgLy8gICAgIGNvbnN0IHJvd19oZWlnaHQgPSB0aGlzLm9wdGlvbnMuYmFyX2hlaWdodCArIHRoaXMub3B0aW9ucy5wYWRkaW5nO1xyXG5cclxuICAgIC8vICAgICBsZXQgcm93X3kgPSB0aGlzLm9wdGlvbnMuaGVhZGVyX2hlaWdodCArIHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMjtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgdGFzayBvZiB0aGlzLnNjaGVkdWxlLnRhc2tzKSB7XHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZVNWRygncmVjdCcsIHtcclxuICAgIC8vICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAvLyAgICAgICAgICAgICB5OiByb3dfeSxcclxuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiByb3dfd2lkdGgsXHJcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IHJvd19oZWlnaHQsXHJcbiAgICAvLyAgICAgICAgICAgICBjbGFzczogJ2dyaWQtcm93JyxcclxuICAgIC8vICAgICAgICAgICAgIGFwcGVuZF90bzogcm93c19sYXllclxyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNyZWF0ZVNWRygnbGluZScsIHtcclxuICAgIC8vICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgLy8gICAgICAgICAgICAgeTE6IHJvd195ICsgcm93X2hlaWdodCxcclxuICAgIC8vICAgICAgICAgICAgIHgyOiByb3dfd2lkdGgsXHJcbiAgICAvLyAgICAgICAgICAgICB5Mjogcm93X3kgKyByb3dfaGVpZ2h0LFxyXG4gICAgLy8gICAgICAgICAgICAgY2xhc3M6ICdyb3ctbGluZScsXHJcbiAgICAvLyAgICAgICAgICAgICBhcHBlbmRfdG86IGxpbmVzX2xheWVyXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgcm93X3kgKz0gdGhpcy5vcHRpb25zLmJhcl9oZWlnaHQgKyB0aGlzLm9wdGlvbnMucGFkZGluZztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbWFrZV9ncmlkX2hlYWRlcigpIHtcclxuICAgIC8vICAgICBjb25zdCBoZWFkZXJfd2lkdGggPSB0aGlzLmRhdGVzLmxlbmd0aCAqIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcbiAgICAvLyAgICAgY29uc3QgaGVhZGVyX2hlaWdodCA9IHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0ICsgMTA7XHJcbiAgICAvLyAgICAgY3JlYXRlU1ZHKCdyZWN0Jywge1xyXG4gICAgLy8gICAgICAgICB4OiAwLFxyXG4gICAgLy8gICAgICAgICB5OiAwLFxyXG4gICAgLy8gICAgICAgICB3aWR0aDogaGVhZGVyX3dpZHRoLFxyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IGhlYWRlcl9oZWlnaHQsXHJcbiAgICAvLyAgICAgICAgIGNsYXNzOiAnZ3JpZC1oZWFkZXInLFxyXG4gICAgLy8gICAgICAgICBhcHBlbmRfdG86IHRoaXMubGF5ZXJzLmRhdGVcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBtYWtlX2dyaWRfdGlja3MoKSB7XHJcbiAgICAgICAgbGV0IHRpY2tfeCA9IDA7XHJcbiAgICAgICAgY29uc3QgdGlja195ID0gMDsvL3RoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0ICsgdGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyO1xyXG4gICAgICAgIGNvbnN0IGN1cl9oZWlnaHQgPSB0aGlzLiRzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlja19oZWlnaHQgPSBjdXJfaGVpZ2h0IC0gdGhpcy5vcHRpb25zLmhlYWRlcl9oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vICh0aGlzLm9wdGlvbnMuYmFyX2hlaWdodCArIHRoaXMub3B0aW9ucy5wYWRkaW5nKSAqXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUudGFza3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkYXRlIG9mIHRoaXMuZGF0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IHRpY2tfY2xhc3MgPSAndGljayc7XHJcbiAgICAgICAgICAgIC8vIHRoaWNrIHRpY2sgZm9yIG1vbmRheVxyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3X2lzKCdEYXknKSAmJiBkYXRlLmdldERhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGlja19jbGFzcyArPSAnIHRoaWNrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGljayB0aWNrIGZvciBmaXJzdCB3ZWVrXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld19pcygnV2VlaycpICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldERhdGUoKSA+PSAxICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldERhdGUoKSA8IDhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aWNrX2NsYXNzICs9ICcgdGhpY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaWNrIHRpY2tzIGZvciBxdWFydGVyc1xyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3X2lzKCdNb250aCcpICYmIChkYXRlLmdldE1vbnRoKCkgKyAxKSAlIDMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpY2tfY2xhc3MgKz0gJyB0aGljayc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVNWRygncGF0aCcsIHtcclxuICAgICAgICAgICAgICAgIGQ6IGBNICR7dGlja194fSAke3RpY2tfeX0gdiAxYCxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiB0aWNrX2NsYXNzLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kX3RvOiB0aGlzLmxheWVycy5ncmlkVGlja3NcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3X2lzKCdNb250aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aWNrX3ggKz1cclxuICAgICAgICAgICAgICAgICAgICBkYXRlX3V0aWxzLmdldF9kYXlzX2luX21vbnRoKGRhdGUpICpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoIC9cclxuICAgICAgICAgICAgICAgICAgICAzMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpY2tfeCArPSB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFplYUVuZ2luZS5vblJlc2l6ZSh0aGlzLiRjb250YWluZXIsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cl9oZWlnaHQgPSB0aGlzLiRjb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tfaGVpZ2h0ID0gY3VyX2hlaWdodCAtIHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5ncmlkVGlja3Muc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLnRyWzBdfSwgJHt0aGlzLm9wdGlvbnMuaGVhZGVyX2hlaWdodH0pIHNjYWxlKCR7dGhpcy5zY1swXX0sICR7dGhpcy50aWNrX2hlaWdodH0pYCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWFrZV9kYXRlcygpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJfd2lkdGggPSB0aGlzLmRhdGVzLmxlbmd0aCAqIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyX2hlaWdodCA9IHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0ICsgMTA7XHJcbiAgICAgICAgdGhpcy4kZGF0ZXNSZWN0ID0gY3JlYXRlU1ZHKCdyZWN0Jywge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogaGVhZGVyX3dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlYWRlcl9oZWlnaHQsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnZ3JpZC1oZWFkZXInLFxyXG4gICAgICAgICAgICBhcHBlbmRfdG86IHRoaXMubGF5ZXJzLmRhdGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzY194ID0gMS90aGlzLnNjWzBdO1xyXG4gICAgICAgIGNvbnN0IHNjX3kgPSAxL3RoaXMuc2NbMV07XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd25fZGF0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBkYXRlIG9mIHRoaXMuZ2V0X2RhdGVzX3RvX2RyYXcoKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZyA9IGNyZWF0ZVNWRygnZycsIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke2RhdGUubG93ZXJfeH0sJHtkYXRlLmxvd2VyX3l9KSBzY2FsZSgke3NjX3h9LCR7c2NfeX0pYCxcclxuICAgICAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy5sYXllcnMuZGF0ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0ZS5sb3dlcl9nID0gZztcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVNWRygndGV4dCcsIHtcclxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogZGF0ZS5sb3dlcl90ZXh0LFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdsb3dlci10ZXh0JyxcclxuICAgICAgICAgICAgICAgIGFwcGVuZF90bzogZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRlLnVwcGVyX3RleHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBjcmVhdGVTVkcoJ2cnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7ZGF0ZS51cHBlcl94fSwke2RhdGUudXBwZXJfeX0pIHNjYWxlKCR7c2NfeH0sJHtzY195fSlgLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy5sYXllcnMuZGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdXBwZXJfdGV4dCA9IGNyZWF0ZVNWRygndGV4dCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGRhdGUudXBwZXJfdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3VwcGVyLXRleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZF90bzogZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG91dC1vZi1ib3VuZCBkYXRlc1xyXG4gICAgICAgICAgICAgICAgaWYgKCR1cHBlcl90ZXh0LmdldEJCb3goKS54MiA+IHRoaXMubGF5ZXJzLmdyaWQuZ2V0QkJveCgpLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHVwcGVyX3RleHQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlLnVwcGVyX2cgPSBnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd25fZGF0ZXMucHVzaChkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBtYWtlX3RpbWVfc2xpZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZV90aW1lX3NsaWRlclwiKVxyXG4gICAgICAgIGNvbnN0IGN1cl9oZWlnaHQgPSB0aGlzLiRzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNjX3ggPSAxL3RoaXMuc2NbMF07XHJcbiAgICAgICAgY29uc3Qgc2NfeSA9IDEvdGhpcy5zY1sxXTtcclxuICAgICAgICAvLyBoaWdobGlnaHQgdG9kYXkncyBkYXRlXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmlld19pcygnRGF5JykpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lU2xpZGVyWCA9XHJcbiAgICAgICAgICAgICAgICBkYXRlX3V0aWxzLmRpZmYodGhpcy5jdXJyZW50X2RhdGUsIHRoaXMuZ2FudHRfc3RhcnQsICdob3VyJykgL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVTbGlkZXJHID0gY3JlYXRlU1ZHKCdnJywge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy50aW1lU2xpZGVyWH0sMSkgc2NhbGUoJHtzY194fSwxKWAsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRfdG86IHRoaXMubGF5ZXJzLmRhdGVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IDEwOy8vdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gY3VyX2hlaWdodDtcclxuICAgICAgICAgICAgICAgIC8vICh0aGlzLm9wdGlvbnMuYmFyX2hlaWdodCArIHRoaXMub3B0aW9ucy5wYWRkaW5nKSAqXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZS50YXNrcy5sZW5ndGggK1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zLmhlYWRlcl9oZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zLnBhZGRpbmcgLyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lU2xpZGVyID0gY3JlYXRlU1ZHKCdyZWN0Jywge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAndG9kYXktaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGFwcGVuZF90bzogdGhpcy50aW1lU2xpZGVyR1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgWmVhRW5naW5lLm9uUmVzaXplKHRoaXMuJGNvbnRhaW5lciwgKCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cl9oZWlnaHQgPSB0aGlzLiRjb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU2xpZGVyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBjdXJfaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2N1cnJlbnRfZGF0ZShjdXJyZW50X2RhdGUsIHRyaWdnZXJfZXZlbnQ9dHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudF9kYXRlID0gY3VycmVudF9kYXRlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2V0X2N1cnJlbnRfZGF0ZTpcIiwgdGhpcy5jdXJyZW50X2RhdGUpXHJcblxyXG4gICAgICAgIHRoaXMudGltZVNsaWRlclggPVxyXG4gICAgICAgICAgICAoZGF0ZV91dGlscy5kaWZmKHRoaXMuY3VycmVudF9kYXRlLCB0aGlzLmdhbnR0X3N0YXJ0LCAnaG91cicpIC9cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgKlxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2NfeCA9IDEvdGhpcy5zY1swXTtcclxuICAgICAgICB0aGlzLnRpbWVTbGlkZXJHLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy50aW1lU2xpZGVyWH0sMCkgc2NhbGUoJHtzY194fSwxKWApXHJcblxyXG4gICAgICAgIGlmKHRyaWdnZXJfZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlLnNldEN1cnJlbnREYXRlKGN1cnJlbnRfZGF0ZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcl9ldmVudCgnc2V0X2N1cnJlbnRfZGF0ZScsIFt0aGlzLmN1cnJlbnRfZGF0ZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfZGF0ZXNfdGV4dF90cmFuc2Zvcm0oc2NfaW52KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3bl9kYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xyXG4gICAgICAgICAgICBkYXRlLmxvd2VyX2cuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtkYXRlLmxvd2VyX3h9LCR7ZGF0ZS5sb3dlcl95fSkgc2NhbGUoJHtzY19pbnZbMF19LCR7c2NfaW52WzFdfSlgKVxyXG4gICAgICAgICAgICBpZiAoZGF0ZS51cHBlcl9nKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlLnVwcGVyX2cuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtkYXRlLnVwcGVyX3h9LCR7ZGF0ZS51cHBlcl95fSkgc2NhbGUoJHtzY19pbnZbMF19LCR7c2NfaW52WzFdfSlgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRpbWVTbGlkZXJHLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy50aW1lU2xpZGVyWH0sMCkgc2NhbGUoJHtzY19pbnZbMF19LDEpYClcclxuICAgIH1cclxuXHJcbiAgICBnZXRfZGF0ZXNfdG9fZHJhdygpIHtcclxuICAgICAgICBsZXQgbGFzdF9kYXRlID0gbnVsbDtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZGF0ZXMubWFwKChkYXRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmdldF9kYXRlX2luZm8oZGF0ZSwgbGFzdF9kYXRlLCBpKTtcclxuICAgICAgICAgICAgbGFzdF9kYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldF9kYXRlX2luZm8oZGF0ZSwgbGFzdF9kYXRlLCBpKSB7XHJcbiAgICAgICAgaWYgKCFsYXN0X2RhdGUpIHtcclxuICAgICAgICAgICAgbGFzdF9kYXRlID0gZGF0ZV91dGlscy5hZGQoZGF0ZSwgMSwgJ3llYXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZV90ZXh0ID0ge1xyXG4gICAgICAgICAgICAnUXVhcnRlciBEYXlfbG93ZXInOiBkYXRlX3V0aWxzLmZvcm1hdChcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAnSEgnLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICdIYWxmIERheV9sb3dlcic6IGRhdGVfdXRpbHMuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICdISCcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2VcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgRGF5X2xvd2VyOlxyXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXREYXRlKCkgIT09IGxhc3RfZGF0ZS5nZXREYXRlKClcclxuICAgICAgICAgICAgICAgICAgICA/IGRhdGVfdXRpbHMuZm9ybWF0KGRhdGUsICdEJywgdGhpcy5vcHRpb25zLmxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgIFdlZWtfbG93ZXI6XHJcbiAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgIT09IGxhc3RfZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkYXRlX3V0aWxzLmZvcm1hdChkYXRlLCAnRCBNTU0nLCB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkYXRlX3V0aWxzLmZvcm1hdChkYXRlLCAnRCcsIHRoaXMub3B0aW9ucy5sYW5ndWFnZSksXHJcbiAgICAgICAgICAgIE1vbnRoX2xvd2VyOiBkYXRlX3V0aWxzLmZvcm1hdChkYXRlLCAnTU1NTScsIHRoaXMub3B0aW9ucy5sYW5ndWFnZSksXHJcbiAgICAgICAgICAgIFllYXJfbG93ZXI6IGRhdGVfdXRpbHMuZm9ybWF0KGRhdGUsICdZWVlZJywgdGhpcy5vcHRpb25zLmxhbmd1YWdlKSxcclxuICAgICAgICAgICAgJ1F1YXJ0ZXIgRGF5X3VwcGVyJzpcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpICE9PSBsYXN0X2RhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkYXRlX3V0aWxzLmZvcm1hdChkYXRlLCAnRCBNTU0nLCB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgJ0hhbGYgRGF5X3VwcGVyJzpcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpICE9PSBsYXN0X2RhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkYXRlLmdldE1vbnRoKCkgIT09IGxhc3RfZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGRhdGVfdXRpbHMuZm9ybWF0KGRhdGUsICdEIE1NTScsIHRoaXMub3B0aW9ucy5sYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZGF0ZV91dGlscy5mb3JtYXQoZGF0ZSwgJ0QnLCB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgRGF5X3VwcGVyOlxyXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpICE9PSBsYXN0X2RhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGF0ZV91dGlscy5mb3JtYXQoZGF0ZSwgJ01NTU0nLCB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgV2Vla191cHBlcjpcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSAhPT0gbGFzdF9kYXRlLmdldE1vbnRoKClcclxuICAgICAgICAgICAgICAgICAgICA/IGRhdGVfdXRpbHMuZm9ybWF0KGRhdGUsICdNTU1NJywgdGhpcy5vcHRpb25zLmxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgIE1vbnRoX3VwcGVyOlxyXG4gICAgICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICE9PSBsYXN0X2RhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGF0ZV91dGlscy5mb3JtYXQoZGF0ZSwgJ1lZWVknLCB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgWWVhcl91cHBlcjpcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0gbGFzdF9kYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgICAgICA/IGRhdGVfdXRpbHMuZm9ybWF0KGRhdGUsICdZWVlZJywgdGhpcy5vcHRpb25zLmxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlX3BvcyA9IHtcclxuICAgICAgICAgICAgeDogaSAqIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGgsXHJcbiAgICAgICAgICAgIGxvd2VyX3k6IHRoaXMub3B0aW9ucy5oZWFkZXJfaGVpZ2h0LFxyXG4gICAgICAgICAgICB1cHBlcl95OiB0aGlzLm9wdGlvbnMuaGVhZGVyX2hlaWdodCAtIDIwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgeF9wb3MgPSB7XHJcbiAgICAgICAgICAgICdRdWFydGVyIERheV9sb3dlcic6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggKiA0IC8gMixcclxuICAgICAgICAgICAgJ1F1YXJ0ZXIgRGF5X3VwcGVyJzogMCxcclxuICAgICAgICAgICAgJ0hhbGYgRGF5X2xvd2VyJzogdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAqIDIgLyAyLFxyXG4gICAgICAgICAgICAnSGFsZiBEYXlfdXBwZXInOiAwLFxyXG4gICAgICAgICAgICBEYXlfbG93ZXI6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggLyAyLFxyXG4gICAgICAgICAgICBEYXlfdXBwZXI6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggKiAzMCAvIDIsXHJcbiAgICAgICAgICAgIFdlZWtfbG93ZXI6IDAsXHJcbiAgICAgICAgICAgIFdlZWtfdXBwZXI6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggKiA0IC8gMixcclxuICAgICAgICAgICAgTW9udGhfbG93ZXI6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggLyAyLFxyXG4gICAgICAgICAgICBNb250aF91cHBlcjogdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAqIDEyIC8gMixcclxuICAgICAgICAgICAgWWVhcl9sb3dlcjogdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIFllYXJfdXBwZXI6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggKiAzMCAvIDJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1cHBlcl90ZXh0OiBkYXRlX3RleHRbYCR7dGhpcy5vcHRpb25zLnZpZXdfbW9kZX1fdXBwZXJgXSxcclxuICAgICAgICAgICAgbG93ZXJfdGV4dDogZGF0ZV90ZXh0W2Ake3RoaXMub3B0aW9ucy52aWV3X21vZGV9X2xvd2VyYF0sXHJcbiAgICAgICAgICAgIHVwcGVyX3g6IGJhc2VfcG9zLnggKyB4X3Bvc1tgJHt0aGlzLm9wdGlvbnMudmlld19tb2RlfV91cHBlcmBdLFxyXG4gICAgICAgICAgICB1cHBlcl95OiBiYXNlX3Bvcy51cHBlcl95LFxyXG4gICAgICAgICAgICBsb3dlcl94OiBiYXNlX3Bvcy54ICsgeF9wb3NbYCR7dGhpcy5vcHRpb25zLnZpZXdfbW9kZX1fbG93ZXJgXSxcclxuICAgICAgICAgICAgbG93ZXJfeTogYmFzZV9wb3MubG93ZXJfeVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZV9iYXJzKCkge1xyXG4gICAgICAgIGxldCBwb3NfeSA9IDA7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcclxuICAgICAgICB0aGlzLmJhcnMgPSB0aGlzLnNjaGVkdWxlLnRhc2tzLm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFyID0gbmV3IEJhcih0aGlzLCB0YXNrLCB0aGlzLCBwb3NfeSk7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLmJhci5hcHBlbmRDaGlsZChiYXIuZ3JvdXApO1xyXG4gICAgICAgICAgICBwb3NfeSArPSBiYXIuaGVpZ2h0ICsgKHRoaXMub3B0aW9ucy5wYWRkaW5nICogMC41KTtcclxuICAgICAgICAgICAgaWYgKGJhci5ib3gud2lkdGggPiB3aWR0aCkgd2lkdGggPSBiYXIuYm94LndpZHRoO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhiYXIudGFzay5uYW1lLCB7eDogYmFyLngsIHk6IGJhci55LCB3aWR0aDogYmFyLndpZHRoLGhlaWdodDogYmFyLmhlaWdodH0pXHJcbiAgICAgICAgICAgIHJldHVybiBiYXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LmhlaWdodCA9IHBvc195O1xyXG4gICAgICAgIHRoaXMuYm94LndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZV9hcnJvd3MoKSB7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5X21hcCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgdGhpcy5zY2hlZHVsZS50YXNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIHQuZGVwZW5kZW5jaWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGVuZGVuY3lfbWFwW2RdID0gdGhpcy5kZXBlbmRlbmN5X21hcFtkXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeV9tYXBbZF0ucHVzaCh0LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHRoaXMuc2NoZWR1bGUudGFza3MpIHtcclxuICAgICAgICAgICAgbGV0IGFycm93cyA9IFtdO1xyXG4gICAgICAgICAgICBhcnJvd3MgPSB0YXNrLmRlcGVuZGVuY2llc1xyXG4gICAgICAgICAgICAgICAgLm1hcCh0YXNrX2lkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gdGhpcy5nZXRfdGFzayh0YXNrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlcGVuZGVuY3kpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvdyA9IG5ldyBBcnJvdyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJzW2RlcGVuZGVuY3kuaW5kZXhdLCAvLyBmcm9tX3Rhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJzW3Rhc2suaW5kZXhdIC8vIHRvX3Rhc2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmFycm93LmFwcGVuZENoaWxkKGFycm93LmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJvdztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pOyAvLyBmaWx0ZXIgZmFsc3kgdmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5hcnJvd3MuY29uY2F0KGFycm93cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcF9hcnJvd3Nfb25fYmFycygpIHtcclxuICAgICAgICBmb3IgKGxldCBiYXIgb2YgdGhpcy5iYXJzKSB7XHJcbiAgICAgICAgICAgIGJhci5hcnJvd3MgPSB0aGlzLmFycm93cy5maWx0ZXIoYXJyb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdy5mcm9tX3Rhc2sudGFzay5pZCA9PT0gYmFyLnRhc2suaWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdy50b190YXNrLnRhc2suaWQgPT09IGJhci50YXNrLmlkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X3dpZHRoKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cl93aWR0aCA9IHRoaXMuJHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICAvLyBjb25zdCBhY3R1YWxfd2lkdGggPSB0aGlzLiRzdmdcclxuICAgICAgICAvLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkIC5ncmlkLXJvdycpXHJcbiAgICAgICAgLy8gICAgIC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XHJcbiAgICAgICAgLy8gY29uc3QgYWN0dWFsX3dpZHRoID0gdGhpcy5sYXllcnMuZ3JpZC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1yb3cnKS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsX3dpZHRoID0gdGhpcy5sYXllcnMuZGF0ZS5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1oZWFkZXInKS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XHJcbiAgICAgICAgaWYgKGN1cl93aWR0aCA8IGFjdHVhbF93aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGFjdHVhbF93aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldF9zY3JvbGxfcG9zaXRpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc3QgcGFyZW50X2VsZW1lbnQgPSB0aGlzLiRzdmcucGFyZW50RWxlbWVudDtcclxuICAgICAgICAvLyBpZiAoIXBhcmVudF9lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhvdXJzX2JlZm9yZV9maXJzdF90YXNrID0gZGF0ZV91dGlscy5kaWZmKFxyXG4gICAgICAgICAgICB0aGlzLmdldF9vbGRlc3Rfc3RhcnRpbmdfZGF0ZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmdhbnR0X3N0YXJ0LFxyXG4gICAgICAgICAgICAnaG91cidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxfcG9zID1cclxuICAgICAgICAgICAgaG91cnNfYmVmb3JlX2ZpcnN0X3Rhc2sgL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0ZXAgKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAtXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsX3BvczpcIiwgc2Nyb2xsX3BvcylcclxuICAgICAgICAvLyBwYXJlbnRfZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsX3BvcztcclxuICAgICAgICB0aGlzLnNldF90cmFuc2Zvcm0oWy1zY3JvbGxfcG9zLCAwXSwgWzEsIDFdKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBiaW5kX2V2ZW50cygpIHtcclxuICAgICAgICBsZXQgaXNfZG93biA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc19kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZWRvd25fcG9zID0gbnVsbDtcclxuICAgICAgICBsZXQgbW91c2Vkb3duX3RyID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaXNfcmVzaXppbmdfbGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc19yZXNpemluZ19yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGxldCBwYXJlbnRfYmFyX2lkID0gbnVsbDtcclxuICAgICAgICAvLyBsZXQgYmFycyA9IFtdOyAvLyBpbnN0YW5jZW9mIEJhclxyXG4gICAgICAgIC8vIGxldCBiYXJfYmVpbmdfZHJhZ2dlZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByZXZEb3duVGltZSA9IDA7XHJcbiAgICAgICAgbGV0IGlzX2RyYWdnaW5nX2N1cnJlbnRfZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXJyZW50ZGF0ZV9vbl9zdGFydCA9IDA7XHJcbiAgICAgICAgbGV0IHhfb25fc3RhcnQgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhY3Rpb25faW5fcHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc19kcmFnZ2luZyB8fCBpc19yZXNpemluZ19sZWZ0IHx8IGlzX3Jlc2l6aW5nX3JpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIG1vdXNlIGNsaWNrcyBvbiB0aGUgaGVhZGVyLi4uXHJcbiAgICAgICAgLy8gSGlkZSB0aGUgcG9wLXVwIGlmIGl0IGlzIGRpc3BsYXllZC5cclxuICAgICAgICAkLm9uKFxyXG4gICAgICAgICAgICB0aGlzLiRzdmcsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cF90cmlnZ2VyLFxyXG4gICAgICAgICAgICAnLmdyaWQtcm93LCAuZ3JpZC1oZWFkZXInLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2VsZWN0X2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlX3BvcHVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICQub24odGhpcy4kc3ZnLCAnbW91c2Vkb3duJywgKGUsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IHRoaXMudGltZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgeF9vbl9zdGFydCA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgIGlzX2RyYWdnaW5nX2N1cnJlbnRfZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ZGF0ZV9vbl9zdGFydCA9IHRoaXMuY3VycmVudF9kYXRlO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdXNlZG93bl9wb3MgPSBbZS5jbGllbnRYLCBlLmNsaWVudFldO1xyXG4gICAgICAgICAgICBtb3VzZWRvd25fdHIgPSBbdGhpcy50clswXSwgdGhpcy50clsxXV07XHJcbiAgICAgICAgICAgIGlzX2Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZG93blRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZigoZG93blRpbWUgLSBwcmV2RG93blRpbWUpIDwgdGhpcy5vcHRpb25zLmRvdWJsZV9jbGlja190aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb3VibGUgY2xpY2suXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zcmNFbGVtZW50ID09IHRoaXMuJHN2Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJhbWVfb25fYm94OlwiLCB0aGlzLmJveClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lX29uX2JveCh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzLiRkYXRlc1JlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9ICgoZS5jbGllbnRYIC0gdGhpcy50clswXSkgLyB0aGlzLnNjWzBdKS90aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0X2N1cnJlbnRfZGF0ZShkYXRlX3V0aWxzLmFkZCh0aGlzLmdhbnR0X3N0YXJ0LCBkeCozMCwgJ2RheScpKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2RG93blRpbWUgPSBkb3duVGltZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyAkLm9uKHRoaXMuJHN2ZywgJ21vdXNlZG93bicsICcuYmFyLXdyYXBwZXIsIC5oYW5kbGUnLCAoZSwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbW91c2Vkb3duJylcclxuICAgICAgICAvLyAgICAgLy8gY29uc3QgYmFyX3dyYXBwZXIgPSAkLmNsb3Nlc3QoJy5iYXItd3JhcHBlcicsIGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0JykpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGlzX3Jlc2l6aW5nX2xlZnQgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAvLyB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodCcpKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBpc19yZXNpemluZ19yaWdodCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIC8vIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jhci13cmFwcGVyJykpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIGlzX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8gYmFyX3dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB4X29uX3N0YXJ0ID0gZS5jbGllbnRYO1xyXG4gICAgICAgIC8vICAgICAvLyB5X29uX3N0YXJ0ID0gZS5jbGllbnRZO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gcGFyZW50X2Jhcl9pZCA9IGJhcl93cmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zdCBpZHMgPSBbXHJcbiAgICAgICAgLy8gICAgIC8vICAgICBwYXJlbnRfYmFyX2lkLFxyXG4gICAgICAgIC8vICAgICAvLyAgICAgLi4udGhpcy5nZXRfYWxsX2RlcGVuZGVudF90YXNrcyhwYXJlbnRfYmFyX2lkKVxyXG4gICAgICAgIC8vICAgICAvLyBdO1xyXG4gICAgICAgIC8vICAgICAvLyBiYXJzID0gaWRzLm1hcChpZCA9PiB0aGlzLmdldF9iYXIoaWQpKTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGJhcl9iZWluZ19kcmFnZ2VkID0gcGFyZW50X2Jhcl9pZDtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGJhcnMuZm9yRWFjaChiYXIgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgY29uc3QgJGJhciA9IGJhci4kYmFyO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgJGJhci5veCA9ICRiYXIuZ2V0WCgpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgJGJhci5veSA9ICRiYXIuZ2V0WSgpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgJGJhci5vd2lkdGggPSAkYmFyLmdldFdpZHRoKCk7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAkYmFyLmZpbmFsZHggPSAwO1xyXG4gICAgICAgIC8vICAgICAvLyB9KTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc19kcmFnZ2luZ19jdXJyZW50X2RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gKChlLm9mZnNldFggLSB4X29uX3N0YXJ0KSAvIHRoaXMuc2NbMF0pL3RoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9jdXJyZW50X2RhdGUoZGF0ZV91dGlscy5hZGQoY3VycmVudGRhdGVfb25fc3RhcnQsIGR4KjMwLCAnZGF5JykpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc19kb3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGUuY2xpZW50WCAtIG1vdXNlZG93bl9wb3NbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIG1vdXNlZG93bl9wb3NbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ciA9IFttb3VzZWRvd25fdHJbMF0gKyBkeCwgbW91c2Vkb3duX3RyWzFdICsgZHldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAwICYmIE1hdGguYWJzKGR5KSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgYW55IHpvb21pbmcgdGhhdCBtaWdodCBiZSBoYXBwZW5pbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19mb2N1c0ludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9fZm9jdXNJbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2ZvY3VzSW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0X3RyYW5zZm9ybSh0ciwgdGhpcy5zYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNfZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoIWFjdGlvbl9pbl9wcm9ncmVzcygpKSByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGR4ID0gZS5jbGllbnRYIC0geF9vbl9zdGFydDtcclxuICAgICAgICAgICAgLy8gY29uc3QgZHkgPSBlLmNsaWVudFkgLSB5X29uX3N0YXJ0O1xyXG5cclxuICAgICAgICAgICAgLy8gYmFycy5mb3JFYWNoKGJhciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCAkYmFyID0gYmFyLiRiYXI7XHJcbiAgICAgICAgICAgIC8vICAgICAkYmFyLmZpbmFsZHggPSB0aGlzLmdldF9zbmFwX3Bvc2l0aW9uKGR4KTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoaXNfcmVzaXppbmdfbGVmdCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChwYXJlbnRfYmFyX2lkID09PSBiYXIudGFzay5pZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiYXIudXBkYXRlX2Jhcl9wb3NpdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB4OiAkYmFyLm94ICsgJGJhci5maW5hbGR4LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2lkdGg6ICRiYXIub3dpZHRoIC0gJGJhci5maW5hbGR4XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJhci51cGRhdGVfYmFyX3Bvc2l0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHg6ICRiYXIub3ggKyAkYmFyLmZpbmFsZHhcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChpc19yZXNpemluZ19yaWdodCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChwYXJlbnRfYmFyX2lkID09PSBiYXIudGFzay5pZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiYXIudXBkYXRlX2Jhcl9wb3NpdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogJGJhci5vd2lkdGggKyAkYmFyLmZpbmFsZHhcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChpc19kcmFnZ2luZykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJhci51cGRhdGVfYmFyX3Bvc2l0aW9uKHsgeDogJGJhci5veCArICRiYXIuZmluYWxkeCB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuICAgICAgICAgICAgLy8gaWYgKGlzX2RyYWdnaW5nIHx8IGlzX3Jlc2l6aW5nX2xlZnQgfHwgaXNfcmVzaXppbmdfcmlnaHQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhcnMuZm9yRWFjaChiYXIgPT4gYmFyLmdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNfZHJhZ2dpbmdfY3VycmVudF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpc19kcmFnZ2luZ19jdXJyZW50X2RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc19kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlzX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlzX3Jlc2l6aW5nX2xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXNfcmVzaXppbmdfcmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gJC5vbih0aGlzLiRzdmcsICdtb3VzZXVwJywgZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy4kc3ZnIG1vdXNldXBcIik7XHJcbiAgICAgICAgLy8gICAgIC8vIGJhcl9iZWluZ19kcmFnZ2VkID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgLy8gYmFycy5mb3JFYWNoKGJhciA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBjb25zdCAkYmFyID0gYmFyLiRiYXI7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICBpZiAoISRiYXIuZmluYWxkeCkgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgYmFyLmRhdGVfY2hhbmdlZCgpO1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgYmFyLnNldF9hY3Rpb25fY29tcGxldGVkKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBvbldoZWVsID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBtb3VzZSB3aGVlbCBldmVudCBvcnJpZ2luYXRlcyBmcm9tIFxyXG4gICAgICAgICAgICAvLyBzb21ldGhpbmcgaW4gb3VyIHN2ZyB0cmVlLiBJZiBub3QsIGlnbm9yZSBpdC5cclxuICAgICAgICAgICAgLy8gSXQgY291bGQgYmUgZm9yIHRoZSBHTCB2aWV3cG9ydC5cclxuICAgICAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChlbCAhPSB0aGlzLiRzdmcpXHJcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgaWYgKGVsICE9IHRoaXMuJHN2ZylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsYXRvciA9IDEuMDsvL2V2ZW50LnNoaWZ0S2V5ID8gMC4yIDogMS4wO1xyXG4gICAgICAgICAgICBjb25zdCB6b29tRGlzdCA9IGV2ZW50LmRlbHRhWSAqIHRoaXMub3B0aW9ucy5tb3VzZV93aGVlbF96b29tX3NwZWVkICogbW9kdWxhdG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkeCA9IChldmVudC5hbHRLZXkgPyAwLjAgOiB6b29tRGlzdCkgKiB0aGlzLnNjWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IChldmVudC5zaGlmdEtleSA/IDAuMCA6IHpvb21EaXN0KSAqIHRoaXMuc2NbMV07XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBvaW50IGluIHRoZSB0cmFuc2Zvcm1lZCBncmFwaC5cclxuICAgICAgICAgICAgY29uc3QgcHQgPSBbKGUub2Zmc2V0WCAtIHRoaXMudHJbMF0pIC8gdGhpcy5zY1swXSwgKGUub2Zmc2V0WSAtIHRoaXMudHJbMV0pIC8gdGhpcy5zY1sxXV07XHJcbiAgICAgICAgICAgIHRoaXMuem9vbV9vbl9wb2ludChwdCwgW2R4LCBkeV0pO1xyXG5cclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcilcclxuICAgICAgICAvKiogRE9NTW91c2VTY3JvbGwgaXMgZm9yIG1vemlsbGEuICovXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAvKiogSUUvT3BlcmEuICovXHJcbiAgICAgICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG9uV2hlZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBUb3VjaCBldmVudHNcclxuICAgICAgICBjb25zdCBvbmdvaW5nVG91Y2hlcyA9IHt9O1xyXG4gICAgICAgIGxldCBtb3ZlTW9kZSA9IFwiXCI7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUb3VjaCA9IHRvdWNoID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydFRvdWNoOlwiLCB0b3VjaC5pZGVudGlmaWVyKVxyXG4gICAgICAgICAgICBvbmdvaW5nVG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXSA9IHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFplYUVuZ2luZS5WZWMyKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVuZFRvdWNoID0gdG91Y2ggPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgb25nb2luZ1RvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtb3VzZWRvd25fc2M7XHJcbiAgICAgICAgbGV0IG1vdXNlZG93bl9wdDtcclxuICAgICAgICAvLyAkLm9uKHRoaXMuJHN2ZywgJ3RvdWNoc3RhcnQnLCAnLmdyaWQtaGVhZGVyJywgKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4kc3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUb3VjaChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1vdXNlZG93bl90ciA9IFt0aGlzLnRyWzBdLCB0aGlzLnRyWzFdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGlmKChkb3duVGltZSAtIHByZXZEb3duVGltZSkgPCB0aGlzLm9wdGlvbnMuZG91YmxlX2NsaWNrX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEb3VibGUgY2xpY2suXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNyY0VsZW1lbnQgPT0gdGhpcy4kc3ZnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnJhbWVfb25fYm94OlwiLCB0aGlzLmJveClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZV9vbl9ib3godGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuJGRhdGVzUmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gKCh0b3VjaC5jbGllbnRYIC0gdGhpcy50clswXSkgLyB0aGlzLnNjWzBdKS90aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldF9jdXJyZW50X2RhdGUoZGF0ZV91dGlscy5hZGQodGhpcy5nYW50dF9zdGFydCwgZHgqMzAsICdkYXknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMudGltZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4X29uX3N0YXJ0ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc19kcmFnZ2luZ19jdXJyZW50X2RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ZGF0ZV9vbl9zdGFydCA9IHRoaXMuY3VycmVudF9kYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZEb3duVGltZSA9IGRvd25UaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICAgIG1vdXNlZG93bl90ciA9IFt0aGlzLnRyWzBdLCB0aGlzLnRyWzFdXTtcclxuICAgICAgICAgICAgICAgIG1vdXNlZG93bl9zYyA9IFt0aGlzLnNjWzBdLCB0aGlzLnNjWzFdXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQudG91Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VG91Y2goZXZlbnQudG91Y2hlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBvaW50IGluIHRoZSB0cmFuc2Zvcm1lZCBncmFwaC5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaDAgPSB0b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2hEYXRhMCA9IG9uZ29pbmdUb3VjaGVzW3RvdWNoMC5pZGVudGlmaWVyXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoMSA9IHRvdWNoZXNbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaERhdGExID0gb25nb2luZ1RvdWNoZXNbdG91Y2gxLmlkZW50aWZpZXJdO1xyXG4gICAgICAgICAgICAgICAgaWYodG91Y2hEYXRhMCAmJiB0b3VjaERhdGExKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3VjaFN0YXJ0Q2VudGVyID0gdG91Y2hEYXRhMS5wb3MuYWRkKHRvdWNoRGF0YTAucG9zKS5zY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bl9wdCA9IFsodG91Y2hTdGFydENlbnRlci54IC0gdGhpcy50clswXSkgLyB0aGlzLnNjWzBdLCAodG91Y2hTdGFydENlbnRlci55IC0gdGhpcy50clsxXSkgLyB0aGlzLnNjWzFdXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLiRzdmcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcclxuICAgICAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09IDEgJiYgbW92ZU1vZGUgIT09IFwicGFuQW5kWm9vbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaERhdGEgPSBvbmdvaW5nVG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNfZHJhZ2dpbmdfY3VycmVudF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSAoKHRvdWNoLmNsaWVudFggLSB4X29uX3N0YXJ0KSAvIHRoaXMuc2NbMF0pL3RoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRfY3VycmVudF9kYXRlKGRhdGVfdXRpbHMuYWRkKGN1cnJlbnRkYXRlX29uX3N0YXJ0LCBkeCozMCwgJ2RheScpKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRHVyaW5nIGRvdWJsZSB0YXBzIHdlIHNlZW0gdG8gaGF2ZSBubyB0b3VjaCBkYXRhLlxyXG4gICAgICAgICAgICAgICAgaWYoIXRvdWNoRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaFBvcyA9IG5ldyBaZWFFbmdpbmUuVmVjMih0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdWZWMgPSB0b3VjaFBvcy5zdWJ0cmFjdCh0b3VjaERhdGEucG9zKTtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkcmFnVmVjLngpID4gMCAmJiBNYXRoLmFicyhkcmFnVmVjLnkpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCBhbnkgem9vbWluZyB0aGF0IG1pZ2h0IGJlIGhhcHBlbmluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX2ZvY3VzSW50ZXJ2YWxJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX19mb2N1c0ludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZm9jdXNJbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHIgPSBbbW91c2Vkb3duX3RyWzBdICsgZHJhZ1ZlYy54LCBtb3VzZWRvd25fdHJbMV0gKyBkcmFnVmVjLnldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0X3RyYW5zZm9ybSh0ciwgdGhpcy5zYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNfZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW92ZU1vZGUgPSBcInBhblwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoMCA9IHRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaERhdGEwID0gb25nb2luZ1RvdWNoZXNbdG91Y2gwLmlkZW50aWZpZXJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2gxID0gdG91Y2hlc1sxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoRGF0YTEgPSBvbmdvaW5nVG91Y2hlc1t0b3VjaDEuaWRlbnRpZmllcl07XHJcbiAgICAgICAgICAgICAgICBpZighdG91Y2hEYXRhMCB8fCAhdG91Y2hEYXRhMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoU3RhcnRDZW50ZXIgPSB0b3VjaERhdGExLnBvcy5hZGQodG91Y2hEYXRhMC5wb3MpLnNjYWxlKDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2gwUG9zID0gbmV3IFplYUVuZ2luZS5WZWMyKHRvdWNoMC5jbGllbnRYLCB0b3VjaDAuY2xpZW50WSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaDFQb3MgPSBuZXcgWmVhRW5naW5lLlZlYzIodG91Y2gxLmNsaWVudFgsIHRvdWNoMS5jbGllbnRZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoQ2VudGVyID0gdG91Y2gwUG9zLmFkZCh0b3VjaDFQb3MpLnNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnVmVjID0gdG91Y2hDZW50ZXIuc3VidHJhY3QodG91Y2hTdGFydENlbnRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTm93IG1lYXN1cmUgdGhlIHZlY3RvciBiZXR3ZWVuIHRoZSB0b3VjaGVzIHNvIHdlIFxyXG4gICAgICAgICAgICAgICAgLy8gY2FuIHNlZSBob3cgbXVjaCBzY2FsaW5nIHdlIHNob3VsZCBhcHBseSBvbiB4IGFuZCB5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGF0b3JWZWMgPSB0b3VjaERhdGExLnBvcy5zdWJ0cmFjdCh0b3VjaERhdGEwLnBvcyk7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGF0b3JWZWMubm9ybWFsaXplSW5QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9kdWxhdG9yVmVjLnggPSBNYXRoLmFicyhtb2R1bGF0b3JWZWMueCk7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGF0b3JWZWMueSA9IE1hdGguYWJzKG1vZHVsYXRvclZlYy55KTtcclxuICAgICAgICAgICAgICAgIGlmKG1vZHVsYXRvclZlYy54IDwgMC40NSlcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGF0b3JWZWMueCA9IDAuMDtcclxuICAgICAgICAgICAgICAgIGlmKG1vZHVsYXRvclZlYy55IDwgMC40NSlcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGF0b3JWZWMueSA9IDAuMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFNlcGFyYXRpb25YID0gdG91Y2hEYXRhMS5wb3MueCAtIHRvdWNoRGF0YTAucG9zLng7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFNlcGFyYXRpb25ZID0gdG91Y2hEYXRhMS5wb3MueSAtIHRvdWNoRGF0YTAucG9zLnk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnU2VwYXJhdGlvblggPSB0b3VjaDFQb3MueCAtIHRvdWNoMFBvcy54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ1NlcGFyYXRpb25ZID0gdG91Y2gxUG9zLnkgLSB0b3VjaDBQb3MueTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHpvb21YID0gZHJhZ1NlcGFyYXRpb25YIC8gc3RhcnRTZXBhcmF0aW9uWDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHpvb21ZID0gZHJhZ1NlcGFyYXRpb25ZIC8gc3RhcnRTZXBhcmF0aW9uWTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyID0gW21vdXNlZG93bl90clswXSArIGRyYWdWZWMueCwgbW91c2Vkb3duX3RyWzFdICsgZHJhZ1ZlYy55XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHpvb20gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgKCh6b29tWCAqIG1vdXNlZG93bl9zY1swXSkgLSBtb3VzZWRvd25fc2NbMF0pICogbW9kdWxhdG9yVmVjLngsXHJcbiAgICAgICAgICAgICAgICAgICAgKCh6b29tWSAqIG1vdXNlZG93bl9zY1sxXSkgLSBtb3VzZWRvd25fc2NbMV0pICogbW9kdWxhdG9yVmVjLnlcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IFttb3VzZWRvd25fc2NbMF0gKyB6b29tWzBdLCBtb3VzZWRvd25fc2NbMV0gKyB6b29tWzFdXVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRfdHJhbnNmb3JtKHRyLCBzYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwb2ludCBpbiB0aGUgdHJhbnNmb3JtZWQgZ3JhcGguXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwdCA9IFsodG91Y2hDZW50ZXIueCAtIHRyWzBdKSAvIHNjWzBdLCAodG91Y2hDZW50ZXIueSAtIHRyWzFdKSAvIHNjWzFdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZfc2NfdHIgPSBbbW91c2Vkb3duX3B0WzBdICogbW91c2Vkb3duX3NjWzBdLCBtb3VzZWRvd25fcHRbMV0gKiBtb3VzZWRvd25fc2NbMV1dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X3NjX3RyID0gW21vdXNlZG93bl9wdFswXSAqIHNjWzBdLCBtb3VzZWRvd25fcHRbMV0gKiBzY1sxXV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkeHkgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldl9zY190clswXSAtIG5ld19zY190clswXSxcclxuICAgICAgICAgICAgICAgICAgICBwcmV2X3NjX3RyWzFdIC0gbmV3X3NjX3RyWzFdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF90cmFuc2Zvcm0oW3RyWzBdICsgZHh5WzBdLCB0clsxXSArIGR4eVsxXV0sIHNjKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtb3ZlTW9kZSA9IFwicGFuQW5kWm9vbVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuJHN2Zy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRUb3VjaChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRvdWNoKGV2ZW50LnRvdWNoZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdXNlZG93bl90ciA9IFt0aGlzLnRyWzBdLCB0aGlzLnRyWzFdXTtcclxuICAgICAgICAgICAgbW91c2Vkb3duX3NjID0gW3RoaXMuc2NbMF0sIHRoaXMuc2NbMV1dO1xyXG4gICAgICAgICAgICBtb3ZlTW9kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlzX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlzX2RyYWdnaW5nX2N1cnJlbnRfZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLiRzdmcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYmluZF9iYXJfcHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiaW5kX2Jhcl9wcm9ncmVzcygpIHtcclxuICAgIC8vICAgICBsZXQgeF9vbl9zdGFydCA9IDA7XHJcbiAgICAvLyAgICAgbGV0IHlfb25fc3RhcnQgPSAwO1xyXG4gICAgLy8gICAgIGxldCBpc19yZXNpemluZyA9IG51bGw7XHJcbiAgICAvLyAgICAgbGV0IGJhciA9IG51bGw7XHJcbiAgICAvLyAgICAgbGV0ICRiYXJfcHJvZ3Jlc3MgPSBudWxsO1xyXG4gICAgLy8gICAgIGxldCAkYmFyID0gbnVsbDtcclxuXHJcbiAgICAvLyAgICAgJC5vbih0aGlzLiRzdmcsICdtb3VzZWRvd24nLCAnLmhhbmRsZS5wcm9ncmVzcycsIChlLCBoYW5kbGUpID0+IHtcclxuICAgIC8vICAgICAgICAgaXNfcmVzaXppbmcgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB4X29uX3N0YXJ0ID0gZS5vZmZzZXRYO1xyXG4gICAgLy8gICAgICAgICB5X29uX3N0YXJ0ID0gZS5vZmZzZXRZO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgJGJhcl93cmFwcGVyID0gJC5jbG9zZXN0KCcuYmFyLXdyYXBwZXInLCBoYW5kbGUpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBpZCA9ICRiYXJfd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIC8vICAgICAgICAgYmFyID0gdGhpcy5nZXRfYmFyKGlkKTtcclxuXHJcbiAgICAvLyAgICAgICAgICRiYXJfcHJvZ3Jlc3MgPSBiYXIuJGJhcl9wcm9ncmVzcztcclxuICAgIC8vICAgICAgICAgJGJhciA9IGJhci4kYmFyO1xyXG5cclxuICAgIC8vICAgICAgICAgJGJhcl9wcm9ncmVzcy5maW5hbGR4ID0gMDtcclxuICAgIC8vICAgICAgICAgJGJhcl9wcm9ncmVzcy5vd2lkdGggPSAkYmFyX3Byb2dyZXNzLmdldFdpZHRoKCk7XHJcbiAgICAvLyAgICAgICAgICRiYXJfcHJvZ3Jlc3MubWluX2R4ID0gLSRiYXJfcHJvZ3Jlc3MuZ2V0V2lkdGgoKTtcclxuICAgIC8vICAgICAgICAgJGJhcl9wcm9ncmVzcy5tYXhfZHggPSAkYmFyLmdldFdpZHRoKCkgLSAkYmFyX3Byb2dyZXNzLmdldFdpZHRoKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICQub24odGhpcy4kc3ZnLCAnbW91c2Vtb3ZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICghaXNfcmVzaXppbmcpIHJldHVybjtcclxuICAgIC8vICAgICAgICAgbGV0IGR4ID0gZS5vZmZzZXRYIC0geF9vbl9zdGFydDtcclxuICAgIC8vICAgICAgICAgbGV0IGR5ID0gZS5vZmZzZXRZIC0geV9vbl9zdGFydDtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChkeCA+ICRiYXJfcHJvZ3Jlc3MubWF4X2R4KSB7XHJcbiAgICAvLyAgICAgICAgICAgICBkeCA9ICRiYXJfcHJvZ3Jlc3MubWF4X2R4O1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGlmIChkeCA8ICRiYXJfcHJvZ3Jlc3MubWluX2R4KSB7XHJcbiAgICAvLyAgICAgICAgICAgICBkeCA9ICRiYXJfcHJvZ3Jlc3MubWluX2R4O1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zdCAkaGFuZGxlID0gYmFyLiRoYW5kbGVfcHJvZ3Jlc3M7XHJcbiAgICAvLyAgICAgICAgICQuYXR0cigkYmFyX3Byb2dyZXNzLCAnd2lkdGgnLCAkYmFyX3Byb2dyZXNzLm93aWR0aCArIGR4KTtcclxuICAgIC8vICAgICAgICAgJC5hdHRyKCRoYW5kbGUsICdwb2ludHMnLCBiYXIuZ2V0X3Byb2dyZXNzX3BvbHlnb25fcG9pbnRzKCkpO1xyXG4gICAgLy8gICAgICAgICAkYmFyX3Byb2dyZXNzLmZpbmFsZHggPSBkeDtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgJC5vbih0aGlzLiRzdmcsICdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpc19yZXNpemluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBpZiAoISgkYmFyX3Byb2dyZXNzICYmICRiYXJfcHJvZ3Jlc3MuZmluYWxkeCkpIHJldHVybjtcclxuICAgIC8vICAgICAgICAgYmFyLnByb2dyZXNzX2NoYW5nZWQoKTtcclxuICAgIC8vICAgICAgICAgYmFyLnNldF9hY3Rpb25fY29tcGxldGVkKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0X2FsbF9kZXBlbmRlbnRfdGFza3ModGFza19pZCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICBsZXQgdG9fcHJvY2VzcyA9IFt0YXNrX2lkXTtcclxuICAgICAgICB3aGlsZSAodG9fcHJvY2Vzcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVwcyA9IHRvX3Byb2Nlc3MucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYyA9IGFjYy5jb25jYXQodGhpcy5kZXBlbmRlbmN5X21hcFtjdXJyXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgICAgICBvdXQgPSBvdXQuY29uY2F0KGRlcHMpO1xyXG4gICAgICAgICAgICB0b19wcm9jZXNzID0gZGVwcy5maWx0ZXIoZCA9PiAhdG9fcHJvY2Vzcy5pbmNsdWRlcyhkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0LmZpbHRlcihCb29sZWFuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRfc25hcF9wb3NpdGlvbihkeCkge1xyXG4gICAgICAgIGxldCBvZHggPSBkeCxcclxuICAgICAgICAgICAgcmVtLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld19pcygnV2VlaycpKSB7XHJcbiAgICAgICAgICAgIHJlbSA9IGR4ICUgKHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGggLyA3KTtcclxuICAgICAgICAgICAgcG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgb2R4IC1cclxuICAgICAgICAgICAgICAgIHJlbSArXHJcbiAgICAgICAgICAgICAgICAocmVtIDwgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDE0XHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoIC8gNyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdfaXMoJ01vbnRoJykpIHtcclxuICAgICAgICAgICAgcmVtID0gZHggJSAodGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDMwKTtcclxuICAgICAgICAgICAgcG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgb2R4IC1cclxuICAgICAgICAgICAgICAgIHJlbSArXHJcbiAgICAgICAgICAgICAgICAocmVtIDwgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDYwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMuY29sdW1uX3dpZHRoIC8gMzApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbSA9IGR4ICUgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aDtcclxuICAgICAgICAgICAgcG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgb2R4IC1cclxuICAgICAgICAgICAgICAgIHJlbSArXHJcbiAgICAgICAgICAgICAgICAocmVtIDwgdGhpcy5vcHRpb25zLmNvbHVtbl93aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy5jb2x1bW5fd2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdW5zZWxlY3RfYWxsKCkge1xyXG4gICAgICAgIFsuLi50aGlzLiRzdmcucXVlcnlTZWxlY3RvckFsbCgnLmJhci13cmFwcGVyJyldLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2aWV3X2lzKG1vZGVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52aWV3X21vZGUgPT09IG1vZGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2Rlcy5zb21lKG1vZGUgPT4gdGhpcy5vcHRpb25zLnZpZXdfbW9kZSA9PT0gbW9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X3Rhc2soaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZS50YXNrcy5maW5kKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFzay5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X2JhcihpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhcnMuZmluZChiYXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFyLnRhc2suaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dfcG9wdXAob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cF93cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmN1c3RvbV9wb3B1cF9odG1sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wdXAuc2hvdyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlX3BvcHVwKCkge1xyXG4gICAgICAgIHRoaXMucG9wdXAgJiYgdGhpcy5wb3B1cC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcl9ldmVudChldmVudCwgYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ29uXycgKyBldmVudF0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zWydvbl8nICsgZXZlbnRdLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9sZGVzdCBzdGFydGluZyBkYXRlIGZyb20gdGhlIGxpc3Qgb2YgdGFza3NcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBEYXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgU2NlZFxyXG4gICAgICovXHJcbiAgICBnZXRfb2xkZXN0X3N0YXJ0aW5nX2RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUudGFza3NcclxuICAgICAgICAgICAgLm1hcCh0YXNrID0+IHRhc2suc3RhcnQpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAocHJldl9kYXRlLCBjdXJfZGF0ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBjdXJfZGF0ZSA8PSBwcmV2X2RhdGUgPyBjdXJfZGF0ZSA6IHByZXZfZGF0ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYWxsIGVsZW1lbnRzIGZyb20gdGhlIHBhcmVudCBzdmcgZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBTY2VkXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuJHN2Zy5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVfaWQodGFzaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB0YXNrLm5hbWUgK1xyXG4gICAgICAgICdfJyArXHJcbiAgICAgICAgTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgICAgIC5zbGljZSgyLCAxMilcclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==