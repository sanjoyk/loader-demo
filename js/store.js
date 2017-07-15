// LOADER_OBJ.open();
// // setTimeout(() => LOADER_OBJ.close(), 90000);
// setTimeout(function() {
//     debugger;
//     LOADER_OBJ.close();
// }, 3000);
var Loader = function(loaderName) {
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

const loaderLibrary = (state = {}, action) => {
    function findLoaderIndex(loaderName) {
        let associatedLoaderIndex = null;
        for (let i = 0; i < state.loaders.length; i++) {
            let loader = state.loaders[i];
            if (loader.name === loaderName) {
                associatedLoaderIndex = i;
                break;
            }
        }
        return associatedLoaderIndex;
    }
    function removeActionfromLoader(actionName) {}
    switch (action.type) {
        case 'ADD_LOADER':
            let loader = new Loader(action.name);
            state.loaders.push(loader);
            return state;

        case 'ADD_ACTION':
            let actionObj = new Action(action.name, action.associateLoaders);

            for (let i = 0; i < actionObj.associateLoaders.length; i++) {
                let loaderName = actionObj.associateLoaders[i];

                let loaderIndex = findLoaderIndex(loaderName);
                let loaderObject = state.loaders[loaderIndex];
                loaderObject.visible = true;
                //remove this line from here
                document.getElementsByClassName(loaderName)[0].style.display =
                    'block';
                loaderObject.actionsList.push(actionObj.name);
            }
            state.actions.push(action);
            // var allLoader = document.getElementsByClassName('loader');
            // for (var i = 0; i < allLoader.length; i++) {
            //     allLoader[i].style.display = 'inline-block';
            // }
            return state;
        case 'REMOVE_ACTION':
            function findAction(actionName) {}
            let actionName = action.name;
            let associateLoaders = action.associateLoaders;
            let actionObjectIndex = state.actions.findIndex(
                action => action.name === actionName
            );
            let actionObject = state.actions[actionObjectIndex];
            if (!associateLoaders) {
                associateLoaders = actionObject.associateLoaders;
            }
            for (let i = 0; i < associateLoaders.length; i++) {
                let loaderIndex = findLoaderIndex(associateLoaders[i]);
                let loader = state.loaders[loaderIndex];
                var index = loader.actionsList.indexOf(actionName);
                if (index > -1) {
                    loader.actionsList.splice(index, 1);
                    if (loader.actionsList.length == 0) {
                        loader.visible = false;
                        //remove this line from here
                        document.getElementsByClassName(
                            loader.name
                        )[0].style.display =
                            'none';
                    }
                }
            }
            state.actions.splice(actionObjectIndex, 1);
            console.log();
            return state;
        default:
            return state;
    }
};
const store = createStore(loaderLibrary);
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
// store.dispatch({
//     type: 'ADD_ACTION',
//     name: 'FETCH_DATA',
//     associateLoaders: ['LOADER1', 'LOADER2']
// });
// console.log('After ADD_ACTION FETCH_DATA', store.getState());
// store.dispatch({
//     type: 'REMOVE_ACTION',
//     name: 'FETCH_DATA',
//     associateLoaders: ['LOADER1', 'LOADER2']
// });
// console.log('After ADD_LOADER REMOVE_ACTION', store.getState());
