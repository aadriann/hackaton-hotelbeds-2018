angularApp
    .service('utilsStringService', [function () {

        /**
         * Capitalizes first character.
         * @param str
         * @returns {string}
         */
        this.capitalize = function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };

        /**
         * Reverses an string.
         * @param str
         * @returns {string}
         */
        this.reverse = function (str) {
            return str.split("").reverse().join("");
        };
    }])
;