'use strict';

angular.module('helixApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
