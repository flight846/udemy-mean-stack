const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next();
})

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
