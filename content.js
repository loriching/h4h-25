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

//import { parse } from "./parser"

// array of brand names from parser.js
//const brandNames = ...

let url = window.location.href;  // get url

let validBrand = false;

// Call functions

// urlBrandDirect(url);

/*
if(brandNames.includes(brandName)) {
    validBrand = true;
} else {
    // case 1: url name is a subset of brand name e.g. abercrombie
    for (let i = 0; i < brandNames.length; i++) {
        let brandNameBySpace = brandNames[i].split(" ");
        if (brandNameBySpace.includes(brandName)) {
            brandName = brandNames[i];
            validBrand = true;
        }
    }
    // case 2: brand 
}
*/


// FUNCTIONS - used to figure out brand name for various cases

function urlBrandDirect(url) {

    console.log("url:" + url);
    
    let urlByPeriod = url.split(".");
    
    let urlName = url[1];
    
    let brandNamesLower = brandNames;
    for (let i = 0; i < brandNames.length; i++) {
        brandNamesLower[i].toLowerCase();
        if(urlName == brandNamesLower[i]){
            return brandNames[i];// this is the non lowercased brand
        }
    }
    console.log("brandName:"+ urlName);

    return " ";
}

function urlTitleTag() {
    let title_tag = document.querySelector(title_tag);

    console.log(title_tag);
    console.log(typeof(title_tag));

    // format our title tag
    title_tag.toLowerCase();
    let words = title_tag.split(" ");

    // pass brandName to background.js if valid
}

function urlBrandSubset(url) {

}

function urlBrandSpecial(url) {

}




