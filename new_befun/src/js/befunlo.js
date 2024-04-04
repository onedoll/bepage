const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "src")));


const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});