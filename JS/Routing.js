var app = angular.module("templater", ["ngRoute", 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when("/ProjectInfo", {
        templateUrl : "templates/ProjectInfo.htm",
        controller: "education"
    })
})

app.controller('education', function($scope, $http){
    $http.get("JS/EducationInformation.json").then( function(response){
        $scope.educationInfo = response.data.education;
    });
});
