class BrandScore {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
};

const parse = (filename) => {
    const fs = require("fs");
    fs.readFile(filename, (err, input) => {
        if (err) throw err;
        console.log(input.toString());
    });
};

parse("FTC 2023 Final Scores.csv");

