# Number Checker

A simple JavaScript project from the [roadmap.sh Number Checker challenge](https://roadmap.sh/projects/js-number-checker).

## About the Project

The Number Checker is a small JavaScript program that determines the properties of a given number. It uses boolean helper functions to check whether a number is positive, negative, zero, even, or odd.

The goal of this project is to practice JavaScript functions, conditional logic, boolean values, and objects.

## Features

- **Positive Check:** Determines whether a number is greater than zero.
- **Negative Check:** Determines whether a number is less than zero.
- **Zero Check:** Determines whether a number is exactly zero.
- **Even Check:** Determines whether a number is divisible by two.
- **Number Description:** Combines the results into an object containing the number's properties.

## Technologies Used

- JavaScript

## How to Run

1. Clone this repository or download the project files.
2. Open a terminal in the project directory.
3. Run the JavaScript file using Node.js:

   ```bash
   node script.js
   ```

   Replace `script.js` with the actual filename of your JavaScript file if it is different.

## Example

```javascript
console.log(describeNumber(8));
```

Output:

```javascript
{
  positive: true,
  negative: false,
  zero: false,
  even: true,
  odd: false
}
```


## Challenge

This project is part of the [roadmap.sh Number Checker challenge](https://roadmap.sh/projects/js-number-checker).

## Author

[Mike Miaris](https://github.com/MikeMiaris)
