app.controller('education', function($scope){
    $scope.educationInfo = [
        {name: 'British Columbia Institute of Technology'
        , degree: 'Diploma of Computer Systems Technology'
        , startDate: 'September 2017'
        , endDate: 'December 2019'
        , information:  [
            {a: 'Graduated with Distinction'}
            , {a: 'Courses in C#, C++, C, Relational Database, Node, Java, Algorithms'} 
            , {a:' Team Lead in multiple projects such as IcoPico and Goverlytics'}
        ]},
        {name: 'Thompson Rivers University'
        , degree: 'Bachelor of Arts'
        , startDate: 'September 2009'
        , endDate: 'April 2016'
        , information:  [
            {a: 'Major in Economics'}
            , {a: 'Multiple courses in Statistics, Pyschology, Sociology'} 
            
        ]}
    ]
})