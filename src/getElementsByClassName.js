// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var arrayElements = [];
	var results = [];
	$("*").each(function(){
		if($(this).attr("class") != undefined){
			arrayElements.push(this);
		}
	})

	function checkElements(nodeList){
		if (nodeList.length == 0) {
			return null;
		} else {
			var thisClass = $(nodeList[0]).attr("class").split(" ");

			for(var i = 0; i < thisClass.length; i++){
				if(thisClass[i] == className){
					results.push($(nodeList[0]).context);
				}
			}
			checkElements(nodeList.slice(1))
		}
	}

	checkElements(arrayElements);

	return results;
};
