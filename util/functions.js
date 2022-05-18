const fs = require("fs")


// read all files in the Directory (path) with specified ending
const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => f.endsWith(ending))
}

module.exports = {
    getFiles
}