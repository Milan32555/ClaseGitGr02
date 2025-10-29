const express = require("express")
const app = express()

const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

app.post("/data", (req, res) => {
  const receivedData = req.body
  console.log("Received data:", receivedData)
  res.json({ message: "Data received successfully", data: receivedData })
})

app.get("/", (req, res) => {
  res.send("Hello, World!")
})  
