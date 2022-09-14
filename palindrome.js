let string = "racecar";
let i = 0, j = string.length-1;
let check = true;
while(i<=j){
    if(string[i]!=string[j]){
        check  = false;
        break;
    }
}
check == true?console.log("Palindrome"):console.log("Not Palindrome")