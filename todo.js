var app = angular.module('todoApp', []);

app.controller('TodoController', function ($scope) {
    $scope.tasks = [];
    $scope.newTask = { text: '', status: 'todo' };

    $scope.addTask = function () {
        if ($scope.newTask.text.trim() !== '') {
            $scope.tasks.push({ text: $scope.newTask.text, status: $scope.newTask.status });
            $scope.newTask.text = '';
        }
    };

    $scope.changeStatus = function (task) {
        if (task.status === 'todo') {
            task.status = 'inprogress';
        } else if (task.status === 'inprogress') {
            task.status = 'done';
        } else {
            task.status = 'todo';
        }
    };

    $scope.removeTask = function (task) {
        var index = $scope.tasks.indexOf(task);
        if (index !== -1) {
            $scope.tasks.splice(index, 1);
        }
    };

 
});