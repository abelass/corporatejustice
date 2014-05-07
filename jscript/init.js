function clearInput(target, msg)
{
	if(target.value == msg)
	{
		target.value = "";
		return true;
	}
	return false;
}

function setInput(target, msg)
{
	if(target.value == "")
	{
		target.value = msg;
		return true;
	}
	return false;
}

function validateSearchInput(inputFld, formN)
{
	var form = document.getElementById(formN);
	if(form)
	{
		var input =  document.getElementById(inputFld);
		
		if(input)
		{
			form.onsubmit = function()
			{
				input.value = null;
			}
		}
	}
}

function optionOnChangeSubmit(targetContainer)
{
	var targetForm;
	var actionUrl;
	if(targetForm = document.getElementById(targetContainer))
	{
		actionUrl = targetForm.getAttribute("action");
		var nodeSelect = targetForm.getElementsByTagName("SELECT");
		var nodesInput = targetForm.getElementsByTagName("INPUT");
		
		for(var i = 0; i < nodeSelect.length; i++)
		{
			nodeSelect[i].onchange=function()
			{
				if(this.value)
				{
					targetForm.submit();
				}	
  			}
		}
		
		for(var i = 0; i < nodesInput.length; i++)
		{
			if(nodesInput[i].getAttribute("type") == "submit")
			{
				targetForm.removeChild(nodesInput[i]);
			}
		}
	}
}

function init()
{
	var srchInput;
	var srchSubmit;
	var browseCountry;
	var browseTheme;

	optionOnChangeSubmit("browseByCountry");
	optionOnChangeSubmit("browseByTheme");
	optionOnChangeSubmit("browseSource");
	optionOnChangeSubmit("orderResults");
	
	var navPrimaryTags = new Array("LI");
	addHover("navSecondary", navPrimaryTags);
	
	var hpRollTags = new Array("LI");
	addHover("hpRollovers", hpRollTags, "hover");
}

addLoadEvent(init);