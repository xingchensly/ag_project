angular.module('index',[])
.directive('nglIndex',[function(){
    return {
        restrict:'E',
        scope:{},
        templateUrl:"/src/components/index/index.html",
        controller:['$scope',function($scope){
            console.log('shouye')
        }]
    }
}])