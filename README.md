![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name: lab 09 Socket.io 

### Author: Hannah Ingham

### Links and Resources
* [repo](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com)
* [front-end](http://xyz.com)

### Modules
#### `helper.js` --contains helper functions used in the server file


###### Usage Notes
* start the index.js file in terminal
* start the app.js file in terminal
* open the react app in the browser: https://pmww0ww42q.codesandbox.io/

### Setup
#### `.env` requirements
* npm init
* npm i socket.io socket.io-client estlint 
* `PORT` - 3000


#### Tests
* Run tests using ES lint
* Asserts that the functions in helper.js do what they are intended to do
    * * chgLetNum should convert a letter to a number and vise versa
    * * letterChange should just increment one to the number given, or reset to the start if the number is equal to the end value 
* What assertions need to be / should be made?
    * * assertions could be made to make sure the socket is emitting the right thing
