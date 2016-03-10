'use strict';

angular.module('vizApp.services', [])

.service('PodService', ['$http', 'serviceConfig', function ($http, serviceConfig) {
    
    this.listChannels = function(name, pageToken) {
        var config = {
            method: 'GET',
            url: serviceConfig.urlbase + '/clipping/listChannels',
            headers: {
                'Content-Type': 'application/json'
            },
            params: { 
                name: name,
                pageToken: pageToken
            }
        };
        
        var promise = $http(config)
        .then(function (response) {
            return response.data;
        });
        return promise;
    };
    
    this.toggleChannel = function(channelId, checked) {
        var config = {
            method: 'POST',
            url: serviceConfig.urlbase + '/clipping/subscriptions',
            headers: {
                'Content-Type': 'application/json'
            },
            params: { 
                channelId: channelId,
                checked: checked
            }
        };
        
        var promise = $http(config)
        .then(function (response) {
            return response.data;
        });
        return promise;
    };
}]);