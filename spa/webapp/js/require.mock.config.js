(function() {
  'use strict';

  //---
  
  var ANGULAR_VERSION = window.GLOBAL_APP.ANGULAR_VERSION;

  // require object config
  var config = {

    // libraries dependencies with fallback 
    paths: {

      'angular-mocks': [
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-mocks',
	    '//code.angularjs.org/'+ANGULAR_VERSION+'/angular-mocks']

    },

    // define js scripts dependencies 
    shim: {

      'angular-mocks': {
        deps: ['angular', 'angular_resource']
      },

      //--- @begin: mock resources

      'mock/mock-main': {
        deps: ['angular-mocks']
      },

      'mock/mock-config': {
        deps: ['mock/mock-main']
      },

      'mock/mock-run': {
          deps: ['mock/mock-config',
                 'mock/resources/usuariosmock']
      }
      
      //--- @end: mock resources

    }

  };
  
  console.log('require mock config object');
  console.log(config);

  //---

require(config,

  ['require'],

function(require) {

  console.log('require load mock config');

//  console.log(GLOBAL_APP.moduleDeps);
//
//  // update modules dep array
//  GLOBAL_APP.moduleDeps = GLOBAL_APP.moduleDeps.concat(['ngMockBackend']);
//
//  console.log(GLOBAL_APP.moduleDeps);

  require(['app/mock/load']);

});

})();