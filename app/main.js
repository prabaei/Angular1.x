var app = angular.module("event", ['ngResource']);

app.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return "half hour";
            case 2:
                return "1 hour";
            case 3:
                return "2 hour";
            case 4:
                return "jolly ";
        }
    }
});
app.factory("EventData", function ($resource) {
    return {
        getEvent: function () {
           return $resource('../data/api/event/:id',{id:"@id"} ).get({id:1});
        }
    }
});
app.controller("ctrl", function ($scope, EventData,$anchorScroll) {
    $scope.jolly = "dfdfdfd";
    $scope.upvote = function (session) {
        session.vote++;
    }
    $scope.downvote = function (session) {
        session.vote--;
    } 
    $scope.scrolltosection=function(){
        $anchorScroll();
    }
    $scope.sordorder = "name";
    //console.log(EventData.getEvent());
   // EventData.getEvent().then(function successCallback(event){//console.log(event.data); $scope.events = event.data;    },function errorCallback(response){    }) ;
      $scope.events=EventData.getEvent();  
    
});