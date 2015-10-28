angular.module('components', [])

.directive('box', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        direction: '@'
      },
      link: function(scope, element, attrs, controller) {
        controller.updateDisplayList(scope, element[0]);
      },
      controller: function($scope, $element) {
        
        this.updateDisplayList = function (scope, element) {
          var content = element.childNodes[0];
          content.style.width = '100%';
          content.style.height = '100%';

          var children = content.children;
          var length = children.length;
          var percWidth = 100;
          var percHeight = 100;

          if (scope.direction == 'horizontal') {
            percWidth = percWidth / length;
          } else {
            percHeight = percHeight / length;
          }

          for (var index = 0; index < length; index++) {
              children[index].style.float = 'left';
              children[index].style.width = percWidth + '%';
              children[index].style.height = percHeight + '%';
              children[index].style['background-color'] = (index % 2 == 0) ? '#eeeeee' : '#acacac';
          };
        }
      },
      template:
        '<div class="box">'+
          '<div class="box content" ng-transclude>'+
          '</div>'+
          '<div class="box clear" style="clear: both;"></div>'+
        '</div>'
    };
  })
 
  .directive('stack', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {

      },
      controller: function($scope, $element) {
        var contents = $scope.contents = [];
 
        $scope.select = function(content) {
          angular.forEach(contents, function(content) {
            content.selected = false;
          });
          content.selected = true;
        }
 
        this.addContent = function(content) {
          if (contents.length == 0) $scope.select(content);
          contents.push(content);
        }
      },
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="content in contents" ng-class="{active:content.selected}">'+
              '<a href="" ng-click="select(content)">{{content.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>'      
    };
  })
 
  .directive('content', function() {
    return {
      require: '^stack',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: { 
        title: '@' 
      },
      link: function(scope, element, attrs, stackController) {
        stackController.addContent(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>'      
    };
  })