require('dotenv/config')
const express = require('express');

const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname+'/frontend/build')));

app.get('/public', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});



app.listen(port, () => console.log(`Listening on port ${port}`));
