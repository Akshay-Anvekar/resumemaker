module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8000,\n  mongoURI: 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',\n  API_URL: \"http://localhost:3000\",\n  ACCESS_TOKEN: \"0z6v8b4uua\",\n  ERROR: {\n    100: 'Please put a valid image url',\n    101: 'Please refresh and try to login again'\n  },\n  LOCALSESSION_ID: \"0z6v8b4ua\",\n  GOOGLE_CLIENTID: \"38122336055-2l78jb89vfsj8qtr8ac58t5onqv5bs3j.apps.googleusercontent.com\",\n  GOOGLE_SECRET: \"Sk34RldCKENc73QcQWxfd1JU\",\n  LOGOUT_REDIRECT: \"http://localhost:8080\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./config/resume_sample.js":
/*!*********************************!*\
  !*** ./config/resume_sample.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  personal: {\n    name: 'your name',\n    email: {\n      primary: 'johndoe@gmail.com',\n      secondry: 'jessica@gmail.com'\n    },\n    phone: {\n      primary: '9540841694',\n      secondry: '8299852138'\n    },\n    address: {\n      primary: 'Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017',\n      secondry: 'Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017'\n    }\n  },\n  summary: 'Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment and critical thinking abilities.',\n  skills: ['Time management', 'Time Letter preparation', 'Correspondence handling', 'Multi-line phone proficiency', 'Documents filing', 'Multi-line phone proficiency', 'Filing and data archiving'],\n  workexp: [{\n    designation: 'Administrative Assistant',\n    company: 'company A',\n    city: 'San Francisco',\n    state: 'CA',\n    start: '02/2017',\n    end: 'Current',\n    details: ['Screened all visitors and directed them to the correct employee or office.', 'Facilitated organized record retrieval and access.', 'Organized all new hire, security and temporary paperwork.']\n  }, {\n    designation: 'Customer Service Representative',\n    company: 'company B',\n    city: 'Berkeley',\n    state: 'CA',\n    start: '02/2016',\n    end: '02/2017',\n    details: ['Asked open-ended questions to assess customer needs.', 'Scored in top 10% of employees in successful resolution of issues.', 'Built long-term customer relationships and advised customers on purchases and promotions.']\n  }, {\n    designation: 'Cashier',\n    company: 'company C',\n    city: 'San Francisco',\n    state: 'CA',\n    start: '02/2014',\n    end: '02/2016',\n    details: ['Ran the register effectively and handled cash and credit purchases.', 'Attended to customer needs, questions and complaints.', 'Regularly checked the drawer to ensure that there were adequate cash and coin for transactions']\n  }],\n  education: [{\n    degree: 'Master of ArtsSan',\n    college: 'Jose State University',\n    'university': 'San Jose State University',\n    state: 'CA',\n    passedout: '2016'\n  }, {\n    degree: 'Bachelor of ArtsSan',\n    college: 'Jose State University',\n    'university': 'San Jose State University',\n    state: 'CA',\n    passedout: '2014'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/config/resume_sample.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/resume_sample.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/resume.js":
/*!**************************************!*\
  !*** ./server/controllers/resume.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/resume */ \"./server/models/resume.js\");\n/* harmony import */ var _resume_templates_template1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume_templates/template1 */ \"./server/resume_templates/template1.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar _default = function _default(router) {\n  var resumeCheckdataMiddleware =\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res, next) {\n      var resume_id, savedResumeData, defaultResumedata;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              resume_id = req.query['id'] ? req.query['id'].trim() : '1234567890';\n              _context.next = 3;\n              return _models_resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                resume_id: resume_id\n              });\n\n            case 3:\n              savedResumeData = _context.sent;\n\n              if (savedResumeData) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 7;\n              return _models_resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                resume_id: '1234567890'\n              });\n\n            case 7:\n              defaultResumedata = _context.sent;\n              req.finalResumedata = defaultResumedata;\n              _context.next = 12;\n              break;\n\n            case 11:\n              req.finalResumedata = savedResumeData;\n\n            case 12:\n              next();\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function resumeCheckdataMiddleware(_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  router.get('/download-resume',\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(req, res) {\n      var browser, page, pdf;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return puppeteer__WEBPACK_IMPORTED_MODULE_0___default.a.launch({\n                headless: true\n              });\n\n            case 2:\n              browser = _context2.sent;\n              _context2.next = 5;\n              return browser.newPage();\n\n            case 5:\n              page = _context2.sent;\n              _context2.next = 8;\n              return page[\"goto\"]('https://public-props.s3.ap-south-1.amazonaws.com/css/index.html', {\n                waitUntil: 'networkidle0'\n              });\n\n            case 8:\n              _context2.next = 10;\n              return page.pdf({\n                format: 'A4'\n              });\n\n            case 10:\n              pdf = _context2.sent;\n              _context2.next = 13;\n              return browser.close();\n\n            case 13:\n              res.set({\n                'Content-Type': 'application/pdf',\n                'Content-Length': pdf.length\n              });\n              res.send(pdf);\n\n            case 15:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x4, _x5) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n  router.get('/check-resume',\n  /*#__PURE__*/\n  function () {\n    var _ref3 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(req, res) {\n      var obj, resume, result;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              obj = {\n                \"resume_id\": \"1234567890\",\n                \"email\": {\n                  \"primary\": \"johndoe@mail.com\",\n                  \"secondry\": \"jessica@mail.com\"\n                },\n                \"phone\": {\n                  \"primary\": \"9999999999\",\n                  \"secondry\": \"9999999999\"\n                },\n                \"address\": {\n                  \"primary\": \"Suspendisse feugiat. Nullam accumsan lorem in dui.\",\n                  \"secondry\": \"Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017\"\n                },\n                \"name\": \"Himanshu savita\",\n                \"summary\": \"Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment and critical thinking abilities.\",\n                \"skills\": [\"Time management\", \"Time Letter preparation\", \"Correspondence handling\", \"Multi-line phone proficiency\", \"Documents filing\", \"Multi-line phone proficiency\", \"Filing and data archiving\"],\n                \"workexp\": [{\n                  \"designation\": \"Administrative Assistant\",\n                  \"company\": \"company A\",\n                  \"city\": \"San Francisco\",\n                  \"state\": \"CA\",\n                  \"start\": \"02/2017\",\n                  \"end\": \"Current\",\n                  \"details\": [\"Screened all visitors and directed them to the correct employee or office.\", \"Facilitated organized record retrieval and access.\", \"Organized all new hire, security and temporary paperwork.\"]\n                }, {\n                  \"designation\": \"Customer Service Representative\",\n                  \"company\": \"company B\",\n                  \"city\": \"Berkeley\",\n                  \"state\": \"CA\",\n                  \"start\": \"02/2016\",\n                  \"end\": \"02/2017\",\n                  \"details\": [\"Asked open-ended questions to assess customer needs.\", \"Scored in top 10% of employees in successful resolution of issues.\", \"Built long-term customer relationships and advised customers on purchases and promotions.\"]\n                }, {\n                  \"designation\": \"Cashier\",\n                  \"company\": \"company C\",\n                  \"city\": \"San Francisco\",\n                  \"state\": \"CA\",\n                  \"start\": \"02/2014\",\n                  \"end\": \"02/2016\",\n                  \"details\": [\"Ran the register effectively and handled cash and credit purchases.\", \"Attended to customer needs, questions and complaints.\", \"Regularly checked the drawer to ensure that there were adequate cash and coin for transactions\"]\n                }],\n                \"education\": [{\n                  \"degree\": \"Master of ArtsSan\",\n                  \"college\": \"Jose State University\",\n                  \"university\": \"San Jose State University\",\n                  \"state\": \"CA\",\n                  \"passedout\": \"2016\"\n                }, {\n                  \"degree\": \"Bachelor of ArtsSan\",\n                  \"college\": \"Jose State University\",\n                  \"university\": \"San Jose State University\",\n                  \"state\": \"CA\",\n                  \"passedout\": \"2014\"\n                }]\n              };\n              resume = new _models_resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj);\n              _context3.next = 4;\n              return resume.save();\n\n            case 4:\n              result = _context3.sent;\n              res.send({\n                result: result\n              });\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x6, _x7) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n  router.get('/get-template', resumeCheckdataMiddleware, function (req, res) {\n    console.log(req.finalResumedata);\n    res.send(Object(_resume_templates_template1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req.finalResumedata));\n  });\n  router.post('/update-resume',\n  /*#__PURE__*/\n  function () {\n    var _ref4 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4(req, res) {\n      var resumeObject, resume_id, result;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              resumeObject = {};\n\n              if (req.body.info_type == 0) {\n                //0 - PERSONAL INFO\n                resumeObject['name'] = req.body.user_name ? req.body.user_name : '';\n                resumeObject['email'] = {};\n                resumeObject['email']['primary'] = req.body.user_email ? req.body.user_email : '';\n                resumeObject['phone'] = {};\n                resumeObject['phone']['primary'] = req.body.user_phone ? req.body.user_phone : '';\n                resumeObject['address'] = {};\n                resumeObject['address']['primary'] = req.body.user_address ? req.body.user_address : '';\n              }\n\n              if (req.body.info_type == 1) {\n                //1 - SUMMARY\n                resumeObject['summary'] = req.body.user_summary ? req.body.user_summary : '';\n              }\n\n              if (req.body.info_type == 2) {\n                //2 - SKILLS\n                resumeObject['skills'] = req.body.user_skills ? req.body.user_skills : '';\n              }\n\n              if (req.body.info_type == 3) {\n                //3 - EXPERIENCE\n                resumeObject['workexp'] = req.body.user_exp ? req.body.user_exp : [];\n              }\n\n              if (req.body.info_type == 4) {\n                //3 - EXPERIENCE\n                resumeObject['education'] = req.body.user_education ? req.body.user_education : [];\n              }\n\n              resume_id = req.body.resume_id;\n              resumeObject['resume_id'] = req.body.resume_id;\n              console.log(resume_id);\n              _context4.prev = 9;\n              _context4.next = 12;\n              return _models_resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n                resume_id: resume_id\n              }, resumeObject, {\n                upsert: true,\n                \"new\": true\n              });\n\n            case 12:\n              result = _context4.sent;\n              console.log(result); // const resume = new Resume(resumeObject)\n              //const result = await resume.save();\n\n              res.status(200).send({\n                data: result\n              });\n              _context4.next = 21;\n              break;\n\n            case 17:\n              _context4.prev = 17;\n              _context4.t0 = _context4[\"catch\"](9);\n              console.log(_context4.t0);\n              res.status(400).send({\n                error: \"database insertion error\"\n              });\n\n            case 21:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[9, 17]]);\n    }));\n\n    return function (_x8, _x9) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n  router.get('/get-resume-data', resumeCheckdataMiddleware, function (req, res) {\n    return res.send({\n      data: req.finalResumedata\n    });\n  });\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/controllers/resume.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/resume.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/models/resume.js":
