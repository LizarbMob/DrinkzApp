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
