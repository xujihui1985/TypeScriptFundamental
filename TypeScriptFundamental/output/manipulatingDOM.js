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

    ViewModel.prototype.onbtnClicked = function (event) {
        console.log(this);
        this.txtInput.value = 'button clicked';
    };
    return ViewModel;
})();
