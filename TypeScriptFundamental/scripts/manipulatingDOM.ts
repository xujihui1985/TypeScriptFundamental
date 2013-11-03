document.addEventListener('DOMContentLoaded', (event) => {



}, false);


class ViewModel {
    private btnClick: HTMLInputElement;
    private txtInput: HTMLInputElement;

    constructor(id: string, txtId:string) {
        this.btnClick = <HTMLInputElement>document.getElementById(id);
        this.txtInput = <HTMLInputElement>document.getElementById(txtId);
        this.init();
    }

    init() {
        this.btnClick.addEventListener('click', this.onbtnClicked, false);
    }

    //init() {
    //    this.btnClick.addEventListener('click', this.onbtnClicked.bind(this), false);
    //}
    //init() {
    //    this.btnClick.addEventListener('click', (event) => {
    //        this.txtInput.value = 'button clicked';
    //    }, false);

    //    this.btnClick.addEventListener('click', this.onbtnClicked, false);
    //}

    onbtnClicked(event: Event) {
        console.log(this);
        this.txtInput.value = 'button clicked';
    }


}
