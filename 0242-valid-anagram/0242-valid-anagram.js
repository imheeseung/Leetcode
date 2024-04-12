/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const count = {};
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]] += 1;
        } else {
            count[s[i]] = 1;
        }
    }
  
  console.log(count)
    
    for (let i = 0; i < t.length; i++) {
        if (!count[t[i]]) {
            return false;
        }
        
        count[t[i]] -= 1;
    }
    
    return true;
};