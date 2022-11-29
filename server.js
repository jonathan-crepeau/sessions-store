const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(PORT, () => {
    console.log(`Application is listening at ${PORT}..`);
})