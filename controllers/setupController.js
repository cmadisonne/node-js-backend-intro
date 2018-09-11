const Todos = require('../models/todoModel.js');

module.exports = function (app) {
    app.get('/api/setupTodos', function(req,res){
        const starterTodos = [
            {
                username: 'mcoope',
                todo: 'Yoga Studio',
                isDone:false
            },
            {
                username: 'mcoope',
                todo: 'Yoga Certification',
                isDone:false
            },
            {
                username: 'mcoope',
                todo: 'Yoga Retreat',
                isDone:false
            }
        ];

        Todos.create(starterTodos, function (err, results) {

            res.send(results);
        }
        )
    }
    )
};