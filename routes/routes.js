// Here we have the routes. We define the functions that receive the request from
// the client and send the response back. All the functions are stored into "exports"
// and send back to the server when we "require" the file. Is like creating an instance
// of this "class". Then we will use the created "object" to access this functions.

exports.partials = function(request, response)
{
    var partialName = request.params.name;

    response.render('partials/' + partialName);
};

exports.index = function(request, response)
{
    response.render('index');
};