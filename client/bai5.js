function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observabletit(data.isDone);
}
function Task1(data) {
    this.title=ko.observable(data.title);
    this.isDone=ko.observable(data.isDone);
}
function TaskView(){
    var self = this;
    self.task=ko.observableArray([]);
    self.newTask=ko.observable();
    self.incompleteTask=ko.computed(
            function () {
                return ko.utils.arrayFilter(self.task(),function (task) {
                    return !task.isDone()
                });
                
            });
            self.addTask=function () {
                self.task.push(new Task1({title: this.newTask()}));
                self.newTask("");
        
            };
            self.removeTask=function(task){
                    self.task.remove(task);
            }
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function() {
        return ko.utils.arrayFilter(self.tasks(), function(task) { return !task.isDone() });
    });

    // Operations
    self.addTask = function() {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function(task) { self.tasks.remove(task) };
}

ko.applyBindings(new TaskView());