// This is the Angular application and it is linked with our site in the html tag.

// The application is basically a module that is going to store all the component
// used in the client side.In side th module we declare the routes and the controller
// and template associated. That means that when we request the route to the server
// we are going to receive an html file to show in the explorer and we also know which
// controller is going to manipulate the contents of this file.

var app = angular.module('app', [], function($routeProvider, $locationProvider)
{
    $routeProvider.when('/',
        {
            controller: 'Page01Controller',             // The controller.
            templateUrl: 'partials/page01'   // The html file that goes into ng-view.
        })
        .otherwise({redirectTo: '/'});                  // Default redirection.

    // Leave false if you don't know if the explorer you are going to use supports HTML5.
    $locationProvider.html5Mode(false);
});

// Controllers are created like an array of controllers we pass to the application
// using its property "controller".

app.controller(controllers);