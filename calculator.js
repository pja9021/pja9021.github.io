function MainCtrl($scope) {

	function confirm(word){
		if($scope.isExist){
			$scope.clickNum = $scope.result;
			if(word == "change"){
				$scope.valueArr = [];
			}
			$scope.isExist = false;
		}
	}

	function btnReset(num, state){
		$scope.percent = false;
		$scope.negative = false;
		$scope.equration = "";
		$scope.clickNum = num;
		$scope.isExist = state;
	}

	$scope.reset = function(){
		btnReset(0, false);
		$scope.name="AC";
		$scope.result = 0;
		$scope.valueArr = [];
		$scope.buf = "";
	}

	btnReset(0, false);
	$scope.reset();

	$scope.numChange = function(buf){
		confirm("change");
		if(buf == "%"){  
			$scope.percent = !$scope.percent;
			$scope.clickNum = ($scope.percent) ? $scope.clickNum / 100 : $scope.clickNum * 100;
		} else {
			$scope.negative = !$scope.negative;
			$scope.clickNum = ($scope.negative) ? -$scope.clickNum : Math.abs($scope.clickNum);     
		}
	}

	$scope.numClick = function(num){
		$scope.clickNum = 0;
		if($scope.isExist){
			btnReset();
			$scope.reset();
		}
		$scope.name="C";
		$scope.buf += num;
		$scope.clickNum = $scope.buf;
	}

	$scope.numOper = function(oper){
		$scope.valueArr.push($scope.clickNum);
		$scope.valueArr.push(oper);
		$scope.buf="";
		confirm("oper");
	}

	$scope.showResult = function(){
		$scope.valueArr.push($scope.clickNum);
		for(var i =0; i<$scope.valueArr.length; i++){
			$scope.equration += $scope.valueArr[i];
		}
		$scope.result = eval($scope.equration);
		$scope.valueArr = [];
		$scope.valueArr.push($scope.result);
		btnReset("", true);
	}

}
