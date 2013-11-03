module app {
    import Log = app.tools.utils.Logger;

    export class AppViewModal implements IAppViewModal {

        _logger: Log;

        constructor() {
            this._logger = new Log();
        }

        save() {
            this._logger.log('saved');
        }
    }

}

module app {
    export interface IAppViewModal { }
}

module app.tools.utils {
    export class Logger {
        log(message: string): void {
            console.log(message);
        }
    }
}

var modal = new app.AppViewModal();
var logger = new app.tools.utils.Logger(); // this way, the namespace is too long, we can shorten the namespace by import
