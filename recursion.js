function reverse(string, reverseStr = ''){
  if (string.length === 0) return reverseStr; 
  return reverse(string.slice(1), string[0] + reverseStr); 
}


/*

function reverse(string){
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]; 
    }
    return reverse; 

}
