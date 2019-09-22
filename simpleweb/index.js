const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Manoj is learning Docker, and this site is setup with the help of docker');
});

app.listen(8080, () => {
   console.log('Listening on port 8080')
});
