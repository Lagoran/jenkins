/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([65,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window_handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var window_handle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window_handle__WEBPACK_IMPORTED_MODULE_1__);


var timestamp = new Date().getTime();
var loadedClass = 'jenkins-loaded-' + timestamp;
/**
 * Wait for the specified element to be added to the DOM.
 * <p>
 * A jQuery based alternative to Behaviour.specify. Grrrr.
 * @param selector The jQuery selector.
 * @param callback The callback to call after finding new elements. This
 * callback must return a boolean value of true if scanning is to continue.
 * @param contextEl The jQuery selector context (optional).
 */

function onload(selector, callback, contextEl) {
  function registerRescan() {
    setTimeout(scan, 50);
  }

  function scan() {
    var elements = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector, contextEl).not(loadedClass);

    if (elements.length > 0) {
      elements.addClass(loadedClass);

      if (callback(elements) === true) {
        registerRescan();
      }
    } else {
      registerRescan();
    }
  }

  scan();
}

function winScrollTop() {
  var win = jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(window_handle__WEBPACK_IMPORTED_MODULE_1__["getWindow"])());
  return win.scrollTop();
}

function onWinScroll(callback) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(Object(window_handle__WEBPACK_IMPORTED_MODULE_1__["getWindow"])()).on('scroll', callback);
}

function pageHeaderHeight() {
  return elementHeight('#page-header') + breadcrumbBarHeight();
}

function breadcrumbBarHeight() {
  return elementHeight('#breadcrumbBar');
}

function removeTextHighlighting(selector) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('span.highlight-split', selector).each(function () {
    var highlightSplit = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    highlightSplit.before(highlightSplit.text());
    highlightSplit.remove();
  });
}

function elementHeight(selector) {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).height();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  onload,
  winScrollTop,
  onWinScroll,
  pageHeaderHeight,
  breadcrumbBarHeight,
  removeTextHighlighting
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/window-handle/index.js
var window_handle = __webpack_require__(1);

// CONCATENATED MODULE: ./src/main/js/util/localStorage.js

let storage = Object(window_handle["getWindow"])().localStorage;

function setMock() {
  storage = {
    storage: {},
    setItem: function (name, value) {
      this.storage[name] = value;
    },
    getItem: function (name) {
      return this.storage[name];
    },
    removeItem: function (name) {
      delete this.storage[name];
    }
  };
}

function setItem(name, value) {
  storage.setItem(name, value);
}

function getItem(name, defaultVal) {
  var value = storage.getItem(name);

  if (!value) {
    value = defaultVal;
  }

  return value;
}

function removeItem(name) {
  return storage.removeItem(name);
}

if (typeof storage === "undefined") {
  console.warn('HTML5 localStorage not supported by this browser.'); // mock it...

  setMock();
}

/* harmony default export */ var localStorage = ({
  setMock,
  setItem,
  getItem,
  removeItem
});
// CONCATENATED MODULE: ./src/main/js/util/jenkinsLocalStorage.js


/** 
 * Store a Jenkins globally scoped value.
 */

function setGlobalItem(name, value) {
  localStorage.setItem('jenkins:' + name, value);
}
/** 
 * Get a Jenkins globally scoped value.
 */


function getGlobalItem(name, defaultVal) {
  return localStorage.getItem('jenkins:' + name, defaultVal);
}
/** 
 * Store a Jenkins page scoped value.
 */


function setPageItem(name, value) {
  name = 'jenkins:' + name + ':' + Object(window_handle["getWindow"])().location.href;
  localStorage.setItem(name, value);
}
/** 
 * Get a Jenkins page scoped value.
 */


function getPageItem(name, defaultVal) {
  name = 'jenkins:' + name + ':' + Object(window_handle["getWindow"])().location.href;
  return localStorage.getItem(name, defaultVal);
}

