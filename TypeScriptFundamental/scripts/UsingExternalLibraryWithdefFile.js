/// <reference path="typings/knockout.d.ts" />
var viewModal = ((function () {
    var _name = ko.observable('sean');
    _name.subscribe(function (newValue) {
        alert(newValue);
    });

    return {
        name: _name
    };
})());
