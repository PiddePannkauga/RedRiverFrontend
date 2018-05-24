require('dotenv/config')
const express = require('express');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("/home/petter/RedRiverFrontend/frontend/build"));

app.get('/public', (req, res) => {
  res.sendFile('/home/petter/RedRiverFrontend/frontend/build/index.html');
});



app.listen(port, () => console.log(`Listening on port ${port}`));
