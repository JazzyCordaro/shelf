console.log('js sourced');
var myApp = angular.module('myApp',[]);
var lock = Auth0Lock('PLvMpMQ4IPOQ8Xl7AHpxYHTFXq9Nt1Or','mattcllhn.auth0.com');
myApp.controller('shelfController',['$scope','$http',function($scope,$http){
  console.log('NG');
  $scope.login = function(){
    console.log('in login');
    lock.show(function(err, profile, token){
      if(err){
        console.log(err);
      } else {
        console.log('Auth0 success, Profile:', profile);
      }
    }); // end lock
  }; // end login
}]); // end controller
