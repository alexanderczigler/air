air
===

This is the frontend for my weather project, air.

components
===========

My setup consists of three parts. The first part is a raspberry pi that runs pywws to download data from my weather station (connected via USB).

The second part is a nodejs express app that stores weather data in a database.

The third part is this project, the web frontend.

development
===========

Clone the repos, enter the folder and run the following. Bower install will run automatically after npm install, as specified in package.json.

```
npm install -g grunt-cli yo bower generator-mrwhite;
npm install;
```

Once all that is done, you simply run *grunt* and point your browser to http://localhost:9001

Also, checkout the documentation for generator-mrwhite (https://github.com/Iteam1337/generator-mrwhite).

demo
====

Check out http://weather.ilix.se
