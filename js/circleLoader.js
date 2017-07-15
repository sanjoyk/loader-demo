(function() {
    this.CircleLoader = function(options) {
        this.elementId = '';
        this.loaderName = '';
        this.display = false;

        this.overlay = null;
        let defaults = {
            overlay: false,
            loaderId: 'loader',
            display: true
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
        buildOut.call(this);

        //public method
        CircleLoader.prototype.open = function() {
            buildOut.call(this);
            this.element.style.display = 'inline-block';
        };
        CircleLoader.prototype.close = function() {
            this.element.style.display = 'none';
        };

        function buildOut() {
            this.element = document.getElementById(this.options.elementId);

            if (this.options.display == true) {
                this.element.style.display = 'inline-block';
            } else {
                this.element.style.display = 'none';
            }
        }
    };
})();
// var CircleLoader_OBJ = new CircleLoader({
//     overlay: true,
//     display: true
// });
