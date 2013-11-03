var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var class_extend_demo;
(function (class_extend_demo) {
    ;

    var BaseViewModal = (function () {
        function BaseViewModal(deal) {
            this._deal = deal;
        }
        BaseViewModal.prototype.onbeforeSave = function () {
        };
        BaseViewModal.prototype.onafterSave = function () {
        };

        BaseViewModal.prototype.save = function () {
            this.onbeforeSave();
            console.log(this._deal);
            console.log('saved');
            this.onafterSave();
        };

        BaseViewModal.prototype.propertyAccessor = function (propertyName) {
            return this._deal[propertyName];
        };
        return BaseViewModal;
    })();

    var DealingViewModal = (function (_super) {
        __extends(DealingViewModal, _super);
        function DealingViewModal(deal) {
            _super.call(this, deal);
        }
        DealingViewModal.prototype.calculateContractMonth = function (month) {
            (this._deal).contractMonth = month;
        };

        DealingViewModal.prototype.onbeforeSave = function () {
            console.log('on before save');
        };
        DealingViewModal.prototype.onafterSave = function () {
            console.log('on after save');
        };
        return DealingViewModal;
    })(BaseViewModal);

    var futureDeal = {
        dealNumber: 1,
        instrument: 'future and eto',
        exchange: 'chargo exchange',
        matureDate: new Date(),
        contractMonth: 12
    };
    var future = new DealingViewModal(futureDeal);
    future.calculateContractMonth(5);
    var contracMonth = future.propertyAccessor('contractMonth');
    console.log(contracMonth);
    future.save();
})(class_extend_demo || (class_extend_demo = {}));
