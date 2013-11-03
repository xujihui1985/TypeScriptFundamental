var num = 2;

//you can also,
var str = 'two';

//if you want dynamic, which is not recommanded, you can use any type
var any1 = 2;
any1 = 'two';

//function type
var func = function (firstPara, secondPara) {
    return firstPara + secondPara;
};

var result = func('hello', 2);

var thefunction_that_take_func_as_paramater = function (func) {
    var hello = 'hello', world = 2;
    console.log(func(hello, world));
};

thefunction_that_take_func_as_paramater(function (a, b) {
    return '';
});

var obj = undefined;
