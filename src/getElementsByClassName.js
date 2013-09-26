// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	
	function findElements(nodeList) {
		var childList = nodeList.childNodes;

		for (var i = 0; i < childList.length; i++){
			if (childList[i] instanceof HTMLElement){
				if (childList[i].classList.contains(className)){
					results.push(childList[i]);
				}
				findElements(childList[i]);
			}
		}
	}

	findElements(document.body);

	return results;
};
