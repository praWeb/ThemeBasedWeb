var app = angular.module('directives',[]);

app.directive('navigateTo', function($location, $anchorScroll){
	return{
		restrict : 'A',
		link: function(scope, element,attrs){
			element.on("click",function(){
				$location.hash(attrs.navigateTo);
		    	$anchorScroll(); 
			});
			
		}
	};
});