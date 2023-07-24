const express = require('express')
// const cors = require('cors')

const app = express()

// app.use(cors(), () => console.log("CORS is used by server..."))
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(9000, () => {
    console.log("Server is running on port: 9000...")
})