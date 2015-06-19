angular.module('ngContactMep.mepsFactory',[])
	.factory('mepsFactory',mepsFactory)

mepsFactory.$inject = ['$http']

function mepsFactory($http) {
	var factory;

	factory.getMeps = getMeps;
	factory.getMep = getMep;

	return factory;

	function getMeps(callback){
		callback();
	};
	function getMep(id,callback){
		callback();
	};
}