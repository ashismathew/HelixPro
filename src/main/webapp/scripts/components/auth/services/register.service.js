'use strict';

angular.module('helixApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


