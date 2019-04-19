const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const data = fs.readFileSync('./andrew horn resume.pdf');
  res.contentType("application/pdf");
  res.send(data);
})

app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
})