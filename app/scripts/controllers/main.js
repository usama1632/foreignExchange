'use strict';

/**
 * @ngdoc function
 * @name myProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myProjectApp
 */
angular.module('myProjectApp')
  .controller('MainCtrl', function ($scope,foreignExchange) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.convertedValue='';
    $scope.amount ;

    $scope.items = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","EUR","GBP",
    "HKD","HUF","IDR","INR","JPY","KRW","MXN","MYR","NOK","NZD",
    "PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","ZAR","USD"];

    $scope.from ='AUD';
    $scope.to ='USD';


    //
    $scope.getForeignExchangeData = function()
      {   
         fx.base = $scope.from;
         foreignExchange.getForeignExchangeData($scope.from,$scope.to).then(function(data)
                {     
                  fx.rates =data;  
                  $scope.convertedValue = fx($scope.amount).from($scope.from).to($scope.to); 
                     
                },
                function(errorMessage)
                {
                  
                });  
      }
   
    //

    $scope.convert = function()
    {
    	if($scope.from && $scope.to && $scope.amount)
    	{ 
	    	$scope.getForeignExchangeData();
    	}
    }

  });