/* harmony default export */ var jenkinsLocalStorage = __webpack_exports__["a"] = ({
  setGlobalItem,
  getGlobalItem,
  setPageItem,
  getPageItem
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
module.exports = __webpack_require__(67);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_jenkinsLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _util_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _widgets_config_tabbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




const tabs = []; // Useful for testing.

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  _widgets_config_tabbar__WEBPACK_IMPORTED_MODULE_3__[/* addPageTabs */ "b"]('.config-table.tabbed', function (tabBar) {
    tabs.push(tabBar); // We want to merge some sections together.
    // Merge the "Advanced" section into the "General" section.

    var generalSection = tabBar.getSection('config_general');

    if (generalSection) {
      generalSection.adoptSection('config_advanced_project_options');
    }

    _widgets_config_tabbar__WEBPACK_IMPORTED_MODULE_3__[/* addFinderToggle */ "a"](tabBar);

    if (tabBar.hasSections()) {
      var tabBarLastSectionKey = 'config:' + tabBar.configForm.attr('name') + ':last-tab';
      var tabBarLastSection = _util_jenkinsLocalStorage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getPageItem(tabBarLastSectionKey, tabBar.sections[0].id);
      tabBar.onShowSection(function () {
        _util_jenkinsLocalStorage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].setPageItem(tabBarLastSectionKey, this.id);
      });
      tabBar.showSection(tabBarLastSection);
    }
  });
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(68);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ addPageTabs; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addFinderToggle; });

// UNUSED EXPORTS: tabBarShowPreferenceKey, addTabsOnFirst, addTabs, addTabsActivator

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/window-handle/index.js
var window_handle = __webpack_require__(1);
var window_handle_default = /*#__PURE__*/__webpack_require__.n(window_handle);

// EXTERNAL MODULE: ./src/main/js/util/page.js
var page = __webpack_require__(4);

// CONCATENATED MODULE: ./src/main/js/util/jquery-ext.js
/*
 * Some internal jQuery extensions.
 *
 * After migrating to webpack it modifies the provided version of jquery
 */


/**
 * TODO: look into other way of doing this
 */

var $ext;
var getJQuery = function () {
  if (!$ext) {
    initJQueryExt();
  }

  return $ext;
};
/*
 * Clear the $ext instance if the window changes. Primarily for unit testing.
 */

window_handle_default.a.getWindow(function () {
  $ext = undefined;
});
/**
 * Adds the :containsci selector to jQuery
 */

function initJQueryExt() {
  $ext = jquery_default.a;
  /**
   * A pseudo selector that performs a case insensitive text contains search i.e. the same
   * as the standard ':contains' selector, but case insensitive.
   */

  $ext.expr[":"].containsci = $ext.expr.createPseudo(function (text) {
    return function (element) {
      var elementText = $ext(element).text();
      var result = elementText.toUpperCase().indexOf(text.toUpperCase()) !== -1;
      return result;
    };
  });
}

initJQueryExt();
// CONCATENATED MODULE: ./src/main/js/widgets/config/model/util.js
function toId(string) {
  string = string.trim();
  return 'config_' + string.replace(/[\W_]+/g, '_').toLowerCase();
}
// CONCATENATED MODULE: ./src/main/js/widgets/config/model/ConfigRowGrouping.js

/*
 * =======================================================================================
 * Configuration table row grouping i.e. row-set-*, optional-block-*, radio-block-* etc
 *
 * A ConfigSection maintains a list of ConfigRowGrouping and then ConfigRowGrouping
 * itself maintains a list i.e. it's hierarchical. See ConfigSection.gatherRowGroups().
 * =======================================================================================
 */

function ConfigRowGrouping(startRow, parentRowGroupContainer) {
  this.startRow = startRow;
  this.parentRowGroupContainer = parentRowGroupContainer;
  this.endRow = undefined;
  this.rows = [];
  this.rowGroups = []; // Support groupings nested inside groupings

  this.toggleWidget = undefined;
  this.label = undefined;
}

ConfigRowGrouping.prototype.getRowCount = function (includeChildren) {
  var count = this.rows.length;

  if (includeChildren === undefined || includeChildren === true) {
    for (var i = 0; i < this.rowGroups.length; i++) {
      count += this.rowGroups[i].getRowCount();
    }
  }

  return count;
};

ConfigRowGrouping.prototype.getLabels = function () {
  var labels = [];

  if (this.label) {
    labels.push(this.label);
  }

  for (var i = 0; i < this.rowGroups.length; i++) {
    var rowSet = this.rowGroups[i];
    labels.push(rowSet.getLabels());
  }

  return labels;
};

