function avg(array){
    // let sum = 0
    // for (i=0; i<array.length; i++){
    //     sum = sum + array[i]
    // }
    // return sum / array.length

    let sum = array.reduce((x, y) => x+y)

    return sum / array.length
}