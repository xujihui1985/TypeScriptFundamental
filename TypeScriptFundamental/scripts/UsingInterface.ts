module using_interface {

    //var registerEmployee = function (employee: { name: string; age?: number }) {
    //    if (employee.age === undefined) {
    //        employee.age = 20;
    //    }
    //    console.log(employee);
    //}

    // be careful, using ; instead of ,
    interface RegisterOptions {
        employee: Employee;
        registerDate: Date;
        department: string;
    }

    interface Employee {
        name: string;
        age?: number;
    }

    interface RegisterFunction {
        (employee: Employee): void;
    }

    var registerEmployee: RegisterFunction = (employee) => {
        if (employee.age === undefined) {
            employee.age = 20;
        }
        console.log(employee);
    }


    var initRegister = (options: RegisterOptions) => {
        var message = 'hi ' + options.employee.name + ' welcome';
        console.log(message);
    }

    var options: RegisterOptions = {
        employee: {
            name: 'sean',
            age: 28
        },
        registerDate: new Date(2012, 03, 01),
        department: 'CL'
    };
    initRegister(options);

    
}