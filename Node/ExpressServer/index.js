// FOUNDATION
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// ROUTE HANDLERS
app.get("/doggy", (req, res)=> {
    res.send("Hello World")
})

// LISTENER
app.listen(port, console.log(`Express Server running on port ${port}`))
