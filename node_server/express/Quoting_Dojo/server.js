const express = require('express');
const routes = require('./server/config/routes');
const app = routes(express());

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'))