ConfigRowGrouping.prototype.updateVisibility = function () {
  if (this.toggleWidget !== undefined) {
    var isChecked = this.toggleWidget.is(':checked');

    for (var i = 0; i < this.rows.length; i++) {
      if (isChecked) {
        this.rows[i].show();
      } else {
        this.rows[i].not('.help-area').hide();
      }
    }
  }

  for (var ii = 0; ii < this.rowGroups.length; ii++) {
    var rowSet = this.rowGroups[ii];
    rowSet.updateVisibility();
  }
};
/*
 * Find the row-set toggle widget i.e. the input element that indicates that
 * the row-set rows should be made visible or not.
 */


ConfigRowGrouping.prototype.findToggleWidget = function (row) {
  var $ = getJQuery();
  var input = $(':input.block-control', row);

  if (input.length === 1) {
    this.toggleWidget = input;
    this.label = input.next().text();
    input.addClass('disable-behavior');
  }
};

/* harmony default export */ var model_ConfigRowGrouping = (ConfigRowGrouping);
// CONCATENATED MODULE: ./src/main/js/widgets/config/model/ConfigSection.js




var pageHeaderHeight = page["a" /* default */].pageHeaderHeight();
/*
 * =======================================================================================
 * Configuration table section.
 * =======================================================================================
 */

function ConfigSection(headerRow, parentCMD) {
  this.headerRow = headerRow;
  this.parentCMD = parentCMD;
  this.title = headerRow.attr('title');
  this.id = toId(this.title);
  this.rowGroups = undefined;
  this.activator = undefined;
  this.subSections = [];
  this.headerRow.addClass(this.id);
}

ConfigSection.prototype.isTopLevelSection = function () {
  return this.parentCMD.getSection(this.id) !== undefined;
};

ConfigSection.prototype.isVisible = function () {
  return this.headerRow.is(':visible');
};
/**
 * Get the page offset (height) at which this section comes
 * into view.
 * @returns {number}
 */


ConfigSection.prototype.getViewportEntryOffset = function () {
  return this.headerRow.offset().top - pageHeaderHeight;
};
/**
 * Get the sibling section at the relative offset.
 * @param relOffset
 */


ConfigSection.prototype.getSibling = function (relOffset) {
  var sections = this.parentCMD.sections;
  var endIndex = sections.length - 1;

  for (var i = 0; i < endIndex; i++) {
    var testIndex = i + relOffset;

    if (testIndex < 0) {
      continue;
    } else if (testIndex > endIndex) {
      return undefined;
    }

    if (sections[i] === this) {
      return sections[testIndex];
    }
  }

  return undefined;
};
/**
 * Move another top-level section into this section i.e. adopt it.
 * <p>
 * This allows us to take a top level section (by id) and push it down
 * into another section e.g. pushing the "Advanced" section into the
 * "General" section.
 * @param sectionId The id of the top-level section to be adopted.
 */


ConfigSection.prototype.adoptSection = function (sectionId) {
  if (!this.isTopLevelSection()) {
    // Only top-level sections can adopt.
    return;
  }

  var child = this.parentCMD.getSection(sectionId);

  if (child && this.parentCMD.removeSection(child.id)) {
    this.subSections.push(child);
  }
};
/*
 * Get the section rows.
 */


ConfigSection.prototype.getRows = function () {
  var curTr = this.headerRow.next();
  var rows = [];
  var numNewRows = 0;
  rows.push(curTr);

  while (curTr.length === 1 && !curTr.hasClass('section-header-row')) {
    rows.push(curTr);

    if (!curTr.hasClass(this.id)) {
      numNewRows++;
      curTr.addClass(this.id);
    }

    curTr = curTr.next();
  }

  if (numNewRows > 0) {
    // We have new rows in the section ... reset cached info.
    if (this.rowGroups !== undefined) {
      this.gatherRowGroups(rows);
    }
  }

  return rows;
};
/*
 * Set the element (jquery) that activates the section (on click).
 */


ConfigSection.prototype.setActivator = function (activator) {
  this.activator = activator;
  var section = this;
  section.activator.click(function () {
    section.parentCMD.showSection(section);
  });
};

ConfigSection.prototype.activate = function () {
  if (this.activator) {
    this.activator.click();
  } else {
    console.warn('No activator attached to config section object.');
  }
};

ConfigSection.prototype.markAsActive = function () {
  this.parentCMD.hideSection();
  this.activator.addClass('active');
  this.markRowsAsActive();
};

