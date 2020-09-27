import angular from "angular";
const temp=require('../../static/json/data.json');
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.info=temp
    $scope.imgstyle={
        width: "200px",
        height:"200px",
    }
    $scope.ulstyle={
        listStyle:"none",
        width:"1000px",
        padding:"0",
        margin:"auto",
    }
    $scope.listyle={
       float:"left",
       listStyle:"none",
       marginLeft:"25px"
    }
      

});

