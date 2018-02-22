angular.module('DatepickerModule', [])
    .controller('DatepickerController', ['$scope', '$timeout', 'utilsDateService',
        function ($scope, $timeout, utilsDateService) {

            var ctrl = this;
            var datepickerId = "datepicker_" + Math.floor((Math.random() * 100) + 1) + "_" + (new Date().getTime());

            /**
             * Tasks to do when component has been loaded.
             */
            this.$onInit = function () {
                ctrl.id = datepickerId;
                ctrl.required &= ctrl.required != null;
            };

            /**
             * Tasks to do when component has been linked to HTML.
             * Sets as Datepicker an element.
             */
            this.$postLink = function () {
                $timeout(function () {

                    var options = {
                        format: "MM yyyy",
                        language: "es",
                        autoclose: true,
                        todayHighlight: true,
                        minViewMode: 1,
                        maxViewMode: 2
                    };

                    if (ctrl.minDate) {
                        options["startDate"] = utilsDateService.dateToMonthYearStr(ctrl.minDate);
                    }
                    if (ctrl.maxDate) {
                        options["endDate"] = utilsDateService.dateToMonthYearStr(ctrl.maxDate);
                    }

                    /**
                     * Set elem as datepicker
                     */
                    $("#" + ctrl.id).datepicker(options)
                        .on("changeDate", function (e) {
                            var date = e.date;
                            // Avoid Timezone
                            date.setMinutes(-date.getTimezoneOffset());
                            ctrl.model = utilsDateService.dateToMoment(date.toISOString());
                            $scope.$apply();
                            if (ctrl.onChange && ctrl.onChange()) {
                                ctrl.onChange()(ctrl.model);
                            }
                        });

                }, 0);
            };
        }])
;