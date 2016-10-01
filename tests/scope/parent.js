app.directive("parent", ['$parse', function($parse) {
	return {
		restrict : 'E',
		transclude: true,
		scope : {
			label: '@'
		},
		template : '<div style="border: 2px solid black;">' +
								'<div style="background-color: gray">{{label}}</div>' +
								'<div ng-transclude>{{obj}}</div>' +
								'</div>',
		link: function(scope, element, attributes, controller, transclude) {
			
			/*scope.$watch('obj', function handleObjChange( newValue, oldValue ) {
				console.log( "fn( scope.obj ):", oldValue, newValue );
			});*/

			/*transclude(scope, function(clone){
					element.append(clone);
			});*/

			//$parse(attributes.obj)(scope);

			scope.$on('childSelected', function(event, data) { 
					console.log('event received', data.$id);
					
					if (controller.selected) {
						delete controller.selected.selection;
					}

					if (controller.selected !== data) {
						controller.selected = data;
						controller.selected.selection = 'selected';
						controller.obj = {
							id : data.$id
						};
					} else {
						controller.selected = null;
						delete scope.obj;
					}
			});
		},
		controllerAs : 'ctrl$Parent',
		controller : function($scope, $element) {
			var ctrl$Parent = this;

			/*$scope.change = function(scope) {
				console.log('Change', scope.$id);
			}*/

			(function() {
					
			})();
		}
	};
}]);