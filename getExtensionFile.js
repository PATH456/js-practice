// Write a Javascript program to get the extension of a filename 

function getExtension (filename) {
    let dotIndex = filename.indexOf(".");
    console.log(filename.slice(dotIndex));
}

getExtension('checkNum.js')

