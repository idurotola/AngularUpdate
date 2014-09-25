 (function(){
 var app=angular.module("myFlickr",[]);

 app.controller("mainController",['$scope','$http',function($scope,$http)
 {
 		var check=null;
 		$scope.recent = '';
 		$scope.interesting ='';
    $scope.search = '';
 		var initUrl = "https://api.flickr.com/services/rest/";
        var config = {
        	params :{
        		
        		api_key:'6bf279c5f9d9e36bea5b3fb83f7a44f6',
        		has_geo:'1',
        		extras: 'geo',
        		per_page: '20',
        		page: '1',
        		format: 'json',
        		jsoncallback :"JSON_CALLBACK",
        		method:''
        	}
        };
        var config2 = {
        	params :{
        		
        		api_key:'6bf279c5f9d9e36bea5b3fb83f7a44f6',
        		has_geo:'1',
        		extras: 'geo',
        		per_page: '20',
        		page: '1',
        		format: 'json',
        		jsoncallback :"JSON_CALLBACK",
        		method:''
        	}
        };
    
 		$scope.searchBtn=function(){
 			var term=$scope.SearchTerm;
 			if(term == undefined)
 				{
 					alert("Please Enter A valid Search");
 				}
 			else{
 					/*search here attaching the the entered term*/
          config2.params.tags = term;
          config2.params.per_page =200;
          /*config2.params.page=2;*/
          config2.params.method = 'flickr.photos.search';
          $http.jsonp(initUrl,config2).success(function(recieved){
          $scope.search = recieved.photos.photo;
          console.log($scope.search);
          });
 					/*recieve your callback into the rigth place*/
 						
 				}
 		};

 		$scope.runAtStartUp = function(){

 			  config.params.method = "flickr.photos.getRecent";
 			  console.log(config.params.method);
 			  $http.jsonp(initUrl,config).success(function(data){
 				$scope.recent = data.photos.photo;
 				console.log($scope.recent);
 			});
 			
 			  config2.params.method = "flickr.interestingness.getList";
 			  console.log(config2.params.method);
 			  $http.jsonp(initUrl,config2).success(function(response){
 				$scope.interesting = response.photos.photo;
 				console.log($scope.interesting);

 			}); 
 		};

 		$scope.imageClicked = function(file){
 			/*file is cheked for its url and sent to overlay imageholder*/
 			/*file is checked for the long and lat and sent to overlays info holder*/
 			/*file is checked for its name and sent to overlays info holder*/
 			/*overlay is shown and theh the map is used to center in on the location*/
 		};
 		$scope.overlayClicked = function(){
 			/*the hoverlay should be hidden when clicked*/
 		};




    $scope.runAtStartUp();

 }]);
})();