"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/testimonial/Testimonial.js":
/*!***********************************************!*\
  !*** ./components/testimonial/Testimonial.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/t1.png */ \"./public/img/t1.png\");\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _templateObject() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    width: 70%;\\n    height: 425px;\\n    margin:30px  auto;\\n    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);\\n    border-radius: 24px;\\n\\n    @media (max-width:640px){\\n        width: 94%;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject1() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    padding: 20px 0;\\n    text-align: center;\\n\\n    h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 48px;\\n        /* identical to box height, or 133% */\\n        color: #FFFFFF;\\n        mix-blend-mode: normal;\\n        margin-top: 40px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject2() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject3() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject4() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n  width: 80%;\\n  margin: auto;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data1;\n    };\n    return data1;\n}\nvar TesTimonialstyle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = TesTimonialstyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = Left;\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = Right;\nvar SliderStyle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4());\n_c4 = SliderStyle;\nvar data = [\n    {\n        name: \"Abraham Rashford\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Chika Nonso\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Adams Bayo\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nvar Testimonial = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Testimonial, Component1);\n    var _super = _createSuper(Testimonial);\n    function Testimonial(props) {\n        _classCallCheck(this, Testimonial);\n        var _this;\n        _this = _super.call(this, props);\n        _this.next = _this.next.bind(_assertThisInitialized(_this));\n        _this.previous = _this.previous.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Testimonial, [\n        {\n            key: \"next\",\n            value: function next() {\n                this.slider.slickNext();\n            }\n        },\n        {\n            key: \"previous\",\n            value: function previous() {\n                this.slider.slickPrev();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _obj;\n                var settings = (_obj = {\n                    dots: true,\n                    infinite: true,\n                    speed: 500,\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    autoplay: true\n                }, _defineProperty(_obj, \"speed\", 2000), _defineProperty(_obj, \"autoplaySpeed\", 2000), _obj);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TesTimonialstyle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"See what people are saying about College\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderStyle, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({\n                                ref: function(c) {\n                                    return _this.slider = c;\n                                }\n                            }, settings, {\n                                children: data === null || data === void 0 ? void 0 : data.map(function(each) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                            container: true,\n                                            columns: 12,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Left, {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"img\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                src: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                                alt: \"testimonial img\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 49\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 45\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Right, {}, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 28\n                                    }, _this));\n                                })\n                            }), void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.previous,\n                                    children: \"Previous\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.next,\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return Testimonial;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"TesTimonialstyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Left\");\n$RefreshReg$(_c3, \"Right\");\n$RefreshReg$(_c4, \"SliderStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNYO0FBQ1U7QUFDUjtBQUNNO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVOLENBV2xDOzs7Ozs7Ozs7UUFDdUIsQ0FldkI7Ozs7Ozs7OztRQUNzQixDQUV0Qjs7Ozs7Ozs7O1FBRXVCLENBRXZCOzs7Ozs7Ozs7UUFFNkIsQ0FHN0I7Ozs7Ozs7QUF2Q0EsR0FBSyxDQUFDUSxnQkFBZ0IsR0FBQ0YsNkRBQVU7S0FBM0JFLGdCQUFnQjtBQVl0QixHQUFLLENBQUNFLEtBQUssR0FBQ0osNkRBQVU7TUFBaEJJLEtBQUs7QUFnQlgsR0FBSyxDQUFDQyxJQUFJLEdBQUNMLDZEQUFVO01BQWZLLElBQUk7QUFJVixHQUFLLENBQUNDLEtBQUssR0FBQ04sNkRBQVU7TUFBaEJNLEtBQUs7QUFJWCxHQUFLLENBQUNDLFdBQVcsR0FBQ1AsNkRBQVU7TUFBdEJPLFdBQVc7QUFJakIsR0FBSyxDQUFDQyxJQUFJLEdBQUMsQ0FBQztJQUNSLENBQUM7UUFDR0MsSUFBSSxFQUFDLENBQWtCO1FBQ3ZCQyxNQUFNLEVBQUMsQ0FBTztRQUNkQyxTQUFTLEVBQUMsQ0FBNEg7UUFDcElDLEdBQUMsRUFBQ1gsMERBQUU7SUFDVixDQUFDO0lBQ0QsQ0FBQztRQUNHUSxJQUFJLEVBQUMsQ0FBYTtRQUNsQkMsTUFBTSxFQUFDLENBQU87UUFDZEMsU0FBUyxFQUFDLENBQTRIO1FBQ3BJQyxHQUFDLEVBQUNYLDBEQUFFO0lBQ1YsQ0FBQztJQUNBLENBQUM7UUFDRVEsSUFBSSxFQUFDLENBQVk7UUFDakJDLE1BQU0sRUFBQyxDQUFPO1FBQ2RDLFNBQVMsRUFBQyxDQUE0SDtRQUN0SUMsR0FBRyxFQUFDWCwwREFBRTtJQUNWLENBQUM7QUFDTCxDQUFDO0lBQ29CWSxXQUFXLGlCQUFqQixRQUFROzs7O2FBQUZBLFdBQVcsQ0FDbEJDLEtBQUs7OztrQ0FDVEEsS0FBSztjQUNOQyxJQUFJLFNBQVFBLElBQUksQ0FBQ0MsSUFBSTtjQUNyQkMsUUFBUSxTQUFRQSxRQUFRLENBQUNELElBQUk7Ozs7O1lBRXBDRCxHQUFJLEVBQUpBLENBQUk7bUJBQUpBLFFBQVEsQ0FBUkEsSUFBSSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxDQUFDRyxNQUFNLENBQUNDLFNBQVM7WUFDdkIsQ0FBQzs7O1lBQ0RGLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixJQUFJLENBQUNDLE1BQU0sQ0FBQ0UsU0FBUztZQUN2QixDQUFDOzs7WUFDREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDOztvQkFDUyxJQVNoQjtnQkFURCxHQUFLLENBQUNDLFFBQVEsSUFBRyxJQVNoQjtvQkFSQ0MsSUFBSSxFQUFFLElBQUk7b0JBQ1ZDLFFBQVEsRUFBRSxJQUFJO29CQUNkQyxLQUFLLEVBQUUsR0FBRztvQkFDVkMsWUFBWSxFQUFFLENBQUM7b0JBQ2ZDLGNBQWMsRUFBRSxDQUFDO29CQUNqQkMsUUFBUSxFQUFFLElBQUk7bUNBTkMsSUFTaEIsRUFGQ0gsQ0FBSyxRQUFFLElBQUksbUJBUEksSUFTaEIsRUFEQ0ksQ0FBYSxnQkFBRSxJQUFJLEdBUkosSUFTaEI7Z0JBQ0QsTUFBTSw2RUFDSDNCLGdCQUFnQjs7b0dBQ1pFLEtBQUs7a0hBQ0MwQixDQUFFOzBDQUFDLENBQXdDOzs7Ozs7Ozs7OztvR0FFakR2QixXQUFXO2tIQUNMUixtREFBTTtnQ0FBQ2dDLEdBQUcsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29DQUFJLE1BQU1kLE9BQUFBLE1BQU0sR0FBR2MsQ0FBQzs7K0JBQU9WLFFBQVE7MENBQ2hEZCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUV5QixHQUFHLENBQUNDLFFBQzNCLENBRDJCQSxJQUFJLEVBQUUsQ0FBQztvQ0FDZCxNQUFNLDZFQUFFeEMsOENBQUc7OEhBQ05DLCtDQUFJOzRDQUFDd0MsU0FBUzs0Q0FBQ0MsT0FBTyxFQUFFLEVBQUU7OzRIQUNsQnpDLCtDQUFJO29EQUFDMEMsRUFBRSxFQUFFLEVBQUU7MElBQ1BoQyxJQUFJOzhJQUNJRixDQUFHOzREQUFDbUMsU0FBUyxFQUFDLENBQUs7a0pBQ2YxQyxtREFBSztnRUFDTjJDLEdBQUcsRUFBRXRDLDBEQUFFO2dFQUNQdUMsR0FBRyxFQUFDLENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEhBS3BDN0MsK0NBQUk7b0RBQUMwQyxFQUFFLEVBQUUsRUFBRTswSUFDUC9CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FNMUIsQ0FBQzs7Ozs7Ozs7Ozs7b0dBR1JILENBQUc7NEJBQUNzQyxLQUFLLEVBQUUsQ0FBQztnQ0FBQ0MsU0FBUyxFQUFFLENBQVE7NEJBQUMsQ0FBQzs7NEdBQ2hDQyxDQUFNO29DQUFDTCxTQUFTLEVBQUMsQ0FBUTtvQ0FBQ00sT0FBTyxFQUFFLElBQUksQ0FBQzNCLFFBQVE7OENBQUUsQ0FFbkQ7Ozs7Ozs0R0FDQzBCLENBQU07b0NBQUNMLFNBQVMsRUFBQyxDQUFRO29DQUFDTSxPQUFPLEVBQUUsSUFBSSxDQUFDN0IsSUFBSTs4Q0FBRSxDQUUvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVIsQ0FBQzs7OztFQS9Ec0NqQiw0Q0FBUztBQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmpzP2FlYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB0MSBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy90MS5wbmdcIlxuXG5jb25zdCBUZXNUaW1vbmlhbHN0eWxlPXN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQyNXB4O1xuICAgIG1hcmdpbjozMHB4ICBhdXRvO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDguMThkZWcsICNGQjM4NDYgOS4wNSUsICNCODRBNTEgNzYuNzQlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgIH1cblxuYFxuY29uc3QgVGl0bGU9c3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEzMyUgKi9cbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuYFxuY29uc3QgTGVmdD1zdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IFJpZ2h0PXN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgU2xpZGVyU3R5bGU9c3R5bGVkLmRpdmBcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuY29uc3QgZGF0YT1bXG4gICAge1xuICAgICAgICBuYW1lOlwiQWJyYWhhbSBSYXNoZm9yZFwiLFxuICAgICAgICBzY2hvb2w6XCJGdXByZVwiLFxuICAgICAgICB0ZXN0aW1vbnk6XCLigJxXb3cgSSBsb3ZlIHRoaXMgYXBwIGFuZCBJIExvdmUgdGhlIGZhY3QgdGhhdCBpIGNhbiB3YXRjaCB2aWRlb3MgYXQgbXkgb3duIGNvbnZpZW5jaWUgd2l0aG91dCBicmVha2luZyB0aGUgYmFuayB3aXRoIGRhdGEuXCIsXG4gICAgICAgIGltZzp0MVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOlwiQ2hpa2EgTm9uc29cIixcbiAgICAgICAgc2Nob29sOlwiRnVwcmVcIixcbiAgICAgICAgdGVzdGltb255Olwi4oCcV293IEkgbG92ZSB0aGlzIGFwcCBhbmQgSSBMb3ZlIHRoZSBmYWN0IHRoYXQgaSBjYW4gd2F0Y2ggdmlkZW9zIGF0IG15IG93biBjb252aWVuY2llIHdpdGhvdXQgYnJlYWtpbmcgdGhlIGJhbmsgd2l0aCBkYXRhLlwiLFxuICAgICAgICBpbWc6dDFcbiAgICB9LFxuICAgICB7XG4gICAgICAgIG5hbWU6XCJBZGFtcyBCYXlvXCIsXG4gICAgICAgIHNjaG9vbDpcIkZ1cHJlXCIsXG4gICAgICAgIHRlc3RpbW9ueTpcIuKAnFdvdyBJIGxvdmUgdGhpcyBhcHAgYW5kIEkgTG92ZSB0aGUgZmFjdCB0aGF0IGkgY2FuIHdhdGNoIHZpZGVvcyBhdCBteSBvd24gY29udmllbmNpZSB3aXRob3V0IGJyZWFraW5nIHRoZSBiYW5rIHdpdGggZGF0YS5cIixcbiAgICAgICAgaW1nOnQxXG4gICAgfVxuXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdGltb25pYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5wcmV2aW91cy5iaW5kKHRoaXMpO1xuICB9XG4gIG5leHQoKSB7XG4gICAgdGhpcy5zbGlkZXIuc2xpY2tOZXh0KCk7XG4gIH1cbiAgcHJldmlvdXMoKSB7XG4gICAgdGhpcy5zbGlkZXIuc2xpY2tQcmV2KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBzcGVlZDogMjAwMCxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRlc1RpbW9uaWFsc3R5bGU+XG4gICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgIDxoMT5TZWUgd2hhdCBwZW9wbGUgYXJlIHNheWluZyBhYm91dCBDb2xsZWdlPC9oMT5cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxTbGlkZXJTdHlsZT5cbiAgICAgICAgICAgICAgICA8U2xpZGVyIHJlZj17YyA9PiAodGhpcy5zbGlkZXIgPSBjKX0gey4uLnNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICB7ZGF0YT8ubWFwKGVhY2g9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY29sdW1ucz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0ZXN0aW1vbmlhbCBpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgPC9TbGlkZXJTdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByZXZpb3VzfT5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm5leHR9PlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGVzVGltb25pYWxzdHlsZT5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJJbWFnZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU2xpZGVyIiwic3R5bGVkIiwidDEiLCJUZXNUaW1vbmlhbHN0eWxlIiwiZGl2IiwiVGl0bGUiLCJMZWZ0IiwiUmlnaHQiLCJTbGlkZXJTdHlsZSIsImRhdGEiLCJuYW1lIiwic2Nob29sIiwidGVzdGltb255IiwiaW1nIiwiVGVzdGltb25pYWwiLCJwcm9wcyIsIm5leHQiLCJiaW5kIiwicHJldmlvdXMiLCJzbGlkZXIiLCJzbGlja05leHQiLCJzbGlja1ByZXYiLCJyZW5kZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJoMSIsInJlZiIsImMiLCJtYXAiLCJlYWNoIiwiY29udGFpbmVyIiwiY29sdW1ucyIsIm1kIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/testimonial/Testimonial.js\n");

/***/ })

});