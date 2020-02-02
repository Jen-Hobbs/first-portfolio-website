app.controller('skills', function($scope){
    $scope.skillsInfo = [{
        skill: "c", star: 3
    },
    {
        skill: "c#", star: 4
    }]
    $scope.getNumber = function(num) {
        return new Array(num);   
    }
    $scope.getEmpty = function(num){
        return new Array(5-num)
    }
})