ConfigSection.prototype.markRowsAsActive = function () {
  var rows = this.getRows();

  for (var i = 0; i < rows.length; i++) {
    rows[i].addClass('active');
  }

  for (var ii = 0; ii < this.subSections.length; ii++) {
    this.subSections[ii].markRowsAsActive();
  }

  this.updateRowGroupVisibility();
};

ConfigSection.prototype.hasText = function (text) {
  var $ = getJQuery();
  var selector = ":containsci('" + text + "')";
  var sectionRows = this.getRows();

  for (var i1 = 0; i1 < sectionRows.length; i1++) {
    var row = sectionRows[i1];
    var elementsWithText = $(selector, row);

    if (elementsWithText.length > 0) {
      return true;
    }
  }

  for (var i2 = 0; i2 < this.subSections.length; i2++) {
    if (this.subSections[i2].hasText(text)) {
      return true;
    }
  }

  return false;
};

ConfigSection.prototype.activeRowCount = function () {
  var activeRowCount = 0;
  var rows = this.getRows();

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].hasClass('active')) {
      activeRowCount++;
    }
  }

  return activeRowCount;
};

ConfigSection.prototype.updateRowGroupVisibility = function () {
  if (this.rowGroups === undefined) {
    // Lazily gather row grouping information.
    this.gatherRowGroups();
  }

  for (var i = 0; i < this.rowGroups.length; i++) {
    var rowGroup = this.rowGroups[i];
    rowGroup.updateVisibility();
  }

  for (var ii = 0; ii < this.subSections.length; ii++) {
    this.subSections[ii].updateRowGroupVisibility();
  }
};

ConfigSection.prototype.gatherRowGroups = function (rows) {
  this.rowGroups = []; // Only tracking row-sets that are bounded by 'row-set-start' and 'row-set-end' (for now).
  // Also, only capturing the rows after the 'block-control' input (checkbox, radio etc)
  // and before the 'row-set-end'.
  // TODO: Find out how these actually work. It seems like they can be nested into a hierarchy :(
  // Also seems like you can have these "optional-block" thingies which are not wrapped
  // in 'row-set-start' etc. Grrrrrr :(

  if (rows === undefined) {
    rows = this.getRows();
  }

  if (rows.length > 0) {
    // Create a top level "fake" ConfigRowGrouping just to capture
    // the top level groupings. We copy the rowGroups info out
    // of this and use it in the top "this" ConfigSection instance. 
    var rowGroupContainer = new model_ConfigRowGrouping(rows[0], undefined);
    this.rowGroups = rowGroupContainer.rowGroups;

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];

      if (row.hasClass('row-group-start')) {
        var newRowGroup = new model_ConfigRowGrouping(row, rowGroupContainer);

        if (rowGroupContainer) {
          rowGroupContainer.rowGroups.push(newRowGroup);
        }

        rowGroupContainer = newRowGroup;
        newRowGroup.findToggleWidget(row);
      } else if (rowGroupContainer) {
        if (row.hasClass('row-group-end')) {
          rowGroupContainer.endRow = row;
          rowGroupContainer = rowGroupContainer.parentRowGroupContainer; // pop back off the "stack"
        } else if (rowGroupContainer.toggleWidget === undefined) {
          rowGroupContainer.findToggleWidget(row);
        } else {
          // we have the toggleWidget, which means that this row is
          // one of the rows after that row and is one of the rows that's
          // subject to being made visible/hidden when the input is
          // checked or unchecked.
          rowGroupContainer.rows.push(row);
        }
      }
    }
  }
};

ConfigSection.prototype.getRowGroupLabels = function () {
  var labels = [];

  for (var i = 0; i < this.rowGroups.length; i++) {
    var rowGroup = this.rowGroups[i];
    labels.push(rowGroup.getLabels());
  }

  return labels;
};

