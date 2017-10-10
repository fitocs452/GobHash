(function () {
    'use strict';

    angular
        .module('gobhash')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$rootScope', 'FlashService', 'ProfileService'];
    function ProfileController($rootScope, FlashService, ProfileService) {
        var vm = this;

        vm.GetProfileData = GetProfileData;
        vm.profileData = {};

        vm.GetProfileData();

        function GetProfileData() {
            ProfileService.GetProfile(
                function(response) {
                    vm.profileData = response.response.data;
                }
            );
        }
    }

})();
