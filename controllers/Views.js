const ROOT = `${__dirname}/../`

// Root
const root = (req, res) => {
    res.sendFile('/views/signup.html', {
        root: ROOT
    });
};

module.exports = {
    root
}