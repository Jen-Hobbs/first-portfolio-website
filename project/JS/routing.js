var app = angular.module("templater", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "templates/Home.htm"
    })
    .when("/Education", {
        templateUrl : "templates/Education.htm",
        controller: "education"
    })
    .when("/Projects", {
        templateUrl : "templates/Projects.htm"
    })
    .when("/Skills", {
        templateUrl : "templates/Skills.htm"
    })
})
