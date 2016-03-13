'use strict';

angular.module('myProjectApp')

  .service('foreignExchange', function searchService($http,$q)
    { 

    	this.getForeignExchangeData = function(from,to)
        {
            var deferred = $q.defer();
            $http.get('http://api.fixer.io/latest?base='+from,
            {  
            }).then(function(result)
            {   
                 deferred.resolve(result.data.rates); 
            }, function(err)
            {
                deferred.reject(err); 
            });

            return deferred.promise; 
        } 

    });