ConfigSection.prototype.highlightText = function (text) {
  var $ = getJQuery();
  var selector = ":containsci('" + text + "')";
  var rows = this.getRows();

  for (var i1 = 0; i1 < rows.length; i1++) {
    var row = rows[i1];
    page["a" /* default */].removeTextHighlighting(row);

    if (text !== '') {
      var regex = new RegExp('(' + text + ')', "gi");
      /*jshint loopfunc: true */

      $(selector, row).find(':not(:input)').each(function () {
        var $this = $(this);
        $this.contents().each(function () {
          // We specifically only mess with text nodes
          if (this.nodeType === 3) {
            var $textNode = $(this);
            var highlightedMarkup = $textNode.text().replace(regex, '<span class="highlight">$1</span>');
            $textNode.replaceWith('<span class="highlight-split">' + highlightedMarkup + '</span>');
          }
        });
      });
    }
  }

  for (var i2 = 0; i2 < this.subSections.length; i2++) {
    this.subSections[i2].highlightText(text);
  }
};

/* harmony default export */ var model_ConfigSection = (ConfigSection);
// CONCATENATED MODULE: ./src/main/js/widgets/config/model/ConfigTableMetaData.js




/*
 * Internal support module for config tables.
 */

function markConfigTableParentForm(configTable) {
  var form = configTable.closest('form');
  form.addClass('jenkins-config');
  return form;
}

function findConfigTables() {
  var $ = getJQuery(); // The config tables are the immediate child <div> elements of <form> elements
  // with a name of "config"?

  return $('form[name="config"] > div');
}

function closestTR(node) {
  return node.closest('tr, .tr');
}

function fromConfigTable(configTable) {
  var $ = getJQuery();
  var sectionHeaders = $('.jenkins-section__title', configTable);
  var configForm = markConfigTableParentForm(configTable); // Mark the ancestor <tr>s of the section headers and add a title

  sectionHeaders.each(function () {
    var sectionHeader = $(this);
    var sectionRow = sectionHeader;
    var sectionTitle = sectionRow.text(); // Remove leading hash from accumulated text in title (from <a> element).

    if (sectionTitle.indexOf('#') === 0) {
      sectionTitle = sectionTitle.substring(1);
    }

    sectionRow.addClass('section-header-row');
    sectionRow.attr('title', sectionTitle);
  });
  var configTableMetadata = new ConfigTableMetaData(configForm, configTable);
  var topRows = configTableMetadata.getTopRows();
  var firstRow = configTableMetadata.getFirstRow();
  var curSection; // The first set of rows don't have a 'section-header-row', so we manufacture one,
  // calling it a "General" section. We do this by marking the first row in the table.
  // See the next block of code.

  if (!firstRow.hasClass('section-header-row')) {
    var tr;

    if (configTable[0].nodeName === 'TR') {
      tr = 'tr';
    } else {
      tr = 'div';
    }

    var generalRow = $('<' + tr + ' class="section-header-row insert first tr" title="General"><div class="jenkins-section__title"><a class="section-anchor">#</a>General</div></' + tr + '>');
    firstRow.before(generalRow);
    firstRow = configTableMetadata.getFirstRow();
    var newArray = $.makeArray(topRows);
    newArray.unshift(generalRow[0]);
    topRows = $(newArray);
  }

  firstRow.addClass('section-header-row');
  firstRow.attr('title', "General"); // Go through the top level <tr> elements (immediately inside the <tbody>)
  // and group the related <tr>s based on the "section-header-row", using a "normalized"
  // version of the section title as the section id.

  topRows.each(function () {
    var tr = $(this);

    if (tr.hasClass('section-header-row')) {
      // a new section
      curSection = new model_ConfigSection(tr, configTableMetadata);
      configTableMetadata.sections.push(curSection);
    }
  });
  var buttonsRow = closestTR($('#bottom-sticker', configTable));
  buttonsRow.removeClass(curSection.id);
  buttonsRow.addClass(toId('buttons'));
  return configTableMetadata;
}
/*
 * =======================================================================================
 * ConfigTable MetaData class.
 * =======================================================================================
 */


function ConfigTableMetaData(configForm, configTable) {
  this.$ = getJQuery();
  this.configForm = configForm;
  this.configTable = configTable;
  this.configTableBody = configTable[0].nodeName === 'DIV' ? configTable : this.$('> tbody', configTable);
  this.activatorContainer = undefined;
  this.sections = [];
  this.findInput = undefined;
  this.showListeners = [];
  this.configWidgets = undefined;
  this.addWidgetsContainer();
  this.addFindWidget();
}

