/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      'includeFailureMsg': true,
      "outputPath": "./build/test-report.html",
    }]
  ],
};