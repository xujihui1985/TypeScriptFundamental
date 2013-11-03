var using_interface;
(function (using_interface) {
    var registerEmployee = function (employee) {
        if (employee.age === undefined) {
            employee.age = 20;
        }
        console.log(employee);
    };

    var initRegister = function (options) {
        var message = 'hi ' + options.employee.name + ' welcome';
        console.log(message);
    };

    var options = {
        employee: {
            name: 'sean',
            age: 28
        },
        registerDate: new Date(2012, 03, 01),
        department: 'CL'
    };
    initRegister(options);
})(using_interface || (using_interface = {}));
