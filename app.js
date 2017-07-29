var app = angular.module('myAnimals', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
$routeProvider
.when('/',
{
controller: 'MyController',
templateUrl: 'viewdog.html'
})
.when('/viewcat',
{
controller: 'MyController',
templateUrl: 'viewcat.html'
})
.when('/viewpig',
{
controller: 'MyController',
templateUrl: 'viewpig.html'
})
.when('/viewhorse',
{
controller: 'MyController',
templateUrl: 'viewhorse.html'
})

.otherwise({ 
    redirectTo: '/dog'
});
//redirectoTo se puede dejar vacio '/' en este ejemplo lo redirijimos a dog

$locationProvider.hashPrefix('');
});



app.controller('MyController', function($scope){
    $scope.animals = {
        dog : 'images/dog.jpg',
        cat : 'images/cat.jpg',
        pig : 'images/pig.jpg',
        horse : 'images/horse.jpg',
    };
});


