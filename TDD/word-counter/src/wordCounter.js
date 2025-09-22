function wordCounter(input) {
    // 1) Defensive check: if it's not a string, treat it as containing 0 words.
    if (typeof input !== "string") return 0;

    // 2) If, after trimming, nothing is left, it's 0 words.
    if (input.trim() === "") return 0;

    // 3) Split on any run of whitespace (spaces, tabs, newlines) and count tokens.
    const words = input.trim().split(/\s+/);
    return words.length;
}

module.exports = wordCounter;
