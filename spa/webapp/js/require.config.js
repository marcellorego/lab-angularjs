(function() {
  'use strict';

  window.GLOBAL_APP = {
	MOCK_FLAG: true,
	ANGULAR_VERSION: '1.2.2'
  };
  
  
  var ANGULAR_VERSION = window.GLOBAL_APP.ANGULAR_VERSION;
  
  //---

  // require object config
  var config = {
  
	  // libraries dependencies with fallback
	  paths: {
	
		  /*baseUrl: 'js/lib',*/
		  
		  jquery			: ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery',
		        			   '//code.jquery.com/jquery-1.10.2',
		        			   'libs/jquery/jquery-1.10.2'
		        			   ],
		  
		  angular			: ['//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular',
		         			   '//code.angularjs.org/'+ANGULAR_VERSION+'/angular',
		         		       'libs/angular/angular'],
		         		      
		  angular_route 	: ['//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-route',
		                	   '//code.angularjs.org/'+ANGULAR_VERSION+'/angular-route',
		                	   'libs/angular/angular-route'
		                	   ],
		                	   
		  angular_resource 	: ['//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-resource',
		                   	   '//code.angularjs.org/'+ANGULAR_VERSION+'/angular-resource',
		                   	   'libs/angular/angular-resource'
		                       ],
	
		  bootstrap			: ['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap',
		           			   '//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap',
		           			   'libs/bootstrap/bootstrap']
	  },

	  // define js scripts dependencies
	  shim: {
		
		'bootstrap': {
			deps:['jquery']
		},
		  
		'angular_route': {
			deps: ['angular']		
		},
		
		'angular_resource': {
			deps: ['angular']
		},
		  
	    'app/main/module': { 
	        deps: ['angular_route', 'angular_resource'] 
	    },
	    
	    'app/services/auth': {
	    	deps: ['app/main/module']
	    },
	    
	    'app/controllers/logincontroller': { 
	        deps: ['app/services/auth'] 
	    },
	
	    'app/controllers/homecontroller': { 
	        deps: ['app/services/auth'] 
	    },
	    
	    'app/main/routes': { 
	        deps: ['app/controllers/logincontroller', 'app/controllers/homecontroller'] 
	    },
	    
	    'app/main/start': {
	        deps: ['app/main/routes', 'bootstrap']
	    }
	
	  }

  };
  
  
  //---

  if (window.GLOBAL_APP.MOCK_FLAG) {

    //------------------
    // add more libraries dependencies

    config.paths['angular-mocks'] = [
      '//cdnjs.cloudflare.com/ajax/libs/angular.js/'+ANGULAR_VERSION+'/angular-mocks',
	  '//code.angularjs.org/'+ANGULAR_VERSION+'/angular-mocks'
    ];

    //------------------
    // add more shim configs

    config.shim['angular-mocks'] = {
      deps: ['angular', 'angular_resource']
    };

    //--- @begin: mock resources

    config.shim['app/mock/mock-main'] = {
      deps: ['angular-mocks']
    };

    config.shim['app/mock/mock-config'] = {
      deps: ['app/mock/mock-main']
    };

    config.shim['app/mock/mock-run'] = {
        deps: ['app/mock/mock-config',
               'app/mock/resources/usuariosmock']
    };
    
    //--- @end: mock resources  

  }

  console.log(config);
  
  //---

  require(config, ['require'],

	  function(require) {
	
	  	var reqs = ['app/main/start']; 
	  	
//	  	if (window.GLOBAL_APP.MOCK_FLAG) {
//			 console.log('adding require.mock.config.js');
//			 reqs.push('require.mock.config');
//		}

	  	console.log('calling app/main/start.js');
	
		require(reqs);
	
	  }
  );
  
})();