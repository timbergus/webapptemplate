# Web Application Template

This is an attempt to create a full one-page template for web applications with modern techniques. We are going to use an __MVC__ model shared among the client an the server. The client is going to hold the view and the controller, and the server is going to hold the model.

## Client Side

At the client side we are going to work with HTML5, CSS3 and JavaScript. The view is going to be built using HTML5 and CSS3 and the controller is going to be programmed in JavaScript using a framework for simplicity. We have chosen Angular because it's really complete and it allow us to implement a controller in a relatively efficient and clean way. The idea is to separate the view from the code and delegate in the controller the DOM manipulation by checking certain labels inside the view.

### File Structure

The file structure has to be compatible with an Apache server an a Node server because we are going to implement both.

* The Apache server access the root directory and load by default an __index.html__.
* The Node server is going to route all the calls from the server to files inside __views__ folder. These files are going to be written in Jade and rendered into html files before being sent to the client side. The __partials__ folder stores the partial views that are going to be loaded into our only page container. The __routes__ folder is going to store the routes files where we are going to define the contents of the response to our client requests. And the __data__ folder is going to store the data to test our template.

## Server Side

The server is going to have a REST structure. We can use PHP, Node, Python, Ruby or whatever technology available in the market. We don't really care because the REST architecture allow us to use one or another indistinctly. We don't even care too much about the client because what we are doing is defining a communication protocol among the client and the server, so as long as we call the appropriate services in the server and can parse the JSON data returned, we can use whatever we want for both communication sides.

We are going to demonstrate this creating an iOS application template that it's going to use the server to display data into a native application.

The server, of course, can get the data from everywhere. Mainly, the idea is using a database to store this data, but you can even take it from a JSON file or just a plain text file. For this template we are going to use JSON files for test data.