ConfigTableMetaData.prototype.getTopRows = function () {
  var topRows = this.configTableBody.find('tr, .tr, .jenkins-section > .jenkins-section__title');
  return topRows;
};

ConfigTableMetaData.prototype.getFirstRow = function () {
  return this.getTopRows().first();
};

ConfigTableMetaData.prototype.addWidgetsContainer = function () {
  var $ = getJQuery();
  this.configWidgets = $('<div class="jenkins-config-widgets"></div>');
  this.configWidgets.insertBefore(this.configForm);
};

ConfigTableMetaData.prototype.addFindWidget = function () {
  var $ = getJQuery();
  var thisTMD = this;
  var findWidget = $('<div class="find-container"><div class="find"><span title="Clear" class="clear">x</span><input placeholder="find"/></div></div>');
  thisTMD.findInput = $('input', findWidget); // Add the find text clearer

  $('.clear', findWidget).click(function () {
    thisTMD.findInput.val('');
    thisTMD.showSections('');
    thisTMD.findInput.focus();
  });
  var findTimeout;
  thisTMD.findInput.keydown(function () {
    if (findTimeout) {
      clearTimeout(findTimeout);
      findTimeout = undefined;
    }

    findTimeout = setTimeout(function () {
      findTimeout = undefined;
      thisTMD.showSections(thisTMD.findInput.val());
    }, 300);
  });
  this.configWidgets.append(findWidget);
};

ConfigTableMetaData.prototype.sectionCount = function () {
  return this.sections.length;
};

ConfigTableMetaData.prototype.hasSections = function () {
  var hasSections = this.sectionCount() > 0;

  if (!hasSections) {
    console.warn('Jenkins configuration without sections?');
  }

  return hasSections;
};

ConfigTableMetaData.prototype.sectionIds = function () {
  var sectionIds = [];

  for (var i = 0; i < this.sections.length; i++) {
    sectionIds.push(this.sections[i].id);
  }

  return sectionIds;
};

ConfigTableMetaData.prototype.activateSection = function (sectionId) {
  if (!sectionId) {
    throw 'Invalid section id "' + sectionId + '"';
  }

  var section = this.getSection(sectionId);

  if (section) {
    section.activate();
  }
};

ConfigTableMetaData.prototype.activeSection = function () {
  if (this.hasSections()) {
    for (var i = 0; i < this.sections.length; i++) {
      var section = this.sections[i];

      if (section.activator.hasClass('active')) {
        return section;
      }
    }
  }
};

ConfigTableMetaData.prototype.getSection = function (ref) {
  if (this.hasSections()) {
    if (typeof ref === 'number') {
      // It's a section index...
      if (ref >= 0 && ref <= this.sections.length - 1) {
        return this.sections[ref];
      }
    } else {
      // It's a section ID...
      for (var i = 0; i < this.sections.length; i++) {
        var section = this.sections[i];

        if (section.id === ref) {
          return section;
        }
      }
    }
  }

  return undefined;
};

ConfigTableMetaData.prototype.removeSection = function (sectionId) {
  if (this.hasSections()) {
    for (var i = 0; i < this.sections.length; i++) {
      var section = this.sections[i];

      if (section.id === sectionId) {
        this.sections.splice(i, 1);

        if (section.activator) {
          section.activator.remove();
        }

        return true;
      }
    }
  }

  return false;
};

ConfigTableMetaData.prototype.activateFirstSection = function () {
  if (this.hasSections()) {
    this.activateSection(this.sections[0].id);
  }
};

ConfigTableMetaData.prototype.activeSectionCount = function () {
  var activeSectionCount = 0;

  if (this.hasSections()) {
    for (var i = 0; i < this.sections.length; i++) {
      var section = this.sections[i];

      if (section.activator.hasClass('active')) {
        activeSectionCount++;
      }
    }
  }

  return activeSectionCount;
};

ConfigTableMetaData.prototype.showSection = function (section) {
  if (typeof section === 'string') {
    section = this.getSection(section);
  }

  if (section) {
    var topRows = this.getTopRows(); // Active the specified section

    section.markAsActive(); // and always show the buttons

    topRows.filter('.config_buttons').show(); // Update text highlighting

    section.highlightText(this.findInput.val());
    fireListeners(this.showListeners, section);
  }
};

