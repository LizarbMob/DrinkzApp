(function () {
    angular
        .module('Drinkz.index.controller', [])
        .controller('IndexCtrl', IndexCtrl);

        IndexCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$q'];
    
        function IndexCtrl($scope, $state, $ionicLoading, $q) {
            $scope.login = login;
            $scope.facebookLogin = facebookLogin;
    
            function login(user) {
                console.log(user);
                $state.go("Drinkz.home");
            }
    
    //         function facebookLogin() {
    //             facebookConnectPlugin.getLoginStatus(function (success) {
    //                 if (success.status === 'connected') { 
    //                     userInfo(success.authResponse)
    //                     .then(function (profileInfo) { 
    //                                 //todo
    //                     },
    //                     function (fail) {
    //                                     //error 
    //                     });
    //                 }
    //                 else { 
    //                     $ionicLoading.show({
    //                             template: 'Logging in...'
    //                     });
    //     
    //                     facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
    //                 }
    //              
    //             }
    //         }
    //             
    //         function userInfo(data) {
    //             var info = $q.defer();
    // 
    //             facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
    //                     function (response) {
    //                         console.log(response);
    //                         info.resolve(response);
    //                     },
    //                     function (response) {
    //                         console.log(response);
    //                         info.reject(response);
    //                     }
    //                 );
    //             return info.promise;
    //         };
    // 
    
        }



})();
