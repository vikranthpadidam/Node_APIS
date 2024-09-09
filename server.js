const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    res.send("Hello APIS");
})
//git

app.listen(3000, () => {
    console.log("API port running on port3000");
})