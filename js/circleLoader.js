define('SpinnerLoader', ['./loadersList.js'], function(LoadersList) {
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
});

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
