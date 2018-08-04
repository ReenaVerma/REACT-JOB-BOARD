const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

const app = express();

// app.use(cors());
// app.options('*', cors());

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Express is running in PORT: ${port}`));

// app.get( '/api/jobs', ( req, res ) => {
//   axios.get('https://jobs.github.com/positions.json?search=')
//     .then( result => res.send( result.data ) );
// } );

module.exports = app;
