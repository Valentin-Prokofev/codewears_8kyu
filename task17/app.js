// Write a function that checks if a given string (case insensitive) is a palindrome.
// Solution:

function isPalindrome(x) {
    let res = x.toLowerCase();
      if (res.split("").reverse().join("") === res) {
        return true;
      } else {
        return false;
      }
    }