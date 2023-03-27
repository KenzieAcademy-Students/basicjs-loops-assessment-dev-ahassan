// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
    179, 535, 940, 472,
];

document.write("<h1>Array Analyzer</h1>");
let displayNumbers = function() { // This function will display the array to the DOM
    return numbers;
}
document.write("<h3>Now analyzing the array: " + displayNumbers() + "</h3>");

// Write your code here 👇

// finding the largest number within the array
function findLargestNumber() {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
  }
  
  //  finding the smallest number within the array
  function findSmallestNumber() {
    let smallestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
      }
    }
    return smallestNumber;
  }
  
  // finding the sum of all numbers within the array
  function findSumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // finding the average value of all numbers within the array
  function findAverageValue() {
    let sum = findSumOfNumbers();
    let average = sum / numbers.length;
    return average;
  }
  
  // to list all of the even numbers within the array
  function findEvenNumbers() {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  
  // to list all of the odd numbers within the array
  function findOddNumbers() {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
    return oddNumbers;
  }
  
  // to list all numbers that are divisible by 8 within the array
  function NumbersDivisibleByEight() {
    let divisibleByEightNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 8 === 0) {
        divisibleByEightNumbers.push(numbers[i]);
      }
    }
    return divisibleByEightNumbers;
  }
  
document.write("</ul>");

document.write("<li>Largest Number: " + findLargestNumber() + "</li>");
document.write("<li>Smallest Number: " + findSmallestNumber() + "</li>");
document.write("<li>Sum of Numbers: " + findSumOfNumbers() + "</li>");
document.write("<li>Average Value: " + findAverageValue() + "</li>");
document.write("<li>Even Numbers: " + findEvenNumbers() + "</li>");
document.write("<li>Odd Numbers: " + findOddNumbers() + "</li>");
document.write("<li>Numbers Divisible by 8: " + NumbersDivisibleByEight() + "</li>");
