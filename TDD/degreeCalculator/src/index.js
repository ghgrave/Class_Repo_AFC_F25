
// exists within this context!!!
const convertToCelsius = (num) => {
        // if (!num) return false
        if (typeof num !== "number") return false
    return true
}

// made this accessible
module.exports = {
    convertToCelsius
}