/*!*********************************!*\
  !*** ./server/models/resume.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/resume_sample */ \"./config/resume_sample.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n // const {DB} = CONFIG;\n\nvar ResumeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  resume_id: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  name: {\n    type: String,\n    trim: true,\n    required: true,\n    \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.name\n  },\n  email: {\n    primary: {\n      type: String,\n      trim: true,\n      required: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.email.primary\n    },\n    secondry: {\n      type: String,\n      trim: true,\n      required: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.email.secondry\n    }\n  },\n  phone: {\n    primary: {\n      type: String,\n      trim: true,\n      required: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.phone.secondry\n    },\n    secondry: {\n      type: String,\n      trim: true,\n      required: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.phone.secondry\n    }\n  },\n  address: {\n    primary: {\n      type: String,\n      trim: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.address.primary\n    },\n    secondry: {\n      type: String,\n      trim: true,\n      \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].personal.address.secondry\n    }\n  },\n  summary: {\n    type: String,\n    trim: true,\n    \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].summary\n  },\n  skills: {\n    type: Array,\n    \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].skills\n  },\n  workexp: {\n    type: Array,\n    \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].workexp\n  },\n  education: {\n    type: Array,\n    \"default\": _config_resume_sample__WEBPACK_IMPORTED_MODULE_2__[\"default\"].education\n  },\n  // workexp: [\n  //    {\n  //     // designation: {type: String, trim: true, lowercase: true},\n  //     // company: {type: String, trim: true, lowercase: true},\n  //     // city: {type: String, trim: true, lowercase: true}, state: {type: String, trim: true, lowercase: true},\n  //     // start: {type: String, trim: true, lowercase: true}, end: {type: String, trim: true, lowercase: true},\n  //     // details: [\n  //     //    {type: String, trim: true, lowercase: true}\n  //     // ],\n  //     default: SAMPLE_RESUME.workExp\n  //    }\n  // ],\n  // education: [\n  //    {\n  //       // degree: {type: String, trim: true, lowercase: true},\n  //       // college: {type: String, trim: true, lowercase: true}, 'university': {type: String, trim: true, lowercase: true},\n  //       // state: {type: String, trim: true, lowercase: true}, passedout: {type: String, trim: true, lowercase: true}\n  //       default: SAMPLE_RESUME.education\n  //    },\n  // ],\n  profile_pic: {\n    thumbnail: {\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    },\n    original: {\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    }\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('resume', ResumeSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ResumeSchema, \"ResumeSchema\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/models/resume.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/models/resume.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/resume.js?");

