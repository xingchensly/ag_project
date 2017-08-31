angular.module('login',[])
.directive('nglLogin',[function(){
    return {
        restrict:'E',
        scope:{},
        templateUrl:"/src/components/login/login.html",
        replace:true,
        controller:'nglLoginCtrl'
    }
}])
.controller('nglLoginCtrl',['$scope','$http',function($scope,$http){
    
}])