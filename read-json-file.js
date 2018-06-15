'use strict';

const fs = require('fs');
const getData = require('./getdata');

fs.readFile('./sample.json',getData.getUserFromJSONData);

