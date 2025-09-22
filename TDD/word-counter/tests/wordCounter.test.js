const wordCounter = require('../src/wordCounter');

describe("wordCounter", () => {

    describe("Basic counting", () => {
        test("returns 0 for an empty string", () => {
            expect(wordCounter("")).toBe(0);
        });

        test("returns 1 for a single word", () => {
            expect(wordCounter("hello")).toBe(1);
        });

        test("returns 2 for two words", () => {
            expect(wordCounter("hello world")).toBe(2);
        });
    });

    describe("Whitespace handling", () => {
        test("ignores leading spaces", () => {
            expect(wordCounter(" hello")).toBe(1);
        });

        test("ignores trailing spaces", () => {
            expect(wordCounter("hello ")).toBe(1);
        });

        test("handles multiple interior spaces as one separator", () => {
            expect(wordCounter("hello   world")).toBe(2);
        });

        test("returns 0 for whitespace-only string", () => {
            expect(wordCounter("   ")).toBe(0);
        });

        test("returns 0 for whitespace with tabs/newlines", () => {
            expect(wordCounter(" \n\t  ")).toBe(0);
        });
    });

    describe("Invalid inputs", () => {
        test("handles non-string input gracefully", () => {
            expect(wordCounter(123)).toBe(0);
            expect(wordCounter(null)).toBe(0);
            expect(wordCounter(undefined)).toBe(0);
            expect(wordCounter({})).toBe(0);
        });
    });

});
