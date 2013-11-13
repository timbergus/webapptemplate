/*
 * Here go the controllers of our web application. The controllers are modules that store
 * variables and function for every page in our application.
 */

// First of all we are going to create an object to store our controllers.

var controllers = {};

// And then we are going to populate our controllers variable with our site controllers.

controllers.FirstPageController = function($scope, RESTServer)
{
    $scope.pageData =
    {
        title: 'First Page',
        contents: 'This is our first page'
    };

    $scope.loadDatabaseMessage = function()
    {
        RESTServer.getData(
            {
                source: 'first.json'
            })
            .then(function(data)
            {
                $scope.specialMessage = data;
            });
    }
};

controllers.SecondPageController = function($scope, RESTServer)
{
    $scope.pageData =
    {
        title: 'Second Page',
        contents: 'This is our second page'
    };

    $scope.loadDatabaseMessage = function()
    {
        RESTServer.getData(
            {
                source: 'second.json'
            })
            .then(function(data)
            {
                $scope.specialMessage = data;
            });
    }
};

controllers.ThirdPageController = function($scope, RESTServer)
{
    $scope.pageData =
    {
        title: 'Third Page',
        contents: 'This is our third page'
    };

    $scope.loadDatabaseMessage = function()
    {
        RESTServer.getData(
            {
                source: 'third.json'
            })
            .then(function(data)
            {
                $scope.specialMessage = data;
            });
    }
};

controllers.HeaderController = function($scope, NavigationService, AuthenticationService)
{
    $scope.buttons =
    {
        first: 'First Page',
        second: 'Second Page',
        third: 'Third Page',
        login: 'Login',
        logout: 'Logout'
    };

    $scope.loadFirstPage = function()
    {
        NavigationService.goToFirstPage();
    };

    $scope.loadSecondPage = function()
    {
        NavigationService.goToSecondPage();
    };

    $scope.loadThirdPage = function()
    {
        NavigationService.goToThirdPage();
    };

    $scope.login = function()
    {
        AuthenticationService.login();
    };

    $scope.logout = function()
    {
        AuthenticationService.logout();
    };
};

controllers.Error404Controller = function($scope)
{
    $scope.pageData =
    {
        title: 'Error 404',
        contents: 'Unauthorized Access!'
    };
};