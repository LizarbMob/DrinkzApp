(function() {    
    angular
        .module('Drinkz.playlists', ['Drinkz.playlists.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.playlists.controller', [])
        .controller('PlaylistsCtrl', PlaylistsCtrl);
    
        PlaylistsCtrl.$inject = ['$scope'];
        
        function PlaylistsCtrl($scope) {     
                 
            $scope.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];          
        }
})();

(function() {    
    angular
        .module('Drinkz.playlist', ['Drinkz.playlist.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.playlist.controller', [])
        .controller('PlaylistCtrl', PlaylistCtrl);
    
        PlaylistCtrl.$inject = ['$scope', '$stateParams'];
        
        function PlaylistCtrl($scope, $stateParams) {     
                 
            $scope.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];          
        }
})();

(function() {    
    angular
        .module('Drinkz.menu', ['Drinkz.menu.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.menu.controller', [])
        .controller('MenuCtrl', MenuCtrl);
    
        MenuCtrl.$inject = ['$scope', '$ionicModal', '$timeout'];
        
        function MenuCtrl($scope, $ionicModal, $timeout) {     
                 $scope.logoff = logoff;
                 
                 function logoff(){
                     //todo
                 }
            
        }
})();

(function() {    
    angular
        .module('Drinkz.index', ['Drinkz.index.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.index.controller', [])
        .controller('IndexCtrl', IndexCtrl);
    
        IndexCtrl.$inject = ['$scope', '$state'];
        
        function IndexCtrl($scope, $state) {  
            $scope.login = login;
            
            function login(user){
                console.log(user);
                $state.go("Drinkz.playlists");
            }   
                 
          
        }
})();

(function() {
    angular.module('Drinkz', ['ionic',   
        'Drinkz.config',       
        'Drinkz.menu',
        'Drinkz.playlist',
        'Drinkz.playlists',
        'Drinkz.index'           
    ]);
})();

(function() {
    angular
        .module('Drinkz.config', [])
        .config(Config)   
        .run(run);
    
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function Config($stateProvider, $urlRouterProvider) {
    
             $stateProvider
        
             .state('Drinkz', {
                    url: '/Drinkz',
                    abstract: true,
                    templateUrl: 'app/menu/menu.html',
                    controller: 'MenuCtrl'
             })
        
            .state('Drinkz.search', {
                    url: '/search',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/search/search.html'
                         }
                    }
            })
        
            .state('Drinkz.browse', {
                    url: '/browse',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/browse/browse.html'
                         }
                    }
            })
            
            .state('Drinkz.playlists', {
                url: '/playlists',
                views: {
                     'menuContent': {
                         templateUrl: 'app/playlists/playlists.html',
                         controller: 'PlaylistsCtrl as vm'
                      }
                }
            })
        
            .state('Drinkz.single', {
                url: '/playlists/:playlistId',
                views: {
                     'menuContent': {
                         templateUrl: 'app/playlist/playlist.html',
                         controller: 'PlaylistCtrl as vm'
                     }
                }
            });
            
            $stateProvider
                .state('index', {
                    url: '/',
                    controller: 'IndexCtrl as vm',
                    templateUrl: 'app/index/index.html'
            });

            
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/');
    
    };

    run.$inject = ['$ionicPlatform'];

    function run($ionicPlatform) {
        
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
            
                }
                if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
    }
})();
