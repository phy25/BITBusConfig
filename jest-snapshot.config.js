/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/?(*.)?snapshot.test.[jt]s?(x)"],
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "includeFailureMsg": true,
      "includeSuiteFailure": true,
      "statusIgnoreFilter": "passed",
      "outputPath": "./build/test-report.html",
    }]
  ],
};