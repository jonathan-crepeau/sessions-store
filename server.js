const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

const routes = require('./routes');

// Serve Static Files To Client
app.use(express.static(`${__dirname}/public`));

// SECTION Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// SECTION HTML Routes
app.use('/', routes.views);

// SECTION API Routes
app.use('/api/v1', routes.api);

app.listen(PORT, () => {
    console.log(`Application is listening at ${PORT}..`);
})