var num:number = 2;

//you can also, 
var str = 'two';  //same as var str:string = 'two';

//if you want dynamic, which is not recommanded, you can use any type
var any1: any = 2;
any1 = 'two';

//function type
var func: (firstPara: string, secondPara: number) => string = (firstPara, secondPara) => {
    return firstPara + secondPara;
};

var result = func('hello', 2);

var thefunction_that_take_func_as_paramater: (func: (firstPara: string, secondPara: number) => string) => void
    = (func) => {
    var
        hello = 'hello',
        world = 2;
    console.log(func(hello,world));
}

thefunction_that_take_func_as_paramater((a, b) => {
    return '';
});

var obj = undefined;
