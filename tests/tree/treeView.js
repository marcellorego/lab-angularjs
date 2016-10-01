app.value('treeData', [
    { "label1" : "User", "id" : "role1", "children" : [
        { "label1" : "subUser1", "id" : "role11", "children" : [] },
        { "label1" : "subUser2", "id" : "role12", "children" : [] }
    ]},
    { "label1" : "Admin", "id" : "role2", "children" : [] },
    { "label1" : "Guest", "id" : "role3", "children" : [] }
]);

app.directive('treeView', ['treeViewService', function(treeViewService) {
  return {
    restrict: 'E',
    scope : {
      elemId: '@',
      nodeId: '@',
      nodeLabel: '@',
      nodeChildren: '@'
    },
    template: [
      '<div data-angular-treeview="true"',
      'data-tree-id="{{elemId}}"',
      'data-tree-model="model"',
      'data-node-id="{{nodeId}}"', 
      'data-node-label="{{nodeLabel}}"',
      'data-node-children="{{nodeChildren}}">',
      '{{labelField}}',
      '</div>'
    ].join(' '),
    link: function(scope, elem, attr, ctrl) {
      scope.model = treeViewService.getTreeData();
      var elemId = scope.elemId;
      scope.$watch( elemId + '.currentNode', function( newObj, oldObj ) {
        if( scope[elemId] && angular.isObject(scope[elemId].currentNode) ) {
            console.log( 'Node Selected!!' );
            console.log( scope[elemId].currentNode );
            scope.$emit('nodeSelected', scope[elemId].currentNode);
        }
      }, false);
    }
  };
}]);

app.controller('treeController', ['$scope', function($scope) {
  $scope.$on('nodeSelected', function(event, data) {
    event.stopPropagation();
    $scope.selected = data;
  });
}]);

app.service('treeViewService', ['treeData', function(treeData) {

  this.getTreeData = function() {
     return treeData;
  };

}]);