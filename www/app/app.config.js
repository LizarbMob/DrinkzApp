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
            
            .state('Drinkz.home', {
                    url: '/home',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/home/home.html',
                             controller: 'HomeCtrl as vm'
                         }
                    }
            })
            
            
            .state('Drinkz.detail', {
                    url: '/detail',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/detail/detail.html',
                             controller: 'Detail as vm'
                         }
                    }
            })
                 
            .state('Drinkz.profile', {
                    url: '/profile',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/profile/profile.html',
                             controller: 'ProfileCtrl as vm'
                         }
                    }
            })
            
            .state('Drinkz.preferences', {
                    url: '/preferences',
                    views: {
                         'menuContent': {
                             templateUrl: 'app/preferences/preferences.html',
                             controller: 'PreferencesCtrl as vm'
                         }
                    }
            })
            
            
            
            
            
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
