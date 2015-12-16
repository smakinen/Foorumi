FoorumApp.controller('UsersController', function ($scope, $location, Api) {

    $scope.login = function () {
        var user = {
            username: $scope.username,
            password: $scope.password};

        Api.login(user)
                .success(function (user) {
                    $location.path('/');
                })
                .error(function (error) {
                    $scope.loginFailed = true;
                    $scope.errorMessage = "Virheellinen käyttäjätunnus tai salasana";
                });
    };

    $scope.register = function () {
        $scope.registrationFailed = false;

        if ($scope.newPassword === $scope.newPasswordRepeat) {
            var newUser = {
                username: $scope.newUsername,
                password: $scope.newPassword };
            
            Api.register(newUser).success(function(user) {
                $location.path('/');
            })
            .error(function(error) {
                $scope.registrationFailed = true;
                $scope.errorMessage = error.error;
            });
        }
        
        else {
            $scope.registrationFailed = true;
            $scope.errorMessage = "Salasanat eivät täsmää";
        }
        
    };

    // Toteuta kontrolleri tähän
});
