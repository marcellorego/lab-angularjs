'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'myApp.podservice', 'n3-line-chart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', 'PodService', function($scope, PodService) {
    
    $scope.options = {
      series: [{
          axis: "y",
          dataset: "dataset0",
          key: "val",
          label: "",
          interpolation: {mode: 'cardinal', tension: 0.7},
          color: "#1f77b4",
          type: ['line', 'dot', 'area'],
          id: 'mySeries0'
        }
      ],
      axes: {x: {key: "x"}}
    };
    
    $scope.pods = [];
    
    $scope.doListProcesses = function() {
        PodService.listProcesses()
        .then(function(data) {
           $scope.pods = data;
        });
    };
    
    $scope.isActive = function(process) {
        return process.active;
    };
    
    $scope.toggleProcess = function(process) {
        process.active = !process.active;
        console.log(process.processNumber);
    }
    
    $scope.doListProcesses();
}])

.directive("dockable", [function() {
    return {
        restrict: "E",
        templateUrl: "dashboard/dockable.html"
    }
}])

;