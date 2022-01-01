function findTopElement() {
 	var highest = 0;
  	var highestElement = null;
  	var elems = document.querySelectorAll("*");

  	for (var i = 0; i < elems.length; i++) {
  		console.log("got " + elems.length + " elements");
	    var style = document.defaultView.getComputedStyle(elems[i], null);
	    var zindex = style.getPropertyValue("z-index");
	    var ElementDisplay = style.getPropertyValue("display");

	    if ((zindex != 'auto') && (zindex > highest)) {
		    highest = zindex;
		    highestElement = elems[i];
	    }
  	}

  	console.log("top element has z-index: " + highest);

  	return highestElement;
}

var elem = findTopElement();
if(elem){
	console.log(elem + " deleted");
	elem.remove();	
} else {
	console.log("Everything deleted");
}

document.body.style.overflow = "scroll";
