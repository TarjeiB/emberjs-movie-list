# Movie Lists

This application was built with [Ember.js](http://emberjs.com/) and uses [The Open Movie Database API](http://www.omdbapi.com/).

The project's goal was to explore Ember.js and incorporate basic functionality, such as:
* Creating and storing an account in a database
* Signing in using said account
* Editing the account's information (such as email and password)
* Retrieving data from an API
* ... and some other features

The application is hosted at: https://movie-list-7e973.firebaseapp.com/

## Prerequisites

You'll need the following to run the application:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/download/current/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

In a Node.js command prompt, write:
* `npm install -g ember-cli`
* `npm install -g phantomjs-prebuilt`
* `npm install -g bower`

Alternatively (one-liner):
* `npm install -g ember-cli && npm install -g phantomjs-prebuilt && npm install -g bower`

Find a location to clone the application. E.g.:
* `cd users/username/documents/projects`
* `git clone https://github.com/TarjeiB/emberjs-movie-list`
* `cd emberjs-movie-list`
* `npm install`
* `bower install`

## Running

* Start the server with: `ember server`
* Visit the application at [http://localhost:4200](http://localhost:4200)