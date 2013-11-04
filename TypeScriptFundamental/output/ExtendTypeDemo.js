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
        BaseViewModal.prototype.methodCanbeOverride = function () {
            console.log(this._deal);
            console.log('call methodCanbeOverride2 from base class');
        };

        BaseViewModal.prototype.save = function () {
            if (this.onbeforeSave) {
                this.onbeforeSave();
            }
            console.log(this._deal);
            console.log('saved');
            if (this.onafterSave) {
                this.onafterSave();
            }
        };

        BaseViewModal.prototype.propertyAccessor = function (propertyName) {
            return this._deal[propertyName];
        };
        return BaseViewModal;
    })();
    class_extend_demo.BaseViewModal = BaseViewModal;

    var DealingViewModal = (function (_super) {
        __extends(DealingViewModal, _super);
        function DealingViewModal(deal) {
            _super.call(this, deal);
            this.onbeforeSave = function () {
                console.log('on before save');
            };
            this.onafterSave = function () {
                console.log('on after save');
            };
        }
        DealingViewModal.prototype.calculateContractMonth = function (month) {
            (this._deal).contractMonth = month;
        };

        DealingViewModal.prototype.methodCanbeOverride = function () {
            _super.prototype.methodCanbeOverride.call(this);
            console.log('call from sub');
        };
        return DealingViewModal;
    })(BaseViewModal);
    class_extend_demo.DealingViewModal = DealingViewModal;

    var futureDeal = {
        dealNumber: 1,
        instrument: 'future and eto',
        exchange: 'chargo exchange',
        matureDate: new Date(),
        contractMonth: 12
    };
    var future = new DealingViewModal(futureDeal);
    future.calculateContractMonth(5);
    future.methodCanbeOverride();
    var contracMonth = future.propertyAccessor('contractMonth');
    console.log(contracMonth);
    future.save();
})(class_extend_demo || (class_extend_demo = {}));
