var myApp = angular.module("myApp", []);

// controller index
myApp.controller('ShowMessger',function($scope){
	$scope.messager="Hello World";
	$scope.title="This is title";
	
	//khai bao 1 Object trong AngularJS
	$scope.data={}; //khai bao 1 mang trong AngularJS

	//truyen du lieu vao cho doi tuong
	$scope.data.aaa="this is controller";
});
myApp.controller('Controller1',function($scope){
	$scope.data="this is contnent of Controller1";
});



// controller tính toán
myApp.controller('MayTinh',function($scope){



	$scope.tinh=function(){

		// lấy giá trị 2 input
		var so1=parseInt($scope.so1);
		var so2=parseInt($scope.so2);
		// lấy giá trị của selection
		var pheptoan=$scope.pheptoan;

		if(pheptoan=='+'){
			$scope.ketqua='Ket qua la '+ (so1+so2);
		}
		else if(pheptoan=='-'){
			$scope.ketqua='Ket qua la '+ (so1-so2);
		}
		else if(pheptoan=='*'){
			$scope.ketqua='Ket qua la '+ (so1*so2);
		}
		else{
			$scope.ketqua='Ket qua la '+ (so1/so2);
		}

	}
	
});

//controller directive 
//tạo mới một directive để có thể làm 1 công việc bất kì nào đó..., có thể kế thừa lại.
myApp.directive('ngFormlogin', function(){
	return {
		template:'<form><input type="text" ng-model="us"/> </br> <input type="text"></br></form>'
	};
});



myApp.controller('Login',function($scope){
	
});

myApp.directive('ngFlogin', function(){
	return {
		templateUrl: '/template/login_form.html';
		// template: '<form action="" method="post" accept-charset="utf-8"><input type="text" ng-model="us"> <br><input type="password" ng-model="ps"><br><button ng-click="login()">Login</button></form>'
	};
});