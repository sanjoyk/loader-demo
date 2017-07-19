define('Action', [], function() {
    var Action = function(actionName, associateLoaders = []) {
        this.name = actionName;
        this.associateLoaders = associateLoaders;
    };
    return Action;
});
