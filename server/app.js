const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./Router');

app.use( express.json() );
app.use('/', router );

app.listen(PORT, () => {
    console.log(`Server's starting on PORT-${PORT}`);
});