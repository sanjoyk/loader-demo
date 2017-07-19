define(
    'Store',
    ['./createStore.js', './combineReducer.js', './action.js'],
    function(createStore, combineReducer, actions) {
        store = createStore(combineReducer);
        console.log('store initialized', store.getState());
        return store;
    }
);
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
