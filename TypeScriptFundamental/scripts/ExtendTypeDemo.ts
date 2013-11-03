module class_extend_demo {

    interface Deal {
        dealNumber: number
    };

    interface FutureDeal extends Deal {
        instrument: string;
        exchange: string;
        matureDate: Date;
        contractMonth: number;
    }

    class BaseViewModal {

        _deal: Deal;

        constructor(deal: Deal) {
            this._deal = deal;
        }

        public onbeforeSave(): void { }
        public onafterSave(): void { }

        save(): void {
            this.onbeforeSave();
            console.log(this._deal);
            console.log('saved');
            this.onafterSave();
        }

        propertyAccessor(propertyName: string): any {
            return this._deal[propertyName];
        }


    }

    class DealingViewModal extends BaseViewModal {

        constructor(deal: Deal) {
            super(deal);
        }

        public calculateContractMonth(month: number): void {
            (<FutureDeal>this._deal).contractMonth = month;
        }

        public onbeforeSave(): void {
            console.log('on before save')
        }
        public onafterSave(): void {
            console.log('on after save')
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
    var contracMonth = future.propertyAccessor('contractMonth');
    console.log(contracMonth);
    future.save();
}
