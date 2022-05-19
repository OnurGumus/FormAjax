const express = require('express');
const { json } = require('express/lib/response');

const app = express();
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded());
app.post(
  '/',
  // username must be an email
  // password must be at least 5 chars long
  (req, res) => {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).send('Missing username or password');
    }
    if (req.headers["content-type"] === "application/json") {
      res.json({ username: username });
    } else {

      res.render('index', { username: username });
    }

  });
app.get('/', (req, res) => {

  res.render('index');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));