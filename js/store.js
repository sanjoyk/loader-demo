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
this.store = createStore(combineReducer);
console.log('store initialized', store.getState());

function getActionsListForloader(loaderName) {
    let actionsList =
        store.getState().loaders && store.getState().loaders.length > 0
            ? store
                  .getState()
                  .loaders.filter(loader => loader.name === loaderName)[0]
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
