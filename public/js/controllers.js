// This is the array that is going to store our application controllers.

var controllers = {};

// And here is the controller itself. The basic parameter passed to the controller
// is the $scope, a container for all the variables and functions shared among the
// site and the controller.

controllers.Page01Controller = function($scope)
{
    $scope.order = 'first';
};