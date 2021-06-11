/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */



require('dotenv').config({
  silent: true
});

const express = require('express'); // app server
const bodyParser = require('body-parser'); // parser for post requests
const fs = require('fs'); // file system for loading JSON


const app = express();

//var storage = multer.memoryStorage()
//var upload = multer({ storage: storage })



const apiRouter = express.Router()
const request = require('request');
var requestAPI = require('request');

// Bootstrap application settings
apiRouter.use(express.static('./public')); // load UI from public folder
apiRouter.use(bodyParser.json());


app.use('/', apiRouter);

apiRouter.get('/api/getEntity', function(req, res) {

  return res.send("helloThere");

  requestAPI("dbserviceAPI/", function (error, resapi, body) {

  });


});

// apiRouter.post('/api/addEntity', function(req, res) {
//   requestAPI("dbserviceAPI/"+req.body.customerId, function (error, resapi, body) {
//
//   });
//   return res.send({"apidetails":"apidetails"});
// });

module.exports = app;
