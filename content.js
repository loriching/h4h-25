/*
NOTES
THESE ARE SOME PROBLEMATIC BRANDS AND MIGHT NEED EDGE CASE
Case1 (url subset of name by spaces): Abercrombie & Fitch, Aldi Nord, ALdi South, A
Case2 (url subset of name, no spaces): BCBGMAXAZRIA
Case3 (url equal to name, no spaces): Dick's Sporting Goods
Case3 (url subset of name, special chars): Bloomingdale's

Approach 2 (url bad, use title tag):American Eagle,
*/

//TODO IMPLEMENT SMARTER LINK PARSING
/*
e.g Bananana Republic has www.
*/


// "MAIN" SCRIPT - calls functions

import { Brands } from "./parser"

// array of brand names from parser.js
const brands = new Brands();

let url = window.location.href;  // get url

// Call functions
let result = urlBrandDirect(url, brandNamesLower);
if (result != -1) {
    let score = getScore(getName(result));
} else if (titleTag() != -1) {
    result = titleTag();
    let score = getScore(getName(result));
}


// FUNCTIONS - used to figure out brand name for various cases

function getName(index) {
    return namesOriginal[index];
}

function getScore(brandName) {
    // RYAN PLEASE WRITE THIS FUNCTION
}

function urlBrandDirect(url) {
    const urlByPeriod = url.split(".");
    const urlName = urlByPeriod[1];  // TODO IMPROVE THIS METHOD

    const b = brands.entries;
    
    for (let i = 0; i < b.length; i++) {
        const name = b[i].name;
        if (urlName == name.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function titleTag() {
    let title_tag = document.querySelector("title");


    console.log(title_tag);
    console.log(typeof(title_tag));

    // format our title tag
    title_tag.toLowerCase();
    let words = title_tag.split(" ");

    // pass brandName to background.js if valid
}

