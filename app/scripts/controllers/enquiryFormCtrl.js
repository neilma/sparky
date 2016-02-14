'use strict';

/**
 * @ngdoc function
 * @name sparkyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sparkyApp
 */
angular.module('sparkyApp')
  .controller('EnquiryFormCtrl', function ($scope) {

    $scope.enquire = function(enquiry) {
      console.log(enquiry.name.value);
    };
  });
