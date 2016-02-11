'use strict';

/**
 * @ngdoc function
 * @name electricianApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the electricianApp
 */
angular.module('sparkyApp')
  .controller('EnquiryFormCtrl', function ($scope) {

    $scope.enquire = function(enquiry) {
      console.log(enquiry.name.value);
    };
  });
