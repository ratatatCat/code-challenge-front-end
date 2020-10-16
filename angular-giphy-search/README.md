
# GiphySearch

  

## Running Locally

  

In order to run locally you need to have NPM installed, after that is done all that you need to do is run

`npm install` and then `npm start` the app will be served at `localhost:4200` 

  

The app folder has been wiped out, you will need to create your app structure and application inside there before the 'npm start' command will compile and serve your application.

  

## Info on Implementation

  

create a simple page with a functional search box that displays the gifs returned from giphy below it.

limit the returned number of gifs and use UI elements or browser events to display more.

  

use the GIPHY API and NOT the SDK. the following API information should be enough to complete this exercise. 

  

**GIPHY api key to use:** 4s8JFJyLgoLSgBXiEczjymJ6sGNNYSdW

**GIPHY end point:** https://api.giphy.com/v1/gifs/search

**GIPHY available params for the endpoint:** 

 - **api_key:** GIPHY API Key:see above,
 - **q:** searchTerm,
 - **limit:** maximum number of objects to return,
 - **offset:** specifies starting position of the results. defaults to 0,
 - **rating:** Acceptable values include g, pg, pg-13, r. If you do not specify a rating, you will receive results from all possible
   ratings.,
 - **lang:** Specify default language for regional content; use a 2-letter ISO 639-1 language code.


![image info](https://github.com/agentisenergy/code-challenge-front-end/blob/master/angular-giphy-search/example.png)
