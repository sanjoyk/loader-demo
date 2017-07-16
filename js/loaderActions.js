this.LoaderActions = function() {
    this.initialize();
};

//use modular pattern and extends prototype
// or use closure and return the global method
this.LoaderActions.prototype.initialize = function() {
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
new LoaderActions();
