angularApp
    .service('utilsArrayService', [function () {

        /**
         * Loos for an item in specified array with specified field with specified value.
         * @param array Set of elements.
         * @param field Field to search value.
         * @param value Value to find.
         * @returns {number} Position for specified element in array.
         */
        this.posAttrInArray = function (array, field, value) {
            var pos = -1;
            if (angular.isArray(array)) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][field] === value) {
                        pos = i;
                        break;
                    }
                }
            }
            return pos;
        };
    }])
;