const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


server.listen(port, function() {
    console.log("App is running on port " + port);
});

app.get('/', function(req, res){
    res.redirect('/finstapics')
}

// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

