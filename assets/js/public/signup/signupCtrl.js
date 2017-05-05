angular.module('signupMod').controller('signupCtrl',['$scope','$http',function($scope,$http){
    console.log('signup controller initialized...');
    
    $scope.runSignup=function(){
        console.log('signup: ' + $scope.name);
        $http.post('/signup',{
            name:$scope.name,
            email:$scope.email,
            password:$scope.password
        }).then(function success(response){
            window.location="/user"
        }).catch(function onError(err){
            console.log("error:"+err)
        });
    };
}])