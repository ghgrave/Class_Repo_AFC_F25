const {bucketArray} = require("./fakeData")
const express = require('express')
// create an instance of server and all the "fun functionality" associated with express
const app = express()
const port = process.env.PORT || 3001;

// add body parser
app.use(express.json())
// app.use(express.urlencoded({extended: false}))


// app.get('/', (req, res)=>{
//     res.send("Server working")
// })

app.get('/api/bucket', (req, res)=>{
    res.json(bucketArray)
})

let newId = 4
app.post('/api/bucket', (req, res)=>{
//     post requests are sent through the response object as "body"
//     what are we creating
    console.log(req.body)
    let newBucketListItem =   {
        id: newId++,
        description: req.body.description, // POST request send data through body!!!
        isComplete: false,
    }
    // add to end of current array
    bucketArray.push(newBucketListItem)
    let receipt = newBucketListItem
    res.json(receipt)
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`)
})





