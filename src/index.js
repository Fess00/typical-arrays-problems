
exports.min = function min (array) {
    if (!array || array == 0) {
        return 0;
    } else {
        let minVal = 1000;
        for (let i = 0; i < array.length; i++) {
            if (minVal > array[i]) {
                minVal = array[i];
            }
        }
        return minVal;
    }
}

exports.max = function max (array) {
    if (!array || array == 0) {
        return 0;
    } else {
        let maxVal = -1000;
        for (let i = 0; i < array.length; i++) {
            if (maxVal < array[i]) {
                maxVal = array[i];
            }
        }
        return maxVal;
    }
}

exports.avg = function avg (array) {
    if (!array || array == 0) {
        return 0;
    } else {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            count += array[i];
        }
        count /= array.length;
        return count;
    }
}
