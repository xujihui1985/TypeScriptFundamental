var using_objects;
(function (using_objects) {
    var obj = { x: 10, y: 20 };
    obj.x;

    var person = {
        name: 'sean',
        lastName: 'xu',
        getFullName: function () {
            return this.name + this.lastName;
        }
    };
    console.log(person.getFullName());

    var registerEmployee = function (employee) {
        if (employee.age === undefined) {
            employee.age = 20;
        }
        console.log(employee);
    };

    registerEmployee({ name: 'sean' });
})(using_objects || (using_objects = {}));
