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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _addItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItem.module.css */ \"./pages/addItem.module.css\");\n/* harmony import */ var _addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AddItemPage = ()=>{\n    _s();\n    // to change disease names/size, you only need to change the names in the list\n    // and the name in the signUpForm useState\n    const univList = [\n        \"Select University\",\n        \"Northwestern University\"\n    ];\n    const condList = [\n        \"Select Condition\",\n        \"brand new\",\n        \"new\",\n        \"used\",\n        \"damanged\",\n        \"dysfunctional\"\n    ];\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [info, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function handleFileChange(event) {\n        setSelectedFile(event.target.files[0]);\n    }\n    async function handleUpload() {\n        const formData = new FormData();\n        formData.append(\"image\", selectedFile);\n        try {\n            const response = await fetch(\"/upload\", {\n                method: \"POST\",\n                body: formData\n            });\n            console.log(\"File uploaded successfully!\");\n        } catch (error) {\n            console.error(\"Error uploading file:\", error);\n        }\n    }\n    const [itemInfo, setItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: 1,\n        seller_id: \"a\",\n        item_name: \"\",\n        description: \"\",\n        original_price: \"\",\n        univ: \"\",\n        state: \"\",\n        cond: \"\",\n        sold: 0,\n        price: 0\n    });\n    const handleChange = (e)=>{\n        const name = e.target.name;\n        const value = e.target.value;\n        setItemInfo({\n            ...itemInfo,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // change the required fields if needed\n        if (// itemInfo.item_name &&\n        // itemInfo.univ &&\n        // itemInfo.state &&\n        // itemInfo.cond &&\n        // itemInfo.univ != \"Select University\" &&\n        // itemInfo.cond != \"Select Condition\" &&\n        // selectedFile != NULL\n        true) {\n            const newForm = {\n                ...itemInfo,\n                id: new Date().getTime().toString()\n            };\n            console.log(newForm);\n            setInfo([\n                ...info,\n                newForm\n            ]);\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().signUp),\n                    children: \" Add the item you want to sell! \"\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemInfo, {\n                    itemInfo: itemInfo,\n                    handleChange: handleChange,\n                    condList: condList,\n                    univList: univList\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UploadImage, {\n                    itemInfo: itemInfo,\n                    handleChange: handleChange,\n                    handleFileChange: handleFileChange,\n                    handleUpload: handleUpload\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitDiv),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitButton),\n                        type: \"submit\",\n                        onClick: handleSubmit,\n                        children: \"Estimate the price!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AddItemPage, \"SRRDEBrOE7DUg4VVklUE8fljmnA=\");\n_c = AddItemPage;\n// Nested Components\nconst ItemInfo = (param)=>{\n    let { itemInfo , handleChange , condList , univList  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionTitle),\n                children: \" Item Description \"\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockInput),\n                type: \"text\",\n                name: \"item_name\",\n                value: itemInfo.item_name,\n                placeholder: \"Item Name\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockParagraphInput),\n                type: \"text\",\n                name: \"description\",\n                value: itemInfo.description,\n                placeholder: \"Detailed description\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockInput),\n                type: \"text\",\n                name: \"original_price\",\n                value: itemInfo.original_price,\n                placeholder: \"Original Price\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().selectedState1),\n                        onChange: handleChange,\n                        value: itemInfo.cond,\n                        name: \"cond\",\n                        children: condList.map((cond)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: cond,\n                                children: cond\n                            }, condList.indexOf(cond), false, {\n                                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                                lineNumber: 145,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().selectedState2),\n                        onChange: handleChange,\n                        value: itemInfo.univ,\n                        name: \"univ\",\n                        children: univList.map((univ)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: univ,\n                                children: univ\n                            }, univList.indexOf(univ), false, {\n                                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                                lineNumber: 160,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ItemInfo;\nconst UploadImage = (param)=>{\n    let { itemInfo , handleChange , handleFileChange , handleUpload  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionTitle),\n                children: \" Upload Item Image for Inspection \"\n            }, void 0, false, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().wholeBlockInput),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        onChange: handleFileChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleUpload,\n                        className: (_addItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        children: \"Upload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                        lineNumber: 178,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n                lineNumber: 176,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jerryc/Desktop/Northwestern/2022-2023/3. Spring/Wildhacks/Wildhacks-Frontend/pages/addItem.js\",\n        lineNumber: 174,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = UploadImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddItemPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AddItemPage\");\n$RefreshReg$(_c1, \"ItemInfo\");\n$RefreshReg$(_c2, \"UploadImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtRQUEvRCxFQUFFN0IsU0FBUSxFQUFFWSxhQUFZLEVBQUUzQixpQkFBZ0IsRUFBRUksYUFBWSxFQUFFO0lBQzdFLHFCQUNFLDhEQUFDK0M7UUFBS1osV0FBVy9DLHdFQUFrQjs7MEJBQ2pDLDhEQUFDcUQ7Z0JBQUlOLFdBQVcvQyx5RUFBbUI7MEJBQUU7Ozs7OzswQkFDbkMsOERBQUNxRDtnQkFBSU4sV0FBVy9DLDRFQUFzQjs7a0NBQ3BDLDhEQUFDOEQ7d0JBQU1MLE1BQUs7d0JBQU9WLFdBQVcvQyxtRUFBYTt3QkFBRWlFLFVBQVV6RDs7Ozs7O2tDQUN2RCw4REFBQytDO3dCQUFPRyxTQUFTOUM7d0JBQWNtQyxXQUFXL0MsbUVBQWE7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRTtNQVZNb0Q7QUFZTiwrREFBZW5ELFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkSXRlbS5qcz82YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWRkSXRlbS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEFkZEl0ZW1QYWdlID0gKCkgPT4ge1xuICAvLyB0byBjaGFuZ2UgZGlzZWFzZSBuYW1lcy9zaXplLCB5b3Ugb25seSBuZWVkIHRvIGNoYW5nZSB0aGUgbmFtZXMgaW4gdGhlIGxpc3RcbiAgLy8gYW5kIHRoZSBuYW1lIGluIHRoZSBzaWduVXBGb3JtIHVzZVN0YXRlXG4gIGNvbnN0IHVuaXZMaXN0ID0gW1wiU2VsZWN0IFVuaXZlcnNpdHlcIiwgXCJOb3J0aHdlc3Rlcm4gVW5pdmVyc2l0eVwiXTtcbiAgY29uc3QgY29uZExpc3QgPSBbXCJTZWxlY3QgQ29uZGl0aW9uXCIsIFwiYnJhbmQgbmV3XCIsIFwibmV3XCIsIFwidXNlZFwiLCBcImRhbWFuZ2VkXCIsIFwiZHlzZnVuY3Rpb25hbFwiXTtcblxuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVGaWxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGxvYWQoKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBzZWxlY3RlZEZpbGUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvdXBsb2FkXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIGZpbGU6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBbaXRlbUluZm8sIHNldEl0ZW1JbmZvXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogMSxcbiAgICBzZWxsZXJfaWQ6IFwiYVwiLFxuICAgIGl0ZW1fbmFtZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBvcmlnaW5hbF9wcmljZTogXCJcIixcbiAgICB1bml2OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIGNvbmQ6IFwiXCIsXG4gICAgc29sZDogMCxcbiAgICBwcmljZTogMCxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldEl0ZW1JbmZvKHsgLi4uaXRlbUluZm8sIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY2hhbmdlIHRoZSByZXF1aXJlZCBmaWVsZHMgaWYgbmVlZGVkXG4gICAgaWYgKFxuICAgICAgLy8gaXRlbUluZm8uaXRlbV9uYW1lICYmXG4gICAgICAvLyBpdGVtSW5mby51bml2ICYmXG4gICAgICAvLyBpdGVtSW5mby5zdGF0ZSAmJlxuICAgICAgLy8gaXRlbUluZm8uY29uZCAmJlxuICAgICAgLy8gaXRlbUluZm8udW5pdiAhPSBcIlNlbGVjdCBVbml2ZXJzaXR5XCIgJiZcbiAgICAgIC8vIGl0ZW1JbmZvLmNvbmQgIT0gXCJTZWxlY3QgQ29uZGl0aW9uXCIgJiZcbiAgICAgIC8vIHNlbGVjdGVkRmlsZSAhPSBOVUxMXG4gICAgICB0cnVlXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdGb3JtID0geyAuLi5pdGVtSW5mbywgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkgfTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0Zvcm0pO1xuICAgICAgc2V0SW5mbyhbLi4uaW5mbywgbmV3Rm9ybV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIk1pc3NpbmcgRmllbGRzIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWduVXB9PiBBZGQgdGhlIGl0ZW0geW91IHdhbnQgdG8gc2VsbCEgPC9oMj5cbiAgICAgICAgPEl0ZW1JbmZvXG4gICAgICAgICAgaXRlbUluZm89e2l0ZW1JbmZvfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNvbmRMaXN0PXtjb25kTGlzdH1cbiAgICAgICAgICB1bml2TGlzdD17dW5pdkxpc3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxVcGxvYWRJbWFnZVxuICAgICAgICAgIGl0ZW1JbmZvPXtpdGVtSW5mb31cbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBoYW5kbGVGaWxlQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZVVwbG9hZD17aGFuZGxlVXBsb2FkfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0RGl2fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFc3RpbWF0ZSB0aGUgcHJpY2UhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gTmVzdGVkIENvbXBvbmVudHNcbmNvbnN0IEl0ZW1JbmZvID0gKHsgaXRlbUluZm8sIGhhbmRsZUNoYW5nZSwgY29uZExpc3QsIHVuaXZMaXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0+IEl0ZW0gRGVzY3JpcHRpb24gPC9kaXY+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIml0ZW1fbmFtZVwiXG4gICAgICAgIHZhbHVlPXtpdGVtSW5mby5pdGVtX25hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSXRlbSBOYW1lXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrUGFyYWdyYXBoSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgdmFsdWU9e2l0ZW1JbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRldGFpbGVkIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrSW5wdXR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIm9yaWdpbmFsX3ByaWNlXCJcbiAgICAgICAgdmFsdWU9e2l0ZW1JbmZvLm9yaWdpbmFsX3ByaWNlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIk9yaWdpbmFsIFByaWNlXCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZFN0YXRlMX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtpdGVtSW5mby5jb25kfVxuICAgICAgICAgIG5hbWU9XCJjb25kXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjb25kTGlzdC5tYXAoKGNvbmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NvbmR9IGtleT17Y29uZExpc3QuaW5kZXhPZihjb25kKX0+XG4gICAgICAgICAgICAgICAge2NvbmR9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGVkU3RhdGUyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2l0ZW1JbmZvLnVuaXZ9XG4gICAgICAgICAgbmFtZT1cInVuaXZcIlxuICAgICAgICA+XG4gICAgICAgICAge3VuaXZMaXN0Lm1hcCgodW5pdikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dW5pdn0ga2V5PXt1bml2TGlzdC5pbmRleE9mKHVuaXYpfT5cbiAgICAgICAgICAgICAgICB7dW5pdn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cblxuY29uc3QgVXBsb2FkSW1hZ2UgPSAoeyBpdGVtSW5mbywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVGaWxlQ2hhbmdlLCBoYW5kbGVVcGxvYWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250cm9sfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvblRpdGxlfT4gVXBsb2FkIEl0ZW0gSW1hZ2UgZm9yIEluc3BlY3Rpb24gPC9kaXY+ICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aG9sZUJsb2NrSW5wdXR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+VXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRJdGVtUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQWRkSXRlbVBhZ2UiLCJ1bml2TGlzdCIsImNvbmRMaXN0Iiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiaW5mbyIsInNldEluZm8iLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIml0ZW1JbmZvIiwic2V0SXRlbUluZm8iLCJpZCIsInNlbGxlcl9pZCIsIml0ZW1fbmFtZSIsImRlc2NyaXB0aW9uIiwib3JpZ2luYWxfcHJpY2UiLCJ1bml2Iiwic3RhdGUiLCJjb25kIiwic29sZCIsInByaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibmV3Rm9ybSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJhbGVydCIsIm1haW4iLCJjbGFzc05hbWUiLCJwYWdlIiwiaDIiLCJzaWduVXAiLCJJdGVtSW5mbyIsIlVwbG9hZEltYWdlIiwiZGl2Iiwic3VibWl0RGl2IiwiYnV0dG9uIiwic3VibWl0QnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJmb3JtIiwiZm9ybUNvbnRyb2wiLCJzZWN0aW9uVGl0bGUiLCJpbnB1dCIsIndob2xlQmxvY2tJbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ3aG9sZUJsb2NrUGFyYWdyYXBoSW5wdXQiLCJzZWxlY3QiLCJzZWxlY3RlZFN0YXRlMSIsIm1hcCIsIm9wdGlvbiIsImluZGV4T2YiLCJzZWxlY3RlZFN0YXRlMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/addItem.js\n"));

/***/ })

});