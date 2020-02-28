app.controller('skills', function($scope, $http){
    $http.get("JS/SkillsInformation.json").then(function(response){
        $scope.skillsInfo = response.data.skills;
    });

    
    $scope.getNumber = function(num) {
        return new Array(num);   
    }
    $scope.getEmpty = function(num){
        return new Array(5-num)
    }
})