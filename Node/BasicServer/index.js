// FOUNDATION
// give me everyhting!!!!
const express = require("express");
// create an instance of the server
const app = express();
const port = process.env.PORT || 3000;

const logger = require("morgan");
// add more functionality to our app that previously did not exist.
app.use(logger("dev"));

// scaffolding
// app.get(route, cb(req, res)=>{
// //     do something
// })

// ROUTE HANDLERS
app.get("/", (request, response) => {
  //     do something
  //     response.send("hello world")
  response.redirect("/login");
});

// @GetMapping("/old-route")
// public String redirect() {
//     return "redirect:/new-route";
// }

// @GetMapping("/")
// public String sayHello() {
//     return "Hello world!";
// }

app.get("/login", (req, res) => {
  res.send("Made it!!!");
  res.send(" Hello and Goodbye!!");
});

// @GetMapping("/login")
// public void done(HttpServletResponse response) throws IOException {
//     response.getWriter().write("Made it!!");
//     response.setStatus(HttpServletResponse.SC_OK);  // optional (sets status 200)
//     // response is automatically ended after writing
// }

app.get("/:fruits", (req, res) => {
  console.log(req);
  res.send(`I like ${req.params.fruits}!!!`);
});

// app.get("/fruits", (req, res) => {
//   res.send(`I like ${req.params.fruits}!!!`);
// });

app.get("/name/:fname/money/:money", (req, res) => {
  const { fname, money } = req.params;
  res.send(
    `Hello ${fname}, looks like you ${money < 100 ? "broke!!!" : `have $${money}!`}`,
  );
});

// @GetMapping("/{fruits}")
// public String likeFruits(@PathVariable String fruits) {
//   System.out.println(fruits);  // Like console.log(req)
//   return "I like " + fruits + "!!!";
// }

// // research more!~!!!!
// app.get("{*splat}", (req, res) => {
//   res.send("Wrong route!!!");
// });

// LISTENERS
app.listen(port, () => {
  console.log(`Basic Server running on port ${port}`);
});

// Route handlers need a VERB and a route
app.get("/horse", (req, res) => {
  // return all horses!!!!
});

app.post("/horse", (req, res) => {
  // create a horse
});

app.delete("/horse", (req, res) => {
  // delete ALL  horses
});

app.delete("/horse/:id", (req, res) => {
  // delete one horse
});

app.put("/horse/:id", (req, res) => {
  // update one horses
});
