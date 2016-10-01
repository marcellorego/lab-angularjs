app.directive('onResize', ['$window', '$parse', '$interval', '$rootScope', function($window, $parse, $interval, $rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      
      var expr = $parse(attrs['onResize'], null, true),
          trigger = function(event){
              var callback = function() {
                expr(scope, {$event:event});
              };
              if ($rootScope.$$phase) {
               scope.$evalAsync(callback);
              } else {
                scope.$apply(callback);
              }
          },
          timer = 0,resized = false,bound = false;

      function resetTrigger() {
        resized = false;
        $interval.cancel(timer);
      }

      function onWindowResize() {
        var height = element[0].clientHeight;
        var width = element[0].clientWidth;
        
        if (timer) {
          resetTrigger();
        }

        if (!resized) {
          timer = $interval(function(){
            if(resized){
              resetTrigger();
              trigger({
                element: element[0],
                width: width,
                height: height
              });
            }
          }, 300);
          resized = true;
        }
      }

      // bind to window resize event, will only ever be bound
			// one time for entire app
      function bind(){
        var w = angular.element($window);
        w.on('resize', function(event){
          onWindowResize();
        });
      }

      // unbind window scroll event
			function unbind(){
        var w = angular.element($window);
        w.off('resize');
			};
      
      scope.$on("$destroy", function handleDestroyEvent() {
        unbind();
      });

      bind();

      onWindowResize();
    }
  };
}]);