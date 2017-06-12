/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _service = __webpack_require__(1);

	var _service2 = _interopRequireDefault(_service);

	var _cmpt = __webpack_require__(3);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 入口文件
	 */
	angular.module("bootstrap", [_service2.default, _cmpt2.default]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhaoky on 2017/4/5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _data = __webpack_require__(2);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataExtend = function () {
		function DataExtend() {
			_classCallCheck(this, DataExtend);
		}

		_createClass(DataExtend, [{
			key: "extend",
			value: function extend(destination, source) {
				for (var prop in source) {
					if (!source.hasOwnProperty(prop)) {
						continue;
					}
					destination[prop] = source[prop];
				}
			}
		}]);

		return DataExtend;
	}();

	var ActionEvent = function () {
		_createClass(ActionEvent, null, [{
			key: "$inject",
			get: function get() {
				return ["$window"];
			}
		}]);

		function ActionEvent($window) {
			_classCallCheck(this, ActionEvent);

			var isSupportTouch = "ontouchend" in $window.document,
			    actionEvent = void 0;

			actionEvent = {
				start: isSupportTouch ? "touchstart" : "mousedown",
				move: isSupportTouch ? "touchmove" : "mousemove",
				end: isSupportTouch ? "touchend" : "mouseup",
				wheel: "mousewheel"
			};

			this.event = actionEvent;
		}

		return ActionEvent;
	}();

	var StopIosDropDown = function () {
		function StopIosDropDown() {
			_classCallCheck(this, StopIosDropDown);
		}

		_createClass(StopIosDropDown, [{
			key: "stop",
			value: function stop(actionEvent) {
				document.querySelector("body").addEventListener(actionEvent.event.start, function (ev) {
					if (_isPc() || !_isPc() && ev.target.nodeName == "A") {
						return;
					}
					ev.preventDefault();
				});
			}
		}]);

		return StopIosDropDown;
	}();

	var InitArrow = function () {
		function InitArrow() {
			_classCallCheck(this, InitArrow);
		}

		_createClass(InitArrow, [{
			key: "init",
			value: function init() {
				var page = document.querySelectorAll(".dock-fill"),
				    arrowNode = document.createElement("div");

				arrowNode.classList.add("-arrow");

				page[0].appendChild(arrowNode);
			}
		}, {
			key: "destroy",
			value: function destroy() {
				var arrowNode = document.querySelector(".-arrow");

				arrowNode.parentNode.removeChild(arrowNode);
			}
		}]);

		return InitArrow;
	}();

	function _isPc() {

		return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function (i) {
			return navigator.userAgent.indexOf(i) < 0;
		});
	}

	exports.default = angular.module("appServices", []).constant("resumeData", _data2.default).service("actionEvent", ActionEvent).service("stopIosDropDown", StopIosDropDown).service("dataExtend", DataExtend).service("initArrow", InitArrow).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
		"cn": {
			"header": {
				"langList": [
					"中",
					"英"
				],
				"titleList": [
					{
						"svg": "img/d_home.svg",
						"title": "首页"
					},
					{
						"svg": "img/d_info.svg",
						"title": "关于我"
					},
					{
						"svg": "img/d_skills.svg",
						"title": "技能栈"
					},
					{
						"svg": "img/d_exp.svg",
						"title": "经历"
					},
					{
						"svg": "img/d_works.svg",
						"title": "作品集"
					},
					{
						"svg": "img/d_contact.svg",
						"title": "联系我"
					}
				]
			},
			"footer": {},
			"default": {
				"quote": "路漫漫其修远兮吾将上下而求索,我会一直行走在我所热爱的前端之路上......",
				"desList": [
					"我叫周瑞豪",
					"一名前端开发工程师",
					"性格沉稳,不畏困难,喜欢探索前端最前沿的知识"
				]
			},
			"info": {
				"title": "关于我",
				"infoList": [
					{
						"icon": "img/i_age.svg",
						"key": "年龄",
						"value": "23岁"
					},
					{
						"icon": "img/i_edu.svg",
						"key": "学历",
						"value": "本科"
					},
					{
						"icon": "img/i_status.svg",
						"key": "专业",
						"value": "计算机软件"
					},
					{
						"icon": "img/i_site.svg",
						"key": "坐标",
						"value": "上海"
					}
				],
				"desList": [
					"一年半前端开发经验,常驻PC端、移动端开发",
					"熟悉MVC、MVVM开发,熟练掌握Vue、Angular框架,对React也有所了解",
					"提倡前端模块化、自动化和工程化,熟练掌握gulp、webpack等前端构建工具",
					"除此之外,我熟练掌握NodeJS开发平台以及一门后台语言PHP",
					"2017,我会在前端之路越走越远......"
				]
			},
			"skill": {
				"title": "技能栈",
				"outCircleList": [
					{
						"color": "rgba(121,100,102,0.8)",
						"name": "Angular"
					},
					{
						"color": "rgba(49,65,82,0.8)",
						"name": "Vue"
					},
					{
						"color": "rgba(76,157,160,0.8)",
						"name": "Gulp"
					},
					{
						"color": "rgba(66,66,66,0.8)",
						"name": "Webpack"
					},
					{
						"color": "rgba(193,131,106,0.8)",
						"name": "Stylus"
					},
					{
						"color": "rgba(117,148,179,0.8)",
						"name": "NodeJs"
					},
					{
						"color": "rgba(71,83,94,0.8)",
						"name": "PHP"
					},
					{
						"color": "rgba(147,147,189,0.8)",
						"name": "Ajax"
					}
				],
				"innerCircleList": [
					{
						"color": "rgba(179,164,140,0.8)",
						"name": "HTML"
					},
					{
						"color": "rgba(171,209,220,0.8)",
						"name": "CSS"
					},
					{
						"color": "rgba(238,215,163,0.8)",
						"name": "JS"
					},
					{
						"color": "rgba(207,184,178,0.8)",
						"name": "es6"
					}
				],
				"desList": [
					"熟练掌握HTML、CSS/CSS预处理、JS以及JS的各种类库,并且熟悉es6语法",
					"擅长模块化、组件化开发,熟练掌握前端框架Vue、Angular以及了解React",
					"熟练使用前端自动化、工程化构建工具,例如:Gulp、Grunt、Webpack",
					"熟练掌握NodeJs开发平台、PHP后台语言"
				]
			},
			"works": {
				"title": "作品集",
				"worksList": [
					{
						"title": "外卖APP",
						"des1": "1.该项目是手机叫外卖软件，一款爱吃又很宅人们的专属APP。",
						"des2": "2.参与功能汇总，并确定技术选型。利用vue框架搭建前台，页面功能组件开发，模块化开发。",
						"des3": "3.该项目是单页面应用，用户体验好，运行快速不需要刷新整个页面，并且服务器压力小。",
						"url": "javascript:;"
					},
					{
						"title": "艺淘APP",
						"des1": "1.该项目是一款手工DIV爱好者的交流分享平台，除了分享之外，还有买卖手工艺品的功能。",
						"des2": "2.与产品经理确定了用户需求，承担WEB前端核心模块的设计、实现与后台进行功能对接。",
						"des3": "3.该产品在市场上竞争程度小，用户体验效果好，占用资源少，运行速度快。",
						"url": "javascript:;"
					},
					{
						"title": "健康掌门APP",
						"des1": "1.健康掌门APP是一款卫生健康医疗服务软件，提供了社区概况、社区专家和上门护理等服务。",
						"des2": "2.web前端核心模块的设计开发，页面交互设计，以及后期产品的上线，测试和维护。",
						"des3": "3.该款APP是山西首家社区健康服务平台，向用户提供了强大全面的功能，受到用户的好评。",
						"url": "http://new.jkshequ.cn/download.html"
					},
					{
						"title": "爱生活Blog",
						"des1": "1.博客系统将写作与阅读整合在一起，为阅读者打造最优秀的阅读社区。",
						"des2": "2.PC端页面设计，前端模块开发，PHP后台搭建以及上线。",
						"des3": "3.此网站性能优秀，占用资源少，运行速度快。",
						"url": "http://zrhweb.duapp.com/MVC/index.php"
					}
				],
				"viewMore": "了解更多作品请点击进入我的GitHub"
			},
			"experience": {
				"title": "经历",
				"expList": [
					{
						"title": "山西易掌云网络科技有限公司",
						"time": "2016年1月--2017年5月",
						"post": "web前端开发工程师",
						"imgUrl": "img/e_js.svg",
						"contentList": [
							"负责公司产品Web前端研发，技术选型",
							"与产品经理、设计师、后端工程师紧密合作，负责公司各产品界面交互设计、技术优化和网站性能优化",
							"高度组件化、模块化开发",
							"Web前沿技术研究和新技术调研"
						]
					}
				]
			},
			"contact": {
				"title": "联系我",
				"desList1": [
					"前端",
					"代码",
					"未来"
				],
				"desList2": [
					"注重效率，快速开发项目",
					"热爱前端，研究最前沿技术",
					"电话:18435179631",
					"邮箱:zrhperson@sina.com",
					"企鹅:892960472",
					"微信:humansocietier"
				],
				"download": "下载简历",
				"fileList": [
					{
						"title": "HTML版",
						"url": "www.baidu.com"
					},
					{
						"title": "PDF版",
						"url": "www.baidu.com"
					}
				],
				"typeList": [
					{
						"icon": "img/s_github.svg",
						"url": "https://github.com/zrhperson"
					},
					{
						"icon": "img/s_blog.svg",
						"url": "http://zrhweb.duapp.com/MVC/index.php"
					},
					{
						"icon": "img/s_wb.svg",
						"url": "http://weibo.com/p/http://weibo.com/p/1005052856416757"
					}
				]
			}
		},
		"en": {
			"header": {
				"langList": [
					"CN",
					"EN"
				],
				"titleList": [
					{
						"svg": "img/d_home.svg",
						"title": "home"
					},
					{
						"svg": "img/d_info.svg",
						"title": "about"
					},
					{
						"svg": "img/d_skills.svg",
						"title": "skills"
					},
					{
						"svg": "img/d_exp.svg",
						"title": "exp"
					},
					{
						"svg": "img/d_works.svg",
						"title": "works"
					},
					{
						"svg": "img/d_contact.svg",
						"title": "contact"
					}
				]
			},
			"footer": {},
			"default": {
				"quote": "Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",
				"desList": [
					"I am Zhao Keyu",
					"A front-end R & D engineer",
					"zhaoky2016@163.com"
				]
			},
			"info": {
				"title": "About Me",
				"infoList": [
					{
						"icon": "img/i_age.svg",
						"key": "Age",
						"value": "26"
					},
					{
						"icon": "img/i_edu.svg",
						"key": "Edu.",
						"value": "B.S."
					},
					{
						"icon": "img/i_site.svg",
						"key": "Add.",
						"value": "ChengDu"
					},
					{
						"icon": "img/i_status.svg",
						"key": "Status",
						"value": "On Job"
					}
				],
				"desList": [
					"Three years of Internet experience, two and a half years full-time front-end development experience",
					"Familiar with MV * development, well versed in automation, modular development of the road",
					"Efficient self-learning ability, with independent analysis to solve problems",
					"Strong self-driving force, the code OCD"
				]
			},
			"skill": {
				"title": "Skills",
				"outCircleList": [
					{
						"color": "rgba(121,100,102,0.8)",
						"name": "gulp"
					},
					{
						"color": "rgba(49,65,82,0.8)",
						"name": "angular"
					},
					{
						"color": "rgba(76,157,160,0.8)",
						"name": "webpack"
					},
					{
						"color": "rgba(66,66,66,0.8)",
						"name": "less"
					},
					{
						"color": "rgba(193,131,106,0.8)",
						"name": "git"
					},
					{
						"color": "rgba(117,148,179,0.8)",
						"name": "nodejs"
					},
					{
						"color": "rgba(71,83,94,0.8)",
						"name": "cordova"
					},
					{
						"color": "rgba(147,147,189,0.8)",
						"name": "react"
					}
				],
				"innerCircleList": [
					{
						"color": "rgba(179,164,140,0.8)",
						"name": "es6"
					},
					{
						"color": "rgba(171,209,220,0.8)",
						"name": "vue"
					},
					{
						"color": "rgba(238,215,163,0.8)",
						"name": "ng2"
					},
					{
						"color": "rgba(207,184,178,0.8)",
						"name": "fp"
					}
				],
				"desList": [
					"Skilled use of angularJs1.x and encapsulate all kinds of libraries",
					"Permanent PC / APP / WeChat three platform front-end research and development",
					"Good at component / plugin development, can be written out of the library to write JS code",
					"Coding thinking robustness/scalability/maintainability"
				]
			},
			"works": {
				"title": "Works",
				"worksList": [
					{
						"title": "Web front engineer resumes (2015)",
						"des": "The first edition of this resume, on the line a month later, Baidu keyword 'web front engineer resumes' ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.",
						"url": "http://www.flqin.com/2015/"
					},
					{
						"title": "Campus APP",
						"des": "One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.",
						"url": "http://app.cufe.edu.cn/"
					},
					{
						"title": "campus management system",
						"des": "According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.",
						"url": "http://www.app8848.com/cloud_mgr/#/user/login"
					},
					{
						"title": "Enterprise official website",
						"des": "Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.",
						"url": "http://www.lantunet.com"
					}
				],
				"viewMore": "Go github to see more"
			},
			"experience": {
				"title": "Experience",
				"expList": [
					{
						"title": "LANTU TECH",
						"time": "2015.06~now",
						"post": "Web front-end R & D engineers",
						"imgUrl": "img/e_js.svg",
						"tech": "less gulp angular1.x cordova javascript and some libraries",
						"contentList": [
							"Responsible for the rapid construction of high-quality APP / PC / WeChat page",
							"According to business needs to design the appropriate project",
							"Highly component, modular thinking, with the platform debugging capabilities",
							"Learning ES6 and vue, react, ng2, experience the function of programming ideas"
						]
					},
					{
						"title": "Zhuohuang Management Co., Ltd",
						"time": "2014.08~2015.06",
						"post": "Web development and SEO",
						"imgUrl": "img/e_html.svg",
						"tech": "html5,css3,javascript,jquery,bootstrap",
						"contentList": [
							"Responsible for enterprise station static page development",
							"Responsible for website background maintenance",
							"Responsible for Baidu bid operation and seo optimization",
							"Outside of work to enhance their own javascript coding ability"
						]
					},
					{
						"title": "106 Culture Co., Ltd.",
						"time": "2014.03~2014.08",
						"post": "SEO",
						"imgUrl": "img/e_seo.svg",
						"tech": "SEO,SEM,Baidu (360, Sogou) bid, promotion",
						"contentList": [
							"Responsible for site background maintenance, new media marketing and promotion",
							"Responsible for Baidu PPC background adjustment",
							"Get the best new person award",
							"The same period of work began to self-learning web front-end technology"
						]
					}
				],
				"des": "In early 2014, to abandon the network engineer position, began front self-study career."
			},
			"contact": {
				"title": "Contact Me",
				"desList1": [
					"INSPIRATION",
					"CODE",
					"DREAM",
					"FUTURE"
				],
				"desList2": [
					"Focus on efficiency, preference for agile development",
					"Like to try, look forward to something new",
					"Front is interested, interest is the future",
					"Line road friends, is a shortcut",
					"With me, see the bigger world together"
				],
				"download": "Download Resume",
				"fileList": [
					{
						"title": "HTML",
						"url": "www.baidu.com"
					},
					{
						"title": "PDF",
						"url": "www.baidu.com"
					}
				],
				"typeList": [
					{
						"icon": "img/s_github.svg",
						"url": "https://github.com/zhaoky"
					},
					{
						"icon": "img/s_sf.svg",
						"url": "https://segmentfault.com/u/keyu2016"
					},
					{
						"icon": "img/s_blog.svg",
						"url": ""
					},
					{
						"icon": "img/s_zh.svg",
						"url": "https://www.zhihu.com/people/fezky"
					},
					{
						"icon": "img/s_wb.svg",
						"url": "http://weibo.com/zky2013"
					}
				]
			}
		}
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cmpt = __webpack_require__(4);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(5);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(6);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("zkyResume", [_cmpt2.default, _cmpt4.default, _cmpt6.default]).component("zkyResume", {
		templateUrl: "components/zkyResume/cmpt.html",
		controllerAs: "zr",
		controller: ZkyResumeCtrl
	}).name;


	function ZkyResumeCtrl() {}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rHeader", []).component("resumeHeader", {
		templateUrl: "components/rHeader/cmpt.html",
		controller: ResumeHeaderCtrl,
		bindings: {
			pageIndex: "="
		}
	}).directive("showNav", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler() {
				vm.isShowNav = !vm.isShowNav;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchLang", ["actionEvent", "$rootScope", function (actionEvent, $rootScope) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(ev) {
				if (ev.target.nodeName !== "SPAN") {
					return;
				}
				vm.selectedLang = Number(ev.target.dataset.index) + 1;

				$scope.$apply();

				$rootScope.$broadcast("switchLang", vm.selectedLang);
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("selectedNavItem", ["resumeData", "actionEvent", function (resumeData, actionEvent) {

		function link($scope, ele) {
			var vm = $scope.$ctrl;

			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(evt) {
				if (evt.target.nodeName != "EM") {
					return;
				}

				+evt.target.dataset.index !== vm.pageIndex && !resumeData.moving && (vm.pageIndex = +evt.target.dataset.index);
				vm.isShowNav = false;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).name;


	ResumeHeaderCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeHeaderCtrl(dataExtend, resumeData, $rootScope, $scope) {

		var vm = this;

		dataExtend.extend(vm, resumeData.cn.header);

		vm.pageIndex = 0;

		vm.selectedLang = 1; //1为中文,2为英文

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.header : resumeData.cn.header;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rFooter", []).component("resumeFooter", {
		templateUrl: "components/rFooter/cmpt.html",
		controllerAs: "rf",
		controller: ResumeFooterCtrl
	}).name;


	function ResumeFooterCtrl() {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	                    value: true
	});

	var _cmpt = __webpack_require__(7);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(8);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(9);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	var _cmpt7 = __webpack_require__(10);

	var _cmpt8 = _interopRequireDefault(_cmpt7);

	var _cmpt9 = __webpack_require__(11);

	var _cmpt10 = _interopRequireDefault(_cmpt9);

	var _cmpt11 = __webpack_require__(12);

	var _cmpt12 = _interopRequireDefault(_cmpt11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("rMain", [_cmpt2.default, _cmpt4.default, _cmpt6.default, _cmpt8.default, _cmpt10.default, _cmpt12.default]).directive("resumeMain", ["initArrow", "stopIosDropDown", "$timeout", "resumeData", "actionEvent", function (initArrow, stopIosDropDown, $timeout, resumeData, actionEvent) {

	                    function link($scope, ele) {

	                                        var pageIndex = 0,
	                                            moving = void 0,
	                                            startTouchY = void 0,
	                                            disY = void 0,
	                                            curTouchIndex = void 0,
	                                            nodeList = ele[0].querySelectorAll(".page-section"),
	                                            nodeListLen = nodeList.length;

	                                        init();

	                                        $scope.$watch("pageIndex", function (newV, oldV) {

	                                                            var nodeList = ele[0].querySelectorAll(".page-section");

	                                                            if (moving || typeof newV === 'undefined') {
	                                                                                return;
	                                                            }

	                                                            var newIndex = +newV;

	                                                            moving = typeof oldV !== 'undefined';

	                                                            resumeData.moving = moving;

	                                                            if (Math.abs(newIndex - oldV) > 1) {
	                                                                                var promise = new Promise(function (resolve) {
	                                                                                                    nodeList[newIndex].style.display = "block";
	                                                                                                    nodeList[newIndex].style.transform = newIndex > oldV ? "translateY(100%)" : "translateY(-100%)";
	                                                                                                    $timeout(function () {
	                                                                                                                        resolve();
	                                                                                                    }, 200);
	                                                                                });
	                                                                                promise.then(function () {
	                                                                                                    nodeList[newIndex].classList.add("active");
	                                                                                                    nodeList[newIndex].style.display = "";
	                                                                                                    if (typeof oldV !== 'undefined') {
	                                                                                                                        nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                                                                                                                        nodeList[oldV].style.transition = "transform 0.5s";
	                                                                                                    }
	                                                                                });
	                                                            } else if (Math.abs(newIndex - oldV) == 1) {
	                                                                                nodeList[newIndex].classList.add("active");
	                                                                                if (typeof oldV !== 'undefined') {
	                                                                                                    nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                                                                                                    nodeList[oldV].style.transition = "transform 0.5s";
	                                                                                }
	                                                            }

	                                                            pageIndex = newIndex;

	                                                            nodeList[newIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	                                        });

	                                        $scope.$on("$destroy", function () {
	                                                            initArrow.destroy();
	                                                            ele[0].removeEventListener("touchstart", touchStartHandler);
	                                                            ele[0].removeEventListener("mousewheel", startWheelHandler);
	                                        });
	                                        //初始化
	                                        function init() {
	                                                            // nodeList = Array.from(nodeList);

	                                                            ele[0].classList.add("dock-fill");

	                                                            nodeList[0].classList.add("cur-page");

	                                                            nodeList[pageIndex + 1].classList.add("next-page");

	                                                            initArrow.init();

	                                                            stopIosDropDown.stop(actionEvent);

	                                                            _consoleLog();

	                                                            ele[0].addEventListener(actionEvent.event.start, touchStartHandler);
	                                                            ele[0].addEventListener("mousewheel", startWheelHandler);
	                                        }
	                                        //滚轮事件
	                                        function startWheelHandler(e) {

	                                                            if (moving || e.wheelDelta < 0 && pageIndex == nodeListLen - 1 || e.wheelDelta > 0 && pageIndex == 0) {
	                                                                                return;
	                                                            }
	                                                            e.wheelDelta < 0 ? pageIndex++ : pageIndex--;

	                                                            applyPageIndex(pageIndex);
	                                        }

	                                        function touchStartHandler(e) {

	                                                            if (moving || e.type != "touchstart") {
	                                                                                return;
	                                                            }

	                                                            startTouchY = e.changedTouches[0].pageY;

	                                                            ele[0].addEventListener(actionEvent.event.move, touchMoveHandler);
	                                        }

	                                        function touchMoveHandler(e) {

	                                                            if (moving) {
	                                                                                return;
	                                                            }

	                                                            disY = e.changedTouches[0].pageY - startTouchY; //为负上滑 为正下滑

	                                                            if (disY < 0 && pageIndex == nodeListLen - 1 || disY > 0 && pageIndex == 0) {
	                                                                                return;
	                                                            }

	                                                            setTouchMovePageAttr();

	                                                            ele[0].addEventListener(actionEvent.event.end, touchEndHandler);
	                                        }

	                                        function touchEndHandler() {

	                                                            if (moving) {
	                                                                                return;
	                                                            }

	                                                            Math.abs(disY) < 100 ? littleBounce() : applyPageIndex(curTouchIndex);
	                                        }

	                                        function transitionEndHandler() {

	                                                            moving = false;

	                                                            resumeData.moving = moving;

	                                                            setTouchEndAttr();

	                                                            ele[0].removeEventListener("touchmove", touchMoveHandler);
	                                                            ele[0].removeEventListener("touchend", touchEndHandler);
	                                        }

	                                        function littleBounce() {

	                                                            var nodeList = ele[0].querySelectorAll(".page-section");

	                                                            nodeList[curTouchIndex].style.transform = "";
	                                                            nodeList[curTouchIndex].style.transition = "transform 0.5s";

	                                                            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "";
	                                                            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transition = "transform 0.5s";

	                                                            nodeList[curTouchIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	                                        }
	                                        //脏检查
	                                        function applyPageIndex(index) {

	                                                            $scope.$apply(function () {
	                                                                                $scope.pageIndex = index;
	                                                            });
	                                        }

	                                        function setTouchMovePageAttr() {

	                                                            var nodeList = ele[0].querySelectorAll(".page-section");

	                                                            curTouchIndex = disY < 0 ? pageIndex + 1 : pageIndex - 1;

	                                                            nodeList[curTouchIndex].classList.add("touch-page");

	                                                            nodeList[curTouchIndex].style.transform = disY < 0 ? "translateY(" + (ele[0].offsetHeight + disY) + "px)" : "translateY(" + (-ele[0].offsetHeight + disY) + "px)";

	                                                            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "translateY(" + disY + "px)";
	                                        }

	                                        function setTouchEndAttr() {

	                                                            var nodeList = ele[0].querySelectorAll(".page-section");

	                                                            nodeList = Array.prototype.slice.call(nodeList);

	                                                            nodeList.forEach(function (item, index) {

	                                                                                item.classList.remove("prev-page", "active", "next-page", "cur-page", "touch-page");

	                                                                                item.style.transform = "";
	                                                                                item.style.transition = "";

	                                                                                pageIndex !== 0 && index == pageIndex - 1 && item.classList.add("prev-page");

	                                                                                index == pageIndex && item.classList.add("cur-page");

	                                                                                pageIndex !== nodeListLen - 1 && index == pageIndex + 1 && item.classList.add("next-page");

	                                                                                item.removeEventListener("webkitTransitionEnd", transitionEndHandler);
	                                                            });

	                                                            ele[0].querySelectorAll(".-arrow")[0].style.display = pageIndex == nodeListLen - 1 ? "none" : "block";
	                                        }

	                                        function _consoleLog() {
	                                                            console.log("Hi! 您好，感谢您观看我的个人简历 \n" + "这是我的联系方式:18435179631、zrhperson@sina.com \n" + "非常期待收到您的回应！ \n" + "祝您工作顺利,生活愉快 \n");
	                                        }
	                    }

	                    return {
	                                        restrict: "E",
	                                        link: link,
	                                        template: "<div ng-transclude></div>",
	                                        transclude: true,
	                                        replace: true,
	                                        scope: {
	                                                            pageIndex: "="
	                                        }
	                    };
	}]).name;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.default = angular.module("rContact", []).component("resumeContact", {
					templateUrl: "components/_rContact/cmpt.html",
					controller: ResumeContactCtrl
	}).name;

	ResumeContactCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeContactCtrl(dataExtend, resumeData, $rootScope, $scope) {
					var vm = this;

					dataExtend.extend(vm, resumeData.cn.contact);

					$rootScope.$on("switchLang", function (evt, data) {

									var extendData = Number(data) == 2 ? resumeData.en.contact : resumeData.cn.contact;

									vm.isEng = Number(data) == 2;

									dataExtend.extend(vm, extendData);

									$scope.$apply();
					});
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rDefault", []).component("resumeDefault", {
		templateUrl: "components/_rDefault/cmpt.html",
		controller: ResumeDefaultCtrl
	}).name;


	ResumeDefaultCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeDefaultCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.default);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.default : resumeData.cn.default;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rWorks", []).component("resumeWorks", {
		templateUrl: "components/_rWorks/cmpt.html",
		controller: ResumeWorksCtrl
	}).directive("switchWork", ["actionEvent", function (actionEvent) {
		function link($scope, ele, attr) {
			var worksContain = document.body.querySelector(".-work-list");
			var rotate = 0;
			ele[0].addEventListener(actionEvent.event.start, switchWorkHandler);

			function switchWorkHandler(evt) {

				if (evt.target.nodeName !== "I") {
					return;
				}
				rotate += evt.target.className == "-left" ? 90 : -90;

				worksContain.style.transform = "rotateY(" + rotate + "deg)";
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeWorksCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeWorksCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.works);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.works : resumeData.cn.works;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rExperience", []).component("resumeExperience", {
		templateUrl: "components/_rExperience/cmpt.html",
		controller: ResumeExperienceCtrl,
		bindings: {
			pageIndex: "<"
		}
	}).directive("touchThreeD", ["$window", "actionEvent", function ($window, actionEvent) {
		function link($scope, ele) {

			var bannerWidth = void 0,
			    bannerHeight = void 0,
			    offsetLeft = void 0,
			    offsetTop = void 0;
			$scope.$watch("$parent.$parent.pageIndex", function (newV) {
				if (Number(newV) !== 3) {
					return;
				}
				bannerWidth = ele[0].offsetWidth;
				bannerHeight = ele[0].offsetHeight;
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			});

			ele[0].addEventListener(actionEvent.event.move, mousemoveHandler);
			ele[0].addEventListener("mouseout", mouseoutHandler);

			function mousemoveHandler(evt) {
				var pageX = evt.pageX,
				    pageY = evt.pageY,
				    x = pageX - offsetLeft - bannerWidth / 2,
				    y = bannerHeight / 2 - pageY + offsetTop + 140;
				ele[0].style.transform = "rotateY(" + x / 50 + "deg) rotateX(" + y / 50 + "deg)";
			}

			function mouseoutHandler(evt) {
				ele[0].style.transform = "rotateY(0deg) rotateX(0deg)";
			}

			$window.onresize = onResize;

			function onResize() {
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			}
		}
		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchExp", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {

			var vm = $scope.$ctrl,
			    contentNode = document.body.querySelectorAll(".-experience-content")[0];

			vm.cutList = new Array(3);

			ele[0].addEventListener(actionEvent.event.start, switchExpList);

			function switchExpList(evt) {
				if (evt.target.nodeName != "LI") {
					return;
				}

				if (evt.target.dataset.index !== vm.curIndex) {
					vm.curIndex = evt.target.dataset.index;
					contentNode.style.opacity = "0";
					contentNode.addEventListener("webkitTransitionEnd", transitionEndHandler);
				}
			}
			function transitionEndHandler() {
				contentNode.style.opacity = "1";
				$scope.$apply(function () {
					vm.exp = vm.expList[vm.curIndex];
				});
				contentNode.removeEventListener("webkitTransitionEnd", transitionEndHandler);
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeExperienceCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeExperienceCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.experience);

		vm.curIndex = 0;

		vm.exp = vm.expList[vm.curIndex];

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.experience : resumeData.cn.experience;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			vm.exp = vm.expList[0];

			$scope.$apply();
		});
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.default = angular.module("rInfo", []).component("resumeInfo", {
					templateUrl: "components/_rInfo/cmpt.html",
					controller: ResumeInfoCtrl
	}).name;


	ResumeInfoCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeInfoCtrl(dataExtend, resumeData, $rootScope, $scope) {
					var vm = this;

					dataExtend.extend(vm, resumeData.cn.info);

					$rootScope.$on("switchLang", function (evt, data) {

									var extendData = Number(data) == 2 ? resumeData.en.info : resumeData.cn.info;

									vm.isEng = Number(data) == 2;

									dataExtend.extend(vm, extendData);

									$scope.$apply();
					});
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.default = angular.module("rSkill", []).component("resumeSkill", {
					templateUrl: "components/_rSkill/cmpt.html",
					controller: ResumeSkillCtrl
	}).name;


	ResumeSkillCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeSkillCtrl(dataExtend, resumeData, $rootScope, $scope) {
					var vm = this;

					dataExtend.extend(vm, resumeData.cn.skill);

					$rootScope.$on("switchLang", function (evt, data) {

									var extendData = Number(data) == 2 ? resumeData.en.skill : resumeData.cn.skill;

									vm.isEng = Number(data) == 2;

									dataExtend.extend(vm, extendData);

									$scope.$apply();
					});
	}

/***/ })
/******/ ]);