addHover = function(targetContainer, targetTags, className)
{
	//set default parameter values
	var targetContainer	= (targetContainer == null)	? "wrapper"	: targetContainer;
	var targetTags = (targetTags == null) ? new Array("*") : targetTags;
	var className = (className == null)	? " over" : " " + className; // change this to add space before
	var navRoot;
	
	navRoot = document.getElementById(targetContainer);
	
	if (document.all&&navRoot)
	{
		var position = 0;
		
		for(position in targetTags)
		{
			
			foundTargets = navRoot.getElementsByTagName(targetTags[position]);
			
			for(var i = 0; i < foundTargets.length; i++)
			{
				foundTargets[i].onmouseover=function()
				{
					this.className+=className;
	  			}
					
	 			foundTargets[i].onmouseout=function()
				{
	 				this.className=this.className.replace(className, "");
	  			}
			}
		}
		return true;
 	}
	return false;
}