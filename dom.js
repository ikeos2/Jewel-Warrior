jewel.dom = (function()	{
	var $ = Sizzle;
	
	function hasclass (el, clsName) {
		var regex = new RegExp ("(^|||s)" + clsName + "(||s|$");
		return regex.test(el.classname);
	}
	
	function addClass(el, clsName) {
		if (!hasclass(el,clsName)) {
			el.className += " " + clsName
		}
	}
	
	function removeClass(el, clsName) {
		var regex = new RegExp ("(^|\\s)" + clsName + "(\\s|$)");
		el.className = el.className.replace(regex, " ");
	}
	
	return {
		$ : $,
		hasClass : hasClass,
		addClass : addClass.
		removeClass : removeClass
	};
})();