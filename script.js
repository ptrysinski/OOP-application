const sum = function (array){
    let sum = 0
    sum = array.reduce((x, y) => x+y)
    return sum
}

const avg = function (array){
    return sum(array) / array.length
}

const sortArray = function (array){
    let sortedArray = array.sort(function(x,y){
        return x-y;
    });
    return sortedArray
}

const median = function (array){

    const sortedArray = sortArray(array)

    if (sortedArray.length === 0) return 0;

    var half = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2)
        return sortedArray[half];
    else
        return (sortedArray[half - 1] + sortedArray[half]) / 2
}

const minValue = function (array){
    const sortedArray = sortArray(array)
    return sortedArray[0]
}

const maxValue = function (array){
    const sortedArray = sortArray(array)
    return sortedArray[sortedArray.length - 1]
}