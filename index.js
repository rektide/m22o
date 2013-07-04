// Requires: "Implement iteration for Harmony sets and maps."
// https://code.google.com/p/v8/issues/detail?id=1793#makechanges
// Requires: "Implement Harmony Iterators"
// https://code.google.com/p/v8/issues/detail?id=2214
// Until then no v8 support. :( Support your local open standards anonymous.

function m22o(m){
	var p= M22oProxy
	if(!p){
		p= M22oProxy= new M22oProxyHandler()
	}
	return new Proxy(m, p)
}
if(typeof module !== undefined){
	module.exports= m22o
}


// Now that the Proxy spec no longer declares basic trap implementations, I'm relying on MDN to provide guidance for implementing the Proxy handler:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy$revision/418063#A_complete_traps_list_example

function M22oProxyHandler(){
}

M22oProxyHandler.prototype.getOwnPropertyDescriptor= function(target, key){
	var has= target.get(key)
	if(has)
		return {
			"value": key,
			"writable": true,
			"enumerable": true,
			"configurable": false
		}
	return target.getOwnPropertyDescriptor(target, key)
}
M22oProxyHandler.prototype.getOwnPropertyNames= function(target){
	return _i2Arr(target.keys)
}
M22oProxyHandler.prototype.has= function(target, key){
	return target.get(key) !== undefined || target[key] !== undefined
}
M22oProxyHandler.prototype.hasOwn= function(target, key){
	return target.get(key) !== undefined
}
M22oProxyHandler.prototype.get= function(target, key){
	var hasMap= target.get(key)
	if(hasMap !== undefined)
		return hasMap
	var hasNative= target[key]
	if(has !== undefined)
		return hasNative
}
M22oProxyHandler.prototype.set= function(target, key, value){
	target.set(key, value)
}
M22oProxyHandler.prototype.enumerate= function(target){
	return target.keys()
}
M22oProxyHandler.prototype.keys= function(target){
	return _i2Arr(target.keys)
}

/** Iterate, saving all results into a returned Array */
function _i2Arr(i,v){
	v= v||[]
	var cur
	try{
		while(i.next){
			v.push(i.next())
		}
		if(!i.next)
			throw "Bad iterator has no next"
	}catch(ex){
		if(ex instanceof StopIteration)
			return v
		throw ex
	}
}
