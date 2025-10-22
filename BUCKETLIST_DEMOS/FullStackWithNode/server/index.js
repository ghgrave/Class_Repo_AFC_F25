const {bucketArray} = require("./fakeData")
const express = require('express')
// create an instance of server and all the "fun functionality" associated with express
const app = express()
const port = process.env.PORT || 3001;

// add body parser - unsure? use both!
// if sent as json
app.use(express.json())
//  if sent through url encoding
app.use(express.urlencoded({extended: false}))


// READ
app.get('/api/bucket', (req, res)=>{
    res.json(bucketArray)
})

// CREATE
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

// DELETE
app.delete('/api/bucket/:id', (req, res)=>{
//     NOTE: keep in mind - any data coming through params will probably be
//     a string in most cases so convert to number.
    let requestedId = Number(req.params.id)
    if(isNaN(requestedId)) {
        res.status(404).json({message: "Not a number!!!!"})
    }
//     find the index of existing id = findIndex()
    let bucketIndex = bucketArray.findIndex(el => {
        return el.id === requestedId
    })
    // element exists with mathcing id
    if(bucketIndex !== -1){
        console.log("Index: ", bucketIndex)
        // we give starting point, how many "elements" to remove
        let removedBucketListItem = bucketArray.splice(bucketIndex, 1)
        // pretend we are getting this from the database
        let receipt =  removedBucketListItem
        res.json(receipt)
    } else {
        res.status(404).json({error: "Unable to find requested ID."})
    }
})


// UPDATE
app.put("/api/bucket/:id", (req, res)=>{
    // we need the id
    // casting a String into a Number
    let requestedId = Number(req.params.id)
    if(isNaN(requestedId)) {
        res.status(404).json({message: "Not a number!!!!"})
    }
    if(!requestedId){
        res.status(404).json({message: "No id supplied."})
    }
    let item = bucketlist.find(
        (el)=>{
            return requestedId === el.id
        }
    )
//     returning an element
//     {
//          id: 2,
//          description: "Learn React",
//          isComplete: false => true
//      }
    if(item) {
        item.isComplete  = !item.isComplete
        let receipt = item
        res.json(receipt)
    } else  {
        res.status(404).json({error: "Unable to find requested ID."})
    }
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`)
})





