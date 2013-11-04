module class_extend_demo {

    export interface Deal {
        dealNumber: number
    };

    export interface FutureDeal extends Deal {
        instrument: string;
        exchange: string;
        matureDate: Date;
        contractMonth: number;
    }

    export class BaseViewModal {

        _deal: Deal;
        onbeforeSave: () => void;
        onafterSave: () => void;

        constructor(deal: Deal) {
            this._deal = deal;
        }

        public methodCanbeOverride(): void {
            console.log(this._deal);
            console.log('call methodCanbeOverride2 from base class');
        }

        public 

        save(): void {
            if (this.onbeforeSave) {
                this.onbeforeSave();
            }
            console.log(this._deal);
            console.log('saved');
            if (this.onafterSave) {
                this.onafterSave();
            }

        }

        propertyAccessor(propertyName: string): any {
            return this._deal[propertyName];
        }


    }

    export class DealingViewModal extends BaseViewModal {

        constructor(deal: Deal) {
            super(deal);
        }

        public calculateContractMonth(month: number): void {
            (<FutureDeal>this._deal).contractMonth = month;
        }

        onbeforeSave = () => {
            console.log('on before save');
        }

        onafterSave = () => {
            console.log('on after save');
        }

        public methodCanbeOverride(): void {
            super.methodCanbeOverride();
            console.log('call from sub');

        }

    }

    var futureDeal: FutureDeal = {
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
}
