const express = require('express')
const path = require('path');
const app = express()
port = 3000

app.get('/', function (req, res) {
    //res.send('<h1>Hello World from Node.js!</h1>')
    res.sendFile(path.join(__dirname, "index1.html"));

})

app.listen(port, function() {
    console.log('Hello World app listening on port ' + port);
})
                    
