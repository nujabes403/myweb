/**
 * Created by KIM on 2015-03-25.
 */
angular.module('myApp',[])
.controller('myController',function($scope,$http){
        $http.get('/user/profile')
            .success(function(data,status,headers,config){
                $scope.user = data;
                $scope.error = "";
            })
            .error(function(data,status,headers,config){
                $scope.user = {};
                $scope.error = data;
            });
    });