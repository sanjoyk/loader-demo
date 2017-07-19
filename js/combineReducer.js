define(
    'CombineReducer',
    [
        './actionsList.js',
        './loadersList.js',
        './action.js',
        './circleLoader.js',
        './spinLoader.js'
    ],
    function(ActionsList, LoadersList, Action, CircleLoader, SpinnerLoader) {
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
    }
);
