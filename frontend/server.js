require('dotenv/config')
const express = require('express');

const path = require('path');
const app = express();
const port = process.env.PORT || 4999;



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});
app.use(express.static(path.join(__dirname+'/build')));

app.listen(port, () => console.log(`Listening on port ${port}`));
