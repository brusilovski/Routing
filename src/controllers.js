/**
 * Created by brusilovski on 4/19/15.
 */

var aMailServices = angular.module('AMail', []);
console.log('scope is ' + scope);

function emailRouterConfig($routerProvider)
{
    $routerProvider.
        when('/', {
        controller: ListController,
        templateUrl: 'list.html'
    }).
        when('/view/:id', {
            controller: DetailController,
            templateUrl: 'detail.html'
        }).
        otherwise({
            redirectTo: '/'
        })
}

aMailServices.config(emailRouterConfig);

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

function ListController($scope){
    $scope.message = messages;
}

function DetailController($scope, $routeParams)
{
    $scope.message = message[$routeParams.id];
}