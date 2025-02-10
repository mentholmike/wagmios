"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n// packages/react/use-callback-ref/src/useCallbackRef.tsx\n\nfunction useCallbackRef(callback) {\n    const callbackRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        callbackRef.current = callback;\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>(...args)=>callbackRef.current?.(...args), []);\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jYWxsYmFjay1yZWZAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjMuMThfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlEQUF5RDtBQUMxQjtBQUMvQixTQUFTQyxlQUFlQyxRQUFRO0lBQzlCLE1BQU1DLGNBQWNILHlDQUFZLENBQUNFO0lBQ2pDRiw0Q0FBZSxDQUFDO1FBQ2RHLFlBQVlHLE9BQU8sR0FBR0o7SUFDeEI7SUFDQSxPQUFPRiwwQ0FBYSxDQUFDLElBQU0sQ0FBQyxHQUFHUSxPQUFTTCxZQUFZRyxPQUFPLE1BQU1FLE9BQU8sRUFBRTtBQUM1RTtBQUdFLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FnbWlvcy1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLWNhbGxiYWNrLXJlZkAxLjEuMF9AdHlwZXMrcmVhY3RAMTguMy4xOF9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL2Rpc3QvaW5kZXgubWpzPzJmMTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvdXNlLWNhbGxiYWNrLXJlZi9zcmMvdXNlQ2FsbGJhY2tSZWYudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNhbGxiYWNrUmVmID0gUmVhY3QudXNlUmVmKGNhbGxiYWNrKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxsYmFja1JlZi5jdXJyZW50ID0gY2FsbGJhY2s7XG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoLi4uYXJncykgPT4gY2FsbGJhY2tSZWYuY3VycmVudD8uKC4uLmFyZ3MpLCBbXSk7XG59XG5leHBvcnQge1xuICB1c2VDYWxsYmFja1JlZlxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrUmVmIiwiY2FsbGJhY2siLCJjYWxsYmFja1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ1c2VNZW1vIiwiYXJncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\n");

/***/ })

};
;