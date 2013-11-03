module using_objects {
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

    //notice { name: string; age?: number }, it's semi-colon instead of comma, this confused me a lot of time;
    // infact { name: string; age?: number }, is the interface of employee, it's not object literal
    var registerEmployee = function (employee: { name: string; age?: number }) {
        if (employee.age === undefined) {
            employee.age = 20;
        }
        console.log(employee);
    }

    registerEmployee({ name: 'sean' });

}