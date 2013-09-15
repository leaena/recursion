// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
    if(obj instanceof Array){
		var message = "[";
		for (var i = 0; i < obj.length-1; i++){
			message += stringifyJSON(obj[i]) + ",";
		}
		message += stringifyJSON(obj[obj.length-1]) + "]";
		return message;
	} else if(obj === null){
		return '' + obj;
	} else if (obj === undefined){
		return '';
	} else if (typeof obj === "object"){
		var result = false;
		var message = "{";
		for (var key in obj) {
			if (typeof obj[key] === 'function'){
				return "{}";
			}
			message += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
			var result = true;
		}
		if (result){
			return message.substring(0, message.length - 1) + "}";
		} else {
			return "{}";
		}
	} else if (typeof obj === "boolean" || typeof obj === "number"){
		return '' + obj;
	} else {
		return "\"" + obj.toString() + "\"";
	}
};