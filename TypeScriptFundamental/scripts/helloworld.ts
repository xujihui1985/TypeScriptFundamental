class Car {
    private _enginType: string;

    constructor(enginType: string) {
        this._enginType = enginType;
    }

    Start(): void {
        alert(this._enginType + 'Start');
    }

    Stop(): void {
        alert(this._enginType + 'Stop');
    }
}