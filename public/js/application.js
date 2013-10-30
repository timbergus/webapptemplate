var app = angular.module('app', [], function($routeProvider, $locationProvider)
{
    $routeProvider.when('/',
        {
            controller: 'Page01Controller',
            templateUrl: 'views/partials/page01.html'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(false);
});

app.controller(controllers);