angular
  .module("starter.controllers", [])

  .controller("AppCtrl", function($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal
      .fromTemplateUrl("templates/login.html", {
        scope: $scope
      })
      .then(function(modal) {
        $scope.modal = modal;
      });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log("Doing login", $scope.loginData);

      firebase
        .database()
        .ref()
        .child("links")
        .push({
          linkTitle: $scope.loginData.title,
          link: $scope.loginData.link
        });
      alert("Done");
    };
  })

  .controller("PlaylistsCtrl", function($scope, $firebaseArray) {
    $scope.arry = $firebaseArray(
      firebase
        .database()
        .ref()
        .child("links")
    );
  })

  .controller("detialsCtrl", function(
    $scope,
    $stateParams,
    $firebaseObject,
    $sce
  ) {
    $scope.title = $stateParams.id;
    $scope.detailss = $firebaseObject(
      firebase
        .database()
        .ref()
        .child("links")
        .child($stateParams.id)
    );

    $scope.setProject = function() {
      alert($scope.detailss.link);
      $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.detailss.link);
    };
  });
