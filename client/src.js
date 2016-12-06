"use strict";
(function () {

    function App() {
          var self = this;
      self.xxx= function(data, event) {
            if (event.shiftKey) {
                document.getElementById("hehe").innerText="hehe";
            } else {
                document.getElementById("hehe").innerText="haha";
            }
        };
        self.arr=ko.observableArray([
            
            {name: "socola", supplier: "Germany"},
            {name:"candy", supplier:"Hoa Binh"},
            {name:"Moc Chau Milk", supplier:"Moc Chau"}
   
        ]);
       
      


    }

    ko.applyBindings(new App());

})();
