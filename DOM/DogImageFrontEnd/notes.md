ALL HTTP Requests





FETCH scaffolding
1) utilize an endpoint
fetch(url)
2) receive data
   3) if good - parse it
   4) else, throw error
.then(incomingData)
   5) do something with parsed data
.then(parsedData)
   6) handle errors
.catch()errors


AXIOS scaffolding
1) utilize an endpoint
   axios.get(url)
2) receive data
    3) if good - parse it
    4) else, throw error
    5) do something with parsed data
.then(parsedData)
    6) handle errors
.catch()errors
.finally()