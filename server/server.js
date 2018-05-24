const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mogoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

//Converte um objeto para Json e envia para a aplicação cliente
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo  = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    })
});

//Get /todos/<id>
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    //Valid id using isValid
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        send.status(400).send();
    });

});


app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;
    //validate the id -> not valid? return 404
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    //remove todo by id
        //sucess
            //if no doc, send 404
            //if doc, send doc back with 200
        //error
            //400 with empty body

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.status(200).send({todo});

    }).catch((e) => {
        res.status(400).send();
    });
            
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};


