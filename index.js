const express = require('express');
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use("/users", userRoute)
app.use("/posts", postsRoute)
app.get("/", function (req, res) {  
    res.json({"message": "welcome just confirm"})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })