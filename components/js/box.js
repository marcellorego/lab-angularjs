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
});
