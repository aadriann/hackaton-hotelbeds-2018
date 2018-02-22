angularApp
    .service('constantsService', [function () {

        /**
         * States for routing
         */
        this.STATES = {
            DASHBOARD: {
                NAME: "dashboard",
                URL: "/dashboard"
            }
        };

        /**
         * Dates constants.
         */
        this.DATES = {
            STANDARD_FORMAT: "DD/MM/YYYY",
            ISO_FORMAT: "YYYY-MM-DDTHH:mm:ss.SSS",
            DB_FORMAT: "YYYY-MM-DD"
        };
    }])
;