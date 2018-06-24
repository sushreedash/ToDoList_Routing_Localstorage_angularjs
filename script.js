var app = angular.module('formApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('form',{
        url:'/form',
        templateUrl:'form.html',
        controller:'myCtrl'
    })
    $stateProvider
    .state('form.addContact',{
        url:'/addContact',
        templateUrl:'addContact.html'
    })
    $stateProvider
    .state('form.home',{
        url:'/home',
        templateUrl:'home.html',
    })
    $stateProvider
    .state('form.update',{
        url:'/update',
        templateUrl:'update.html',
    })
    $urlRouterProvider.otherwise('/form/home')

})

app.controller('myCtrl',function($scope){
    $scope.formData = {};
    $scope.arr = [];
    $scope.arrnew=[];
    var taskData = localStorage['tasksList']
    if(taskData !== undefined){
        $scope.arr = JSON.parse(taskData)
    }
    $scope.goToHome = function(){
        $scope.arr.push($scope.formData.fname);
        $scope.arrnew.push($scope.formData)
        localStorage['tasksList'] = JSON.stringify($scope.arr)
        $scope.formData={};
    }
    $scope.remove = function(data){
        $scope.arr.splice(data,1)
        localStorage['tasksList'] = JSON.stringify($scope.arr)
    }
    $scope.update = function(formd){
        index = $scope.arr.indexOf(formd.fname);
        $scope.arr.splice(index,1,formd.fname)
    }
    $scope.upd = function(dataInd){
        $scope.updData = $scope.arrnew[dataInd];
        console.log($scope.updData.fname)
    }
})
