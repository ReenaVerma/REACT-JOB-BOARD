const express = require('express');


const app = express();
const port = process.env.PORT || 4000;
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express is running in PORT: ${port}`));

// app.get( '/api/jobs', ( req, res ) => {
//   axios.get('https://jobs.github.com/positions.json?search=')
//     .then( result => res.send( result.data ) );
// } );

module.exports = app;
