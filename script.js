let inputNumber
let myArray = []
let error = ''

document.querySelector('.add').addEventListener('click', function() {

    inputNumber = document.querySelector('input').value

    if (inputNumber !== '') {

        document.querySelector('input').value = ''

        myArray.push(inputNumber)
        
        console.log(myArray)

    } else {
    
        error = 'Musisz podać jakiś element, nie ma nic do dodania!';
    
        alert(error);
    }

});

document.querySelector('.resolve').addEventListener('click', function() {
    
    let resolvedArray = results(myArray)

    document.querySelector('p').innerHTML = resolvedArray

    console.log(resolvedArray)
    return resolvedArray
})




const sum = function (array){
    let sum = 0
    sum = array.reduce((x, y) => x+y)
    return sum
}

const avg = function (array){
    return sum(array) / array.length
}

const sortArray = function (array){
    let sortedArray = array.concat().sort(function(x,y){
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

const results = function (array){
    
    let result = {
        average: avg(array),
        medianArray: median(array),
        minimum: minValue(array),
        maximum: maxValue(array),
    }

    return result
}