const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mogoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b0614231edfa40da9157857'}).then((todo) => {
   console.log(todo); 
});

Todo.findByIdAndRemove('5b0614231edfa40da9157857').then((todo) => {
    console.log(todo);
});