// Create web server
// 1. Create a new Express application
// 2. Create a new route that listens for POST requests to /comments
// 3. When a POST request is received, read the request body and extract the comment
// 4. Store the comment in an array
// 5. Return a 201 status code to indicate that the comment was created
// 6. Return a JSON response with the comment that was created
// 7. Create a new route that listens for GET requests to /comments
// 8. When a GET request is received, return a JSON response with the list of comments
// 9. Listen on port 3000

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const comments = [];

app.post("/comments", (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).json(comment);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});