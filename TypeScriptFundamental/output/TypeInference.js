var num = 2;

var str = 'two';

var any1 = 2;
any1 = 'two';

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
