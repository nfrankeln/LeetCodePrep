const minWindow = function(s, t) {
    if (t.length > s.length) return '';
  
    const neededChars = new Map();
    
    // convert t into a Map object with the counts of its characters
    t.split('').forEach(char => neededChars.set(char, (neededChars.get(char) || 0) + 1));
    let left = 0;
    let right = 0;
    let neededLength = neededChars.size;
    let substring = '';
    
    s.split("").forEach(rightChar => {
        const count = neededChars.get(rightChar);
        if (count !== undefined) {
          neededChars.set(rightChar, count - 1);
          if (count === 1) neededLength--;
        }
        
        while (neededLength === 0 && left <= right) {
          const newSubstring = s.slice(left, right + 1);
          if (!substring || newSubstring.length < substring.length) {
            substring = newSubstring;
          }
          
          const leftChar = s[left];
          const leftCount = neededChars.get(leftChar);
          if (leftCount !== undefined) {
            neededChars.set(leftChar, leftCount + 1);
            if (leftCount === 0) neededLength++;
          }
          
          left++;
        }
        
        right++;
      });
      
    
    return substring;
  };
  

console.log(minWindow("adobeabc","aabc"))