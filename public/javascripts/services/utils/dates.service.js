moment.locale('es');

angularApp
    .service('utilsDateService', ['constantsService', 'utilsStringService',
        function (constantsService, utilsStringService) {

        /**
         * Gets today in standard format.
         * @returns {string} Today in standard format.
         */
        this.today = function () {
            return moment().format(constantsService.DATES.STANDARD_FORMAT);
        };

        /**
         * Checks if given date is valid.
         * @param date Date to check validation.
         * @param format Current date format.
         * @returns {*}
         */
        this.isValidDate = function (date, format) {
            var valid = null;
            if (format) {
                valid = moment(date, format).isValid();
            } else {
                valid = moment(date).isValid();
            }
            return valid;
        };

        /**
         * Gets date in moment format.
         * @param date Date to convert.
         * @param formatFrom Current date format.
         * @return {*} Null if incorrect date, else date in moment format.
         */
        this.getDateInMomentObject = function (date, formatFrom) {
            var result = null;
            // Convert into moment object
            if (angular.isString(date)) {
                if (this.isValidDate(date, formatFrom)) {
                    result = moment(date, formatFrom);
                }
            } else if (angular.isObject(date) && this.isValidDate(date)) {
                result = date;
            }
            return result;
        };

        /**
         * Converts an ISO date into moment.
         * @return {string}
         */
        this.dateToMoment = function (date) {
            return this.getDateInMomentObject(date, constantsService.DATES.DB_FORMAT);
        };

        /**
         * Converts an ISO date into a standard format.
         * @param date Date to convert.
         * @returns {*} Date in DD/MM/YYYY format
         */
        this.dateToMomentStr = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.DB_FORMAT);
            if (result !== null) {
                result = result.format(constantsService.DATES.STANDARD_FORMAT);
            }
            return result;
        };

        /**
         * Converts an standard format date into an ISO.
         * @param date Date to convert.
         * @returns {*} Date in YYYY-MM-DD format
         */
        this.dateToISOStr = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.STANDARD_FORMAT);
            if (result !== null) {
                result = result.format(constantsService.DATES.DB_FORMAT);
            }
            return result;
        };

        /**
         * Gets date in Month (string) Year format. Example: January 2023
         * @param date Date to get in month year format.
         * @return {*} Date in MMMM YYYY format.
         */
        this.dateToMonthYearStr = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.DB_FORMAT);
            if (result !== null) {
                result = result.format("MMMM YYYY");
                result = utilsStringService.capitalize(result);
            }
            return result;
        };

            /**
             * Gets date from Month Year format.
             * @param date Date to get from Month Year format.
             * @return {*} Date object.
             */
            this.montYearStrToDate = function (date) {
                return this.getDateInMomentObject(date, "MMMM YYYY");
            };

        /**
         * Converts a date into ISO format.
         * @param date Date to convert.
         * @return {string} Date in ISO format (YYYY-MM-DDTHH:mm:ssZ).
         */
        this.dateToISO = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.STANDARD_FORMAT);
            if (result !== null) {
                result = result.format(constantsService.DATES.ISO_FORMAT) + "Z";
            }
            return result;
        };

        /**
         * Gets first day of month for specified date.
         * @param date
         * @return {*}
         */
        this.firstDayOfMonth = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.STANDARD_FORMAT);
            if (result !== null) {
                result.startOf('month');
            }
            return result;
        };

        /**
         * Gets first day of month for specified date.
         * @param date
         * @return {*}
         */
        this.lastDayOfMonth = function (date) {
            var result = this.getDateInMomentObject(date, constantsService.DATES.STANDARD_FORMAT);
            if (result !== null) {
                result.endOf('month');
            }
            return result;
        };
    }])
;