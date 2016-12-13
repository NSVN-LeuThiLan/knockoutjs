/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<ul data-bind="template: { name: 'seasonTemplate', foreach: seasons, as: 'season' }"></ul>
 
<script type="text/html" id="seasonTemplate">
    <li>
        <strong data-bind="text: name"></strong>
        <ul data-bind="template: { name: 'monthTemplate', foreach: months, as: 'month' }"></ul>
    </li>
</script>
 
<script type="text/html" id="monthTemplate">
    <li>
        <span data-bind="text: month"></span>
        is in
        <span data-bind="text: season.name"></span>
    </li>
</script>
 
<script>
    var viewModel = {
        seasons: ko.observableArray([
            { name: 'Spring', months: [ 'March', 'April', 'May' ] },
            { name: 'Summer', months: [ 'June', 'July', 'August' ] },
            { name: 'Autumn', months: [ 'September', 'October', 'November' ] },
            { name: 'Winter', months: [ 'December', 'January', 'February' ] }
        ])
    };
    ko.applyBindings(viewModel);
</script>
