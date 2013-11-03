var Car = (function () {
    function Car(enginType) {
        this._enginType = enginType;
    }
    Car.prototype.Start = function () {
        alert(this._enginType + 'Start');
    };

    Car.prototype.Stop = function () {
        alert(this._enginType + 'Stop');
    };
    return Car;
})();
