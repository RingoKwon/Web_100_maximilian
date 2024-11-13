// HINTS:
// 1. Import express and axios
import axios from "axios";
import express from "express"

const app = express()
const port = 3000; 

// 2. Create an express app and set the port number.
app.get("/", (req, res)=>{
    res.render("index.ejs", {
        secret: "dd", 
        user: "ddddd"
    })
})
// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}

)