/***/ }),

/***/ "./server/resume_templates/template1.js":
/*!**********************************************!*\
  !*** ./server/resume_templates/template1.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar listSkills = function listSkills(skillsListArray) {\n  var result = \"<td><ul>\";\n\n  for (var x = 0; x < skillsListArray.length; x++) {\n    if (x != 0 && x % 5 == 0) result += \"</td></ul><td><ul><li>\".concat(skillsListArray[x], \"</li>\");else result += \"<li>\".concat(skillsListArray[x], \"</li>\");\n  }\n\n  result += \"</td></ul>\";\n  return result;\n};\n\nvar listItems = function listItems(items) {\n  var result = '';\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var x = _step.value;\n      result += \"<li>\".concat(x, \"</li>\");\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return result;\n};\n\nvar listWorkExperiences = function listWorkExperiences(expListArray) {\n  var result = \"\";\n\n  for (var x = 0; x < expListArray.length; x++) {\n    result += \"<div class=\\\"work-info-box\\\">\\n\\t\\t\\t\\t\\t            <div>\\n\\t\\t\\t\\t\\t                <ul class=\\\"inline-items\\\">\\n\\t\\t\\t\\t\\t                    <li><span class=\\\"txt-bold\\\">\".concat(expListArray[x].designation, \"</span></li>\\n\\t\\t\\t\\t\\t                    <li class=\\\"seperator-dot\\\"><span class=\\\"uppercase txt-itlc\\\">\").concat(expListArray[x].company, \"</span></li>\\n\\t\\t\\t\\t\\t                </ul>\\n\\t\\t\\t\\t\\t            </div>\\n\\t\\t\\t\\t\\t            <div>\\n\\t\\t\\t\\t\\t                <ul class=\\\"inline-items\\\">\\n\\t\\t\\t\\t\\t                    <li><span>\").concat(expListArray[x].city, \"</span><span>, </span><span>\").concat(expListArray[x].state, \"</span></li>\\n\\t\\t\\t\\t\\t                    <li class=\\\"seperator-dot\\\"><span>\").concat(expListArray[x].start, \"</span><span> to </span><span>\").concat(expListArray[x].end, \"</span></li>\\n\\t\\t\\t\\t\\t                </ul>\\n\\t\\t\\t\\t\\t            </div>\\n\\t\\t\\t\\t\\t            \").concat(expListArray[x].details.length > 0 && \"<div class=\\\"margin-lft-35\\\">\\n\\t\\t\\t\\t\\t\\t                <ul>\\n\\t\\t\\t\\t\\t\\t                    \".concat(listItems(expListArray[x].details), \"\\n\\t\\t\\t\\t\\t\\t                </ul>\\n\\t\\t\\t\\t\\t\\t             </div>\"), \"\\n\\t                       </div>\");\n  }\n\n  result += \"</td></ul>\";\n  return result;\n};\n\nvar listEducationalDetails = function listEducationalDetails(eduListArray) {\n  var result = \"\";\n\n  for (var x = 0; x < eduListArray.length; x++) {\n    result += \"<div class=\\\"education-info-box\\\">\\n                <div>\\n                    <ul class=\\\"inline-items\\\">\\n                        <li><span class=\\\"txt-bold\\\">\".concat(eduListArray[x].degree, \"</span></li>\\n                        <li class=\\\"seperator-dot\\\"><span class=\\\"capitalize txt-itlc\\\">\").concat(eduListArray[x].college, \"</span></li>\\n                    </ul>\\n                </div>\\n                <div>\\n                    <ul class=\\\"inline-items\\\">\\n                        <li><span class=\\\"capitalize\\\">\").concat(eduListArray[x].university, \"</span><span>, </span><span>\").concat(eduListArray[x].state, \"</span></li>\\n                        <li class=\\\"seperator-dot\\\"><span>\").concat(eduListArray[x].passedout, \"</span></li>\\n                    </ul>\\n                </div>\\n           </div>\");\n  }\n\n  return result;\n};\n\nvar _default = function _default(result) {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title>feelfunny</title>\\n            <meta charset=\\\"UTF-8\\\">\\n            <meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=UTF-8\\\">\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/style.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\\n                <main class=\\\"main-content-box\\\">\\n                    <div class=\\\"main-content-wrapper\\\">\\n                        <div class=\\\"resume_section section-border resume_personal\\\">\\n                            <div class=\\\"name-section uppercase\\\">\".concat(result.name, \"</div>\\n                            <div class=\\\"txt-right\\\">\\n                                <div>\").concat(result.phone.primary, \"</div>\\n                                <div>\").concat(result.address.primary, \"</div>\\n                                <div>\").concat(result.email.primary, \"</div>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"resume_section resume_summary\\\">\\n                            <div class=\\\"section_heading uppercase\\\">professional summary</div>\\n                            <div class=\\\"resume-content\\\">\\n                                <div>\").concat(result.summary, \"</div>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"resume_section resume_skills\\\">\\n                            <div class=\\\"section_heading uppercase\\\">skills</div>\\n                            <div class=\\\"resume-content\\\">\\n                                <table class=\\\"skills-list-table\\\">\\n                                    <tbody>\\n                                        <tr class=\\\"vertical-top\\\">\\n                                            \").concat(listSkills(result.skills), \"\\n                                        </tr>\\n                                    </tbody>\\n                                </table>\\n                            </div>\\n                        </div>\\n                        <div class=\\\"resume_section resume_work\\\">\\n                            <div class=\\\"section_heading uppercase\\\">work history</div>\\n                            <div class=\\\"resume-content\\\">\\n                                \").concat(listWorkExperiences(result.workexp), \"\\n                            </div>\\n                        </div>\\n                        <div class=\\\"resume_section resume_education\\\">\\n                            <div class=\\\"section_heading uppercase\\\">education</div>\\n                            <div class=\\\"resume-content\\\">\\n                               \").concat(listEducationalDetails(result.education), \"\\n                            </div>\\n                        </div>\\n                        </div>\\n                    </main>\\n          </div>\\n        </body>\\n      </html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(listSkills, \"listSkills\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/resume_templates/template1.js\");\n  reactHotLoader.register(listItems, \"listItems\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/resume_templates/template1.js\");\n  reactHotLoader.register(listWorkExperiences, \"listWorkExperiences\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/resume_templates/template1.js\");\n  reactHotLoader.register(listEducationalDetails, \"listEducationalDetails\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/resume_templates/template1.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/resume_templates/template1.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/resume_templates/template1.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _controllers_resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/resume */ \"./server/controllers/resume.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongoURI, {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public')));\napp.use(function (req, res, next) {\n  // Website you wish to allow to connect\n  res.setHeader('Access-Control-Allow-Origin', '*'); // Request methods you wish to allow\n\n  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow\n\n  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // Set to true if you need the website to include cookies in the requests sent\n  // to the API (e.g. in case you use sessions)\n\n  res.setHeader('Access-Control-Allow-Credentials', true); // Pass to next layer of middleware\n\n  next();\n}); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_7__[\"default\"].compile(app);\napp.use('/api', Object(_controllers_resume__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title>feelfunny</title>\\n            <meta charset=\\\"UTF-8\\\">\\n<meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=UTF-8\\\">\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Documents/live-projects/Resume-builder/dev/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/live-projects/Resume-builder/dev/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });