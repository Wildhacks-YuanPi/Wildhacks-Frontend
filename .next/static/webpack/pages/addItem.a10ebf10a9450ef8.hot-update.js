"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addItem",{

/***/ "./pages/addItem.js":
/*!**************************!*\
  !*** ./pages/addItem.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _addItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItem.module.css */ \"./pages/addItem.module.css\");\n/* harmony import */ var _addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AddItemPage = ()=>{\n    _s();\n    // to change disease names/size, you only need to change the names in the list\n    // and the name in the signUpForm useState\n    const univList = [\n        \"Select University\",\n        \"Northwestern University\"\n    ];\n    const [itemInfo, setItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"a\",\n        seller_id: \"\",\n        item_name: \"\",\n        description: \"\",\n        address: \"\",\n        univ: \"\",\n        state: \"\"\n    });\n    const handleChange = (e)=>{\n        const name = e.target.name;\n        const value = e.target.value;\n        setItemInfo({\n            ...itemInfo,\n            [name]: value\n        });\n    };\n    // const handleSubmit = (e) => {\n    //   e.preventDefault();\n    //   // change the required fields if needed\n    //   if (\n    //     signUpForm.firstName &&\n    //     signUpForm.lastName &&\n    //     signUpForm.email &&\n    //     signUpForm.password &&\n    //     signUpForm.address &&\n    //     signUpForm.univ &&\n    //     signUpForm.univ != \"Select University\"\n    //   ) {\n    //     const newForm = { ...signUpForm, id: new Date().getTime().toString() };\n    //     console.log(newForm);\n    //     setInfo([...info, newForm]);\n    //     setSignUpForm({\n    //       firstName: \"\",\n    //       lastName: \"\",\n    //       email: \"\",\n    //       password: \"\",\n    //       address: \"\",\n    //       univ: \"\",\n    //     });\n    //   } else {\n    //     alert(\"Missing Fields!\");\n    //   }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().signUp),\n                    children: \" Add the item you want to sell! \"\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemInfo, {\n                    itemInfo: itemInfo,\n                    handleChange: handleChange,\n                    univList: univList\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitDiv),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitButton),\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AddItemPage, \"GRydQ06JitdOU0t+0BIfundGhi0=\");\n_c = AddItemPage;\n// Nested Components\nconst ItemInfo = (param)=>{\n    let { itemInfo , handleChange , univList  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionTitle),\n                children: \" Item Description \"\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockInput),\n                type: \"text\",\n                name: \"item_name\",\n                value: itemInfo.item_name,\n                placeholder: \"Item Name\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockParagraphInput),\n                type: \"text\",\n                name: \"description\",\n                value: itemInfo.description,\n                placeholder: \"Detailed description\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockInput),\n                type: \"text\",\n                name: \"address\",\n                value: itemInfo.address,\n                placeholder: \"Address\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().selectedState),\n                        onChange: handleChange,\n                        value: itemInfo.univ,\n                        name: \"univ\",\n                        children: univList.map((univ)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: univ,\n                                children: univ\n                            }, univList.indexOf(univ), false, {\n                                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().selectedState),\n                        onChange: handleChange,\n                        value: itemInfo.univ,\n                        name: \"univ\",\n                        children: univList.map((univ)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: univ,\n                                children: univ\n                            }, univList.indexOf(univ), false, {\n                                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                                lineNumber: 151,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ItemInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddItemPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"AddItemPage\");\n$RefreshReg$(_c1, \"ItemInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3dCQUkvQzs7Ozs7O2tDQUVGLDhEQUFDMEI7d0JBQ0NsQixXQUFXbEIsMEVBQW9CO3dCQUMvQmtDLFVBQVV0Qjt3QkFDVkksT0FBT2IsU0FBU08sSUFBSTt3QkFDcEJJLE1BQUs7a0NBRUpaLFNBQVNvQyxHQUFHLENBQUMsQ0FBQzVCLE9BQVM7NEJBQ3RCLHFCQUNFLDhEQUFDNkI7Z0NBQU92QixPQUFPTjswQ0FDWkE7K0JBRHVCUixTQUFTc0MsT0FBTyxDQUFDOUI7Ozs7O3dCQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7TUFsRk1ZO0FBb0ZOLCtEQUFlckIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZGRJdGVtLmpzPzZhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hZGRJdGVtLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQWRkSXRlbVBhZ2UgPSAoKSA9PiB7XG4gIC8vIHRvIGNoYW5nZSBkaXNlYXNlIG5hbWVzL3NpemUsIHlvdSBvbmx5IG5lZWQgdG8gY2hhbmdlIHRoZSBuYW1lcyBpbiB0aGUgbGlzdFxuICAvLyBhbmQgdGhlIG5hbWUgaW4gdGhlIHNpZ25VcEZvcm0gdXNlU3RhdGVcbiAgY29uc3QgdW5pdkxpc3QgPSBbXCJTZWxlY3QgVW5pdmVyc2l0eVwiLCBcIk5vcnRod2VzdGVybiBVbml2ZXJzaXR5XCJdO1xuXG4gIGNvbnN0IFtpdGVtSW5mbywgc2V0SXRlbUluZm9dID0gdXNlU3RhdGUoe1xuICAgIGlkOiBcImFcIixcbiAgICBzZWxsZXJfaWQ6IFwiXCIsXG4gICAgaXRlbV9uYW1lOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgdW5pdjogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldEl0ZW1JbmZvKHsgLi4uaXRlbUluZm8sIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgLy8gY2hhbmdlIHRoZSByZXF1aXJlZCBmaWVsZHMgaWYgbmVlZGVkXG4gIC8vICAgaWYgKFxuICAvLyAgICAgc2lnblVwRm9ybS5maXJzdE5hbWUgJiZcbiAgLy8gICAgIHNpZ25VcEZvcm0ubGFzdE5hbWUgJiZcbiAgLy8gICAgIHNpZ25VcEZvcm0uZW1haWwgJiZcbiAgLy8gICAgIHNpZ25VcEZvcm0ucGFzc3dvcmQgJiZcbiAgLy8gICAgIHNpZ25VcEZvcm0uYWRkcmVzcyAmJlxuICAvLyAgICAgc2lnblVwRm9ybS51bml2ICYmXG4gIC8vICAgICBzaWduVXBGb3JtLnVuaXYgIT0gXCJTZWxlY3QgVW5pdmVyc2l0eVwiXG4gIC8vICAgKSB7XG4gIC8vICAgICBjb25zdCBuZXdGb3JtID0geyAuLi5zaWduVXBGb3JtLCBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSB9O1xuICAvLyAgICAgY29uc29sZS5sb2cobmV3Rm9ybSk7XG4gIC8vICAgICBzZXRJbmZvKFsuLi5pbmZvLCBuZXdGb3JtXSk7XG4gIC8vICAgICBzZXRTaWduVXBGb3JtKHtcbiAgLy8gICAgICAgZmlyc3ROYW1lOiBcIlwiLFxuICAvLyAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgLy8gICAgICAgZW1haWw6IFwiXCIsXG4gIC8vICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAvLyAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAvLyAgICAgICB1bml2OiBcIlwiLFxuICAvLyAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGFsZXJ0KFwiTWlzc2luZyBGaWVsZHMhXCIpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25VcH0+IEFkZCB0aGUgaXRlbSB5b3Ugd2FudCB0byBzZWxsISA8L2gyPlxuICAgICAgICA8SXRlbUluZm9cbiAgICAgICAgICBpdGVtSW5mbz17aXRlbUluZm99XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdW5pdkxpc3Q9e3VuaXZMaXN0fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0RGl2fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBOZXN0ZWQgQ29tcG9uZW50c1xuY29uc3QgSXRlbUluZm8gPSAoeyBpdGVtSW5mbywgaGFuZGxlQ2hhbmdlLCB1bml2TGlzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9PiBJdGVtIERlc2NyaXB0aW9uIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0TmFtZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3NpZ25VcEZvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFzdE5hbWV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3NpZ25VcEZvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIml0ZW1fbmFtZVwiXG4gICAgICAgIHZhbHVlPXtpdGVtSW5mby5pdGVtX25hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSXRlbSBOYW1lXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrUGFyYWdyYXBoSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgdmFsdWU9e2l0ZW1JbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRldGFpbGVkIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICB2YWx1ZT17aXRlbUluZm8uYWRkcmVzc31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZFN0YXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2l0ZW1JbmZvLnVuaXZ9XG4gICAgICAgICAgbmFtZT1cInVuaXZcIlxuICAgICAgICA+XG4gICAgICAgICAge3VuaXZMaXN0Lm1hcCgodW5pdikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dW5pdn0ga2V5PXt1bml2TGlzdC5pbmRleE9mKHVuaXYpfT5cbiAgICAgICAgICAgICAgICB7dW5pdn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGVkU3RhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17aXRlbUluZm8udW5pdn1cbiAgICAgICAgICBuYW1lPVwidW5pdlwiXG4gICAgICAgID5cbiAgICAgICAgICB7dW5pdkxpc3QubWFwKCh1bml2KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt1bml2fSBrZXk9e3VuaXZMaXN0LmluZGV4T2YodW5pdil9PlxuICAgICAgICAgICAgICAgIHt1bml2fVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSXRlbVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkFkZEl0ZW1QYWdlIiwidW5pdkxpc3QiLCJpdGVtSW5mbyIsInNldEl0ZW1JbmZvIiwiaWQiLCJzZWxsZXJfaWQiLCJpdGVtX25hbWUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJ1bml2Iiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwibWFpbiIsImNsYXNzTmFtZSIsInBhZ2UiLCJoMiIsInNpZ25VcCIsIkl0ZW1JbmZvIiwiZGl2Iiwic3VibWl0RGl2IiwiYnV0dG9uIiwic3VibWl0QnV0dG9uIiwidHlwZSIsImZvcm0iLCJmb3JtQ29udHJvbCIsInNlY3Rpb25UaXRsZSIsImlucHV0Iiwid2hvbGVCbG9ja0lucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIndob2xlQmxvY2tQYXJhZ3JhcGhJbnB1dCIsInNlbGVjdCIsInNlbGVjdGVkU3RhdGUiLCJtYXAiLCJvcHRpb24iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/addItem.js\n"));

/***/ })

});