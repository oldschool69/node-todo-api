const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mogoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b057a18ebcf1aa0221c0c811';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5b0595f187d84741d3856b55').then((user) => {
    if(!user){
        return console.log('Id not found!');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e)) ;