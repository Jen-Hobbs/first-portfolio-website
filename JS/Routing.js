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
        templateUrl : "templates/Projects.htm",
        controller: "projects"
    })
    .when("/Skills", {
        templateUrl : "templates/Skills.htm",
        controller: "skills"
    })
})

app.controller('education', function($scope, $http){
    $http.get("JS/EducationInformation.json").then( function(response){
        $scope.educationInfo = response.data.education;
    });
});
