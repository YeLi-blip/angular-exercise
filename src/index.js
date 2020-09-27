
import angular from "angular"
require('./index.css');
require('./other.css');
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.name = "John";
    $scope.age = "18";

});

