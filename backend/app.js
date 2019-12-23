const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "fad2993809",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "fad2993810",
      title: "Second server-side post",
      content: "This is coming from the server post 2"
    }
  ];
  res
    .status(200)
    .json({
      message: 'Posts fetched successfully',
      posts
    });
})

module.exports = app;
