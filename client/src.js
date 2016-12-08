"use strict";
(function () {

    function App() {
        this.lastName=ko.observable("Leu");
        this.firstName=ko.observable("Lan");  
//        this.fullName=ko.computed(function () {
//            return this.firstName + " "+ this.lastName;
//        },this);
        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();    
        }, this);
        this.cap = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
         };
    }
    ko.applyBindings(new App());

})();