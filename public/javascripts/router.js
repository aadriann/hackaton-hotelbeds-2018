angularApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    /* HOME */
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: getTemplateUrlBase() + '/dashboard/dashboard.html',
            controller: 'Dashboard'
        })
    ;

    $urlRouterProvider
        .otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("dashboard");
        })
    ;

    /**
     * Gets base for template URL.
     * @returns {string}
     */
    function getTemplateUrlBase() {
        return 'views';
    }

});