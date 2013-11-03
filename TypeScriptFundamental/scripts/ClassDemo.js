// we can also use complex type
var Exchange = (function () {
    function Exchange(exchangeName) {
        this.exchangeName = exchangeName;
    }
    return Exchange;
})();

var Deal = (function () {
    function Deal(instrument, exchange) {
        this._exchange = exchange;
        this._instrument = instrument;
    }
    Deal.prototype.getExchange = function () {
        return this._exchange;
    };

    Object.defineProperty(Deal.prototype, "instrument", {
        get: function () {
            return this._instrument;
        },
        set: function (value) {
            this._instrument = value;
        },
        enumerable: true,
        configurable: true
    });
    return Deal;
})();

//type convert
var table = document.createElement('table');

//or
var table = document.createElement('table');
table.createTBody();
