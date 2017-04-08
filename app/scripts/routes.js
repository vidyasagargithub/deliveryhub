app.config(["$stateProvider","$urlRouterProvider", function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("home",{
		url:"/",
		templateUrl:"app/views/home/home.html"
	})
	
	.state("auth.home",{
		url:"/home",
		templateUrl:"app/views/auth/home.html"
	})
	.state("login",{
		url:"/login",
		templateUrl:"app/views/auth/login.html"
	})
	$urlRouterProvider.otherwise("/")
}]);