module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/state */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\CartItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CartItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleUpdateCartQty(lineItemId, quantity) {
    this.context.handleUpdateCartQty(lineItemId, quantity);
  }

  handleRemoveFromCart(lineItemId) {
    this.context.handleRemoveFromCart(lineItemId);
  }

  render() {
    const {
      item
    } = this.props;
    return __jsx("div", {
      className: "cart-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: "cart-item__image",
      src: item.media.source,
      alt: item.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "cart-item__details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx("h4", {
      className: "cart-item__details-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, item.name), __jsx("div", {
      className: "cart-item__details-qty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      onClick: () => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, "-"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, item.quantity), __jsx("button", {
      type: "button",
      onClick: () => this.handleUpdateCartQty(item.id, item.quantity + 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, "+")), __jsx("div", {
      className: "cart-item__details-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, item.line_total.formatted_with_symbol)), __jsx("button", {
      type: "button",
      className: "cart-item__remove",
      onClick: () => this.handleRemoveFromCart(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, "Remove"));
  }

}

_defineProperty(CartItem, "contextType", _context_state__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);
CartItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRemoveFromCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/CartOnPage.js":
/*!**********************************!*\
  !*** ./components/CartOnPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\CartOnPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  handleEmptyCart() {
    this.context.handleEmptyCart();
  }

  renderEmptyCart() {
    const {
      cart
    } = this.context;

    if (cart.total_unique_items > 0) {
      return;
    }

    return __jsx("p", {
      className: "cart__none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, "You have no items in your shopping cart, start adding some!");
  }

  handleClose() {
    this.context.toggleCart();
  }

  renderCart() {
    const {
      cart
    } = this.context;

    if (cart.total_unique_items === 0) {
      return;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cart.line_items.map(lineItem => __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      item: lineItem,
      key: lineItem.id
    }, this.props, {
      className: "cart__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }))), __jsx("div", {
      className: "cart__total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "cart__total-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, "Subtotal:"), __jsx("p", {
      className: "cart__total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, cart.subtotal.formatted_with_symbol)), __jsx("div", {
      className: "cart__footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: "cart__btn-empty",
      onClick: this.handleEmptyCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, "Empty cart"), __jsx("button", {
      className: "cart__btn-checkout",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/checkout'
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, "Checkout")));
  }

  render() {
    return __jsx("div", {
      className: "cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, this.renderEmptyCart(), this.renderCart());
  }

}

_defineProperty(Cart, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Cart);
Cart.propTypes = {
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./components/ProductItem.js":
/*!***********************************!*\
  !*** ./components/ProductItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! string-strip-html */ "string-strip-html");
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(string_strip_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.context.handleAddToCart(this.props.product.id, 1);
  }

  render() {
    const {
      product
    } = this.props;
    const {
      result
    } = string_strip_html__WEBPACK_IMPORTED_MODULE_2___default()(product.description);
    return __jsx("div", {
      className: "product__card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: "product__image",
      src: product.media.source,
      alt: product.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "product__info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx("h4", {
      className: "product__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, product.name), __jsx("p", {
      className: "product__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, result), __jsx("div", {
      className: "product__details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "product__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }, product.price.formatted_with_symbol)), __jsx("button", {
      name: "Add to cart",
      className: "product__btn",
      onClick: this.handleAddToCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, "Quick add")));
  }

}

