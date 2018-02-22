angular.module('DashboardModule', [])
    .controller('Dashboard', ['$scope', 'combinationsService', 'utilsDateService', 'utilsStringService',
        function ($scope, combinationsService, utilsDateService, utilsStringService) {

            /**************************************/
            /*          PRIVATED VARIABLES       */
            /************************************/


            /**************************************/
            /*           PUBLIC VARIABLES        */
            /************************************/


            /**************************************/
            /*          PRIVATED FUNCTIONS       */
            /************************************/

            /**
             * Executes tasks for initializing.
             */
            function init() {
                console.log("Empezamos!");
            }

            /**************************************/
            /*           PUBLIC FUNCTIONS        */
            /************************************/

            /**************************************/
            /*          SYNCHRONOUS TASKS        */
            /************************************/

            init();
        }
    ])
;