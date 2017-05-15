const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Server setup
const port = process.env.port || 3090;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