_defineProperty(ProductItem, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);
ProductItem.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/ProductsList.js":
/*!************************************!*\
  !*** ./components/ProductsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ "./components/ProductItem.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductsList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.context.fetchProducts();
  }

  render() {
    const {
      products
    } = this.context;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "products",
      id: "products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, products.map(product => __jsx(_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: product.id,
      product: product
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    })))));
  }

}

_defineProperty(ProductsList, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductsList);
ProductsList.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/*! exports provided: AppContext, AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\context\\state.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const cartAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8002/cart",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const productAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8003/product",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8004",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

class AppWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      cartID: "",
      order: {
        customer: {
          firstname: ""
        }
      },
      cart: {
        line_items: [{
          media: {
            source: ""
          },
          line_total: {
            formatted_with_symbol: ""
          }
        }],
        subtotal: {
          formatted_with_symbol: ""
        },
        total_unique_items: 0
      },
      isCartVisible: false,
      products: [],
      checkoutToken: {},
      loadOrderFromLocalStorage: this.loadOrderFromLocalStorage.bind(this),
      toggleCart: this.toggleCart.bind(this),
      handleAddToCart: this.handleAddToCart.bind(this),
      handleUpdateCartQty: this.handleUpdateCartQty.bind(this),
      handleRemoveFromCart: this.handleRemoveFromCart.bind(this),
      handleEmptyCart: this.handleEmptyCart.bind(this),
      fetchCart: this.fetchCart.bind(this),
      refreshCart: this.refreshCart.bind(this),
      handleCaptureCheckout: this.handleCaptureCheckout.bind(this),
      fetchProducts: this.fetchProducts.bind(this),
      generateCheckoutToken: this.generateCheckoutToken.bind(this),
      createCommerceCustomer: this.createCommerceCustomer.bind(this),
      getCommerceCustomer: this.getCommerceCustomer.bind(this)
    };
  }
  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */


  async fetchProducts() {
    productAPI.get("/get").then(products => {
      this.setState({
        products: products.data.data
      });
    }).catch(error => {
      console.log('There was an error fetching the products', error);
    });
  }

  async fetchCart() {
    const cartID = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('cartID');

    if (await this.retrieveCart(cartID)) {
      console.log("Cart Retrieved!");
    } else if (await this.createCart()) {
      console.log("Cart Created!");
    } else {
      console.error("An error occured while fetching the cart.");
    }
  } //Actions

  /**
   * Fetch a saved order receipt from local storage so we can show the confirmation page
   * again between page refreshes.
   */


  loadOrderFromLocalStorage() {
    if (window.localStorage.getItem('order_receipt')) {
      this.setState({
        order: JSON.parse(window.localStorage.getItem('order_receipt'))
      });
    }
  }
  /**
   * Show hide cart in nav
   */


  toggleCart() {
    const {
      isCartVisible
    } = this.state;
    this.setState({
      isCartVisible: !isCartVisible
    });
  } //-> start of cart functions

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */


  async handleAddToCart(productId, quantity) {
    await cartAPI.post("/addto", {
      cartID: this.state.cartID,
      productId: productId,
      quantity: quantity
    }).then(item => {
      this.setState({
        cart: item.data.cart
      });
    }).catch(error => {
      console.log('There was an adding a cart item', error);
    });
  }
  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} quantity New line item quantity to update
   */


  handleUpdateCartQty(lineItemId, quantity) {
    cartAPI.put("/updateqty", {
      cartID: this.state.cartID,
      lineItemId: lineItemId,
      quantity: quantity
    }).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.log('There was an error updating the cart items', error);
    });
  }
  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */


  handleRemoveFromCart(lineItemId) {
    cartAPI.delete("/removefrom/" + this.state.cartID + "/" + lineItemId).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.error('There was an error removing the item from the cart', error);
    });
  }
  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */


  async handleEmptyCart() {
    await cartAPI.delete("/empty/" + this.state.cartID).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.error('There was an error emptying the cart', error);
    });
  }
  /**
  * Creates a cart
  * https://commercejs.com/docs/sdk/cart
  */


  async createCart() {
    return await cartAPI.get("/create").then(cart => {
      this.setState({
        cart: cart.data,
        cartID: cart.data.id
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('cartID', cart.data.id);
      return true;
    }).catch(error => {
      console.error(error);
      return false;
    });
  }

  async retrieveCart(cartID) {
    return await cartAPI.get("/fetch/" + cartID).then(cart => {
      this.setState({
        cart: cart.data,
        cartID: cart.data.id
      });
      return true;
    }).catch(error => {
      console.error(error);
      return false;
    });
  }
  /**
   * Refreshes to a new cart
   * https://commercejs.com/docs/sdk/cart#refresh-cart
   */


  refreshCart() {
    this.createCart();
  } //=> end fo cart functions

  /**
   * Captures the checkout
   * https://commercejs.com/docs/sdk/checkout#capture-order
   *
   * @param {object} newOrder The new order object data
   */


  handleCaptureCheckout(newOrder) {
    try {
      ordermanagementAPI.post("/checkout/create", newOrder).then(order => {
        this.setState({
          order: order.data
        }); // Store the order in session storage so we can show it again
        // if the user refreshes the page!

        window.localStorage.setItem('order_receipt', JSON.stringify(order)); // Clears the cart

        this.refreshCart(); // Send the user to the receipt

        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: '/confirmation'
        });
      }).catch(error => {
        console.log('There was an error confirming your order', error);
      });
    } catch (error) {
      console.error("There has been an error placing the order", error);
    }
  }
  /**
     *  Generates a checkout token
     *  https://commercejs.com/docs/sdk/checkout#generate-token
     */


  generateCheckoutToken() {
    try {
      const {
        cart
      } = this.state;

      if (cart.line_items.length) {
        ordermanagementAPI.post("/checkout/generatetoken", {
          cartID: cart.id
        }).then(token => {
          this.setState({
            checkoutToken: token.data
          });
        }).catch(error => {
          console.log('There was an error in generating a token', error);
        });
      }
    } catch (error) {
      console.error("There has been an error generating a checkout token for the order", error);
    }
  }

  createCommerceCustomer(customerEmail) {
    try {
      ordermanagementAPI.post("/customer/create", {
        email: customerEmail
      }).then(customer => {
        return customer;
      }).catch(error => {
        console.log('There was an error creating a customer with the email:' + customerEmail, error);
        return null;
      });
    } catch (error) {
      console.error('There was an error creating a customer with the email:' + customerEmail, error);
      return null;
    }
  }

  getCommerceCustomer(customerID) {
    try {
      ordermanagementAPI.get("/customer/get/" + "customerID").then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error retrieving the customer with the id:' + customerID, error);
      });
    } catch (error) {
      console.error('There was an error retrieving the customer with the id:' + customerID, error);
    }
  }

  updateAuthCustomerCommerceID(commerceID) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/updateuser/", {
        id: commerceID
      }).then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error retrieving the customer with the id:' + customerID, error);
      });
    } catch (error) {
      console.error('There was an error retrieving the customer with the id:' + customerID, error);
    }
  }

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 7
      }
    }, this.props.children);
  }

}


