angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('CommunicatorCtrl', function($scope, $stateParams, Comms) {
  console.log('pepe');
  $scope.comm = {
                  col1: Comms.get(Comms.row())[0],
                  col2: Comms.get(Comms.row())[1],
                  col3: Comms.get(Comms.row())[2],
                  col4: Comms.get(Comms.row())[3]
                };

  $scope.update = function() {
    $scope.comm = {
      col1: Comms.get(Comms.row())[0],
      col2: Comms.get(Comms.row())[1],
      col3: Comms.get(Comms.row())[2],
      col4: Comms.get(Comms.row())[3]
    };
  };

  $scope.next = function() {
    Comms.incr();
    $scope.update();
  };

  $scope.prev = function() {
    Comms.decr();
    $scope.update();
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
