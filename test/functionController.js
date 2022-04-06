const { expect } = require("chai");
const { bucleNumbers, isPrime } = require("../controller/functionController");

describe("Testing Prime Number function", function () {
  describe("Testing getPrimeNumbers", function () {
    it("Return array [7, 5, 3, 2] for number 7 test", function () {
      // Running the function
      test0 = bucleNumbers(7);
      test1 = bucleNumbers(15);
      // Comparing the results to expectations
      expect(test0).deep.to.equal([7, 5, 3, 2]);
      
    });
    it("Return array [13, 11, 7, 5, 3, 2] for number 15 test", function () {
        // Running the function
        test1 = bucleNumbers(15);
        // Comparing the results to expectations
        expect(test1).deep.to.equal([13, 11, 7, 5, 3, 2]);
      });
  });
  describe("Testing isPrime", function () {
    it("Returns true is prime", function () {
      // Running the function
      test0 = isPrime(13);
      // Comparing the results to expectations
      expect(test0).to.equal(true);
    });
    it("Returns false is not prime", function () {
        test0 = isPrime(12);
        // Comparing the results to expectations
        expect(test0).to.equal(false);
      });
  });
});