function useAppContext() {
  return useContext(AppContext);
}

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

const commerceAPIKEY = "pk_22347505ba2c8380513eec66e47c69506d20e41143779";

if (!commerceAPIKEY) {
  throw Error('Your public API key must be provided as an environment variable');
}

/* harmony default export */ __webpack_exports__["default"] = (new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default.a(commerceAPIKEY, true));

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var _components_CartOnPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CartOnPage */ "./components/CartOnPage.js");
/* harmony import */ var _components_ProductsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductsList */ "./components/ProductsList.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      merchant: {}
    };
  }

  componentDidMount() {
    this.fetchMerchantDetails();
    this.context.loadOrderFromLocalStorage();
  }
  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */


  fetchMerchantDetails() {
    _lib_commerce__WEBPACK_IMPORTED_MODULE_1__["default"].merchants.about().then(merchant => {
      this.setState({
        merchant: merchant
      });
    }).catch(error => {
      console.log('There was an error fetch the merchant details', error);
    });
  }

  render() {
    const {
      merchant
    } = this.state;
    return __jsx("div", {
      className: "menu-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "menu-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, "Menu"), __jsx("div", {
      className: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx(_components_ProductsList__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    })))), __jsx("div", {
      className: "cart-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, "Cart"), __jsx("div", {
      className: "cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx(_components_CartOnPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(App, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (App);
App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "string-strip-html":
/*!************************************!*\
  !*** external "string-strip-html" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-strip-html");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnRPblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3N0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW51LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGVjL2NvbW1lcmNlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZy1zdHJpcC1odG1sXCIiXSwibmFtZXMiOlsiQ2FydEl0ZW0iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlVXBkYXRlQ2FydFF0eSIsImJpbmQiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImxpbmVJdGVtSWQiLCJxdWFudGl0eSIsImNvbnRleHQiLCJyZW5kZXIiLCJpdGVtIiwibWVkaWEiLCJzb3VyY2UiLCJuYW1lIiwiaWQiLCJsaW5lX3RvdGFsIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwiQXBwQ29udGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJvblVwZGF0ZUNhcnRRdHkiLCJvblJlbW92ZUZyb21DYXJ0IiwiQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsInJlbmRlckVtcHR5Q2FydCIsImNhcnQiLCJ0b3RhbF91bmlxdWVfaXRlbXMiLCJoYW5kbGVDbG9zZSIsInRvZ2dsZUNhcnQiLCJyZW5kZXJDYXJ0IiwibGluZV9pdGVtcyIsIm1hcCIsImxpbmVJdGVtIiwic3VidG90YWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJvbkVtcHR5Q2FydCIsImhpc3RvcnkiLCJQcm9kdWN0SXRlbSIsImhhbmRsZUFkZFRvQ2FydCIsInByb2R1Y3QiLCJyZXN1bHQiLCJzdHJpcEh0bWwiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwib25BZGRUb0NhcnQiLCJQcm9kdWN0c0xpc3QiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoUHJvZHVjdHMiLCJwcm9kdWN0cyIsImFycmF5IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiQXBwV3JhcHBlciIsInN0YXRlIiwiY2FydElEIiwib3JkZXIiLCJjdXN0b21lciIsImZpcnN0bmFtZSIsImlzQ2FydFZpc2libGUiLCJjaGVja291dFRva2VuIiwibG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZ2VuZXJhdGVDaGVja291dFRva2VuIiwiY3JlYXRlQ29tbWVyY2VDdXN0b21lciIsImdldENvbW1lcmNlQ3VzdG9tZXIiLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJwb3N0IiwicHV0IiwicmVzcCIsImRlbGV0ZSIsInNldCIsIm5ld09yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxlbmd0aCIsInRva2VuIiwiY3VzdG9tZXJFbWFpbCIsImVtYWlsIiwiY3VzdG9tZXJJRCIsInVwZGF0ZUF1dGhDdXN0b21lckNvbW1lcmNlSUQiLCJjb21tZXJjZUlEIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImNvbW1lcmNlQVBJS0VZIiwiRXJyb3IiLCJDb21tZXJjZSIsIkFwcCIsIm1lcmNoYW50IiwiZmV0Y2hNZXJjaGFudERldGFpbHMiLCJjb21tZXJjZSIsIm1lcmNoYW50cyIsImFib3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQURGLENBRkYsRUFTRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixFQVVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBVkYsQ0FERjtBQWdCRDs7QUFsRHlCOztnQkFBdEJtSCxHLGlCQVVpQnBHLDREOztBQXlDdEI7QUFFY29HLGtFQUFmO0FBRUFBLEdBQUcsQ0FBQ25HLFNBQUosR0FBZ0I7QUFDZHNCLFNBQU8sRUFBRXJCLGlEQUFTLENBQUNDO0FBREwsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUMvREEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbWVudS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSdcclxuXHJcbmNsYXNzIENhcnRJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eSA9IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVSZW1vdmVGcm9tQ2FydCA9IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHQ7XHJcblxyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5oYW5kbGVVcGRhdGVDYXJ0UXR5KGxpbmVJdGVtSWQsIHF1YW50aXR5KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUZyb21DYXJ0KGxpbmVJdGVtSWQpIHtcclxuICAgIHRoaXMuY29udGV4dC5oYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydC1pdGVtX19pbWFnZVwiIHNyYz17aXRlbS5tZWRpYS5zb3VyY2V9IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fZGV0YWlscy1uYW1lXCI+e2l0ZW0ubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fZGV0YWlscy1xdHlcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBpdGVtLnF1YW50aXR5ID4gMSA/IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eShpdGVtLmlkLCBpdGVtLnF1YW50aXR5IC0gMSkgOiB0aGlzLmhhbmRsZVJlbW92ZUZyb21DYXJ0KGl0ZW0uaWQpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eShpdGVtLmlkLCBpdGVtLnF1YW50aXR5ICsgMSl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtX19kZXRhaWxzLXByaWNlXCI+e2l0ZW0ubGluZV90b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX3JlbW92ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQoaXRlbS5pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtO1xyXG5cclxuQ2FydEl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhhbmRsZVVwZGF0ZUNhcnRRdHk6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25VcGRhdGVDYXJ0UXR5OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlRnJvbUNhcnQ6IFByb3BUeXBlcy5mdW5jXHJcbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9DYXJ0SXRlbSc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcblxyXG5jbGFzcyBDYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlRW1wdHlDYXJ0ID0gdGhpcy5oYW5kbGVFbXB0eUNhcnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHQ7XHJcblxyXG5cclxuICBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuaGFuZGxlRW1wdHlDYXJ0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJFbXB0eUNhcnQoKSB7XHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuICAgIGlmIChjYXJ0LnRvdGFsX3VuaXF1ZV9pdGVtcyA+IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRfX25vbmVcIj5cclxuICAgICAgICBZb3UgaGF2ZSBubyBpdGVtcyBpbiB5b3VyIHNob3BwaW5nIGNhcnQsIHN0YXJ0IGFkZGluZyBzb21lIVxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQudG9nZ2xlQ2FydCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuXHJcbiAgICBpZiAoY2FydC50b3RhbF91bmlxdWVfaXRlbXMgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge2NhcnQubGluZV9pdGVtcy5tYXAobGluZUl0ZW0gPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAgICAgIGl0ZW09e2xpbmVJdGVtfVxyXG4gICAgICAgICAgICBrZXk9e2xpbmVJdGVtLmlkfVxyXG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydF9faW5uZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0X190b3RhbC10aXRsZVwiPlN1YnRvdGFsOjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsLXByaWNlXCI+e2NhcnQuc3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJ0X19idG4tZW1wdHlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUVtcHR5Q2FydH0+RW1wdHkgY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJ0X19idG4tY2hlY2tvdXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvY2hlY2tvdXQnXHJcbiAgICAgICAgICAgIH0pfSAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckVtcHR5Q2FydCgpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJ0KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcblxyXG5DYXJ0LnByb3BUeXBlcyA9IHtcclxuICBjYXJ0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uVXBkYXRlQ2FydFF0eTogKCkgPT4geyB9LFxyXG4gIG9uUmVtb3ZlRnJvbUNhcnQ6ICgpID0+IHsgfSxcclxuICBvbkVtcHR5Q2FydDogKCkgPT4geyB9LFxyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHk6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3RyaXBIdG1sIGZyb20gJ3N0cmluZy1zdHJpcC1odG1sJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUuanMnXHJcblxyXG5cclxuY2xhc3MgUHJvZHVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkVG9DYXJ0ID0gdGhpcy5oYW5kbGVBZGRUb0NhcnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIGhhbmRsZUFkZFRvQ2FydCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuaGFuZGxlQWRkVG9DYXJ0KHRoaXMucHJvcHMucHJvZHVjdC5pZCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBzdHJpcEh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0X19pbWFnZVwiIHNyYz17cHJvZHVjdC5tZWRpYS5zb3VyY2V9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2R1Y3RfX25hbWVcIj57cHJvZHVjdC5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHByb2R1Y3QgZGVzY3JpcHRpb24gc3RyaXBwZWQgb2YgaHRtbCB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlLmZvcm1hdHRlZF93aXRoX3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdF9fYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRUb0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWljayBhZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xyXG5cclxuUHJvZHVjdEl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgcHJvZHVjdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uQWRkVG9DYXJ0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGhhbmRsZUFkZFRvQ2FydDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4vUHJvZHVjdEl0ZW0nO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZS5qcydcclxuXHJcbmNsYXNzIFByb2R1Y3RzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIiBpZD1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTGlzdDtcclxuXHJcblByb2R1Y3RzTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwcm9kdWN0czogUHJvcFR5cGVzLmFycmF5XHJcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBjYXJ0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5DQVJUTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBwcm9kdWN0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5QUk9EVUNUU01TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3JkZXJtYW5hZ2VtZW50QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5PUkRFUk1BTkFHRU1FTlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEFwcFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXJ0SUQ6IFwiXCIsXHJcbiAgICAgIG9yZGVyOiB7IGN1c3RvbWVyOiB7IGZpcnN0bmFtZTogXCJcIiB9IH0sXHJcblxyXG4gICAgICBjYXJ0OiB7IGxpbmVfaXRlbXM6IFt7IG1lZGlhOiB7IHNvdXJjZTogXCJcIiB9LCBsaW5lX3RvdGFsOiB7IGZvcm1hdHRlZF93aXRoX3N5bWJvbDogXCJcIiB9IH1dLCBzdWJ0b3RhbDogeyBmb3JtYXR0ZWRfd2l0aF9zeW1ib2w6IFwiXCIgfSwgdG90YWxfdW5pcXVlX2l0ZW1zOiAwIH0sXHJcbiAgICAgIGlzQ2FydFZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGNoZWNrb3V0VG9rZW46IHt9LFxyXG4gICAgICBsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlOiB0aGlzLmxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgdG9nZ2xlQ2FydDogdGhpcy50b2dnbGVDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUFkZFRvQ2FydDogdGhpcy5oYW5kbGVBZGRUb0NhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlVXBkYXRlQ2FydFF0eTogdGhpcy5oYW5kbGVVcGRhdGVDYXJ0UXR5LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZVJlbW92ZUZyb21DYXJ0OiB0aGlzLmhhbmRsZVJlbW92ZUZyb21DYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUVtcHR5Q2FydDogdGhpcy5oYW5kbGVFbXB0eUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hDYXJ0OiB0aGlzLmZldGNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICByZWZyZXNoQ2FydDogdGhpcy5yZWZyZXNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQ6IHRoaXMuaGFuZGxlQ2FwdHVyZUNoZWNrb3V0LmJpbmQodGhpcyksXHJcbiAgICAgIGZldGNoUHJvZHVjdHM6IHRoaXMuZmV0Y2hQcm9kdWN0cy5iaW5kKHRoaXMpLFxyXG4gICAgICBnZW5lcmF0ZUNoZWNrb3V0VG9rZW46IHRoaXMuZ2VuZXJhdGVDaGVja291dFRva2VuLmJpbmQodGhpcyksXHJcbiAgICAgIGNyZWF0ZUNvbW1lcmNlQ3VzdG9tZXI6IHRoaXMuY3JlYXRlQ29tbWVyY2VDdXN0b21lci5iaW5kKHRoaXMpLFxyXG4gICAgICBnZXRDb21tZXJjZUN1c3RvbWVyOiB0aGlzLmdldENvbW1lcmNlQ3VzdG9tZXIuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHByb2R1Y3RzIGRhdGEgZnJvbSBDaGVjIGFuZCBzdG9yZXMgaW4gdGhlIHByb2R1Y3RzIGRhdGEgb2JqZWN0LlxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvcHJvZHVjdHNcclxuICAgKi9cclxuICBhc3luYyBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgcHJvZHVjdEFQSS5nZXQoXCIvZ2V0XCIpLnRoZW4oKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0czogcHJvZHVjdHMuZGF0YS5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHByb2R1Y3RzJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaENhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0SUQgPSBDb29raWVzLmdldCgnY2FydElEJyk7XHJcblxyXG4gICAgaWYgKGF3YWl0IHRoaXMucmV0cmlldmVDYXJ0KGNhcnRJRCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IFJldHJpZXZlZCFcIik7XHJcbiAgICB9IGVsc2UgaWYgKGF3YWl0IHRoaXMuY3JlYXRlQ2FydCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBDcmVhdGVkIVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGNhcnQuXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0FjdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYSBzYXZlZCBvcmRlciByZWNlaXB0IGZyb20gbG9jYWwgc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyB0aGUgY29uZmlybWF0aW9uIHBhZ2VcclxuICAgKiBhZ2FpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzLlxyXG4gICAqL1xyXG4gIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBoaWRlIGNhcnQgaW4gbmF2XHJcbiAgICovXHJcbiAgdG9nZ2xlQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgaXNDYXJ0VmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0NhcnRWaXNpYmxlOiAhaXNDYXJ0VmlzaWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8tPiBzdGFydCBvZiBjYXJ0IGZ1bmN0aW9uc1xyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBwcm9kdWN0IHRvIHRoZSBjdXJyZW50IGNhcnQgaW4gc2Vzc2lvblxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jYWRkLXRvLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0SWQgVGhlIElEIG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IFRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0SWQsIHF1YW50aXR5KSB7XHJcblxyXG4gICAgYXdhaXQgY2FydEFQSS5wb3N0KFwiL2FkZHRvXCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgcHJvZHVjdElkOiBwcm9kdWN0SWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBpdGVtLmRhdGEuY2FydCB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGFkZGluZyBhIGNhcnQgaXRlbScsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBsaW5lX2l0ZW1zIGluIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3VwZGF0ZS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gYmVpbmcgdXBkYXRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBOZXcgbGluZSBpdGVtIHF1YW50aXR5IHRvIHVwZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIGNhcnRBUEkucHV0KFwiL3VwZGF0ZXF0eVwiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIGxpbmVJdGVtSWQ6IGxpbmVJdGVtSWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgdGhlIGNhcnQgaXRlbXMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgbGluZSBpdGVtIGZyb20gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGxpbmUgaXRlbSBiZWluZyByZW1vdmVkXHJcbiAgICovXHJcbiAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQobGluZUl0ZW1JZCkge1xyXG4gICAgY2FydEFQSS5kZWxldGUoXCIvcmVtb3ZlZnJvbS9cIiArIHRoaXMuc3RhdGUuY2FydElEICsgXCIvXCIgKyBsaW5lSXRlbUlkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdGllcyBjYXJ0IGNvbnRlbnRzXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlRW1wdHlDYXJ0KCkge1xyXG4gICAgYXdhaXQgY2FydEFQSS5kZWxldGUoXCIvZW1wdHkvXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZW1wdHlpbmcgdGhlIGNhcnQnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlcyBhIGNhcnRcclxuICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydFxyXG4gICovXHJcbiAgYXN5bmMgY3JlYXRlQ2FydCgpIHtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvY3JlYXRlXCIpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0SUQnLCBjYXJ0LmRhdGEuaWQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNhcnQoY2FydElEKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvZmV0Y2gvXCIgKyBjYXJ0SUQpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoZXMgdG8gYSBuZXcgY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydCNyZWZyZXNoLWNhcnRcclxuICAgKi9cclxuICByZWZyZXNoQ2FydCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2FydCgpO1xyXG4gIH1cclxuICAvLz0+IGVuZCBmbyBjYXJ0IGZ1bmN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBDYXB0dXJlcyB0aGUgY2hlY2tvdXRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2NhcHR1cmUtb3JkZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdPcmRlciBUaGUgbmV3IG9yZGVyIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0KG5ld09yZGVyKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgb3JkZXJtYW5hZ2VtZW50QVBJLnBvc3QoXCIvY2hlY2tvdXQvY3JlYXRlXCIsIG5ld09yZGVyKS50aGVuKChvcmRlcikgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG9yZGVyOiBvcmRlci5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgb3JkZXIgaW4gc2Vzc2lvbiBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IGl0IGFnYWluXHJcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgcmVmcmVzaGVzIHRoZSBwYWdlIVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgICAgICAgLy8gQ2xlYXJzIHRoZSBjYXJ0XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2FydCgpO1xyXG4gICAgICAgIC8vIFNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlY2VpcHRcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogJy9jb25maXJtYXRpb24nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBjb25maXJtaW5nIHlvdXIgb3JkZXInLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHBsYWNpbmcgdGhlIG9yZGVyXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICAgKiAgR2VuZXJhdGVzIGEgY2hlY2tvdXQgdG9rZW5cclxuICAgICAqICBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2dlbmVyYXRlLXRva2VuXHJcbiAgICAgKi9cclxuICBnZW5lcmF0ZUNoZWNrb3V0VG9rZW4oKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjYXJ0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBpZiAoY2FydC5saW5lX2l0ZW1zLmxlbmd0aCkge1xyXG5cclxuICAgICAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jaGVja291dC9nZW5lcmF0ZXRva2VuXCIsIHsgY2FydElEOiBjYXJ0LmlkIH0pLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG9rZW46IHRva2VuLmRhdGEgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBpbiBnZW5lcmF0aW5nIGEgdG9rZW4nLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBnZW5lcmF0aW5nIGEgY2hlY2tvdXQgdG9rZW4gZm9yIHRoZSBvcmRlclwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlQ29tbWVyY2VDdXN0b21lcihjdXN0b21lckVtYWlsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jdXN0b21lci9jcmVhdGVcIiwgeyBlbWFpbDogY3VzdG9tZXJFbWFpbCB9KS50aGVuKChjdXN0b21lcikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gY3VzdG9tZXI7XHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIGEgY3VzdG9tZXIgd2l0aCB0aGUgZW1haWw6JyArIGN1c3RvbWVyRW1haWwsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYSBjdXN0b21lciB3aXRoIHRoZSBlbWFpbDonICsgY3VzdG9tZXJFbWFpbCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbW1lcmNlQ3VzdG9tZXIoY3VzdG9tZXJJRCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jdXN0b21lci9nZXQvXCIgKyBcImN1c3RvbWVySURcIikudGhlbigoY3VzdG9tZXIpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyOyAvLyBBZGQgcmV0dXJucyBmb3Igb3RoZXIgY2F0Y2ggXHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkOicgKyBjdXN0b21lcklELCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgdGhlIGN1c3RvbWVyIHdpdGggdGhlIGlkOicgKyBjdXN0b21lcklELCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRoQ3VzdG9tZXJDb21tZXJjZUlEKGNvbW1lcmNlSUQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2F1dGgvdXBkYXRldXNlci9cIiwgeyBpZDogY29tbWVyY2VJRCB9KS50aGVuKChjdXN0b21lcikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gY3VzdG9tZXI7IC8vIEFkZCByZXR1cm5zIGZvciBvdGhlciBjYXRjaCBcclxuXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWQ6JyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWQ6JyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwV3JhcHBlciB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIiwiaW1wb3J0IENvbW1lcmNlIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiO1xyXG5cclxuY29uc3QgY29tbWVyY2VBUElLRVkgPSBwcm9jZXNzLmVudi5DT01NRVJDRVBVQkxJQ0tFWTtcclxuXHJcbmlmICghY29tbWVyY2VBUElLRVkpIHtcclxuICAgIHRocm93IEVycm9yKCdZb3VyIHB1YmxpYyBBUEkga2V5IG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tbWVyY2UoY29tbWVyY2VBUElLRVksIHRydWUpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZS5qcyc7XHJcbmltcG9ydCBDYXJ0T25QYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydE9uUGFnZSc7XHJcbmltcG9ydCBQcm9kdWN0c0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0c0xpc3QnO1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVyY2hhbnQ6IHt9LFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmZldGNoTWVyY2hhbnREZXRhaWxzKCk7XHJcbiAgICB0aGlzLmNvbnRleHQubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggbWVyY2hhbnQgZGV0YWlsc1xyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvZnVsbC1zZGstcmVmZXJlbmNlI21lcmNoYW50c1xyXG4gICAqL1xyXG4gIGZldGNoTWVyY2hhbnREZXRhaWxzKCkge1xyXG4gICAgY29tbWVyY2UubWVyY2hhbnRzLmFib3V0KCkudGhlbigobWVyY2hhbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lcmNoYW50OiBtZXJjaGFudCB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoIHRoZSBtZXJjaGFudCBkZXRhaWxzJywgZXJyb3IpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWVyY2hhbnQsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPk1lbnU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0c0xpc3RcclxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdGl0bGVcIj5DYXJ0PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgICAgICA8Q2FydE9uUGFnZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaW5nLXN0cmlwLWh0bWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==