ConfigTableMetaData.prototype.hideSection = function () {
  var topRows = this.getTopRows();
  var $ = getJQuery();
  $('.config-section-activator.active', this.activatorContainer).removeClass('active');
  topRows.filter('.active').removeClass('active');
};

ConfigTableMetaData.prototype.onShowSection = function (listener) {
  this.showListeners.push(listener);
};

ConfigTableMetaData.prototype.showSections = function (withText) {
  this.removeTextHighlighting();

  if (withText === '') {
    if (this.hasSections()) {
      for (var i1 = 0; i1 < this.sections.length; i1++) {
        this.sections[i1].activator.removeClass('hidden');
      }

      var activeSection = this.activeSection();

      if (!activeSection) {
        this.showSection(this.sections[0]);
      } else {
        activeSection.highlightText(this.findInput.val());
      }
    }
  } else {
    if (this.hasSections()) {
      var sectionsWithText = [];

      for (var i2 = 0; i2 < this.sections.length; i2++) {
        var section = this.sections[i2];

        if (section.hasText(withText)) {
          section.activator.removeClass('hidden');
          sectionsWithText.push(section);
        } else {
          section.activator.addClass('hidden');
        }
      } // Select the first section to contain the text.


      if (sectionsWithText.length > 0) {
        this.showSection(sectionsWithText[0]);
      } else {
        this.hideSection();
      }
    }
  }
};
/**
 * We need this because sections can mysteriously change visibility,
 * which looks strange for scroolspy.
 */


ConfigTableMetaData.prototype.trackSectionVisibility = function () {
  if (isTestEnv()) {
    return;
  }

  var thisConfig = this;

  try {
    for (var i = 0; i < this.sections.length; i++) {
      var section = this.sections[i];

      if (section.isVisible()) {
        section.activator.show();
      } else {
        section.activator.hide();
      }
    }
  } finally {
    var interval = thisConfig.trackSectionVisibilityTO || 0; // The rescan interval will drop off over time, starting out very fast.

    interval += 10;
    interval = Math.min(interval, 500);
    thisConfig.trackSectionVisibilityTO = interval;
    setTimeout(function () {
      thisConfig.trackSectionVisibility();
    }, interval);
  }
};

ConfigTableMetaData.prototype.removeTextHighlighting = function () {
  page["a" /* default */].removeTextHighlighting(this.configForm);
};

function fireListeners(listeners, contextObject) {
  for (var i = 0; i < listeners.length; i++) {
    fireListener(listeners[i], contextObject);
  }

  function fireListener(listener, contextObject) {
    setTimeout(function () {
      listener.call(contextObject);
    }, 1);
  }
}

function isTestEnv() {
  if (window === undefined) {
    return true;
  } else if (window.navigator === undefined) {
    return true;
  } else if (window.navigator.userAgent === undefined) {
    return true;
  } else if (window.navigator.userAgent === 'JasmineTest') {
    return true;
  } else if (window.navigator.userAgent === 'JenkinsTest') {
    return true;
  } else if (window.navigator.userAgent.toLowerCase().indexOf("jsdom") !== -1) {
    return true;
  }

  return false;
}

/* harmony default export */ var model_ConfigTableMetaData = ({
  markConfigTableParentForm,
  findConfigTables,
  fromConfigTable
});
// EXTERNAL MODULE: ./src/main/js/util/jenkinsLocalStorage.js + 1 modules
var jenkinsLocalStorage = __webpack_require__(6);

// CONCATENATED MODULE: ./src/main/js/widgets/config/tabbar.js





