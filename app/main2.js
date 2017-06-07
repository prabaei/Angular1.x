var app = angular.module("myapp",[]);
app.controller("EditEventController",function($scope){
    $scope.event={
        
    }
    $scope.saveEvent=function(event,newEventForm){
        if(newEventForm.$valid){
            alert("event "+event.name+" saved");
        }
    }
    $scope.cancelEvent=function(event){
        window.location="index.html";
    }
});