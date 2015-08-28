//<SCRIPT>

function LaunchWindow(sURL, Name, w, h, t, l, sOpt)
{
	return window.open(sURL, Name, 'top=' + t + ',left=' + l + ',width=' + w + ',height=' + h + ',' + sOpt);
}

function LaunchCentreWindow(sURL, Name, w, h, sOpt)
{
	var _x = (screen.availWidth - w) / 2;
	var _y = (screen.availHeight - h) / 2;

	return window.open(sURL, Name, 'top=' + _y + ',left=' + _x + ',width=' + w + ',height=' + h + ',' + sOpt);
}

// IE only method
function LaunchCentreModal(sURL, Name, w, h, sOpt)
{
	var _x = (screen.availWidth - w) / 2;
	var _y = (screen.availHeight - h) / 2;

	return window.showModalDialog(sURL, Name, 'dialogHeight:200px;dialogWidth:200px');
}

function CentreWin(w, h)
{
	var _minW = 180;
	var _minH = 120;
	var _w = w;
	var _h = h;
	if(_w < _minW) _w = _minW;
	if(_h < _minH) _h = _minH;
	var _x = (screen.availWidth - _w) / 2;
	var _y = (screen.availHeight - _h) / 2;
	window.resizeTo(_w, _h);
	window.moveTo(_x, _y);
}


/* use the IFRAME referenced in o to show a Faux window in the exact centre of the current page */
function LaunchCentreIFrame(o, sURL, w, h)
{

	if(o != null)
	{
		o.style.position = 'absolute';
		o.style.height = h;
		o.style.width = w;

		o.style.top = document.body.scrollTop + (document.body.clientHeight - o.style.pixelHeight) / 2;
		o.style.left = document.body.scrollLeft + (document.body.clientWidth - o.style.pixelWidth) / 2;

		o.src = sURL;
		o.style.display = 'block';
	}

	return o;

}

function LaunchCentreIFrameBYID(strName, sURL, w, h)
{
	
	return LaunchCentreIFrame(document.getElementById(strName), sURL, w, h);
}

/* use the IFRAME referenced in o to show a Faux window in the exact centre of the current page */
function CentreIFrameToParent(o, p)
{

	if(o != null && p != null)
	{
		o.style.top = GetFormPositionY(p) + (p.style.pixelHeight - o.style.pixelHeight) / 2;
		o.style.left = GetFormPositionX(p) + (p.style.pixelWidth - o.style.pixelWidth) / 2;
	}

	return o;

}