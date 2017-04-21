var app=angular.module('mkApp',['ngRoute']);
app.config(function($routeProvider)
{
  $routeProvider
  .when("/about",{
    templateUrl:"/views/about.html",
    controller:"homeController"

  })
  .when("/contact",{
    templateUrl:"/views/contact.html",
    controller:"homeController"

  });

});
