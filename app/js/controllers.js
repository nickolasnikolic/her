artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
  document.title = 'pleasant.space - home'; //set the page title

}])
artApp.controller('InsideController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - photos'; //set the page title
    var productList = [
        'B00GAI7EO6',
        'B0067YWLL4',
        'B01444MS7U',
        'B000MUXLKE',
        'B00BXN1V9W',
        'B00PKO8HTW',
        'B010NOZMUK',
        'B00WQCRXC8',
        'B00JS54DIS'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });
}])

artApp.controller('OutsideController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - painting'; //set the page title
    var productList = [
        'B00PU9WUH2',
        'B00Q7AYL2K',
        'B00W9PJKF0',
        'B00BD6CU6W',
        'B014BTCG0W',
        'B00UZU6DTM',
        'B00T65M1NY',
        'B00FL5X4R0',
        'B00ZDT1VYW'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('ClothingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - drawing'; //set the page title
    var productList = [
        'B0101ZUHAG',
        'B00W4FRMSW',
        'B012IZZKMC',
        'B015D96P3I',
        'B00M3N8BAS',
        'B010N19KC4',
        'B00Y61F2IY',
        'B0115CH1VC',
        'B00NCV6JG8'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('BedroomController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - drawing'; //set the page title
    var productList = [
        'B0055DXL1C',
        'B0051HEDC8',
        'B00CP53EX8',
        'B007IO163Q',
        'B00ETUD9YG',
        'B01444K2N2',
        'B007Z2MKF4',
        'B0067YWSF8',
        'B0144502UO'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('WallsController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - drawing'; //set the page title
    var productList = [
        'B00EA0NSP0',
        'B00O3A6LYW',
        'B00MERFYTY',
        'B00X4K6GME',
        'B00EIPB7P0',
        'B00WY64PXQ',
        'B013IHR5XQ',
        'B00936KSBS',
        'B00YVDKXD6'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('CraftsController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - drawing'; //set the page title
    var productList = [
        'B00784S5D0',
        'B00PFRMBK0',
        'B002JOYTNY',
        'B002ZCS698',
        'B00HLK6IUI',
        'B002Q6H2LQ',
        'B0054RYI7K',
        'B0034K4DBK',
        'B00E1RR312'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'pleasing.space - contact'; //set the page title
  //send self email
}])
