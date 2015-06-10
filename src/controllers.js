/**
 * Created by brusilovski on 4/19/15.
 */

var aMailServices = angular.module('AMail', ['ngRoute']);

aMailServices.config(emailRouterConfig);

aMailServices.directive('ngbkFocus', function(){
    return {
        link: function(scope, element, attrs, controller){
            element[0].focus();
        }
    };
});

aMailServices.controller('SomeController', ['$scope', SomeController]);

messages = [
    {
    id:0,
    sender:'vlad@icn.com',
    subject: 'Hi There.',
    date: '04/15/2015 12:30:20',
    recipients: ['test1@icn.com'],
    message: 'Test message 0.'
    },
    {
        id:1,
        sender:'vlad1@icn.com',
        subject: 'Hi There 1.',
        date: '04/11/2015 12:30:20',
        recipients: ['test1@icn.com'],
        message: 'Test message 1.'
    },
    {
        id:2,
        sender:'vlad2@icn.com',
        subject: 'Hi There 2.',
        date: '04/12/2015 12:30:20',
        recipients: ['test2@icn.com'],
        message: 'Test message 2.'
    }
];

function emailRouterConfig($routeProvider)
{
    $routeProvider.
        when('/', {
            controller: ListController,
            templateUrl: 'list.html'
        }).
        when('/view/:id', {
            controller: DetailController,
            templateUrl: 'detail.html'
        }).
        when('/signup', {
            controller: AddUserController,
            templateUrl: 'signup.html'
        }).
        otherwise({
            redirectTo: '/'
        })
}

function ListController($scope){
    $scope.messages = messages;
}

function DetailController($scope, $routeParams)
{
    $scope.message = messages[$routeParams.id];
}

function SomeController($scope)
{
    $scope.message = {text: 'nothing clicked yet'};

    $scope.clickedUnfocused = function(){
        $scope.message.text = 'unfocused button clicked';
    }

    $scope.clickedFocused = function(){
        $scope.message.text = 'focused button clicked';
    }
}

function AddUserController($scope)
{
$scope.message = '';

    $scope.addUser = function(){
        $scope.message = 'Thanks! User was added.';
    }
}