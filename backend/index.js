const express = require("express");

const app = express();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
