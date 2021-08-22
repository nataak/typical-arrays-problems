exports.min = function min(array) {
    if (!array || !array.length) return 0;
    return array.reduce((total, val) => val < total ? val : total, Infinity) ;
};

exports.max = function max(array) {
    if (!array || !array.length) return 0;
    return array.reduce((total, val) => val > total ? val : total, -Infinity);
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    return array.reduce((total, val) => total + val, 0) / array.length

};