var tabBarShowPreferenceKey = 'config:usetabs';
var addPageTabs = function (configSelector, onEachConfigTable, options) {
  jquery_default()(function () {
    // We need to wait until after radioBlock.js Behaviour.js rules
    // have been applied, otherwise row-set rows become visible across sections.
    page["a" /* default */].onload('.block-control', function () {
      // Only do job configs for now.
      var configTables = jquery_default()(configSelector);

      if (configTables.length > 0) {
        var tabBarShowPreference = jenkinsLocalStorage["a" /* default */].getGlobalItem(tabBarShowPreferenceKey, "yes");

        if (tabBarShowPreference === "yes") {
          configTables.each(function () {
            var configTable = jquery_default()(this);
            var tabBar = addTabs(configTable, options);
            onEachConfigTable.call(configTable, tabBar);
            tabBar.deactivator.click(function () {
              jenkinsLocalStorage["a" /* default */].setGlobalItem(tabBarShowPreferenceKey, "no");
              Object(window_handle["getWindow"])().location.reload();
            });
          });
        } else {
          configTables.each(function () {
            var configTable = jquery_default()(this);
            var activator = addTabsActivator(configTable);
            model_ConfigTableMetaData.markConfigTableParentForm(configTable);
            activator.click(function () {
              jenkinsLocalStorage["a" /* default */].setGlobalItem(tabBarShowPreferenceKey, "yes");
              Object(window_handle["getWindow"])().location.reload();
            });
          });
        }
      }
    }, configSelector);
  });
};
var addTabsOnFirst = function () {
  return addTabs(model_ConfigTableMetaData.findConfigTables().first());
};
var addTabs = function (configTable, options) {
  var configTableMetadata;
  var tabOptions = options || {};
  var trackSectionVisibility = tabOptions.trackSectionVisibility || false;

  if (jquery_default.a.isArray(configTable)) {
    // It's a config <table> metadata block
    configTableMetadata = configTable;
  } else if (typeof configTable === 'string') {
    // It's a config <table> selector
    var configTableEl = jquery_default()(configTable);

    if (configTableEl.length === 0) {
      throw "No config table found using selector '" + configTable + "'";
    } else {
      configTableMetadata = model_ConfigTableMetaData.fromConfigTable(configTableEl);
    }
  } else {
    // It's a config <table> element
    configTableMetadata = model_ConfigTableMetaData.fromConfigTable(configTable);
  }

  var tabBar = jquery_default()('<div class="tabBar config-section-activators"></div>');
  configTableMetadata.activatorContainer = tabBar;

  function newTab(section) {
    var tab = jquery_default()('<div class="tab config-section-activator"></div>');
    tab.text(section.title);
    tab.addClass(section.id);
    return tab;
  }

  var section;

  for (var i = 0; i < configTableMetadata.sections.length; i++) {
    section = configTableMetadata.sections[i];
    var tab = newTab(section);
    tabBar.append(tab);
    section.setActivator(tab);
  }

  var tabs = jquery_default()('<div class="form-config tabBarFrame"></div>');
  var noTabs = jquery_default()('<div class="noTabs" title="Remove configuration tabs and revert to the &quot;classic&quot; configuration view">Remove tabs</div>');
  configTableMetadata.configWidgets.append(tabs);
  configTableMetadata.configWidgets.prepend(noTabs);
  tabs.append(tabBar);
  tabs.mouseenter(function () {
    tabs.addClass('mouse-over');
  });
  tabs.mouseleave(function () {
    tabs.removeClass('mouse-over');
  });
  configTableMetadata.deactivator = noTabs; // Always activate the first section by default.

  configTableMetadata.activateFirstSection();

  if (trackSectionVisibility === true) {
    configTableMetadata.trackSectionVisibility();
  }

  return configTableMetadata;
};
var addTabsActivator = function (configTable) {
  var configWidgets = jquery_default()('<div class="jenkins-config-widgets"><div class="showTabs" title="Add configuration section tabs">Add tabs</div></div>');
  configWidgets.insertBefore(configTable.parent());
  return configWidgets;
};
var addFinderToggle = function (configTableMetadata) {
  var findToggle = jquery_default()('<div class="find-toggle" title="Find"></div>');
  var finderShowPreferenceKey = 'config:showfinder';
  findToggle.click(function () {
    var findContainer = jquery_default()('.find-container', configTableMetadata.configWidgets);

    if (findContainer.hasClass('visible')) {
      findContainer.removeClass('visible');
      jenkinsLocalStorage["a" /* default */].setGlobalItem(finderShowPreferenceKey, "no");
    } else {
      findContainer.addClass('visible');
      jquery_default()('input', findContainer).focus();
      jenkinsLocalStorage["a" /* default */].setGlobalItem(finderShowPreferenceKey, "yes");
    }
  });

  if (jenkinsLocalStorage["a" /* default */].getGlobalItem(finderShowPreferenceKey, "yes") === 'yes') {
    findToggle.click();
  }
};

/***/ })

/******/ });
//# sourceMappingURL=config-tabbar.js.map