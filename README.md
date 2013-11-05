# Web Application Template

This is an attempt to create a full one-page template for web applications with modern techniques. We are going to use an __MVC__ model shared among the client an the server. The client is going to hold the view and the controller, and the server is going to hold the model.

As main tools, we are going to use Angular, Foundation and Node.

## Client Side

In the client side we are going to work with HTML5, CSS3 and JavaScript. The view is going to be built using HTML5 and CSS3 and the controller is going to be programmed in JavaScript using a framework for simplicity. We have chosen Angular because it's really complete and it allows us to implement a controller in a relatively efficient and clean way. The idea is to separate the view from the code and delegate in the controller the DOM manipulation by checking certain labels inside the view.

## Server Side

In the server side we are going to use __Node__ with a __REST__ architecture. We can use too PHP, Python, Ruby or whatever technology available in the market. We don't really care because the REST server allow us to use one or another indistinctly. We don't even care too much about the client because what we are doing is defining a communication protocol among the client and the server, so as long as we call the appropriate services in the server and can parse the JSON data returned, we can use whatever we want for both communication sides.

The server, of course, can get the data from everywhere. Mainly, the idea is using a database to store this data, but you can even take it from a JSON file or just a plain text file. For this template we are going to use JSON files for test data but I am going to leave a note about doing the same using a Mongo database.

## File Structure and Main Files

The file structure for a Node application is the following (this structure can vary depending on the author and of course this is just the simplest structure needed for this template).

---> server.js<br>
|<br>
---> package.json<br>
|<br>
---> README.md<br>
|<br>
---> /public<br>
|&nbsp;|<br>
|&nbsp;---> /js<br>
|&nbsp;|<br>
|&nbsp;---> /css<br>
|&nbsp;|<br>
|&nbsp;---> /images<br>
|<br>
---> /views<br>
&nbsp;&nbsp;|<br>
&nbsp;&nbsp;---> index.jade<br>
&nbsp;&nbsp;|<br>
&nbsp;&nbsp;---> layout.jade<br>
&nbsp;&nbsp;|<br>
&nbsp;&nbsp;---> /partials<br>

### VIEWS Folder

The Node server is going to route all the requests from the client to files inside __views__ folder. These files are going to be written in Jade and rendered into html files before being sent to the client. The __partials__ folder stores the partial views that are going to be loaded into our only page __ng-view__.

### ROUTES Folder

The __routes__ folder is going to store the routes files where we are going to define the contents of the response to our client requests.

### DATA Folder

The __data__ folder is going to store the data to test our template.