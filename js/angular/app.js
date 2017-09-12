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

  app.directive('groupList',function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/pages/profile/group-list.html',
      controller: 'groupListController',
      controllerAs: 'grpLstCtrl'
    }
  });

  app.directive('showPost', function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/pages/profile/show-post.html',
      controller: 'postController',
      controllerAs: 'postCtrl'
    }
  });

  app.directive('rescentPosts', function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/rescent-posts.html',
      controller: 'postController',
      controllerAs: 'postCtrl'
    };
  });

  app.controller('studentInfoController',function(){

  });

  app.controller('postController',['$scope','$routeParams', '$location',function($scope, $routeParams, $location){
    this.posts = Posts
    this.rescent = filterTags('tarea', this.posts);
    $scope.selectedPost = this.posts[0];

    console.log($location.url()); //delete

    function selectPost( postID, PostsArr ){
      var posts = PostsArr;
      function checkID(post){
        return post.id === postID;
      }
      var post = posts.find(checkID);
      return post;
    }

    this.getUrl = function( post ){
      $scope.selectedPost =  selectPost($routeParams.search, this.posts);
      var date = new Date(post.date);
      var month = date.getMonth()+1;
      var year = date.getFullYear();
      var route = '/'+ year + '/' + month + '/' + post.name + '?search=' + post.id;
      return route;
    };



  }]);

  app.controller('studentCardController',function(){

  });

  app.controller('groupListController', function(){
    this.groups = Groups;
  });

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/profile',
        {
          templateUrl: 'js/angular/views/profile.html'
        }
      ).when('/entry/:year/:month/:name',
        {
          templateUrl: 'js/angular/views/post-page.html',
          controller: 'postController',
          controllerAs: 'postCtrl'
        }
      ).when('/404',
        {
          templateUrl: 'js/angular/views/error.html',
          controller: 'postController',
          controllerAs: 'postCtrl'
        }
      ).otherwise(
        {
          redirectTo: '/404'
        }
      )
  }]);
})();


var Posts = [
  {
    id: '59AEDFA501',
    name: "Test post 1",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://informaticabertrand.files.wordpress.com/2015/11/128k.png"]
      },
    tags: ['1o', 'tarea', 'proyecto', 'trabajo'],
    date: 1504632741,
  },
  {
    id: '6B9082A502',
    name: "Test post 2",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    tags: ['2o', 'proyecto', 'trabajo'],
    date: 1804632741,
  },
  {
    id: '6580AFA03',
    name: "Números binarios",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    tags: ['3o', 'tarea', 'proyecto', 'trabajo'],
    date: 1064332741,
  },
  {
    id: '6580AFA04',
    name: "Sistemas operativos",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: []
      },
    tags: ['2o', 'tarea', 'proyecto', 'trabajo'],
    date: 1064332741,
  },
  {
    id: '6580AFA05',
    name: "Código ASCII",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    tags: ['1o', 'tarea', 'proyecto', 'trabajo'],
    date: 1064332741,
  },
  {
    id: '6580AFA06',
    name: "MS-DOS",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    tags: ['1o', 'tarea', 'proyecto', 'trabajo'],
    date: 1064332741,
  },
  {
    id: '6580AFA07',
    name: "Windos",
    body: { content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: ["https://www.w3schools.com/w3images/lights.jpg","https://www.w3schools.com/w3images/nature.jpg"]
      },
    tags: ['1o', 'tarea', 'proyecto', 'trabajo'],
    date: 1064332741,
  }
];

var Groups = [
  {name:"Armagh"},
  {name:"Belfast"},
  {name:"Derry"},
  {name:"Newry"},
  {name:"Edinburgh"},
  {name:"Glassgow"},
  {name:"Cardif"},
  {name:"Newport"}
];


function inArray(SearchWord, TagArr){
  return (TagArr.indexOf(SearchWord) != -1 ? true: false)
};

function isArray( foo ){
  return Object.prototype.toString.call(foo) === "[object Array]";
};

function searchTags(inArr, tagArr, strict=true){
  var result = false;
  var keyArr = [];

  !isArray(inArr) ? keyArr.push(inArr): keyArr = inArr;

  if(strict){
    for (var i = 0; i < keyArr.length; i++) {
      if( !inArray(keyArr[i], tagArr) ){
        result = false;
        break;
      }else result = true;
    }
    return result;
  }else {
    for (var i = 0; i < keyArr.length; i++) {
      if ( inArray(keyArr[i], tagArr) ) {
        result = true;
      }
    }
    return result;
  }
};

function filterTags( tags, posts ){
  var filtered = [];
  for (var i = 0; i < posts.length; i++) {
    if (searchTags( tags, posts[i].tags )) {
      filtered.push(posts[i]);
    }
  }
  return filtered;
};
