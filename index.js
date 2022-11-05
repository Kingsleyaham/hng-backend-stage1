const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const gradeRoute = require("./routes/grade");
const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// middleware
app.use(helmet());
app.use(bodyParser.json());

app.use(userRoute);
app.use("/grade", gradeRoute);

app.listen(port, () => {
  console.log(`server running at http://${host}:${port}`);
});
