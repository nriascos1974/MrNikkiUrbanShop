const CheckAverageCalification = (array) => {
    let aux = 0
    array.forEach(element => {
        aux += element.calification
    });
    average = aux / array.length
    return average
}

module.exports = CheckAverageCalification