function myMap(cbFn) {
    return function(array) {
        const result = []
        array.forEach((element, index) => {
            result.push(cbFn(element,index))
        })
        return result
    }
}

const add = (a,b) => a+b


//module.exports = myMap
module.exports = {
    myMap,
} 