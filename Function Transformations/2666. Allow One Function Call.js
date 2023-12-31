/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let a = 0;
	return function(...args){
        a++;
        if(a===1)
            return fn(...args);
    }
};
