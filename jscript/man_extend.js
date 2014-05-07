/*
	if window.onload has not already been assigned a function,
	the function passed to addLoadEvent is simply assigned to window.onload.
	If window.onload has already been set, a brand new function is created which
	first calls the original onload handler, then calls the new handler afterwards. 
*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function insertAfter(newElement, targetElement)
{
	var parent = targetElement.parentNode;
	
	if(parent.lastChild == targetElement)
	{
		parent.appendChild(newElement);
	}
	
	else
	{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}