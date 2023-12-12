const repeatString = function(text, length) {
    let newText = "";
    if(length < 0){
        return 'ERROR'
    }
    for (let i = 0; i < length; i++){
        newText = newText + text;
    }
    return newText
};

// Do not edit below this line
module.exports = repeatString;
