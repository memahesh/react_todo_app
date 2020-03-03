const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}


app.listen(port, () => `Server running on port ${port}`);