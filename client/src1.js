function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

//    self.formattedPrice = ko.computed(function () {
//        var price = self.meal().price;
//        return price ? "$" + price.toFixed(2) : "None";
//    });
//    self.format = ko.computed(function () {
//        var price = self.meal().price;
//        return price ? "$" + price.toFixed(2) : "None";
//
//    });
}
function SeatReservation1(id, init) {
    var self = this;
    self.id = id;
    self.mx = ko.observable(init);
}
function ReservationsViewModel() {
    var self = this;
    self.availableMeals = [
        {mealName: "Standard (sandwich)", price: 0},
        {mealName: "Premium (lobster)", price: 34.95},
        {mealName: "Ultimate (whole zebra)", price: 290}
    ];
    self.seat1 = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[1])
    ]);

    self.student = [
        {name: "lai", email: "hoanglaisoict"},
        {name: "lais", email: "s"},
        {name: "lasss", email: "d"}
    ];
    self.arrayStudent = ko.observableArray([
        new SeatReservation1("1", self.student[0]),
        new SeatReservation1("2", self.student[1]),
        new SeatReservation1("3", self.student[2])
    ]);



}

ko.applyBindings(new ReservationsViewModel());
