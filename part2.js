// 1.) Sum Zero
function sumZero(array) {
let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
} return value
}


// 2.) Unique Characters
function hasUnqiueChars(word) {
    let hasUnqiueChars = new Set([])
    for (let i=0; i< word.length; i++) {
        hasUnqiueChars.add(word[i])
    }
    return hasUnqiueChars.size === word.length
}

// 3.) Pangram Sentence
function pangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
  
    for(let i=0; i < alphabet.length; i++) {
        if(lowercase.indexOf(alphabet[i]) === -1) {
            return false 
        }
    }
    return true
  }

// 4.) Longest Word
function findLongestWord() {
    let newarr = arr.toString()
    if(arr == undefined || arr == null)
       return null;
    let w = newarr.split(",");
    let result = null;
    let count = 0;
    for(let i = 0; i < w.length; i++){
       if(w[i].length > count){
           count = w[i].length;
           result = w[i];
       }
    }
    return result;
}


// Space Complexity of Each Function
// 1.) O(n)
// 2.) O(1)
// 3.) O(1)
// 4.) O(n)