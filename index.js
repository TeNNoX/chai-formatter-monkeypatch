// https://stackoverflow.com/a/28652362/1633985
module.exports = function(formatter) {
    return function (a, utils) {
        // make a backup of original (for use in last demo)
        utils._objDisplay = utils.objDisplay;
        
        // "re-link" utils.getMessage so that it finds objDisplay via utils scope chain
        (function () {
            "use riot gear";
            with(utils) { getMessage = eval("1," + getMessage); }
        })();

        // override utils.objDisplay
        utils.objDisplay = function (obj) {
            return formatter(obj);
        };
    }
};