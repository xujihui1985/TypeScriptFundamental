
// we can also use complex type
class Exchange {
    constructor(public exchangeName: string) {
    }
}

class Deal {
    private _instrument: string;
    private _exchange: Exchange;

    constructor(instrument: string, exchange: Exchange) {
        this._exchange = exchange;
        this._instrument = instrument;
    }

    getExchange(): Exchange {
        return this._exchange;
    }

    get instrument(): string {
        return this._instrument;
    }
    set instrument(value: string) {
        this._instrument = value;
    }

    static newDeal(): Deal {
        return new Deal('', new Exchange(''));
    }
}


//type convert
var table: HTMLTableElement = document.createElement('table');

//or

var table = <HTMLTableElement> document.createElement('table');
table.createTBody();


