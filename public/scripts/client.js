console.log('js sourced');

var myApp = angular.module('myApp',[]);
var lock = Auth0Lock('PLvMpMQ4IPOQ8Xl7AHpxYHTFXq9Nt1Or','mattcllhn.auth0.com');

myApp.controller('shelfController',['$scope','$http',function($scope,$http){
  var fakeItem = {
    name:'Richard',
    description:'nancat',
    photo:'http://cdn.nyanit.com/nyan2.gif'
  };

  console.log('NG');
  $scope.showUser = true;
  $scope.init = function(){
    if(JSON.parse(localStorage.getItem('userProfile'))){
      $scope.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      console.log('logged in:',userProfile);
      $scope.showUser = true;
    }else {
      $scope.showUser = false;
      emptyLocalStorage();
      console.log('in the scope.init else block');
    }

  };//scope.init function
  // $scope.login = function(){
  //
  //   console.log('in login');
  //   lock.show(function(err, profile, token){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       console.log('Auth0 success, Profile:', profile);
  //       localStorage.setItem('userToken',token);
  //       localStorage.setItem('userProfile',JSON.stringify(profile));
  //       location.reload();
  //     }

    // }); // end lock
  // }; // end login
  $scope.addItem = function (){
    var objectToSend = {
      name:$scope.userName,
      description:$scope.description,
      url:$scope.url
    };
    fakeItem += objectToSend;
    console.log('objectToSend',objectToSend);

    // $http({
    //   method:'POST',
    //   url:'/things',
    //   data:objectToSend
    //
    // }).then(function(){
    // });
  };//addItem

  $scope.getItems = function(){
    console.log('in getItems',fakeItem);
    // $http({
    //   method:'GET',
    //   url:'/things'
    // }).then(function(data){
    //   $scope.toView = data.items;
    // });//end http callback function
    $scope.toView = fakeItem;

  };//getItems
  $scope.getItems();
}]); // end controller
var emptyLocalStorage = function(){
  localStorage.removeItem('userProfile');
  localStorage.removeItem('userToken');
};//emptyLocalStorage
