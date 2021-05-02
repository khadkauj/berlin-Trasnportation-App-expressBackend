const express = require("express")
const cors = require("cors")


const app = express()
const port = process.env.port || 8000

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Yes we will.")
})

const authRoute = require("./routes");
app.use("/api", authRoute)


app.listen(port, () => console.log(`listening port ${port}`))