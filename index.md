<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
<link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="CSS/stylesheet.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="JS/Operations.js"></script>
<script src="JS/Routing.js"></script>
<script src="JS/EducationInformation.js"></script>
<script src="JS/ProjectsController.js"></script>
<script src="JS/SkillsController.js"></script>


<body ng-app="templater">
  <div class="about-me">
    <div class="display-width">

    <h1>Jennifer Hobbs</h1>
    <h3 class="about">Junior Web and Software Developer</h3>
    <div class="about-me-line"></div>
    <div class="split-container">
      <div class="split">
        <img class="about" src="Images/jennifer.png" alt="portrait">
      </div>
      <div class="split about-width">
        <h3 class="about">Vancouver, BC</h3>
        <div class="about-me-line2"></div>
        <h3 class="about-width about">
          I have a passion for learning and perfecting my skills.
        </h3>
      </div>
    </div>
  </div>
  </div>
  <div ng-view></div>
</body>

</html>