const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

const routes = require('./routes');


app.use(express.static(`${__dirname}/public`));

// API Routes
app.use('/api/v1', routes.api);

app.listen(PORT, () => {
    console.log(`Application is listening at ${PORT}..`);
})