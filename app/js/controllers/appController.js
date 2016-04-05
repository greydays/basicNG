'use strict';

module.exports = function(app) {
  app.controller('AppCtrl', ['$scope', function($scope) {

    $scope.clearInput = function() {
      $scope.heading = "";
    }

  }]);
};
