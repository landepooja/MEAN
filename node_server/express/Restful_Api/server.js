const express = require('express');
const routes = require('./server/routes');
const app = routes(express());

//*****************************************************/
//Configure body pasrer to read JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'))