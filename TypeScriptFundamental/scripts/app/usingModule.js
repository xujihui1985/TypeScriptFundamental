var app;
(function (app) {
    var Log = app.tools.utils.Logger;

    var AppViewModal = (function () {
        function AppViewModal() {
            this._logger = new Log();
        }
        AppViewModal.prototype.save = function () {
            this._logger.log('saved');
        };
        return AppViewModal;
    })();
    app.AppViewModal = AppViewModal;
})(app || (app = {}));

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

var modal = new app.AppViewModal();
var logger = new app.tools.utils.Logger();
