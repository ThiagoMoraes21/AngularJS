/*
    ANGULAR SNNIPETS
    ng1component  // creates an Angular component
    ng1controller // creates an Angular controller
    ng1directive  // creates an Angular directive
    ng1factory    // creates an Angular factory
    ng1module     // creates an Angular module
    ng1service    // creates an Angular service
    ng1filter      // creates an Angular filter

*/

(function() {
    'use strict';

    angular
        .module('todoApp', [])
        .controller('TodoListController', function() {
            var todoList = this;
            todoList.todos = [
                {text: 'Learn AngularJS', done: false},
                {text: 'Build a Hello World app using AngularJS', done: true}
            ];

            // Add a new todo into the todos array
            todoList.addTodo = () => {
                // push the new todo created by the user into the todos array
                todoList.todos.push({text: todoList.todoText, done: false}); 
                
                // clean the input
                todoList.todoText = '';
            }

            // count how many todos are still haven't be done
            todoList.remaining = () => {
                var count = 0;
                angular.forEach(todoList.todos, (todo) => {
                    count += todo.done ? 0:1;
                });
                return count;
            }

            // archive the selected todo item
            todoList.archive = () => {
                var oldTodos = todoList.todos;
                todoList.todos = []; // clean the todos array

                angular.forEach(oldTodos, (todo) => {
                    if(!todo.done) {
                        // if todo is not done push it into the todos array
                        todoList.todos.push(todo);
                    }
                });
            }
        });
})();