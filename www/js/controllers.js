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
  $scope.comm = Comms.current();
  $scope.text = '';

  $scope.next = function() {
    $scope.comm = Comms.incr();
  };

  $scope.prev = function() {
    $scope.comm = Comms.decr();
  };

  $scope.write = function(character) {
    $scope.text += character;
  };


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
