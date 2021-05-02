const express = require("express")
const cors = require("cors")


const app = express()
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

const authRoute = require("./routes");
app.use("/api", authRoute)


app.listen(port, () => console.log(`listening port ${port}`))