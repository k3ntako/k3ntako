require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Express Set-up
const app = express();

const requireHTTPS = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
};

app.use(requireHTTPS);

// Express Middleware
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "..", "public")));

// API
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

// Front-End
app.get("*", (req, res) => {
  if (!res.headersSent) {
    res.set({ "Content-Type": "text/html" });
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  }
});

// Error Handling
app.use(function (err, req, res, next) {
  let statusCode = err.statusCode || err.code;
  if (typeof statusCode !== "number" || statusCode < 100) {
    statusCode = 500;
  }
  if (statusCode === 500) {
    console.error(err);
  }
  if (!res.headersSent) {
    res.status(statusCode);
    res.json({ error: err.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Server started at port " + port);
});
