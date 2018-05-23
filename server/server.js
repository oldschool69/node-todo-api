var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mogoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


