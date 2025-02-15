const parse = (filename) => {
    const fs = require("fs");
    fs.readFile(filename, (err, input) => {
        if (err) throw err;
        console.log(input);
    });
}


