(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["loaders"] = factory();
	else
		root["loaders"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return {
        SPIN_LOADER: 'spin-loader',
        CIRCLE_LOADER: 'circle-loader'
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return {
        ADD_LOADER: 'ADD_LOADER',
        ADD_ACTION: 'ADD_ACTION',
        REMOVE_ACTION: 'REMOVE_ACTION'
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(createStore, combineReducer, actions) {
        store = createStore(combineReducer);
        console.log('store initialized', store.getState());
        return store;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
(function() {
    this.getActionsListForloader = function(loaderName) {
        console.log(loaderName);
        let actionsList =
            store.getState().loaders && store.getState().loaders.length > 0
                ? store
                      .getState()
                      .loaders.find(loader => loader.options.id === loaderName)
                      .actionsList
                : [];
        return [...actionsList];
        //return store.get.loaders[i].actionsList;
    };
})();

//action type
//loader id
//
//create LoaderClass
//call initialization and set all loader
//add add new loader  and override the loader list in store ie reinitialize
//on store change subscribe correspoding loader
//

// store.dispatch({
//     type: 'ADD_LOADER',
//     name: 'LOADER1'
// });
// console.log('after ADD_LOADER loader1 ', store.getState());
// store.dispatch({
//     type: 'ADD_LOADER',
//     name: 'LOADER2'
// });
// console.log('after ADD_LOADER loader2', store.getState());
// store.dispatch({
//     type: 'ADD_LOADER',
//     name: 'LOADER3'
// });
// console.log('After ADD_LOADER loader3', store.getState());
//

// //if you don't pass visible type in ADD_ACTION it will consider visible true
// store.dispatch({
//     type: ActionsList.ADD_ACTION,
//     name: 'FETCH_DATA',
//     associateLoaders: ['spin-loader-2', 'spin-loader-1']
// });
// console.log('After ADD_ACTION FETCH_DATA', store.getState());
// store.dispatch({
//     type: 'REMOVE_ACTION',
//     name: 'FETCH_DATA',
//     associateLoaders: ['LOADER1', 'LOADER2']
// });
// console.log('After ADD_LOADER REMOVE_ACTION', store.getState());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(1),
        __webpack_require__(0),
        __webpack_require__(4),
        __webpack_require__(9),
        __webpack_require__(10)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(ActionsList, LoadersList, Action, CircleLoader, SpinnerLoader) {
        const combineReducer = (state = {}, action) => {
            function findLoader(loaderId) {
                let associatedLoader = null;
                for (let i = 0; i < state.loaders.length; i++) {
                    let loader = state.loaders[i];
                    if (loader.options.id === loaderId) {
                        associatedLoader = loader;
                        break;
                    }
                }
                return associatedLoader;
            }
            function removeActionfromLoader(actionName) {}
            if (!action.type && typeof action.type === 'undefined') {
                return state;
            }
            switch (action.type) {
                case ActionsList.ADD_LOADER:
                    let loader = null;
                    switch (action.loaderInfo.loaderName) {
                        case LoadersList.CIRCLE_LOADER:
                            loader = new CircleLoader(action.loaderInfo);
                            break;
                        case LoadersList.SPIN_LOADER:
                            loader = new SpinnerLoader(action.loaderInfo);
                            break;
                        default:
                            loader = null;
                    }
                    if (loader) {
                        state.loaders.push(loader);
                    }
                    return state;

                case ActionsList.ADD_ACTION:
                    let actionObj = new Action(
                        action.name,
                        action.associateLoaders
                    );

                    for (
                        let i = 0;
                        i < actionObj.associateLoaders.length;
                        i++
                    ) {
                        let loaderId = actionObj.associateLoaders[i];

                        let loaderObject = findLoader(loaderId);
                        loaderObject.open();
                        loaderObject.addAction(action.name);
                    }
                    //add reducer to add action
                    state.actions.push(action);
                    return state;
                case ActionsList.REMOVE_ACTION:
                    function findAction(actionName) {}
                    let actionName = action.name;
                    let associateLoaders = action.associateLoaders;

                    let actionObject = state.actions.find(
                        action => action.name === actionName
                    );
                    if (!associateLoaders) {
                        associateLoaders = actionObject.associateLoaders;
                    }

                    for (let i = 0; i < associateLoaders.length; i++) {
                        let loader = findLoader(associateLoaders[i]);
                        loader.removeAction(actionName);
                    }
                    let actionObjectIndex = state.actions.findIndex(
                        action => (action.name = actionName)
                    );
                    //add reducer to remove action
                    state.actions.splice(actionObjectIndex, 1);
                    return state;
                default:
                    return state;
            }
        };
        return combineReducer;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    var Action = function(actionName, associateLoaders = []) {
        this.name = actionName;
        this.associateLoaders = associateLoaders;
    };
    return Action;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(7),
        __webpack_require__(2),
        __webpack_require__(1),
        __webpack_require__(0)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(loaderActions, store, actionsList, loadersList) {
        return {
            ActionsList: actionsList,
            LoadersList: loadersList,
            store: store,
            LoaderActions: new loaderActions()
        };
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(
    store,
    ActionsList
) {
    var LoaderActions = function() {
        this.initialize();
    };
    LoaderActions.prototype.constructor = LoaderActions;

    LoaderActions.prototype.initialize = function() {
        let loaderList = document.getElementsByClassName('loader1');
        let loaderListLength = loaderList.length;
        for (
            let loaderIndex = 0;
            loaderIndex < loaderListLength;
            loaderIndex++
        ) {
            store.dispatch({
                type: ActionsList.ADD_LOADER,
                loaderInfo: getLoaderInfo(loaderList[loaderIndex])
            });
        }
        function getLoaderInfo(loaderDom) {
            return {
                id: getAttributeValue(loaderDom, 'id'),
                loaderName: getAttributeValue(loaderDom, 'data-loader-name'),
                display: getAttributeValue(loaderDom, 'data-display')
            };
        }
        function getAttributeValue(loaderDom, attributeName) {
            return loaderDom.getAttribute(attributeName);
        }
    };
    return LoaderActions;
    // new LoaderActions();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//use modular pattern and extends prototype
// or use closure and return the global method


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(combineReducer) {
    function createStore(reducer) {
        let state = {
            loaders: [],
            actions: []
        };
        let listeners = [];
        const getState = () => state;
        const dispatch = action => {
            state = combineReducer(state, action);
        };
        const subscribe = listener => {
            listeners.push(listener);
        };
        dispatch({});
        return { dispatch, getState, subscribe };
    }
    return createStore;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(LoadersList) {
    var CircleLoader = function(options) {
        this.loader = null;
        this.options = {};
        this.actionsList = [];
        CircleLoader.styleId = LoadersList.CIRCLE_LOADER;
        //this.elementId
        this.prefix =
            navigator.userAgent.indexOf('WebKit') != -1 ? 'webkit' : 'moz';
        let defaults = {
            id: '',
            loaderName: '',
            display: false,
            size: '80px',
            position: 'relative',
            borderSize: '16px',
            borderColor: '#f3f3f3',
            borderTopColor: 'black',
            animationSpeed: '4s',
            animationName: 'circle'
        };
        if (arguments[0] && typeof arguments[0] === 'object') {
            this.options = extendDefaults(defaults, arguments[0]);
        }
        //Utility method to extend defaults with user options
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }

        //public method
        CircleLoader.prototype.open = function() {
            this.loader.style.display = 'inline-block';
            this.options.display == true;
        };
        CircleLoader.prototype.close = function() {
            this.loader.style.display = 'none';
            this.options.display = false;
        };
        //will be private
        CircleLoader.prototype.checkVisibility = function() {
            if (this.actionsList.length == 0) {
                this.close();
            }
        };
        CircleLoader.prototype.addAction = function(actionName) {
            this.actionsList.push(actionName);
        };
        CircleLoader.prototype.removeAction = function(actionName) {
            var index = this.actionsList.indexOf(actionName);
            if (index > -1) {
                this.actionsList.splice(index, 1);
            }
            this.checkVisibility();
        };

        buildOut.call(this);
        function buildOut() {
            this.loader = document.createElement('div');
            document.getElementById(this.options.id).appendChild(this.loader);
            addStyleKeyFrame.call(this);
            setStyleInLoader.call(this);

            //this.element = document.getElementById(this.options.elementId);

            if (JSON.parse(this.options.display) == true) {
                this.loader.style.display = 'inline-block';
            } else {
                this.loader.style.display = 'none';
            }
        }
        //will be in all loader
        //extract it
        function addStyleKeyFrame() {
            if (document.getElementById(CircleLoader.styleId) == null) {
                var style = document.createElement('style');
                style.setAttribute('id', CircleLoader.styleId);
                style.innerHTML =
                    '@-' +
                    this.prefix +
                    '-keyframes ' +
                    //this.options.animationName +
                    'circle {	0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}';
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }
        function setStyleInLoader() {
            this.loader.style.width = this.options.size;
            this.loader.style.height = this.options.size;
            // borderSize: 16,
            // borderColor :"#f3f3f3",
            // borderTopColor: black,
            // animationSpeed: "4s",
            // animationName: 'circle-loader'

            this.loader.style.border =
                this.options.borderSize + ' solid ' + this.options.borderColor;
            this.loader.style.borderRadius = '50%';
            this.loader.style.borderTop =
                this.options.borderSize +
                ' solid ' +
                this.options.borderTopColor;
            this.loader.style.boxSizing = 'border-box';
            this.loader.style.animation =
                this.options.animationName +
                ' ' +
                this.options.animationSpeed +
                ' linear infinite';

            this.loader.style.position = this.options.position;
        }
    };
    return CircleLoader;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

//
// (function() {
//     this.CircleLoader = function(options) {
//         this.elementId = '';
//         this.loaderName = '';
//         this.display = false;
//
//         this.overlay = null;
//         let defaults = {
//             overlay: false,
//             loaderId: 'loader',
//             display: true
//         };
//         if (arguments[0] && typeof arguments[0] === 'object') {
//             this.options = extendDefaults(defaults, arguments[0]);
//         }
//         //Utility method to extend defaults with user options
//         function extendDefaults(source, properties) {
//             var property;
//             for (property in properties) {
//                 if (properties.hasOwnProperty(property)) {
//                     source[property] = properties[property];
//                 }
//             }
//             return source;
//         }
//         buildOut.call(this);
//
//         //public method
//         CircleLoader.prototype.open = function() {
//             buildOut.call(this);
//             this.element.style.display = 'inline-block';
//         };
//         CircleLoader.prototype.close = function() {
//             this.element.style.display = 'none';
//         };
//
//         function buildOut() {
//             this.element = document.getElementById(this.options.elementId);
//
//             if (this.options.display == true) {
//                 this.element.style.display = 'inline-block';
//             } else {
//                 this.element.style.display = 'none';
//             }
//         }
//     };
// })();
// // var CircleLoader_OBJ = new CircleLoader({
// //     overlay: true,
// //     display: true
// // });


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(LoadersList) {
    var SpinnerLoader = function() {
        this.loader = null;
        this.options = {};
        this.actionsList = [];

        //this.elementId
        this.prefix =
            navigator.userAgent.indexOf('WebKit') != -1 ? 'webkit' : 'moz';
        //use in style keyframe id
        SpinnerLoader.styleId = SpinnerLoader.SPIN_LOADER;

        this.overlay = null;
        let defaults = {
            id: '',
            loaderName: '',
            display: false,
            size: '80px',
            position: 'relative',

            numberOfBars: 8,
            color: 'red'
        };
        if (arguments[0] && typeof arguments[0] === 'object') {
            this.options = extendDefaults(defaults, arguments[0]);
        }
        //Utility method to extend defaults with user options
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }

        //public method
        SpinnerLoader.prototype.open = function() {
            this.loader.style.display = 'inline-block';
            this.options.display == true;
        };
        SpinnerLoader.prototype.close = function() {
            this.loader.style.display = 'none';
            this.options.display = false;
        };
        //will be private
        SpinnerLoader.prototype.checkVisibility = function() {
            if (this.actionsList.length == 0) {
                this.close();
            }
        };
        SpinnerLoader.prototype.addAction = function(actionName) {
            this.actionsList.push(actionName);
        };
        SpinnerLoader.prototype.removeAction = function(actionName) {
            var index = this.actionsList.indexOf(actionName);
            if (index > -1) {
                this.actionsList.splice(index, 1);
            }
            this.checkVisibility();
        };

        buildOut.call(this);

        function buildOut() {
            this.loader = document.createElement('div');
            document.getElementById(this.options.id).appendChild(this.loader);
            addStyleKeyFrame.call(this);
            //create loader
            setStyleInLoader.call(this);
            addbars.call(this);
            if (JSON.parse(this.options.display) == true) {
                this.loader.style.display = 'inline-block';
            } else {
                this.loader.style.display = 'none';
            }
        }
        //will be in all loader
        //extract it
        function addStyleKeyFrame() {
            if (document.getElementById(SpinnerLoader.styleId) == null) {
                var style = document.createElement('style');
                style.setAttribute('id', SpinnerLoader.styleId);
                style.innerHTML =
                    '@-' +
                    this.prefix +
                    '-keyframes fade {from {opacity: 1;} to {opacity: 0.25;}}';
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }

        function setStyleInLoader() {
            this.loader.style.width = this.options.size;
            this.loader.style.height = this.options.size;
            this.loader.style.position = this.options.position;
        }
        function addbars() {
            var rotation = 0;
            var rotateBy = 360 / this.options.numberOfBars;

            var animationDelay = 0;
            var frameRate = 1 / this.options.numberOfBars;
            for (var i = 0; i < this.options.numberOfBars; ++i) {
                var bar = document.createElement('div');
                this.loader.appendChild(bar);
                bar.style.width = '12%';
                bar.style.height = '26%';
                bar.style.background = this.options.color;
                bar.style.position = 'absolute';
                bar.style.left = '44.5%';
                bar.style.top = '43%';
                bar.style.opacity = '1';
                bar.style.setProperty(
                    '-' + this.prefix + '-border-radius',
                    '50px',
                    null
                );
                bar.style.setProperty(
                    '-' + this.prefix + '-box-shadow',
                    '0 0 3px rgba(0,0,0,0.2)',
                    null
                );
                bar.style.setProperty(
                    '-' + this.prefix + '-animation',
                    'fade 1s linear infinite',
                    null
                );
                bar.style.setProperty(
                    '-' + this.prefix + '-transform',
                    'rotate(' + rotation + 'deg) translate(0, -142%)',
                    null
                );
                bar.style.setProperty(
                    '-' + this.prefix + '-animation-delay',
                    1 - animationDelay + 's',
                    null
                );
                rotation += rotateBy;
                animationDelay -= frameRate;
            }
        }
    };
    return SpinnerLoader;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// })
// new SpinnerLoader({
//     id: 'spin',
//     size: '100px',
//     numberOfBars: 7,
//     color: 'red',
//     loaderName: 'circle-loader'
//     //loaderName :
// });


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YmJhNzdkZmMyNzVhOGFhM2VmMCIsIndlYnBhY2s6Ly8vLi9qcy9sb2FkZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hY3Rpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21iaW5lUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbG9hZGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jaXJjbGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc3BpbkxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O2dFQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBOzs7Ozs7O2dFQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTs7Ozs7OztnRUNORCxpQ0FFQSwwR0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsb0dBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Z0VDOURBLGlDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLDZCQUE2QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxvR0FDQTs7Ozs7OztnRUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBOzs7Ozs7Ozs7Ozs7OztnRUNORCxpQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLG9HQUNBOzs7Ozs7O2dFQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQTs7QUFFRDtBQUNBOzs7Ozs7O2dFQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUFBOzs7Ozs7O2dFQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUssaUNBQWlDLEVBQUUsT0FBTyxtQ0FBbUMsR0FBRztBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7Ozs7O2dFQzNLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLFlBQVksS0FBSyxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFDRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJIiwiZmlsZSI6ImxvYWRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsb2FkZXJzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvYWRlcnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2JiYTc3ZGZjMjc1YThhYTNlZjAiLCJkZWZpbmUoJ0xvYWRlcnNMaXN0JywgW10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNQSU5fTE9BREVSOiAnc3Bpbi1sb2FkZXInLFxuICAgICAgICBDSVJDTEVfTE9BREVSOiAnY2lyY2xlLWxvYWRlcidcbiAgICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xvYWRlcnNMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZSgnQWN0aW9uc0xpc3QnLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQUREX0xPQURFUjogJ0FERF9MT0FERVInLFxuICAgICAgICBBRERfQUNUSU9OOiAnQUREX0FDVElPTicsXG4gICAgICAgIFJFTU9WRV9BQ1RJT046ICdSRU1PVkVfQUNUSU9OJ1xuICAgIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYWN0aW9uc0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFxuICAgICdTdG9yZScsXG4gICAgWycuL2NyZWF0ZVN0b3JlLmpzJywgJy4vY29tYmluZVJlZHVjZXIuanMnLCAnLi9hY3Rpb24uanMnXSxcbiAgICBmdW5jdGlvbihjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXIsIGFjdGlvbnMpIHtcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZSBpbml0aWFsaXplZCcsIHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxuKTtcbihmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldEFjdGlvbnNMaXN0Rm9ybG9hZGVyID0gZnVuY3Rpb24obG9hZGVyTmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2FkZXJOYW1lKTtcbiAgICAgICAgbGV0IGFjdGlvbnNMaXN0ID1cbiAgICAgICAgICAgIHN0b3JlLmdldFN0YXRlKCkubG9hZGVycyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmxvYWRlcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0U3RhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgIC5sb2FkZXJzLmZpbmQobG9hZGVyID0+IGxvYWRlci5vcHRpb25zLmlkID09PSBsb2FkZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb25zTGlzdFxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgIHJldHVybiBbLi4uYWN0aW9uc0xpc3RdO1xuICAgICAgICAvL3JldHVybiBzdG9yZS5nZXQubG9hZGVyc1tpXS5hY3Rpb25zTGlzdDtcbiAgICB9O1xufSkoKTtcblxuLy9hY3Rpb24gdHlwZVxuLy9sb2FkZXIgaWRcbi8vXG4vL2NyZWF0ZSBMb2FkZXJDbGFzc1xuLy9jYWxsIGluaXRpYWxpemF0aW9uIGFuZCBzZXQgYWxsIGxvYWRlclxuLy9hZGQgYWRkIG5ldyBsb2FkZXIgIGFuZCBvdmVycmlkZSB0aGUgbG9hZGVyIGxpc3QgaW4gc3RvcmUgaWUgcmVpbml0aWFsaXplXG4vL29uIHN0b3JlIGNoYW5nZSBzdWJzY3JpYmUgY29ycmVzcG9kaW5nIGxvYWRlclxuLy9cblxuLy8gc3RvcmUuZGlzcGF0Y2goe1xuLy8gICAgIHR5cGU6ICdBRERfTE9BREVSJyxcbi8vICAgICBuYW1lOiAnTE9BREVSMSdcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coJ2FmdGVyIEFERF9MT0FERVIgbG9hZGVyMSAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnQUREX0xPQURFUicsXG4vLyAgICAgbmFtZTogJ0xPQURFUjInXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdhZnRlciBBRERfTE9BREVSIGxvYWRlcjInLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnQUREX0xPQURFUicsXG4vLyAgICAgbmFtZTogJ0xPQURFUjMnXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdBZnRlciBBRERfTE9BREVSIGxvYWRlcjMnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vXG5cbi8vIC8vaWYgeW91IGRvbid0IHBhc3MgdmlzaWJsZSB0eXBlIGluIEFERF9BQ1RJT04gaXQgd2lsbCBjb25zaWRlciB2aXNpYmxlIHRydWVcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiBBY3Rpb25zTGlzdC5BRERfQUNUSU9OLFxuLy8gICAgIG5hbWU6ICdGRVRDSF9EQVRBJyxcbi8vICAgICBhc3NvY2lhdGVMb2FkZXJzOiBbJ3NwaW4tbG9hZGVyLTInLCAnc3Bpbi1sb2FkZXItMSddXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdBZnRlciBBRERfQUNUSU9OIEZFVENIX0RBVEEnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnUkVNT1ZFX0FDVElPTicsXG4vLyAgICAgbmFtZTogJ0ZFVENIX0RBVEEnLFxuLy8gICAgIGFzc29jaWF0ZUxvYWRlcnM6IFsnTE9BREVSMScsICdMT0FERVIyJ11cbi8vIH0pO1xuLy8gY29uc29sZS5sb2coJ0FmdGVyIEFERF9MT0FERVIgUkVNT1ZFX0FDVElPTicsIHN0b3JlLmdldFN0YXRlKCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoXG4gICAgJ0NvbWJpbmVSZWR1Y2VyJyxcbiAgICBbXG4gICAgICAgICcuL2FjdGlvbnNMaXN0LmpzJyxcbiAgICAgICAgJy4vbG9hZGVyc0xpc3QuanMnLFxuICAgICAgICAnLi9hY3Rpb24uanMnLFxuICAgICAgICAnLi9jaXJjbGVMb2FkZXIuanMnLFxuICAgICAgICAnLi9zcGluTG9hZGVyLmpzJ1xuICAgIF0sXG4gICAgZnVuY3Rpb24oQWN0aW9uc0xpc3QsIExvYWRlcnNMaXN0LCBBY3Rpb24sIENpcmNsZUxvYWRlciwgU3Bpbm5lckxvYWRlcikge1xuICAgICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRMb2FkZXIobG9hZGVySWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXNzb2NpYXRlZExvYWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSBzdGF0ZS5sb2FkZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVyLm9wdGlvbnMuaWQgPT09IGxvYWRlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkTG9hZGVyID0gbG9hZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc29jaWF0ZWRMb2FkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBY3Rpb25mcm9tTG9hZGVyKGFjdGlvbk5hbWUpIHt9XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi50eXBlICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBY3Rpb25zTGlzdC5BRERfTE9BREVSOlxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ubG9hZGVySW5mby5sb2FkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExvYWRlcnNMaXN0LkNJUkNMRV9MT0FERVI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyID0gbmV3IENpcmNsZUxvYWRlcihhY3Rpb24ubG9hZGVySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExvYWRlcnNMaXN0LlNQSU5fTE9BREVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlciA9IG5ldyBTcGlubmVyTG9hZGVyKGFjdGlvbi5sb2FkZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkZXJzLnB1c2gobG9hZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEFjdGlvbnNMaXN0LkFERF9BQ1RJT046XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25PYmogPSBuZXcgQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uYXNzb2NpYXRlTG9hZGVyc1xuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpIDwgYWN0aW9uT2JqLmFzc29jaWF0ZUxvYWRlcnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvYWRlcklkID0gYWN0aW9uT2JqLmFzc29jaWF0ZUxvYWRlcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2FkZXJPYmplY3QgPSBmaW5kTG9hZGVyKGxvYWRlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlck9iamVjdC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXJPYmplY3QuYWRkQWN0aW9uKGFjdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2FkZCByZWR1Y2VyIHRvIGFkZCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICBjYXNlIEFjdGlvbnNMaXN0LlJFTU9WRV9BQ1RJT046XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRBY3Rpb24oYWN0aW9uTmFtZSkge31cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbk5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc29jaWF0ZUxvYWRlcnMgPSBhY3Rpb24uYXNzb2NpYXRlTG9hZGVycztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uT2JqZWN0ID0gc3RhdGUuYWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0+IGFjdGlvbi5uYW1lID09PSBhY3Rpb25OYW1lXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXNzb2NpYXRlTG9hZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRlTG9hZGVycyA9IGFjdGlvbk9iamVjdC5hc3NvY2lhdGVMb2FkZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NvY2lhdGVMb2FkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gZmluZExvYWRlcihhc3NvY2lhdGVMb2FkZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5yZW1vdmVBY3Rpb24oYWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iamVjdEluZGV4ID0gc3RhdGUuYWN0aW9ucy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPT4gKGFjdGlvbi5uYW1lID0gYWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgLy9hZGQgcmVkdWNlciB0byByZW1vdmUgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmFjdGlvbnMuc3BsaWNlKGFjdGlvbk9iamVjdEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyO1xuICAgIH1cbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NvbWJpbmVSZWR1Y2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZSgnQWN0aW9uJywgW10sIGZ1bmN0aW9uKCkge1xuICAgIHZhciBBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25OYW1lLCBhc3NvY2lhdGVMb2FkZXJzID0gW10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gYWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5hc3NvY2lhdGVMb2FkZXJzID0gYXNzb2NpYXRlTG9hZGVycztcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShcbiAgICAnYnVpbGQnLFxuICAgIFtcbiAgICAgICAgJy4vbG9hZGVyQWN0aW9ucy5qcycsXG4gICAgICAgICcuL3N0b3JlLmpzJyxcbiAgICAgICAgJy4vYWN0aW9uc0xpc3QuanMnLFxuICAgICAgICAnLi9sb2FkZXJzTGlzdC5qcydcbiAgICBdLFxuICAgIGZ1bmN0aW9uKGxvYWRlckFjdGlvbnMsIHN0b3JlLCBhY3Rpb25zTGlzdCwgbG9hZGVyc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEFjdGlvbnNMaXN0OiBhY3Rpb25zTGlzdCxcbiAgICAgICAgICAgIExvYWRlcnNMaXN0OiBsb2FkZXJzTGlzdCxcbiAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgIExvYWRlckFjdGlvbnM6IG5ldyBsb2FkZXJBY3Rpb25zKClcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoJ0xvYWRlckFjdGlvbnMnLCBbJy4vc3RvcmUuanMnLCAnLi9hY3Rpb25zTGlzdC5qcyddLCBmdW5jdGlvbihcbiAgICBzdG9yZSxcbiAgICBBY3Rpb25zTGlzdFxuKSB7XG4gICAgdmFyIExvYWRlckFjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfTtcbiAgICBMb2FkZXJBY3Rpb25zLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvYWRlckFjdGlvbnM7XG5cbiAgICBMb2FkZXJBY3Rpb25zLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBsb2FkZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZGVyMScpO1xuICAgICAgICBsZXQgbG9hZGVyTGlzdExlbmd0aCA9IGxvYWRlckxpc3QubGVuZ3RoO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGxvYWRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIGxvYWRlckluZGV4IDwgbG9hZGVyTGlzdExlbmd0aDtcbiAgICAgICAgICAgIGxvYWRlckluZGV4KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogQWN0aW9uc0xpc3QuQUREX0xPQURFUixcbiAgICAgICAgICAgICAgICBsb2FkZXJJbmZvOiBnZXRMb2FkZXJJbmZvKGxvYWRlckxpc3RbbG9hZGVySW5kZXhdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TG9hZGVySW5mbyhsb2FkZXJEb20pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGdldEF0dHJpYnV0ZVZhbHVlKGxvYWRlckRvbSwgJ2lkJyksXG4gICAgICAgICAgICAgICAgbG9hZGVyTmFtZTogZ2V0QXR0cmlidXRlVmFsdWUobG9hZGVyRG9tLCAnZGF0YS1sb2FkZXItbmFtZScpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdldEF0dHJpYnV0ZVZhbHVlKGxvYWRlckRvbSwgJ2RhdGEtZGlzcGxheScpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKGxvYWRlckRvbSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlckRvbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMb2FkZXJBY3Rpb25zO1xuICAgIC8vIG5ldyBMb2FkZXJBY3Rpb25zKCk7XG59KTtcblxuLy91c2UgbW9kdWxhciBwYXR0ZXJuIGFuZCBleHRlbmRzIHByb3RvdHlwZVxuLy8gb3IgdXNlIGNsb3N1cmUgYW5kIHJldHVybiB0aGUgZ2xvYmFsIG1ldGhvZFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sb2FkZXJBY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZSgnQ3JlYXRlU3RvcmUnLCBbJy4vY29tYmluZVJlZHVjZXIuanMnXSwgZnVuY3Rpb24oY29tYmluZVJlZHVjZXIpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRlcnM6IFtdLFxuICAgICAgICAgICAgYWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHN0YXRlO1xuICAgICAgICBjb25zdCBkaXNwYXRjaCA9IGFjdGlvbiA9PiB7XG4gICAgICAgICAgICBzdGF0ZSA9IGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSBsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGRpc3BhdGNoKHt9KTtcbiAgICAgICAgcmV0dXJuIHsgZGlzcGF0Y2gsIGdldFN0YXRlLCBzdWJzY3JpYmUgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NyZWF0ZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZSgnU3Bpbm5lckxvYWRlcicsIFsnLi9sb2FkZXJzTGlzdC5qcyddLCBmdW5jdGlvbihMb2FkZXJzTGlzdCkge1xuICAgIHZhciBDaXJjbGVMb2FkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSBbXTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnN0eWxlSWQgPSBMb2FkZXJzTGlzdC5DSVJDTEVfTE9BREVSO1xuICAgICAgICAvL3RoaXMuZWxlbWVudElkXG4gICAgICAgIHRoaXMucHJlZml4ID1cbiAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT0gLTEgPyAnd2Via2l0JyA6ICdtb3onO1xuICAgICAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBsb2FkZXJOYW1lOiAnJyxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJzgwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBib3JkZXJTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmM2YzZjMnLFxuICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBhbmltYXRpb25TcGVlZDogJzRzJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdjaXJjbGUnXG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZERlZmF1bHRzKGRlZmF1bHRzLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vVXRpbGl0eSBtZXRob2QgdG8gZXh0ZW5kIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKHNvdXJjZSwgcHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wdWJsaWMgbWV0aG9kXG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpc3BsYXkgPT0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vd2lsbCBiZSBwcml2YXRlXG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUuY2hlY2tWaXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25zTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnB1c2goYWN0aW9uTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUucmVtb3ZlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3Rpb25zTGlzdC5pbmRleE9mKGFjdGlvbk5hbWUpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGJ1aWxkT3V0LmNhbGwodGhpcyk7XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkT3V0KCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5pZCkuYXBwZW5kQ2hpbGQodGhpcy5sb2FkZXIpO1xuICAgICAgICAgICAgYWRkU3R5bGVLZXlGcmFtZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2V0U3R5bGVJbkxvYWRlci5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5lbGVtZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoSlNPTi5wYXJzZSh0aGlzLm9wdGlvbnMuZGlzcGxheSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3dpbGwgYmUgaW4gYWxsIGxvYWRlclxuICAgICAgICAvL2V4dHJhY3QgaXRcbiAgICAgICAgZnVuY3Rpb24gYWRkU3R5bGVLZXlGcmFtZSgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDaXJjbGVMb2FkZXIuc3R5bGVJZCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIENpcmNsZUxvYWRlci5zdHlsZUlkKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAnQC0nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmaXggK1xuICAgICAgICAgICAgICAgICAgICAnLWtleWZyYW1lcyAnICtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9wdGlvbnMuYW5pbWF0aW9uTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICdjaXJjbGUge1x0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH19JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRTdHlsZUluTG9hZGVyKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmhlaWdodCA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgICAgICAgICAgLy8gYm9yZGVyU2l6ZTogMTYsXG4gICAgICAgICAgICAvLyBib3JkZXJDb2xvciA6XCIjZjNmM2YzXCIsXG4gICAgICAgICAgICAvLyBib3JkZXJUb3BDb2xvcjogYmxhY2ssXG4gICAgICAgICAgICAvLyBhbmltYXRpb25TcGVlZDogXCI0c1wiLFxuICAgICAgICAgICAgLy8gYW5pbWF0aW9uTmFtZTogJ2NpcmNsZS1sb2FkZXInXG5cbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmJvcmRlciA9XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmJvcmRlclNpemUgKyAnIHNvbGlkICcgKyB0aGlzLm9wdGlvbnMuYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmJvcmRlclRvcCA9XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmJvcmRlclNpemUgK1xuICAgICAgICAgICAgICAgICcgc29saWQgJyArXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmJvcmRlclRvcENvbG9yO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuYW5pbWF0aW9uID1cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uTmFtZSArXG4gICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uU3BlZWQgK1xuICAgICAgICAgICAgICAgICcgbGluZWFyIGluZmluaXRlJztcblxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDaXJjbGVMb2FkZXI7XG59KTtcblxuLy9cbi8vIChmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLkNpcmNsZUxvYWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbi8vICAgICAgICAgdGhpcy5lbGVtZW50SWQgPSAnJztcbi8vICAgICAgICAgdGhpcy5sb2FkZXJOYW1lID0gJyc7XG4vLyAgICAgICAgIHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuLy9cbi8vICAgICAgICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbi8vICAgICAgICAgbGV0IGRlZmF1bHRzID0ge1xuLy8gICAgICAgICAgICAgb3ZlcmxheTogZmFsc2UsXG4vLyAgICAgICAgICAgICBsb2FkZXJJZDogJ2xvYWRlcicsXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlXG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbi8vICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZERlZmF1bHRzKGRlZmF1bHRzLCBhcmd1bWVudHNbMF0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vVXRpbGl0eSBtZXRob2QgdG8gZXh0ZW5kIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXG4vLyAgICAgICAgIGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKHNvdXJjZSwgcHJvcGVydGllcykge1xuLy8gICAgICAgICAgICAgdmFyIHByb3BlcnR5O1xuLy8gICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGJ1aWxkT3V0LmNhbGwodGhpcyk7XG4vL1xuLy8gICAgICAgICAvL3B1YmxpYyBtZXRob2Rcbi8vICAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBidWlsZE91dC5jYWxsKHRoaXMpO1xuLy8gICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgIH07XG4vL1xuLy8gICAgICAgICBmdW5jdGlvbiBidWlsZE91dCgpIHtcbi8vICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5lbGVtZW50SWQpO1xuLy9cbi8vICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzcGxheSA9PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9O1xuLy8gfSkoKTtcbi8vIC8vIHZhciBDaXJjbGVMb2FkZXJfT0JKID0gbmV3IENpcmNsZUxvYWRlcih7XG4vLyAvLyAgICAgb3ZlcmxheTogdHJ1ZSxcbi8vIC8vICAgICBkaXNwbGF5OiB0cnVlXG4vLyAvLyB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvY2lyY2xlTG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZSgnU3Bpbm5lckxvYWRlcicsIFsnLi9sb2FkZXJzTGlzdC5qcyddLCBmdW5jdGlvbihMb2FkZXJzTGlzdCkge1xuICAgIHZhciBTcGlubmVyTG9hZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSBbXTtcblxuICAgICAgICAvL3RoaXMuZWxlbWVudElkXG4gICAgICAgIHRoaXMucHJlZml4ID1cbiAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT0gLTEgPyAnd2Via2l0JyA6ICdtb3onO1xuICAgICAgICAvL3VzZSBpbiBzdHlsZSBrZXlmcmFtZSBpZFxuICAgICAgICBTcGlubmVyTG9hZGVyLnN0eWxlSWQgPSBTcGlubmVyTG9hZGVyLlNQSU5fTE9BREVSO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIGxvYWRlck5hbWU6ICcnLFxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnODBweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICAgICAgbnVtYmVyT2ZCYXJzOiA4LFxuICAgICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZERlZmF1bHRzKGRlZmF1bHRzLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vVXRpbGl0eSBtZXRob2QgdG8gZXh0ZW5kIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKHNvdXJjZSwgcHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wdWJsaWMgbWV0aG9kXG4gICAgICAgIFNwaW5uZXJMb2FkZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNwbGF5ID09IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwaW5uZXJMb2FkZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLy93aWxsIGJlIHByaXZhdGVcbiAgICAgICAgU3Bpbm5lckxvYWRlci5wcm90b3R5cGUuY2hlY2tWaXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25zTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgU3Bpbm5lckxvYWRlci5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zTGlzdC5wdXNoKGFjdGlvbk5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGlubmVyTG9hZGVyLnByb3RvdHlwZS5yZW1vdmVBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFjdGlvbnNMaXN0LmluZGV4T2YoYWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYnVpbGRPdXQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmdW5jdGlvbiBidWlsZE91dCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuaWQpLmFwcGVuZENoaWxkKHRoaXMubG9hZGVyKTtcbiAgICAgICAgICAgIGFkZFN0eWxlS2V5RnJhbWUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8vY3JlYXRlIGxvYWRlclxuICAgICAgICAgICAgc2V0U3R5bGVJbkxvYWRlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgYWRkYmFycy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UodGhpcy5vcHRpb25zLmRpc3BsYXkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy93aWxsIGJlIGluIGFsbCBsb2FkZXJcbiAgICAgICAgLy9leHRyYWN0IGl0XG4gICAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlS2V5RnJhbWUoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU3Bpbm5lckxvYWRlci5zdHlsZUlkKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgU3Bpbm5lckxvYWRlci5zdHlsZUlkKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAnQC0nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmaXggK1xuICAgICAgICAgICAgICAgICAgICAnLWtleWZyYW1lcyBmYWRlIHtmcm9tIHtvcGFjaXR5OiAxO30gdG8ge29wYWNpdHk6IDAuMjU7fX0nO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0U3R5bGVJbkxvYWRlcigpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZGJhcnMoKSB7XG4gICAgICAgICAgICB2YXIgcm90YXRpb24gPSAwO1xuICAgICAgICAgICAgdmFyIHJvdGF0ZUJ5ID0gMzYwIC8gdGhpcy5vcHRpb25zLm51bWJlck9mQmFycztcblxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gMDtcbiAgICAgICAgICAgIHZhciBmcmFtZVJhdGUgPSAxIC8gdGhpcy5vcHRpb25zLm51bWJlck9mQmFycztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLm51bWJlck9mQmFyczsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmFwcGVuZENoaWxkKGJhcik7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gJzEyJSc7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmhlaWdodCA9ICcyNiUnO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmxlZnQgPSAnNDQuNSUnO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS50b3AgPSAnNDMlJztcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICctJyArIHRoaXMucHJlZml4ICsgJy1ib3JkZXItcmFkaXVzJyxcbiAgICAgICAgICAgICAgICAgICAgJzUwcHgnLFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICctJyArIHRoaXMucHJlZml4ICsgJy1ib3gtc2hhZG93JyxcbiAgICAgICAgICAgICAgICAgICAgJzAgMCAzcHggcmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAnLScgKyB0aGlzLnByZWZpeCArICctYW5pbWF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZhZGUgMXMgbGluZWFyIGluZmluaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAnLScgKyB0aGlzLnByZWZpeCArICctdHJhbnNmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgcm90YXRpb24gKyAnZGVnKSB0cmFuc2xhdGUoMCwgLTE0MiUpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAnLScgKyB0aGlzLnByZWZpeCArICctYW5pbWF0aW9uLWRlbGF5JyxcbiAgICAgICAgICAgICAgICAgICAgMSAtIGFuaW1hdGlvbkRlbGF5ICsgJ3MnLFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByb3RhdGlvbiArPSByb3RhdGVCeTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheSAtPSBmcmFtZVJhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTcGlubmVyTG9hZGVyO1xufSk7XG4vLyB9KVxuLy8gbmV3IFNwaW5uZXJMb2FkZXIoe1xuLy8gICAgIGlkOiAnc3BpbicsXG4vLyAgICAgc2l6ZTogJzEwMHB4Jyxcbi8vICAgICBudW1iZXJPZkJhcnM6IDcsXG4vLyAgICAgY29sb3I6ICdyZWQnLFxuLy8gICAgIGxvYWRlck5hbWU6ICdjaXJjbGUtbG9hZGVyJ1xuLy8gICAgIC8vbG9hZGVyTmFtZSA6XG4vLyB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvc3BpbkxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==