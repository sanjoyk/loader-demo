define(
    'build',
    [
        './loaderActions.js',
        './store.js',
        './actionsList.js',
        './loadersList.js'
    ],
    function(loaderActions, store, actionsList, loadersList) {
        return {
            ActionsList: actionsList,
            LoadersList: loadersList,
            store: store,
            LoaderActions: new loaderActions()
        };
    }
);
