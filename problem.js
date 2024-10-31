/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

function passwordCheck(password, input) {
    if (input === "forgot") {
      console.log("Here is a hint"); // output when the user forgets password
    } 
    else {
      if (input == password) { // "==" instead of "===" for match check
        console.log("Access Granted!");
      }
       else if (input = "reset") { // `=` instead of `==` or `===`
        console.log("Let's reset your account"); 
      } 
      else {
        console.log("Access Denied!");
      }
    }
  }     

  // Examples
  passwordCheck("ironman123", "forgot");
  passwordCheck("ironman123", "reset");
  passwordCheck("ironman123", "ironman123"); //correct password
  passwordCheck("ironman123", "superman123"); // incorrect password
