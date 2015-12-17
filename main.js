var app = angular.module('minmax', [
	'jcs-autoValidate', 'angular-ladda'
]);

app.run(function (defaultErrorMessageResolver) {
	//faire appel aux messages d'erreurs francais d'angular-auto-validate
		defaultErrorMessageResolver.setCulture('fr-FR');
		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			errorMessages['tooYoung'] = 'Vous devez avoir {0} ans pour pouvoir vous inscrire sur ce site';
			errorMessages['badUsername'] = 'Votre pseudo ne peut contenir que des chiffres, des lettres et le caract&egrave;re _';


		});


	}
);



//submitting enclanche ladda
app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};
	$scope.submitting = false;

	$scope.onSubmit = function () {
		$scope.submitting = true;

		console.log("Hey i'm submitted!");
		console.log($scope.formModel);

		$http.post('https://adresseDuPost/', $scope.formModel).
			success(function (data) {
				console.log(":)")
				$scope.submitting = false;

			}).error(function(data) {
				console.log(":(")
				$scope.submitting = false;

			});

	};
});
