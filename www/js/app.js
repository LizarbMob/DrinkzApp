(function() {    
    angular
        .module('Drinkz.profile', ['Drinkz.profile.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.profile.controller', [])
        .controller('ProfileCtrl', ProfileCtrl);
    
        ProfileCtrl.$inject = ['$scope', '$ionicModal', '$timeout'];
        
        function ProfileCtrl($scope, $ionicModal, $timeout) {     
                 
            
        }
})();

(function() {    
    angular
        .module('Drinkz.preferences', ['Drinkz.preferences.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.preferences.controller', [])
        .controller('PreferencesCtrl', PreferencesCtrl);
    
        PreferencesCtrl.$inject = ['$scope', '$ionicModal', '$timeout'];
        
        function PreferencesCtrl($scope, $ionicModal, $timeout) {     
                 
            
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
                $state.go("Drinkz.home");
            }   
                 
          
        }
})();

(function() {    
    angular
        .module('Drinkz.home', ['Drinkz.home.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.home.controller', [])
        .controller('HomeCtrl', HomeCtrl);
    
        HomeCtrl.$inject = ['$scope', '$state'];
        
        function HomeCtrl($scope, $state) {  
            
                 
          
        }
})();

/// <summary>diretiva para verificação de senha</summary>
(function () {
    'use strict';
    angular
        .module('Drinkz.searchBox', [])
    
        .directive('searchBox', function () {
            return {
                scope: {
                    ngModel: '='
                },
                require: ['^ionNavBar', '?ngModel'],
                restrict: 'E',
                replace: true,
                template: '<ion-nav-buttons side="right">'+
                                '<div class="searchBar">'+
                                    '<div class="searchTxt" ng-show="ngModel.show">'+
                                        '<div class="bgdiv"></div>'+
                                        '<div class="bgtxt">'+
                                            '<input type="text" placeholder="Procurar..." ng-model="ngModel.txt">'+
                                        '</div>'+
                                    '</div>'+
                                    '<i class="icon placeholder-icon" ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></i>'+
                                '</div>'+
                            '</ion-nav-buttons>',
                
                compile: function (element, attrs) {
                    var icon=attrs.icon
                            || (ionic.Platform.isAndroid() && 'ion-android-search')
                            || (ionic.Platform.isIOS()     && 'ion-ios7-search')
                            || 'ion-search';
                    angular.element(element[0].querySelector('.icon')).addClass(icon);
                    
                    return function($scope, $element, $attrs, ctrls) {
                        var navBarCtrl = ctrls[0];
                        $scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;
                        
                    };
                },
                controller: ['$scope','$ionicNavBarDelegate', function($scope,$ionicNavBarDelegate){
                    var title, definedClass;
                    $scope.$watch('ngModel.show', function(showing, oldVal, scope) {
                        if(showing!==oldVal) {
                            if(showing) {
                                if(!definedClass) {
                                    var numicons=$scope.navElement.children().length;
                                    angular.element($scope.navElement[0].querySelector('.searchBar')).addClass('numicons'+numicons);
                                }
                                
                                title = $ionicNavBarDelegate.getTitle();
                                $ionicNavBarDelegate.setTitle('');
                            } else {
                                $ionicNavBarDelegate.setTitle(title);
                            }
                        } else if (!title) {
                            title = $ionicNavBarDelegate.getTitle();
                        }
                    });
                }]
            }
            
        });

})();


 
(function() {    
    angular
        .module('Drinkz.detail', ['Drinkz.detail.controller']);
    
})();

(function() {
    angular
        .module('Drinkz.detail.controller', [])
        .controller('DetailCtrl', DetailCtrl);
    
        DetailCtrl.$inject = ['$scope', '$state'];
        
        function DetailCtrl($scope, $state) {  
            
                 
          
        }
})();

(function() {
    angular.module('Drinkz', ['ionic',   
        'Drinkz.config',       
        'Drinkz.menu',
        'Drinkz.detail', 
        'Drinkz.home',
        'Drinkz.profile',
        'Drinkz.preferences',
        'Drinkz.index',
        'Drinkz.searchBox'           
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
