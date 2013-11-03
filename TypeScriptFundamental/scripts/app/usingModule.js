/// <reference path="separatingmodule.ts" />
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

var common;
(function (common) {
    ;

    function config() {
        return {
            siteUrl: 'App',
            timeout: 10,
            logger: new app.tools.utils.Logger()
        };
    }
    common.config = config;
    ;
})(common || (common = {}));

var config = common.config();

var modal = new app.AppViewModal();
var logger = new app.tools.utils.Logger();
