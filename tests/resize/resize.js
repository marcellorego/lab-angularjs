var app = angular.module('resizeApp', []);

app.controller('resizeCtrl', function() {
  var vm = this;

  vm.executeResize = function(event) {
    vm.widthChanged = event.width;
    vm.heightChanged = event.height;
  };
});