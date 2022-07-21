const express = require('express');
const cors = require('cors');
const path = require('path');
const util = require('./util.js');

const app = express();
const port = 3000;

app.use(cors());
// app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/:productID', (req, res) => {
  console.log(req.params.productID);
  util.getAll(req.params.productID)
    .then((data) => console.log(data))
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
