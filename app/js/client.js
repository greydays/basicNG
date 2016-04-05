'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']); // eslint-disable-line

require('./controllers/appController')(app);
require('./directives/appDirectives')(app);
require('./services/appServices')(app);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/stretch', {
      templateUrl: 'html/stretch.html',
      controller: 'AppCtrl'
    })
    .when('/', {
      templateUrl: 'html/stretch.html',
      controller: 'AppCtrl'
    })
    .when('/deadlink', {
      templateUrl: 'html/deadlink.html'
    })
    .otherwise({
      redirectTo: '/deadlink'
    });
}]);
