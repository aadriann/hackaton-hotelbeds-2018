angular.module('DatepickerModule')
    .component('datepicker', {
        templateUrl: 'components/datepicker/datepicker.html',
        controller: 'DatepickerController',
        bindings: {
            model: "=",
            label: "@",
            onChange: "&",
            required: "<?",
            minDate: "=",
            maxDate: "="
        }
    })
;