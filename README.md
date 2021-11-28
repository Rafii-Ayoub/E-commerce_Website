# E-shop Backend

![]( https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white ) 
![]( https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![]( https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

This project is the backend of an online shop that cointains different components : products - users - orders ...
We used principally Node.js to set-up the framework for routes, controllers and creating models to handle data. We used also MongDB to store and get data. MongoDB is a NoSQL datbase program. So RESTful API was created for GET, POST, DELETE, PATCH requests containing 'id, name, price, description, ...' for each product/category/order/user stored in the DB. APIs were tested using Postman. Controllers are added to clean up the routes files.

## The Architucture of our API
![](images/API.PNG)

## Getting Started

Follow instructions below to have a copy of this project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need to have the following software installed on your system

- [Nodejs](https://nodejs.org/en/download/), a JavaScript runtime that lets you run applications outside the browser
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) a package manager for Nodejs software packages (Comes with Node)
- [MongoDB](https://www.mongodb.com/try/download/community) installation 

### Installing

Clone the repository to your local machine

```
git clone https://github.com/Rafii-Ayoub/E-shop-Backend.git
```

Navigate into root of repository

```
cd E-shop-Backend
```

Install application dependencies

```
npm install
```


*NB:* The `MONGO_DB_URI` should be populated to configure the app with a database. It's recommend  tosetting up one on [Mongo Atlas](https://www.mongodb.com/cloud/atlas) which is easy to setup and provides a free tier.

## Running the application

Run the command below in the project's root folder
```
node server.js
```
or
```
npm start
```

## Built principally With

* [Nodejs](https://nodejs.com/) - Web framework used
* [Expressjs](https://expressjs.com/) - Web framework used
* [MongoDB](https://www.mongodb.com) - Database

## The following definitions in quotes below are provided from npm.js :


* Express.js - Node web framework used for APIs and server connections.

* Mongoose.js - "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box (courtesy of mongoose.js)."

* Body-Parser - "Parse incoming request bodies in a middleware before your handlers, available under the req.body property."

* Morgan - "HTTP request logger middleware for node.js."

