// In order to create the server we are going to use Express. This makes things simpler
// when working with REST type architecture.

var express = require('express');

// We are going to create a special "routes" file to store the routes of our server to maintain
// cleaner the "server.js" file. Then we request the file instantiating an "object"of the "routes
// class".

var routes = require('./routes/routes.js');

// For css files we are going to use two popular preprocessors: stylus and sass. I will include sass
// because is a popular apache servers language too. Nib is just a tool set for stylus.

var stylus = require('stylus');
var nib = require('nib');

var sass = require('node-sass');

// Here we create the server object from express constructor.

var app = express();

// And here we configure the views folder, the render engine to use Jade, the logger
// in developer mode the obtain all the messages in the console from the communication,
// and the public folder where we store the statics files like JavaScripts, stylesheets,
// images or other files.

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));




app.use(express.bodyParser());





// This is the css compilation from stylus (.styl) files.

function compile(string, path)
{
    return stylus(string).set('filename', path).use(nib());
}

app.use(stylus.middleware(
    {
        src: __dirname + '/public',     //where the styl files are
        compile: compile
    }
));

// This is the css compilation from sass (.scss) files.

app.use(sass.middleware(
    {
        src: __dirname + '/public',     //where the sass files are
        dest: __dirname + '/public',    //where css should go
        debug: true // obvious
    }
));

// Here, we are going to include the favicon of the application.

app.use(express.favicon(__dirname + '/public/images/favicon.png'));

// Here goes the partials views route. What we do here is calling the file inside
// partials folder with the name we have chosen.

app.get('/partials/:name', routes.partials);

// REST services.

app.post('/data', routes.data);

// THIS SHOULD BE LAST!!!!
//
// When we are working with Angular in an Apache server, the base index.html
// is loaded at the beginning and all the partials views inside it into the
// ng-view. When working with Node, to do something similar we need to load
// the index every time we send a route. This is why we use "*" to redirect
// all the request also to the index page.

app.get("*", routes.index);

// Here "port" is defined to connect the server.

var port = process.env.PORT || 1337;

// And here connection is launched.

app.listen(port, function()
{
    console.log("Server's working at port " + port + ".");
});