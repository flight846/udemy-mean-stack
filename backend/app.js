const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose
  .connect(
    "mongodb+srv://flight846:flight846@cluster0-cai4b.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 60000
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next();
})

app.get('/api/posts', (req, res, next) => {
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

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })
})

module.exports = app;
