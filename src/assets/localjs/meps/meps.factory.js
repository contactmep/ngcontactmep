angular.module('ngContactMep.mepsFactory',[])
	.factory('mepsFactory',mepsFactory);

mepsFactory.$inject = ['$http'];

function mepsFactory($http) {
	var factory = {};

	factory.getMepsList = getMepsList;
	factory.getMep = getMep;

	return factory;

	function getMepsList(callback){
		$http.get('assets/data/meps/en/mepslist.json')
		.success(function (data){
			callback(data);
		});
	}

	function getMep(id,callback){
		$http.get('assets/data/meps/en/mep/'+id+'.json')
		.success(function (data){
			callback(data);
		});
	}
}