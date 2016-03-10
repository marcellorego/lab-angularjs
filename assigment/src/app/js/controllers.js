'use strict';

angular.module('vizApp.controllers', ['vizApp.services'])

.controller('HomeCtrl', function($scope, $state) {

  $scope.pods = [{
      "processNumber": 0
  }];

  $scope.submitForm = function(formValid) {
      
      if (formValid && $scope.data.username == 'test')
        $state.go('home');
  }
  
});