const express = require('express');

let app = express();
app.use(express.static('build'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Express server running on' + PORT));
