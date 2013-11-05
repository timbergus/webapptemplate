// To create the server we are going to use Express. This makes things simpler
// when working with REST type architecture.

var express = require('express');

// Here we create our variable for the server.

var app = express();

// And here we configure the views folder, the render engine to use Jade, the logger
// in developer mode the obtain all the messages in the console from the communication,
// and the public folder where we store the statics files like JavaScripts, stylesheets,
// images or other files.

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

// Here goes the partials views route. What we do here is calling
// the file inside partials folder with the name we have chosen.

app.get('/partials/:name', function(request, response)
{
    var partialName = request.params.name;

    response.render('partials/' + partialName);
});

// THIS SHOULD BE LAST!!!!
// When we are working with Angular in an Apache server, the base index.html
// is loaded at the beginning and all the partials views inside it into the
// ng-view. When working with Node, to do something similar when need to load
// the index every time we send a route. This is why we use "*" to redirect
// all the request also to the index page.

app.get("*", function(request, response)
{
    response.render('index');
});

var port = process.env.PORT || 1337;

app.listen(port, function()
{
    console.log("Server working in: http://localhost:" + port);
});