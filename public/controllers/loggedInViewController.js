myApp.controller('loggedInController', ['$scope', '$http' ,function($scope, $http){
console.log('in loggedInController');

  $scope.addThing = function(){
      console.log( 'in addThing function');

      //put new pet into object to send to the server
      //properties on the left-hand side NEED to be the same as what the server expects
      var thingToSend = {
        name: $scope.userName,
        description: $scope.description,
        url: $scope.url
    };

      //reset inputs after adding new thing
      $scope.userName = null;
      $scope.description = null;
      $scope.url = null;


      console.log( 'sending:', thingToSend );
      // test send via http to post route

      $http({
      method: 'POST',
      url: '/things',
      data: thingToSend
    }).then(function(response){
      console.log('this is from the server', response);

    });

  }; // end addThing function

}]);//end loggedInController

    // $scope.getItems = function() {
    //     console.log('in getItems', fakeItem);
    //     $http({
    //         method: 'GET',
    //         url: '/things'
    //     }).then(function(data) {
    //         $scope.toView = data.items;
    //     }); //end http callback function
    //     $scope.toView = fakeItem;
    //
    // }; //getItems
    // $scope.getItems();
// }]); // end controller
