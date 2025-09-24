function setupFormApp(document) {
    // This function sets up our form behavior using the given document (the web page).

    const form = document.querySelector("form");
    // Finds the <form> element on the page.

    const input = document.querySelector("#name");
    // Finds the <input> with id="name".

    const output = document.querySelector("#output");
    // Finds the <p> with id="output" where we will show messages.

    form.addEventListener("submit", (event) => {
        // Listen for the "submit" event when the user presses the button or hits Enter.

        event.preventDefault();
        // Prevent the form from actually sending data to a server or reloading the page.

        const value = input.value.trim();
        // Get whatever the user typed into the input box.
        // .trim() removes extra spaces at the start or end.

        if (!value) {
            // If the input is empty...
            output.textContent = "Name is required";
            // ...show an error message in the <p>.
        } else {
            // If the input has text...
            output.textContent = `Hello, ${value}`;
            // ...show a greeting using that text.
        }
    });
}

module.exports = { setupFormApp };
// Exports the function so Jest (our tests) can import and use it.


// Export for Node/Jest (tests)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { setupFormApp };
}

// Expose and auto-run in the browser
if (typeof window !== "undefined") {
    // Make it available as window.setupFormApp if you want to call it yourself
    window.setupFormApp = setupFormApp;

    // Auto-initialize after the page loads (only if a <form> exists)
    window.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector("form")) {
            setupFormApp(document);
        }
    });
}




