(function(){
  var app = angular.module('view',[]);

  app.directive('viewManager',function(){
    return {
      restrict: 'E',
      templateUrl: 'js/angular/views/view-manager.html',
      controller: 'function '
    }
  });
})();
