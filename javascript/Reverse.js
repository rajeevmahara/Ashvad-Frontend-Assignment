let num=[1,2,3,4,5,6,7,8];

let reverseArray=num.reverse();
 console.log(reverseArray);

//2: Sum of Two Numbers

let num1= 2;
let num2 =5;
 let Sum= num1 + num2;
 console.log(sum);

// method 2:
//  (using input user)
let num1=Number(prompt("enter your num"));
let num2=Number(prompt("enter your num"));

let sum = num1+num2;
console.log(sum);

// 3: Largest Number in an Array
let number =[ 30, 40, 60 ,5000, 800];

let Largest=math.max(...number);
 console.log(Largest);

// 4: Palindrome

let word="madam";
let reverseword= word.split("").reverse.join("");
if (word=== reverseword){
console.log("palindrome");
} else {
    console.log("non palindrome");

}
// 5: Count Vowels

let word="javascript";

let Count=0;
for(let char of word){
    if(
        char==="a"||
        char==="e"||
        char==="i"||
        char==="o"||
        char==="u"

    ) {
        Count++;

    }
}
console.log("total vowels:", count);


let name="rajeev mahara"
let charCount= name.length;
let wordCount=name.split(" ").length;
console.log(charCount);
console.log(wordCount);


