// This is the Angular application and it is linked with our site in the html tag.

// The application is basically a module that is going to store all the component
// used in the client side.In side th module we declare the routes and the controller
// and template associated. That means that when we request the route to the server
// we are going to receive an html file to show in the explorer and we also know which
// controller is going to manipulate the contents of this file.

var app = angular.module('app', [], function($routeProvider, $locationProvider)
{
    $routeProvider.when('/firstPage',
        {
            controller: 'FirstPageController',   // The controller.
            templateUrl: 'partials/firstPage'    // The html file that goes into ng-view.
        })
        .when('/secondPage',
        {
            controller: 'SecondPageController',
            templateUrl: 'partials/secondPage'
        })
        .when('/thirdPage',
        {
            controller: 'ThirdPageController',
            templateUrl: 'partials/thirdPage'
        })
        .when('/error404',
        {
            controller: 'Error404Controller',
            templateUrl: 'partials/error404'
        })
        .otherwise({redirectTo: '/firstPage'});  // Default redirection.

    // Leave false if you don't know if the explorer you are going to use supports HTML5.
    $locationProvider.html5Mode(false);
});

// Here we are going to implement extra functionality into our app to improve security making
// a list of the pages that need login to be loaded. In case there weren't a session opened
// we would have error 404 page.

app.run(function($rootScope, $location, AuthenticationService)
{
    var routesThatRequireAuth = ['/thirdPage'];

    $rootScope.$on('$routeChangeStart', function(/*event, next, current*/)
    {
        if (_(routesThatRequireAuth).contains($location.path()) && !AuthenticationService.isLoggedIn())
        {
            $location.path('/error404');
        }
    });
});

// Controllers are created like an array of controllers we pass to the application
// using its property "controller".

app.controller(controllers);

/*
 * Here go the factories of our web application. The factories are modules that returns functions
 * that we can share with different parts of our app injecting them into the controllers where we
 * are going to use them.
 */

app.factory('NavigationService', function($location)
{
    return {

        goToFirstPage: function()
        {
            $location.path('/firstPage');
        },
        goToSecondPage: function()
        {
            $location.path('/secondPage');
        },
        goToThirdPage: function()
        {
            $location.path('/thirdPage');
        }/*,
        goToError404: function()
        {
            $location.path('/error404');
        }*/
    };
});

app.factory('RESTServer', function($http)
{
    return {

        getFirstPageExtraInfo: function()
        {
            var promise = $http.get("data/first.json").success(function(data)
            {
                console.log(data);
            })
                .error(function(status)
                {
                    console.log(status);
                })
                .then(function(response)
                {
                    return response.data;
                });

            return promise;
        },
        getSecondPageExtraInfo: function()
        {
            var promise = $http.get("data/second.json").success(function(data)
            {
                console.log(data);
            })
                .error(function(status)
                {
                    console.log(status);
                })
                .then(function(response)
                {
                    return response.data;
                });

            return promise;
        },
        getThirdPageExtraInfo: function()
        {
            var promise = $http.get("data/third.json").success(function(data)
            {
                console.log(data);
            })
                .error(function(status)
                {
                    console.log(status);
                })
                .then(function(response)
                {
                    return response.data;
                });

            return promise;
        }
    };
});

app.factory('AuthenticationService', function($http, NavigationService, SessionService, FlashService)
{
    var cacheSession = function()
    {
        SessionService.set('authenticated', true);
    };

    var uncacheSession = function()
    {
        SessionService.unset('authenticated');
    };

    return {

        login: function()
        {
            cacheSession();

            FlashService.show("You are logged in!");
            FlashService.clearAuto(2);

            NavigationService.goToThirdPage() ;
        },
        logout: function()
        {
            uncacheSession();

            FlashService.show("You are logged out!");
            FlashService.clearAuto(2);

            NavigationService.goToFirstPage();
        },
        isLoggedIn: function()
        {
            return SessionService.get('authenticated');
        }
    }
});

app.factory('SessionService', function()
{
    return {

        get: function(key)
        {
            return sessionStorage.getItem(key);
        },
        set: function(key, value)
        {
            return sessionStorage.setItem(key, value);
        },
        unset: function(key)
        {
            sessionStorage.removeItem(key);
        }
    };
});

app.factory('FlashService', function($rootScope, $timeout)
{
    return {

        show: function(message)
        {
            $rootScope.flash = message;
        },
        clear: function()
        {
            $rootScope.flash = "";
        },
        clearAuto: function(time)
        {
            $timeout(function()
                {
                    $rootScope.flash = "";
                },
                time * 1000);
        }
    };
});

// This is the service with our share data if needed.

app.service('ApplicationService', function ()
{
    //var ourPrivateSharedVariable = '';

    return {

        /*getOurPrivateSharedVariable: function ()
        {
            return ourPrivateSharedVariable;
        },
        setOurPrivateSharedVariable: function(value)
        {
            ourPrivateSharedVariable = value;
        }*/
    };
});