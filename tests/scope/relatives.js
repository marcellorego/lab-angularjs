app.directive('outter', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: false,
    scope: {},
    template: '<div ng-transclude ng-click="o.change()"></div>',
    link: function(scope, elem, attr, ctrl/*, transclude*/) {
      /*transclude(scope, function(clone){
        elem.append(clone);
      });*/
    },
    controllerAs: 'o',
    controller: function($scope) {
      this.data = {
        value : 'ctrl data'
      };
      $scope.data = {
        value : 'scope data'
      };
      this.change = function() {
        this.data.value = 'outter clicked';
        $scope.data.value = 'outter clicked';
        console.log('outter clicked');
      };
    }
  };
});

app.directive('inner', function() {
  return {
		restrict : 'E',
    replace : false,
    scope: {
      label: '@',
      data: '=',
      color: '@'
    },
    template: '<div><span style="background-color: {{color}}">{{label}} {{data}}</span></div>',
    link: function(scope, elem, attrs, ctrl) {
      //scope.data = JSON.parse(attrs.data);
    }
  }
});