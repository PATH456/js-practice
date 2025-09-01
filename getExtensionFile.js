// Write a Javascript program to get the extension of a filename 

function getExtension (filename) {
    let lastDotIndex = filename.lastIndexOf(".");
    console.log(filename.slice(lastDotIndex));
}

getExtension('checkNum.package.js')

