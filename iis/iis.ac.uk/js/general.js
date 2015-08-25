//<SCRIPT>
function setBrowser() {
	var navagent = navigator.userAgent.toLowerCase();
	var navname = navigator.appName.toLowerCase();
	var navver = parseInt(navigator.appVersion);
		// get the version in useful form for an opera browser.
	var operaagent = String(navagent.match(/opera[\/| ]\d/));
	operaagent = operaagent.replace(/[\/]/ig, ' ');
	this.op = (operaagent != 'null');

	this.mac = (navagent.indexOf('mac_powerpc') != -1);
	this.win = (navagent.indexOf('windows') != -1);
	this.op = (navagent.indexOf('opera') != -1);
	this.ie = (navagent.indexOf('msie') != -1 && !this.op);
	this.ns = (navname.indexOf('netscape') != -1 && !this.op);
	this.ie4 = (this.ie && navver >= 4);
	this.ns4 = (this.ns && navver == 4);
	this.ns6 = (this.ns && navver == 5);
	this.op5 = (this.op && operaagent == 'opera 5');
	this.op6 = (this.op && operaagent == 'opera 6');
	this.op7 = (this.op && operaagent == 'opera 7');
	this.op6up = (this.op5 || this.op6 || this.op7)
}

function LaunchCentreWindow(sURL, Name, w, h, sOpt)
{
	var _x = (screen.availWidth - w) / 2;
	var _y = (screen.availHeight - h) / 2;

	return window.open(sURL, Name, 'top=' + _y + ',left=' + _x + ',width=' + w + ',height=' + h + ',' + sOpt);
}

var is = new setBrowser();
var pre, suf, sufH, sufF;
if(is.ie4) {
	pre = 'document.all';
	suf = '.style';
	sufH = '';
	sufF = '';
}
if(is.ns4 || is.ns6) {
	pre = 'document'
	suf = '';
	sufH = '.document';
	sufF = '';
}

function fnGetObj(id) {
	if(is.ie4 || is.ns4)
		return eval(pre + "['" + id + "']" + suf);
	if(is.ns6 || is.op6up)
		return document.getElementById(id).style;
}

function fnGetObjHTM(id) {
	if(is.ie4 || is.ns4)
		return eval(pre + "['" + id + "']" + sufH);
	if(is.ns6 || is.op6up)
		return document.getElementById(id)
}

function fnPageWidth()
{
	if(is.ie4)
	{
		return document.body.clientWidth;
	}
	if(is.ns4 || is.ns6)
	{
		return window.innerWidth;
	}
	//innerHeight
}

function BytesInKb(strBytes)
{
	var i = parseInt(strBytes);
	return Math.round(100*(i/1024))/100;
}

/*
return a comma delimeted string of values from a multiple select list.
returns a zero length string if nothing selected.
*/
function fnGetMultipleSelects(o) {
	var l = o.length;
	var s = '';
	for(var i = 0; i < l; i ++) {
		if(o[i].selected) {
			s += ',' + o[i].value;
		}
	}
	// return the string with the first character dropped.
	// if any values selected this will remove an extra comma which is not required.
	return s.substr(1);
}

String.prototype.isEmail  = fnValidEmail
String.prototype.isPhone  = fnValidPhone
String.prototype.isNumber = fnValidNumber

function fnValidNumber() {
	return /^\d+$/.test(this);
}

function fnValidEmail() {
	// TODO: check this validation
	return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this);
}

function fnValidPhone() {
	// remove spaces
	var p = this.replace(/ +/ig, '')
	// test: can have a plus at start.
	// all other characters numeric
	return /^\+?\d+$/.test(p);
}

//////////////////////////
// delay the change of an image src to remove an IE only bug
function DelayedImageSrc(sID, sSrc)
{
	var oTgt = document.getElementById(sID);
	
	if(oTgt != null)
		setTimeout("document.getElementById('" + sID + "').src = '" + escape(sSrc) + "';", 1);
}

function StripHTTags(s)
{
	return s.replace(/\<\!\-\-[\s\S]*?\-\->/ig, ' ').replace(/\<[^a]?.*?\>/ig, '');
}

function AddKeywords(strKeywords) {
	
	var metaElements = document.all ? document.all.tags('META') : 
		document.getElementsByTagName ? document.getElementsByTagName('META') : new Array();
		
	for (var m = 0; m < metaElements.length; m++) {
	
		if (metaElements[m].name == 'keywords') {
			
			metaElements[m].content += "," + strKeywords;
		}
	}
	
	return true;
}

//SWF Embed


/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;