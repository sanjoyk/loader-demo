define('CreateStore', ['./combineReducer.js'], function(combineReducer) {
    function createStore(reducer) {
        let state = {
            loaders: [],
            actions: []
        };
        let listeners = [];
        const getState = () => state;
        const dispatch = action => {
            state = combineReducer(state, action);
        };
        const subscribe = listener => {
            listeners.push(listener);
        };
        dispatch({});
        return { dispatch, getState, subscribe };
    }
    return createStore;
});
