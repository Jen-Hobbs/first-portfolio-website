app.controller('projects', function($scope, $http){
    $http.get("JS/ProjectsInformation.json").then(function(respnse){
        $scope.projectInfo = respnse.data.projects;
        $scope.showDescription = function(index){
            $scope.description = respnse.data.projects[index];
            $scope.DiscriptionNotNull = true;
        };
    })
    

    $scope.description = null;
})