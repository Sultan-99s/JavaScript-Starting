Array.prototype.groupBy = function(fn) {
    const arr = {}

    for(let i of this){
        const key = fn(i);
        arr[key] ||= [];
        arr[key].push(i);
    }
    return arr;
};
