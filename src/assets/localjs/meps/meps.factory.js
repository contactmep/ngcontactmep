angular.module('ngContactMep.mepsFactory',[])
	.factory('mepsFactory',mepsFactory);

mepsFactory.$inject = ['$http'];

function mepsFactory($http) {
	var factory = {};

	factory.getMepsList = getMepsList;
	factory.getMep = getMep;

	return factory;

	function getMepsList(callback){
		$http.get('https://raw.githubusercontent.com/contactmep/mepsApi/master/api/mepslist.json')
		.success(function (data){
			callback(data);
		});
	}

	function getMep(id,callback){
		$http.get('https://raw.githubusercontent.com/contactmep/mepsApi/master/api/meps/'+id+'.json')
		.success(function (data){
			callback(data);
		});
	}
}