# Next.js Custom Component Import Error

This repository demonstrates a common error encountered in Next.js applications: failure to properly import custom components.  The error arises when a custom component is used in a page component without being explicitly imported.

This example shows the error and its solution.  The error is caused by Next.js's specific module resolution mechanism, and understanding how to import components correctly is crucial for avoiding such issues.

## Steps to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Observe the error in your browser console.

## Solution

The provided `bugSolution.js` demonstrates the correct way to import the custom component into the page component, resolving the error.