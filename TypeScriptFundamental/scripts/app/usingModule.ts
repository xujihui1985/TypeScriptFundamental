/// <reference path="separatingmodule.ts" />

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

module common {

    export interface IConfig {
        siteUrl: string;
        timeout: number;
        logger: app.tools.utils.Logger;
    };

 
    export function config ():IConfig {
        return {
            siteUrl: 'App',
            timeout: 10,
            logger: new app.tools.utils.Logger()
        }
    };

}

module app {
    export interface IAppViewModal { }
}


var config = common.config();

var modal = new app.AppViewModal();
var logger = new app.tools.utils.Logger(); // this way, the namespace is too long, we can shorten the namespace by import
