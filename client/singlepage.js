/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function View () {
       var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.choseID= ko.observable(); 
    self.chosenFolderData = ko.observable();
    self.goToFolder = function(folder) { self.choseID(folder); }; 
    self.goToFolder('Inbox');
    
};
ko.applyBindings(new View());
