var paramify = function (object) {
	var parms = " ";
	for (var property in object){
		parms.push(property)
	}
	parms = parms.sort()
	for (var = 0; i < parms.length; i++) {
		parms[i] = parms[i] + "=" + object[parms[i]]
	}
	return parms.join("&")
}
