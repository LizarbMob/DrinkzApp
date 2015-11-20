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
