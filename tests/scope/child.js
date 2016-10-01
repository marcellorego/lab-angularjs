app.directive("child", function() {
	return {
		restrict : 'E',
		scope : {
			label : '@',
			selection : '@',
			obj : '='
		},
		template : '<div ng-click="ctrl$Child.emitClickHandler($event)" ' + 
							 ' ng-class="selection" style="border: 1px solid red;">' +
							 '<span>{{label}}</span>' +
							 '<span style="background-color: green">{{obj}}</span>' +
							 '</div>',
		link: function(scope, element, attributes, controller) {
			//scope.selection = 'unselected';

			/*scope.$watch('obj', function handleObjChange( newValue, oldValue ) {
				console.log( "fn( scope.obj ):", oldValue, newValue );
			});*/

			scope.$on('$viewContentLoaded', function() {
				console.log('created');
			});

			scope.$on('$destroy', function() {
				console.log('destroyed');
			});

		},
		controllerAs: 'ctrl$Child',
		controller: function($scope) {
			
			this.emitClickHandler = function(event) {
				$scope.$emit('childSelected', $scope);
				//$scope.change($scope);
			}

			console.log('ctrl$Child ' + $scope.label + ' has been constructed');
		}
	};
});