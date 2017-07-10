function arryWalk(data, f) {
    for (var key in data) {
        f(data[key], key);
    }
}

function showElement(value, key) {
    console.log(key + ":" + value);
}

function showDecorattedElement(value, key) {
    console.log('キー(' + key + ') : 値(' + value + ')');
}

var ary = [1, 2, 4, 8, 16];
arryWalk(ary, showElement);