function countLetters(string) {
    //Write a function that can return to us all the unique characters that exist in a string that is passed into the function
    //f() should return instances of each letter in string
    var newString = string.replace(/ /g, '').toLowerCase();//.replace takes out any spaces
    var sorted = {};
    for (var i = 0; i < newString.length; i++) {
        var character = newString.charAt(i);
        if (sorted[character]){
            sorted[character][0]++;
            sorted[character].push(i);
        }  else {
            sorted[character] = [1, i];
        }  
    

    // console.log(newString[i]);
    }
  return sorted;
}
//this object will store our keys

console.log(countLetters("Chibwe Sherri Kevin"));

