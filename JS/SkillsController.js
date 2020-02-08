app.controller('skills', function($scope){
    $scope.skillsInfo = [{
        skill: "C#", star: 3
    },
    {
        skill: "AngularJS", star: 1
    },
    {
        skill: "Java", star: 2
    },
    {
        skill: "Javascript", star: 3
    },
    {
        skill: "Node", star: 2
    },
    {
        skill: "CSS/HTML", star: 3
    },
    {
        skill: "SQL", star: 3
    },
    {
        skill: "Python", star: 1
    }]
    $scope.getNumber = function(num) {
        return new Array(num);   
    }
    $scope.getEmpty = function(num){
        return new Array(5-num)
    }
})