angular.module('head', [])
    .directive('nglHead', [function () {
            return {
                scope:{},
                restrict:"E",
                templateUrl:'/src/components/common/head/head.html',
                replace:true,
                controller:['$scope',function($scope){
                    console.log('head')
                }]
            }
        }

    ])