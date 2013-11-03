document.addEventListener('DOMContentLoaded', function (event) {
}, false);

var ViewModel = (function () {
    function ViewModel(id, txtId) {
        this.btnClick = document.getElementById(id);
        this.txtInput = document.getElementById(txtId);
        this.init();
    }
    ViewModel.prototype.init = function () {
        this.btnClick.addEventListener('click', this.onbtnClicked, false);
    };

    //init() {
    //    this.btnClick.addEventListener('click', this.onbtnClicked.bind(this), false);
    //}
    //init() {
    //    this.btnClick.addEventListener('click', (event) => {
    //        this.txtInput.value = 'button clicked';
    //    }, false);
    //    this.btnClick.addEventListener('click', this.onbtnClicked, false);
    //}
    ViewModel.prototype.onbtnClicked = function (event) {
        console.log(this);
        this.txtInput.value = 'button clicked';
    };
    return ViewModel;
})();
