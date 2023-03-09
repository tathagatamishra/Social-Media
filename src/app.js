// importing npm packages
const express = require("express");
const mongoose = require("mongoose");

// importing internal modules
const router = require("./route/route");

// ------------------------
const app = express();

app.use(express.json());

// database...
mongoose
  .connect(
    "mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/social"
  )
  .then(() => console.log("MDB connected"))
  .catch((err) => console.log(err));

app.use("/", router);
app.use("/", (_, res) =>
  res.status(404).send({ status: false, message: "url not found" })
);

const PORT = 6969;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));