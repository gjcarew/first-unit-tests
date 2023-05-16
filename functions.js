// functions.js
function addTwoNumbers(n1, n2) {
    return n1 + n2
}

function sayHello(name) {
    return name === 'Will' ? 'No more testing Will!' : `Hi there ${name}!`
}

function buildCar(color, type) {
    if (color === undefined && type === undefined) {
        return {}
    }
    
    return {
        color: color,
        type: type
    }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}