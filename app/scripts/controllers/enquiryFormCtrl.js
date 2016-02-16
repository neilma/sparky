'use strict';

/**
 * @ngdoc function
 * @name sparkyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sparkyApp
 */
angular.module('sparkyApp')
  .controller('EnquiryFormCtrl', function ($scope, $http, Flash) {

    $scope.enquire = function(enquiry) {
      Flash.create('success', 'Thanks for your enquiry, we\'ll contact you ASAP.', 0, {class: 'custom-flash'}, true);
      $http({
        url: '/enquiry',
        method: 'POST',
        data: { 'data': enquiry },
        headers: { 'Content-Type': 'application/json' }
      }).then(function successCallback(resp) {
        console.log(resp);
      }, function errorCallback(resp) {
        console.log(resp);
      });
    };
  });
