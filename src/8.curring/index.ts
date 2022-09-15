/**
 * 实现  add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
 */

function sum() {
    const args = Array.prototype.slice.call(arguments) as number[];
    return args.reduce((pre, cur) => pre + cur, 0);
}

function curry(fn: Function) {
    let allArgs = [];
    return function next() {
        debugger
        console.log(`this1: ${this}`);
        const args = Array.prototype.slice.call(arguments);
        if (args.length > 0) {
            allArgs = allArgs.concat(args);
            return next;
        } else {
            debugger
            console.log(`this2: ${this}`);
            return fn.apply(this, allArgs);
        }
    }
}

export {
    sum,
    curry
}