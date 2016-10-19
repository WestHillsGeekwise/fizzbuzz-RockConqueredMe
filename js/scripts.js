// Write a program that will output all the numbers from 1 to 100 in HTML.
// If a number is divisible by 3, instead of the number, output "Fizz".
// If a number is divisible by 5, output "Buzz".
// If a number is divisible by both 3 and 5, output "FizzBuzz".
var content = document.getElementById("content");

for(i = 1; i<=100; i++ ){
  //console.log(i);
  if(i % 3 === 0 && i % 5 === 0){
    content.innerHTML = content.innerHTML + " FizzBuzz " + " ";
  }
  else if(i % 5 === 0){
    content.innerHTML = content.innerHTML + " Buzz ";
  }
  else if(i % 3 === 0)
  {
    content.innerHTML = content.innerHTML + " Fizz ";
  }
  else{
    content.innerHTML = content.innerHTML + " " + i + " ";
  }
}
