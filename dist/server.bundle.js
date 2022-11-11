/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function a(ctx) {\n  ctx.body = {\n    \"message\": \"hello form a!!\"\n  };\n}\nmodule.exports = {\n  a\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJhIiwiY3R4IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLENBQUMsQ0FBQ0MsR0FBRyxFQUFDO0VBQ1hBLEdBQUcsQ0FBQ0MsSUFBSSxHQUFDO0lBQ0wsU0FBUyxFQUFDO0VBQ2QsQ0FBQztBQUNMO0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDO0VBQ1hKO0FBQ0osQ0FBQyIsImZpbGUiOiIuL3NyYy9hcGkvYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gYShjdHgpe1xuICAgIGN0eC5ib2R5PXtcbiAgICAgICAgXCJtZXNzYWdlXCI6XCJoZWxsbyBmb3JtIGEhIVwiXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHM9e1xuICAgIGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function b(ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n}\nmodule.exports = {\n  b\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJiIiwiY3R4IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLENBQUMsQ0FBQ0MsR0FBRyxFQUFDO0VBQ1hBLEdBQUcsQ0FBQ0MsSUFBSSxHQUFDO0lBQ0wsU0FBUyxFQUFDO0VBQ2QsQ0FBQztBQUNMO0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDO0VBQ1hKO0FBQ0osQ0FBQyIsImZpbGUiOiIuL3NyYy9hcGkvYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGIoY3R4KXtcbiAgICBjdHguYm9keT17XG4gICAgICAgIFwibWVzc2FnZVwiOlwiaGVsbG8gZnJvbSBiXCJcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cz17XG4gICAgYlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const koa = __webpack_require__(/*! koa */ \"koa\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst app = new koa();\nconst router = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\nconst cors = __webpack_require__(/*! koa2-cors */ \"koa2-cors\");\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\napp.use(cors({\n  origin: function (ctx) {\n    // if (ctx.url === '/test') {\n    return \"*\"; // 允许来自所有域名请求\n    // }\n    // return \"http://localhost:8080\"; // 这样就能只允许 http://localhost:8080 这个域名的请求了\n  },\n\n  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],\n  maxAge: 5,\n  credentials: true,\n  // 当设置成允许请求携带cookie时，需要保证\"Access-Control-Allow-Origin\"是服务器有的域名，而不能是\"*\";\n  allowMethods: ['GET', 'POST', 'DELETE'],\n  allowHeaders: ['Content-Type', 'Authorization', 'Accept']\n}));\napp.use(helmet());\napp.use(statics(path.join(__dirname, '../public')));\napp.use(router());\napp.listen(3000);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwicGF0aCIsImFwcCIsInJvdXRlciIsImNvcnMiLCJoZWxtZXQiLCJzdGF0aWNzIiwidXNlIiwib3JpZ2luIiwiY3R4IiwiZXhwb3NlSGVhZGVycyIsIm1heEFnZSIsImNyZWRlbnRpYWxzIiwiYWxsb3dNZXRob2RzIiwiYWxsb3dIZWFkZXJzIiwiam9pbiIsIl9fZGlybmFtZSIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IkFBQUEsdURBQU1BLEdBQUcsR0FBQ0MsbUJBQU8sQ0FBQyxnQkFBSyxDQUFDO0FBQ3hCLE1BQU1DLElBQUksR0FBQ0QsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDO0FBQzFCLE1BQU1FLEdBQUcsR0FBQyxJQUFJSCxHQUFHLEVBQUU7QUFDbkIsTUFBTUksTUFBTSxHQUFDSCxtQkFBTyxDQUFDLCtDQUFpQixDQUFDO0FBQ3ZDLE1BQU1JLElBQUksR0FBQ0osbUJBQU8sQ0FBQyw0QkFBVyxDQUFDO0FBQy9CLE1BQU1LLE1BQU0sR0FBQ0wsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ2xDLE1BQU1NLE9BQU8sR0FBQ04sbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ25DRSxHQUFHLENBQUNLLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBQ1RJLE1BQU0sRUFBRSxVQUFVQyxHQUFHLEVBQUU7SUFDbkI7SUFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCO0lBQ0E7RUFDSixDQUFDOztFQUNEQyxhQUFhLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQztFQUMzREMsTUFBTSxFQUFFLENBQUM7RUFDVEMsV0FBVyxFQUFFLElBQUk7RUFBRTtFQUNuQkMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7RUFDdkNDLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsUUFBUTtBQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNIWixHQUFHLENBQUNLLEdBQUcsQ0FBQ0YsTUFBTSxFQUFFLENBQUM7QUFDakJILEdBQUcsQ0FBQ0ssR0FBRyxDQUFDRCxPQUFPLENBQUNMLElBQUksQ0FBQ2MsSUFBSSxDQUFDQyxTQUFTLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNsRGQsR0FBRyxDQUFDSyxHQUFHLENBQUNKLE1BQU0sRUFBRSxDQUFDO0FBQ2pCRCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxJQUFJLENBQUMsQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtvYT1yZXF1aXJlKCdrb2EnKTtcbmNvbnN0IHBhdGg9cmVxdWlyZSgncGF0aCcpXG5jb25zdCBhcHA9bmV3IGtvYSgpO1xuY29uc3Qgcm91dGVyPXJlcXVpcmUoJy4vcm91dGVzL3JvdXRlcycpXG5jb25zdCBjb3JzPXJlcXVpcmUoJ2tvYTItY29ycycpO1xuY29uc3QgaGVsbWV0PXJlcXVpcmUoJ2tvYS1oZWxtZXQnKVxuY29uc3Qgc3RhdGljcz1yZXF1aXJlKCdrb2Etc3RhdGljJylcbmFwcC51c2UoY29ycyh7XG4gICAgb3JpZ2luOiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgIC8vIGlmIChjdHgudXJsID09PSAnL3Rlc3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIqXCI7IC8vIOWFgeiuuOadpeiHquaJgOacieWfn+WQjeivt+axglxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiOyAvLyDov5nmoLflsLHog73lj6rlhYHorrggaHR0cDovL2xvY2FsaG9zdDo4MDgwIOi/meS4quWfn+WQjeeahOivt+axguS6hlxuICAgIH0sXG4gICAgZXhwb3NlSGVhZGVyczogWydXV1ctQXV0aGVudGljYXRlJywgJ1NlcnZlci1BdXRob3JpemF0aW9uJ10sXG4gICAgbWF4QWdlOiA1LFxuICAgIGNyZWRlbnRpYWxzOiB0cnVlLCAvLyDlvZPorr7nva7miJDlhYHorrjor7fmsYLmkLrluKZjb29raWXml7bvvIzpnIDopoHkv53or4FcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwi5piv5pyN5Yqh5Zmo5pyJ55qE5Z+f5ZCN77yM6ICM5LiN6IO95pivXCIqXCI7XG4gICAgYWxsb3dNZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ0RFTEVURSddLFxuICAgIGFsbG93SGVhZGVyczogWydDb250ZW50LVR5cGUnLCAnQXV0aG9yaXphdGlvbicsICdBY2NlcHQnXSxcbn0pKVxuYXBwLnVzZShoZWxtZXQoKSlcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCcuLi9wdWJsaWMnKSkpXG5hcHAudXNlKHJvdXRlcigpKVxuYXBwLmxpc3RlbigzMDAwKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\nconst router = new Router();\nrouter.get('/a', a.a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZXIuanM/OTJiYyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ2xDLE1BQU1DLENBQUMsR0FBQ0QsbUJBQU8sQ0FBQyxnQ0FBVSxDQUFDO0FBQzNCLE1BQU1FLE1BQU0sR0FBQyxJQUFJSCxNQUFNLEVBQUU7QUFDekJHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBQ0YsQ0FBQyxDQUFDQSxDQUFDLENBQUM7QUFDcEJHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDSCxNQUFNIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyPXJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgYT1yZXF1aXJlKCcuLi9hcGkvYScpXG5jb25zdCByb3V0ZXI9bmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvYScsYS5hKVxubW9kdWxlLmV4cG9ydHM9cm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\nconst router = new Router();\nrouter.get('/b', b.b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZXIuanM/MmZlNyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBQ2xDLE1BQU1DLENBQUMsR0FBQ0QsbUJBQU8sQ0FBQyxnQ0FBVSxDQUFDO0FBQzNCLE1BQU1FLE1BQU0sR0FBQyxJQUFJSCxNQUFNLEVBQUU7QUFDekJHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBQ0YsQ0FBQyxDQUFDQSxDQUFDLENBQUM7QUFDcEJHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDSCxNQUFNIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyPXJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuY29uc3QgYj1yZXF1aXJlKCcuLi9hcGkvYicpXG5jb25zdCByb3V0ZXI9bmV3IFJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvYicsYi5iKVxubW9kdWxlLmV4cG9ydHM9cm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\nmodule.exports = combineRoutes(aroutes, broutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUNDLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFDbEQsTUFBTUMsT0FBTyxHQUFDRCxtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFDbEMsTUFBTUUsT0FBTyxHQUFDRixtQkFBTyxDQUFDLDBDQUFXLENBQUM7QUFDbENHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFDTCxhQUFhLENBQUNFLE9BQU8sRUFBQ0MsT0FBTyxDQUFDIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21iaW5lUm91dGVzPXJlcXVpcmUoJ2tvYS1jb21iaW5lLXJvdXRlcnMnKVxuY29uc3QgYXJvdXRlcz1yZXF1aXJlKCcuL2FSb3V0ZXInKVxuY29uc3QgYnJvdXRlcz1yZXF1aXJlKCcuL2JSb3V0ZXInKVxubW9kdWxlLmV4cG9ydHM9Y29tYmluZVJvdXRlcyhhcm91dGVzLGJyb3V0ZXMpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "koa2-cors":
/*!****************************!*\
  !*** external "koa2-cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2-cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EyLWNvcnNcIj9hOWJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYTItY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYTItY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa2-cors\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });