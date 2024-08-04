module.exports = function toReadable (number) {
        const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      
        if (number < 10) {
          return ones[number]; // Для чисел от 0 до 9
        }
      
        if (number < 20) {
          return teens[number - 10]; // Для чисел от 10 до 19
        }
      
        if (number < 100) {
          const tenPart = Math.floor(number / 10);
          const onePart = number % 10;
          return tens[tenPart] + (onePart === 0 ? "" : " " + ones[onePart]); // Для чисел от 20 до 99
        }
      
        if (number < 1000) {
          const hundredPart = Math.floor(number / 100);
          const rest = number % 100;
          return ones[hundredPart] + " hundred" + (rest === 0 ? "" : " " + toReadable(rest)); // Для чисел от 100 до 999
        }
      
        return '';      
  
}
