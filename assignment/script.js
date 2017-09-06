app.controller('controller',['$scope', function($scope) {
    $scope.Bill=function (index) {
        var bill = 'Your bill is ' +$scope.tables[index].totalAmount;
        alert(bill );
    };
        $scope.update = function (index,$index) {
            $scope.tables[index].totalAmount = 0;
            $scope.tables[index].numberOfItems = 0;
            for(var i=$scope.tables[index].menuData.length-1;i>=0;i-- ) {
                $scope.tables[index].totalAmount = $scope.tables[index].totalAmount +
                    $scope.tables[index].menuData[i].name.value * $scope.tables[index].menuData[i].price;
                $scope.tables[index].numberOfItems = $scope.tables[index].numberOfItems +
                    parseInt($scope.tables[index].menuData[i].name.value);
            }
        };
        $scope.deleteData = function (index,$index) {
            var rem=$scope.tables[index].menuData.splice($index,1);
            $scope.tables[index].totalAmount=$scope.tables[index].totalAmount-rem[0].price*rem[0].name.value;
            $scope.tables[index].numberOfItems=$scope.tables[index].numberOfItems-rem[0].name.value;
        };
        $scope.menuData = [{
            id:1,
            name:{key:'Crustly Garlic',value:1},
            type:'main-course',
            price:105
        }, {
            id:2,
            name:{key:'French Fries',value:1},
            type:'desserts',
            price:105
        }, {
            id:3,
            name:{key:'Home Country Fries with Herbs and Chilli Flakes',value:1},
            type:'appetizers',
            price:105
        }, {
            id:4,
            name:{key:'French Fries with Cheese and Jalapenos',value:1},
            type:'beverages',
            price:135
        }];
        $scope.tables = [{
            id:1,
            totalAmount:0,
            numberOfItems:0,
            menuData:[]
        }, {
            id:2,
            totalAmount:0,
            numberOfItems:0,
            menuData:[]
        }, {
            id:3,
            totalAmount: 0,
            numberOfItems: 0,
            menuData:[]
        }];
    $scope.sample = angular.merge([], $scope.tables);
    $scope.openModal = function ($index) {
        $scope.index=$index;
        var modal = document.getElementById('modal');
        var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    }])
    .filter('unique', function() {
        return function(collection, name) {
            var output = [], keys = [];
            angular.forEach(collection, function(entry) {
                var key = entry[name].key;
                if(keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(entry);
                }

            });
            return output;
        };
    })
;

