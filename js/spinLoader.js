define('SpinnerLoader', ['./loadersList.js'], function(LoadersList) {
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
});
// })
// new SpinnerLoader({
//     id: 'spin',
//     size: '100px',
//     numberOfBars: 7,
//     color: 'red',
//     loaderName: 'circle-loader'
//     //loaderName :
// });
