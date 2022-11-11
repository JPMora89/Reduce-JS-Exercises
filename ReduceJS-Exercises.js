// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
function extractValue(array,key){
    return array.reduce(function(accum,next){
        accum.push(next[key]);
        return accum;
    })
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(string) {
    return string.split('').reduce(function(accum,nextChar){
        let nextCharLowerCase = nextChar.toLowerCase()
        if('aeiou'.indexOf(nextCharLowerCase) !== -1) {
            if(accum[nextCharLowerCase]) {
                accum[nextCharLowerCase]++;
            } else {
                accum[nextCharLowerCase] = 1;
            }
        }
        return accum;
    }, {});
}

// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
function addKeyAndValue(array,key,value){
    return array.reduce(function(accum,next,index){
        accum[index][key] = value;
        return accum;
    }, array)
}

// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and 
// if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
function arrayPartition(array,callback){
    return array.reduce(function(accum,next){
        if(callback(next)) {
            accum[0].push(next);
        } else {
            accum[1].push(next);
        }
        return accum;
    }, [[],[]]);
}