angularApp
    .service('activitiesService', ['$http', function ($http) {

        /**
         *
         */
        this.getActivities = function () {
            return $http.get('/combinations?start=' + startDate + '&end=' + endDate)
                .then(function (response) {
                    return response.data.result;
                });
        };
    }])
;