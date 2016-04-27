var app = angular.module("mapsApp", ["openlayers-directive"]);

app.controller("GeoJSONController", [ '$scope', '$http', 'olData', function($scope, $http, olData) {
        angular.extend($scope, {
            AUA: { 
                lat: 37.982055,
                lon: 23.701394,
                zoom: 17
            },
            layers: [{
                name: 'Vineyard 1',
		vitis_type: 'vineyard',
		active:true,
		opacity: 0.5,
                source: {
                    type: 'GeoJSON',
                    url: 'geojson.json'
                },
                style: {
                    fill: {
                        color: '#FFFFFF'
                    },
                    stroke: {
                        color: 'white',
                        width: 3
                    }
                }
            },
            {
                name: 'Variety 1',
		vitis_type: 'variety',
		active:true,
		opacity: 0.5,
                source: {
                    type: 'GeoJSON',
                    url: 'geojson1.json'
                },
                style: {
                    fill: {
                        color: '#FFFFFF'
                    },
                    stroke: {
                        color: 'white',
                        width: 3
                    }
                }
            }],
	    bing: {
                    source: {
                        name: 'Bing Maps',
                        type: 'BingMaps',
                        key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                        imagerySet: 'Aerial'
                    }
                }
        });

	for (i in $scope.layers) {
		$scope.layers[i].style.fill.color = '#' + Math.random().toString(16).slice(2, 8);
	}

	$scope.filter = {};
																																        	$scope.getTypes = function () {
		return ($scope.layers || []).map(function (l) {
		    return l.vitis_type;
		}).filter(function (l, idx, arr) {
		    return arr.indexOf(l) === idx;
		})
	};

	$scope.filterByType = function (layer) {
        	return $scope.filter[layer.vitis_type] || noFilter($scope.filter);
    	};
	function noFilter(filterObj) {
		for (var key in filterObj) {
		    if (filterObj[key]) {
		        return false;
		    }
		}
		return true;
	    }    

      } ]);
