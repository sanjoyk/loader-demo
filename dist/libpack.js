(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["libpack"] = factory();
	else
		root["libpack"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() {
    this.ActionsList = {
        ADD_LOADER: 'ADD_LOADER',
        ADD_ACTION: 'ADD_ACTION',
        REMOVE_ACTION: 'REMOVE_ACTION'
    };
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var LoadersList = {
    SPIN_LOADER: 'spin-loader',
    CIRCLE_LOADER: 'circle-loader'
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() {
    this.CircleLoader = function(options) {
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
                style.setAttribute('id', SpinnerLoader.styleId);
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
})();

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
/* 4 */
/***/ (function(module, exports) {

(function() {
    this.SpinnerLoader = function() {
        this.loader = null;
        this.options = {};
        this.actionsList = [];

        //this.elementId
        this.prefix =
            navigator.userAgent.indexOf('WebKit') != -1 ? 'webkit' : 'moz';
        //use in style keyframe id
        SpinnerLoader.styleId = LoadersList.SPIN_LOADER;

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
})();

new SpinnerLoader({
    id: 'spin',
    size: '100px',
    numberOfBars: 7,
    color: 'red',
    loaderName: 'circle-loader'
    //loaderName :
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var LoaderOldClass = function(loaderName) {
    this.name = loaderName;
    this.visible = false;
    this.actionsList = [];
};
var Action = function(actionName, associateLoaders = []) {
    this.name = actionName;
    this.associateLoaders = associateLoaders;
};
function createStore(reducer) {
    let state = {
        loaders: [],
        actions: []
    };
    let listeners = [];
    const getState = () => state;
    const dispatch = action => {
        state = reducer(state, action);
    };
    const subscribe = listener => {
        listeners.push(listener);
    };
    dispatch({});
    return { dispatch, getState, subscribe };
}

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
            let actionObj = new Action(action.name, action.associateLoaders);

            for (let i = 0; i < actionObj.associateLoaders.length; i++) {
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
store = createStore(combineReducer);
console.log('store initialized', store.getState());

function getActionsListForloader(loaderName) {
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
}

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
/* 6 */
/***/ (function(module, exports) {

var LoaderActions = function() {
    this.initialize();
};

//use modular pattern and extends prototype
// or use closure and return the global method
LoaderActions.prototype.initialize = function() {
    let loaderList = document.getElementsByClassName('loader1');
    let loaderListLength = loaderList.length;
    for (let loaderIndex = 0; loaderIndex < loaderListLength; loaderIndex++) {
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
// new LoaderActions();


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlODZhZGQwY2YxZTUzN2UxMTMwZCIsIndlYnBhY2s6Ly8vLi9qcy9hY3Rpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sb2FkZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jaXJjbGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc3BpbkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sb2FkZXJBY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsdUNBQXVDO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQ0FBZ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxpYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaWJwYWNrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpYnBhY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTg2YWRkMGNmMWU1MzdlMTEzMGQiLCIoZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5BY3Rpb25zTGlzdCA9IHtcbiAgICAgICAgQUREX0xPQURFUjogJ0FERF9MT0FERVInLFxuICAgICAgICBBRERfQUNUSU9OOiAnQUREX0FDVElPTicsXG4gICAgICAgIFJFTU9WRV9BQ1RJT046ICdSRU1PVkVfQUNUSU9OJ1xuICAgIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hY3Rpb25zTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTG9hZGVyc0xpc3QgPSB7XG4gICAgU1BJTl9MT0FERVI6ICdzcGluLWxvYWRlcicsXG4gICAgQ0lSQ0xFX0xPQURFUjogJ2NpcmNsZS1sb2FkZXInXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sb2FkZXJzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5DaXJjbGVMb2FkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSBbXTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnN0eWxlSWQgPSBMb2FkZXJzTGlzdC5DSVJDTEVfTE9BREVSO1xuICAgICAgICAvL3RoaXMuZWxlbWVudElkXG4gICAgICAgIHRoaXMucHJlZml4ID1cbiAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT0gLTEgPyAnd2Via2l0JyA6ICdtb3onO1xuICAgICAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBsb2FkZXJOYW1lOiAnJyxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJzgwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBib3JkZXJTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmM2YzZjMnLFxuICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICBhbmltYXRpb25TcGVlZDogJzRzJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk5hbWU6ICdjaXJjbGUnXG4gICAgICAgIH07XG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZERlZmF1bHRzKGRlZmF1bHRzLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vVXRpbGl0eSBtZXRob2QgdG8gZXh0ZW5kIGRlZmF1bHRzIHdpdGggdXNlciBvcHRpb25zXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKHNvdXJjZSwgcHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wdWJsaWMgbWV0aG9kXG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpc3BsYXkgPT0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vd2lsbCBiZSBwcml2YXRlXG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUuY2hlY2tWaXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25zTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2lyY2xlTG9hZGVyLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnB1c2goYWN0aW9uTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUucmVtb3ZlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3Rpb25zTGlzdC5pbmRleE9mKGFjdGlvbk5hbWUpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGJ1aWxkT3V0LmNhbGwodGhpcyk7XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkT3V0KCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5pZCkuYXBwZW5kQ2hpbGQodGhpcy5sb2FkZXIpO1xuICAgICAgICAgICAgYWRkU3R5bGVLZXlGcmFtZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2V0U3R5bGVJbkxvYWRlci5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5lbGVtZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoSlNPTi5wYXJzZSh0aGlzLm9wdGlvbnMuZGlzcGxheSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3dpbGwgYmUgaW4gYWxsIGxvYWRlclxuICAgICAgICAvL2V4dHJhY3QgaXRcbiAgICAgICAgZnVuY3Rpb24gYWRkU3R5bGVLZXlGcmFtZSgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDaXJjbGVMb2FkZXIuc3R5bGVJZCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIFNwaW5uZXJMb2FkZXIuc3R5bGVJZCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgJ0AtJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZml4ICtcbiAgICAgICAgICAgICAgICAgICAgJy1rZXlmcmFtZXMgJyArXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vcHRpb25zLmFuaW1hdGlvbk5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAnY2lyY2xlIHtcdDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9fSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0U3R5bGVJbkxvYWRlcigpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICAgICAgICAgIC8vIGJvcmRlclNpemU6IDE2LFxuICAgICAgICAgICAgLy8gYm9yZGVyQ29sb3IgOlwiI2YzZjNmM1wiLFxuICAgICAgICAgICAgLy8gYm9yZGVyVG9wQ29sb3I6IGJsYWNrLFxuICAgICAgICAgICAgLy8gYW5pbWF0aW9uU3BlZWQ6IFwiNHNcIixcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbk5hbWU6ICdjaXJjbGUtbG9hZGVyJ1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5ib3JkZXIgPVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ib3JkZXJTaXplICsgJyBzb2xpZCAnICsgdGhpcy5vcHRpb25zLmJvcmRlckNvbG9yO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5ib3JkZXJUb3AgPVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ib3JkZXJTaXplICtcbiAgICAgICAgICAgICAgICAnIHNvbGlkICcgK1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ib3JkZXJUb3BDb2xvcjtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLmFuaW1hdGlvbiA9XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbk5hbWUgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvblNwZWVkICtcbiAgICAgICAgICAgICAgICAnIGxpbmVhciBpbmZpbml0ZSc7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnN0eWxlLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbi8vXG4vLyAoZnVuY3Rpb24oKSB7XG4vLyAgICAgdGhpcy5DaXJjbGVMb2FkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4vLyAgICAgICAgIHRoaXMuZWxlbWVudElkID0gJyc7XG4vLyAgICAgICAgIHRoaXMubG9hZGVyTmFtZSA9ICcnO1xuLy8gICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbi8vXG4vLyAgICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4vLyAgICAgICAgIGxldCBkZWZhdWx0cyA9IHtcbi8vICAgICAgICAgICAgIG92ZXJsYXk6IGZhbHNlLFxuLy8gICAgICAgICAgICAgbG9hZGVySWQ6ICdsb2FkZXInLFxuLy8gICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBpZiAoYXJndW1lbnRzWzBdICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmREZWZhdWx0cyhkZWZhdWx0cywgYXJndW1lbnRzWzBdKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAvL1V0aWxpdHkgbWV0aG9kIHRvIGV4dGVuZCBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xuLy8gICAgICAgICBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyhzb3VyY2UsIHByb3BlcnRpZXMpIHtcbi8vICAgICAgICAgICAgIHZhciBwcm9wZXJ0eTtcbi8vICAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBidWlsZE91dC5jYWxsKHRoaXMpO1xuLy9cbi8vICAgICAgICAgLy9wdWJsaWMgbWV0aG9kXG4vLyAgICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgYnVpbGRPdXQuY2FsbCh0aGlzKTtcbi8vICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIENpcmNsZUxvYWRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgICAgICB9O1xuLy9cbi8vICAgICAgICAgZnVuY3Rpb24gYnVpbGRPdXQoKSB7XG4vLyAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuZWxlbWVudElkKTtcbi8vXG4vLyAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc3BsYXkgPT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIH0pKCk7XG4vLyAvLyB2YXIgQ2lyY2xlTG9hZGVyX09CSiA9IG5ldyBDaXJjbGVMb2FkZXIoe1xuLy8gLy8gICAgIG92ZXJsYXk6IHRydWUsXG4vLyAvLyAgICAgZGlzcGxheTogdHJ1ZVxuLy8gLy8gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NpcmNsZUxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5TcGlubmVyTG9hZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSBbXTtcblxuICAgICAgICAvL3RoaXMuZWxlbWVudElkXG4gICAgICAgIHRoaXMucHJlZml4ID1cbiAgICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT0gLTEgPyAnd2Via2l0JyA6ICdtb3onO1xuICAgICAgICAvL3VzZSBpbiBzdHlsZSBrZXlmcmFtZSBpZFxuICAgICAgICBTcGlubmVyTG9hZGVyLnN0eWxlSWQgPSBMb2FkZXJzTGlzdC5TUElOX0xPQURFUjtcblxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgICAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBsb2FkZXJOYW1lOiAnJyxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJzgwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgICAgIG51bWJlck9mQmFyczogOCxcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYXJndW1lbnRzWzBdICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmREZWZhdWx0cyhkZWZhdWx0cywgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAvL1V0aWxpdHkgbWV0aG9kIHRvIGV4dGVuZCBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xuICAgICAgICBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyhzb3VyY2UsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHVibGljIG1ldGhvZFxuICAgICAgICBTcGlubmVyTG9hZGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGlzcGxheSA9PSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGlubmVyTG9hZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vd2lsbCBiZSBwcml2YXRlXG4gICAgICAgIFNwaW5uZXJMb2FkZXIucHJvdG90eXBlLmNoZWNrVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uc0xpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFNwaW5uZXJMb2FkZXIucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc0xpc3QucHVzaChhY3Rpb25OYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3Bpbm5lckxvYWRlci5wcm90b3R5cGUucmVtb3ZlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3Rpb25zTGlzdC5pbmRleE9mKGFjdGlvbk5hbWUpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGJ1aWxkT3V0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRPdXQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmlkKS5hcHBlbmRDaGlsZCh0aGlzLmxvYWRlcik7XG4gICAgICAgICAgICBhZGRTdHlsZUtleUZyYW1lLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAvL2NyZWF0ZSBsb2FkZXJcbiAgICAgICAgICAgIHNldFN0eWxlSW5Mb2FkZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGFkZGJhcnMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHRoaXMub3B0aW9ucy5kaXNwbGF5KSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vd2lsbCBiZSBpbiBhbGwgbG9hZGVyXG4gICAgICAgIC8vZXh0cmFjdCBpdFxuICAgICAgICBmdW5jdGlvbiBhZGRTdHlsZUtleUZyYW1lKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNwaW5uZXJMb2FkZXIuc3R5bGVJZCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIFNwaW5uZXJMb2FkZXIuc3R5bGVJZCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgJ0AtJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZml4ICtcbiAgICAgICAgICAgICAgICAgICAgJy1rZXlmcmFtZXMgZmFkZSB7ZnJvbSB7b3BhY2l0eTogMTt9IHRvIHtvcGFjaXR5OiAwLjI1O319JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFN0eWxlSW5Mb2FkZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS53aWR0aCA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICAgICAgICB0aGlzLmxvYWRlci5zdHlsZS5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRiYXJzKCkge1xuICAgICAgICAgICAgdmFyIHJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIHZhciByb3RhdGVCeSA9IDM2MCAvIHRoaXMub3B0aW9ucy5udW1iZXJPZkJhcnM7XG5cbiAgICAgICAgICAgIHZhciBhbmltYXRpb25EZWxheSA9IDA7XG4gICAgICAgICAgICB2YXIgZnJhbWVSYXRlID0gMSAvIHRoaXMub3B0aW9ucy5udW1iZXJPZkJhcnM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5udW1iZXJPZkJhcnM7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5hcHBlbmRDaGlsZChiYXIpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS53aWR0aCA9ICcxMiUnO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSAnMjYlJztcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5sZWZ0ID0gJzQ0LjUlJztcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUudG9wID0gJzQzJSc7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAnLScgKyB0aGlzLnByZWZpeCArICctYm9yZGVyLXJhZGl1cycsXG4gICAgICAgICAgICAgICAgICAgICc1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAnLScgKyB0aGlzLnByZWZpeCArICctYm94LXNoYWRvdycsXG4gICAgICAgICAgICAgICAgICAgICcwIDAgM3B4IHJnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgJy0nICsgdGhpcy5wcmVmaXggKyAnLWFuaW1hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdmYWRlIDFzIGxpbmVhciBpbmZpbml0ZScsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgJy0nICsgdGhpcy5wcmVmaXggKyAnLXRyYW5zZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHJvdGF0aW9uICsgJ2RlZykgdHJhbnNsYXRlKDAsIC0xNDIlKScsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgJy0nICsgdGhpcy5wcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheScsXG4gICAgICAgICAgICAgICAgICAgIDEgLSBhbmltYXRpb25EZWxheSArICdzJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcm90YXRpb24gKz0gcm90YXRlQnk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXkgLT0gZnJhbWVSYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbm5ldyBTcGlubmVyTG9hZGVyKHtcbiAgICBpZDogJ3NwaW4nLFxuICAgIHNpemU6ICcxMDBweCcsXG4gICAgbnVtYmVyT2ZCYXJzOiA3LFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBsb2FkZXJOYW1lOiAnY2lyY2xlLWxvYWRlcidcbiAgICAvL2xvYWRlck5hbWUgOlxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3NwaW5Mb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExvYWRlck9sZENsYXNzID0gZnVuY3Rpb24obG9hZGVyTmFtZSkge1xuICAgIHRoaXMubmFtZSA9IGxvYWRlck5hbWU7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb25zTGlzdCA9IFtdO1xufTtcbnZhciBBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25OYW1lLCBhc3NvY2lhdGVMb2FkZXJzID0gW10pIHtcbiAgICB0aGlzLm5hbWUgPSBhY3Rpb25OYW1lO1xuICAgIHRoaXMuYXNzb2NpYXRlTG9hZGVycyA9IGFzc29jaWF0ZUxvYWRlcnM7XG59O1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgbG9hZGVyczogW10sXG4gICAgICAgIGFjdGlvbnM6IFtdXG4gICAgfTtcbiAgICBsZXQgbGlzdGVuZXJzID0gW107XG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IGFjdGlvbiA9PiB7XG4gICAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IGxpc3RlbmVyID0+IHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH07XG4gICAgZGlzcGF0Y2goe30pO1xuICAgIHJldHVybiB7IGRpc3BhdGNoLCBnZXRTdGF0ZSwgc3Vic2NyaWJlIH07XG59XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGZ1bmN0aW9uIGZpbmRMb2FkZXIobG9hZGVySWQpIHtcbiAgICAgICAgbGV0IGFzc29jaWF0ZWRMb2FkZXIgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsb2FkZXIgPSBzdGF0ZS5sb2FkZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vcHRpb25zLmlkID09PSBsb2FkZXJJZCkge1xuICAgICAgICAgICAgICAgIGFzc29jaWF0ZWRMb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzc29jaWF0ZWRMb2FkZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGlvbmZyb21Mb2FkZXIoYWN0aW9uTmFtZSkge31cbiAgICBpZiAoIWFjdGlvbi50eXBlICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQWN0aW9uc0xpc3QuQUREX0xPQURFUjpcbiAgICAgICAgICAgIGxldCBsb2FkZXIgPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ubG9hZGVySW5mby5sb2FkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkZXJzTGlzdC5DSVJDTEVfTE9BREVSOlxuICAgICAgICAgICAgICAgICAgICBsb2FkZXIgPSBuZXcgQ2lyY2xlTG9hZGVyKGFjdGlvbi5sb2FkZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMb2FkZXJzTGlzdC5TUElOX0xPQURFUjpcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyID0gbmV3IFNwaW5uZXJMb2FkZXIoYWN0aW9uLmxvYWRlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBsb2FkZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvYWRlcikge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRlcnMucHVzaChsb2FkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgICAgIGNhc2UgQWN0aW9uc0xpc3QuQUREX0FDVElPTjpcbiAgICAgICAgICAgIGxldCBhY3Rpb25PYmogPSBuZXcgQWN0aW9uKGFjdGlvbi5uYW1lLCBhY3Rpb24uYXNzb2NpYXRlTG9hZGVycyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uT2JqLmFzc29jaWF0ZUxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hZGVySWQgPSBhY3Rpb25PYmouYXNzb2NpYXRlTG9hZGVyc1tpXTtcblxuICAgICAgICAgICAgICAgIGxldCBsb2FkZXJPYmplY3QgPSBmaW5kTG9hZGVyKGxvYWRlcklkKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJPYmplY3Qub3BlbigpO1xuICAgICAgICAgICAgICAgIGxvYWRlck9iamVjdC5hZGRBY3Rpb24oYWN0aW9uLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9hZGQgcmVkdWNlciB0byBhZGQgYWN0aW9uXG4gICAgICAgICAgICBzdGF0ZS5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgY2FzZSBBY3Rpb25zTGlzdC5SRU1PVkVfQUNUSU9OOlxuICAgICAgICAgICAgZnVuY3Rpb24gZmluZEFjdGlvbihhY3Rpb25OYW1lKSB7fVxuICAgICAgICAgICAgbGV0IGFjdGlvbk5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhc3NvY2lhdGVMb2FkZXJzID0gYWN0aW9uLmFzc29jaWF0ZUxvYWRlcnM7XG5cbiAgICAgICAgICAgIGxldCBhY3Rpb25PYmplY3QgPSBzdGF0ZS5hY3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAgICAgYWN0aW9uID0+IGFjdGlvbi5uYW1lID09PSBhY3Rpb25OYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFhc3NvY2lhdGVMb2FkZXJzKSB7XG4gICAgICAgICAgICAgICAgYXNzb2NpYXRlTG9hZGVycyA9IGFjdGlvbk9iamVjdC5hc3NvY2lhdGVMb2FkZXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc29jaWF0ZUxvYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hZGVyID0gZmluZExvYWRlcihhc3NvY2lhdGVMb2FkZXJzW2ldKTtcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlQWN0aW9uKGFjdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFjdGlvbk9iamVjdEluZGV4ID0gc3RhdGUuYWN0aW9ucy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgYWN0aW9uID0+IChhY3Rpb24ubmFtZSA9IGFjdGlvbk5hbWUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9hZGQgcmVkdWNlciB0byByZW1vdmUgYWN0aW9uXG4gICAgICAgICAgICBzdGF0ZS5hY3Rpb25zLnNwbGljZShhY3Rpb25PYmplY3RJbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbnN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZVJlZHVjZXIpO1xuY29uc29sZS5sb2coJ3N0b3JlIGluaXRpYWxpemVkJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG5cbmZ1bmN0aW9uIGdldEFjdGlvbnNMaXN0Rm9ybG9hZGVyKGxvYWRlck5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhsb2FkZXJOYW1lKTtcbiAgICBsZXQgYWN0aW9uc0xpc3QgPVxuICAgICAgICBzdG9yZS5nZXRTdGF0ZSgpLmxvYWRlcnMgJiYgc3RvcmUuZ2V0U3RhdGUoKS5sb2FkZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gc3RvcmVcbiAgICAgICAgICAgICAgICAgIC5nZXRTdGF0ZSgpXG4gICAgICAgICAgICAgICAgICAubG9hZGVycy5maW5kKGxvYWRlciA9PiBsb2FkZXIub3B0aW9ucy5pZCA9PT0gbG9hZGVyTmFtZSlcbiAgICAgICAgICAgICAgICAgIC5hY3Rpb25zTGlzdFxuICAgICAgICAgICAgOiBbXTtcbiAgICByZXR1cm4gWy4uLmFjdGlvbnNMaXN0XTtcbiAgICAvL3JldHVybiBzdG9yZS5nZXQubG9hZGVyc1tpXS5hY3Rpb25zTGlzdDtcbn1cblxuLy9hY3Rpb24gdHlwZVxuLy9sb2FkZXIgaWRcbi8vXG4vL2NyZWF0ZSBMb2FkZXJDbGFzc1xuLy9jYWxsIGluaXRpYWxpemF0aW9uIGFuZCBzZXQgYWxsIGxvYWRlclxuLy9hZGQgYWRkIG5ldyBsb2FkZXIgIGFuZCBvdmVycmlkZSB0aGUgbG9hZGVyIGxpc3QgaW4gc3RvcmUgaWUgcmVpbml0aWFsaXplXG4vL29uIHN0b3JlIGNoYW5nZSBzdWJzY3JpYmUgY29ycmVzcG9kaW5nIGxvYWRlclxuLy9cblxuLy8gc3RvcmUuZGlzcGF0Y2goe1xuLy8gICAgIHR5cGU6ICdBRERfTE9BREVSJyxcbi8vICAgICBuYW1lOiAnTE9BREVSMSdcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coJ2FmdGVyIEFERF9MT0FERVIgbG9hZGVyMSAnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnQUREX0xPQURFUicsXG4vLyAgICAgbmFtZTogJ0xPQURFUjInXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdhZnRlciBBRERfTE9BREVSIGxvYWRlcjInLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnQUREX0xPQURFUicsXG4vLyAgICAgbmFtZTogJ0xPQURFUjMnXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdBZnRlciBBRERfTE9BREVSIGxvYWRlcjMnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vXG5cbi8vIC8vaWYgeW91IGRvbid0IHBhc3MgdmlzaWJsZSB0eXBlIGluIEFERF9BQ1RJT04gaXQgd2lsbCBjb25zaWRlciB2aXNpYmxlIHRydWVcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiBBY3Rpb25zTGlzdC5BRERfQUNUSU9OLFxuLy8gICAgIG5hbWU6ICdGRVRDSF9EQVRBJyxcbi8vICAgICBhc3NvY2lhdGVMb2FkZXJzOiBbJ3NwaW4tbG9hZGVyLTInLCAnc3Bpbi1sb2FkZXItMSddXG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKCdBZnRlciBBRERfQUNUSU9OIEZFVENIX0RBVEEnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbi8vIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICB0eXBlOiAnUkVNT1ZFX0FDVElPTicsXG4vLyAgICAgbmFtZTogJ0ZFVENIX0RBVEEnLFxuLy8gICAgIGFzc29jaWF0ZUxvYWRlcnM6IFsnTE9BREVSMScsICdMT0FERVIyJ11cbi8vIH0pO1xuLy8gY29uc29sZS5sb2coJ0FmdGVyIEFERF9MT0FERVIgUkVNT1ZFX0FDVElPTicsIHN0b3JlLmdldFN0YXRlKCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9zdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTG9hZGVyQWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufTtcblxuLy91c2UgbW9kdWxhciBwYXR0ZXJuIGFuZCBleHRlbmRzIHByb3RvdHlwZVxuLy8gb3IgdXNlIGNsb3N1cmUgYW5kIHJldHVybiB0aGUgZ2xvYmFsIG1ldGhvZFxuTG9hZGVyQWN0aW9ucy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsb2FkZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZGVyMScpO1xuICAgIGxldCBsb2FkZXJMaXN0TGVuZ3RoID0gbG9hZGVyTGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgbG9hZGVySW5kZXggPSAwOyBsb2FkZXJJbmRleCA8IGxvYWRlckxpc3RMZW5ndGg7IGxvYWRlckluZGV4KyspIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQWN0aW9uc0xpc3QuQUREX0xPQURFUixcbiAgICAgICAgICAgIGxvYWRlckluZm86IGdldExvYWRlckluZm8obG9hZGVyTGlzdFtsb2FkZXJJbmRleF0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRMb2FkZXJJbmZvKGxvYWRlckRvbSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdldEF0dHJpYnV0ZVZhbHVlKGxvYWRlckRvbSwgJ2lkJyksXG4gICAgICAgICAgICBsb2FkZXJOYW1lOiBnZXRBdHRyaWJ1dGVWYWx1ZShsb2FkZXJEb20sICdkYXRhLWxvYWRlci1uYW1lJyksXG4gICAgICAgICAgICBkaXNwbGF5OiBnZXRBdHRyaWJ1dGVWYWx1ZShsb2FkZXJEb20sICdkYXRhLWRpc3BsYXknKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShsb2FkZXJEb20sIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlckRvbS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgfVxufTtcbi8vIG5ldyBMb2FkZXJBY3Rpb25zKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xvYWRlckFjdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==