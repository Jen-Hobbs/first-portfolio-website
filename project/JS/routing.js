var app = angular.module("templater", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.htm"
    })
    .when("/Projects", {
        templateUrl : "templates/projects.htm"
    })
})