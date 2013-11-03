var app;
(function (app) {
    (function (tools) {
        (function (utils) {
            var Logger = (function () {
                function Logger() {
                }
                Logger.prototype.log = function (message) {
                    console.log(message);
                };
                return Logger;
            })();
            utils.Logger = Logger;
        })(tools.utils || (tools.utils = {}));
        var utils = tools.utils;
    })(app.tools || (app.tools = {}));
    var tools = app.tools;
})(app || (app = {}));
