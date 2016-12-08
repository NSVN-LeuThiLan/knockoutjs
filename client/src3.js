"use strict";

//var vm = function () {
//    this.myObservableArray = ko.observableArray([
//        {name: "Bungle", type: "Bear"},
//        {name: "George", type: "Hippo"},
//        {name: "Zippy", type: "Unknown"}
//    ]);
//    this.myObservableArray.push(
//        {name: "Bungle", type: "Bear"},
//        {name: "George", type: "Hippo"},
//        {name: "Zippy", type: "Unknown"}); 
//    alert('The length of the array is ' + this.myObservableArray().length);
//    alert('The first element is ' + this.myObservableArray()[0]);
//    this.sothutu = ko.observable('');
//    this.sothuba = ko.observable('');
//    this.tong = ko.computed(function () {
//        return this.sothuba() + " " + this.sothutu();
//    }, this);
//    this.myViewModel = ko.observableArray([ 
//            {personName: "Bob",personAge: "23"}
//        ]);
//};

    var viewModel = {
        shouldShowMessage: ko.observable(true) 
// 最初はメッセージを表示
// hiển thị message lúc đầu
    };
    viewModel.shouldShowMessage(false); 
// ... メッセージを非表示に
// Cho ẩn message

    viewModel.shouldShowMessage(true); 
// ... メッセージを表示
// Cho hiện message

ko.applyBindings(new vm()); 