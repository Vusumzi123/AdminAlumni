(function(){
  var app = angular.module('app',['ngRoute']);

  app.directive('studentCard',function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/pages/profile/student-card.html',
      controller: 'studentCardController',
      controllerAs: 'stdCardCtrl'
    };
  });

  app.directive('studentInfo', function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/pages/profile/student-info.html',
      controller: 'studentInfoController',
      controllerAs: 'stdInfoCtrl'
    };
  });

  app.directive('showPost', function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/pages/profile/show-post.html',
      controller: 'postController',
      controllerAs: 'postCtrl'
    }
  });

  app.controller('studentInfoController',function(){

  });

  app.controller('postController',function(){
    this.posts = Posts

  });

  app.controller('studentCardController',function(){

  });

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/profile',
      {
        templateUrl: 'js/angular/views/view-manager.html',
        controller: function () {

        }
      }
    )
  }]);
})();


var Posts = [
  {
    name: "Test post 1",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://informaticabertrand.files.wordpress.com/2015/11/128k.png"]
      },
    date: 1504632741,
  },
  {
    name: "Test post 2",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    date: 1204632741,
  }
];

var Groups = [
  "Armagh",
  "Belfast",
  "Derry",
  "Newry",
  "Edinburgh",
  "Glassgow",
  "Cardif",
  "Newport"
];
