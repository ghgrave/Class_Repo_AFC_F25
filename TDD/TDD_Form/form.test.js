/**
 * @jest-environment jsdom
 */
// This tells Jest to run the test in a "fake browser" (jsdom).
// That way we can use document, form, input, etc. inside Node.

const { setupFormApp } = require("./form");
// Imports the setupFormApp function from form.js (our app code).

beforeEach(() => {
// This block runs before every test. It resets the HTML
// so each test starts with a clean page.

    document.body.innerHTML = `
    <form method="POST" action="/submit">
      <input type="text" id="name" />
      <button type="submit">Submit</button>
    </form>
    <p id="output"></p>
  `;
    // Here we "pretend" to have a little HTML page with:
    // - a <form> that has POST method and /submit action
    // - one text input (id="name")
    // - a submit button
    // - a <p> where we will show output messages
});

test("form exists with method and action", () => {
// First test: check that the form is built correctly.

    const form = document.querySelector("form");
    // Grab the form element from the fake HTML.

    expect(form).not.toBeNull();
    // Make sure the form actually exists.

    expect(form.getAttribute("method")).toBe("POST");
    // Check that the form has method="POST".

    expect(form.getAttribute("action")).toBe("/submit");
    // Check that the form has action="/submit".
});

test("shows error when input is empty", () => {
// Second test: what happens if the input is blank?

    setupFormApp(document);
    // Run our app code so it attaches the submit event listener.

    const form = document.querySelector("form");
    form.dispatchEvent(new Event("submit"));
    // Pretend the user submitted the form (with input empty).

    const output = document.querySelector("#output");
    // Grab the <p> where messages are shown.

    expect(output.textContent).toBe("Name is required");
    // Check that the message says "Name is required".
});

test("shows greeting when input has value", () => {
// Third test: what happens if the user actually types something?

    setupFormApp(document);
    // Run our app code so the form can respond.

    const input = document.querySelector("#name");
    input.value = "Alice";
    // Pretend the user typed "Alice" into the box.

    const form = document.querySelector("form");
    form.dispatchEvent(new Event("submit"));
    // Pretend the user submitted the form.

    const output = document.querySelector("#output");
    // Grab the <p> where messages are shown.

    expect(output.textContent).toBe("Hello, Alice");
    // Check that the message says "Hello, Alice".
});
