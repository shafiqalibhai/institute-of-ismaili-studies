


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/main.dwt" codeOutsideHTMLIsLocked="false" -->

<HEAD>
<title>&#1048;&#1085;&#1089;&#1090;&#1080;&#1090;&#1091;&#1090; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; &#1080;&#1089;&#1084;&#1072;&#1080;&#1083;&#1080;&#1079;&#1084;&#1072;  : </title>

<META name="keywords" content="aga khan, his highness the aga khan, hazar imam, mowla bapa, hazar-e imam, hazar-e-imam, shah karim, community, ismaili, ismailis, imam, islam, shia, imam, imamat, imamate, aga khan iv, news related to his highness the aga khan, news, events, activities, 2000, 2001, 2002">
<META name="description" content="&#1048;&#1085;&#1089;&#1090;&#1080;&#1090;&#1091;&#1090; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; &#1080;&#1089;&#1084;&#1072;&#1080;&#1083;&#1080;&#1079;&#1084;&#1072;  - ">
<META http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
<META name="generator" content="the institute of ismaili studies">

<link href="css/iis.css" rel="stylesheet" type="text/css" />
<!--[if lte IE 8]>
<style type="text/css">
	@import url(css/iis-ie.css);
</style>
<![endif]-->
<!--[if lte IE 6]>
<style type="text/css">
	@import url(css/iis-ie6.css);
</style>
<![endif]-->
<!--[if IE 7]>
<style type="text/css">
a:hover
{
	border-bottom: inherit !important;
}
</style>

<![endif]-->
<link href="css/global.css" rel="stylesheet" type="text/css" />
<LINK rel="stylesheet" type="text/css" href="css/size2ltr.css" title="size_2">
<LINK rel="stylesheet" type="text/css" href="css/size1ltr.css" title="size_1" disabled>
<LINK rel="stylesheet" type="text/css" href="css/size3ltr.css" title="size_3" disabled>
<link href="/rss.xml" type="application/rss+xml" rel="alternate" title="IIS RSS Feed" />

<link href="css/bluetabs.css" rel="stylesheet" type="text/css" />

	<link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="screen" charset="utf-8" />

<script type="text/javascript" src="include/main_menu.js"></script>

<SCRIPT language="javascript" src="./js/general.js"></SCRIPT>
<SCRIPT language="javascript" src="./js/windows.js"></SCRIPT>
<SCRIPT language="javascript" src="./js/set_defaults.js"></SCRIPT>
<SCRIPT language="javascript" src="./js/ismaili_studies.js"></SCRIPT>

<script src="/js/jquery-1.3.2.min.js" type="text/javascript"></script>
<script src="/js/jquery.prettyPhoto.js" type="text/javascript"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-8219856-1']);
  _gaq.push(['_setDomainName', 'iis.ac.uk']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<script type="text/javascript" charset="utf-8">
	$(document).ready(function()
	{
		// reset all old links to use the class system that prettyPhoto hooks into
		var r, a;

		$("a[onclick*='LaunchPreviewFull']").fixLinks();
		$("a[onclick*='fnViewContentImage']").fixLinks2();
		$("a[onclick*='ViewContentImage.asp']").fixLinks3();
		$("a[onclick*='return PopupLink']").fixLinks4();


		//ViewContentImage.asp?path=WebAssets/Large/Gallery/kirman1.jpg&caption=The%20scribe%20has%20used%20different%20inks%20to%20delineate%20the%20headings%20and%20text.%20The%20title%20is%20written%20in%20red%2C%20with%20the%20subsection%20title%20in%20green%2C%20followed%20by%20the%20text%20in%20black.%20


		$("a[rel^='prettyPhoto']").prettyPhoto();
	});
	(function($)
	{
		$.fn.fixLinks = function()
		{
			$(this).each(function()
			{
				var r, m, s;
				s = String($(this).attr('onclick'));
				r = /LaunchPreviewFull\(["'](.*)['"]\)/;
				m = r.exec(s);
				$(this).removeAttr('onclick');
				$(this).attr('href', m[1]);
				$(this).attr('rel', 'prettyPhoto');
				$(this).attr('title', $(this).children('img').attr('alt'));
				$(this).children('img').attr('alt', '');
			});
		};
	})(jQuery);

	(function($)
	{
		$.fn.fixLinks2 = function()
		{
			$(this).each(function()
			{
				var r, m, s;
				s = String($(this).attr('onclick'));
				r = /fnViewContentImage\(["'](.*)['"]\)/;
				m = r.exec(s)
				$(this).removeAttr('onclick');
				$(this).attr('href', m[1]);
				$(this).attr('rel', 'prettyPhoto');
				$(this).attr('title', $(this).children('img').attr('alt'));
				$(this).children('img').attr('alt', '');
			});
		};
	})(jQuery);

	(function($)
	{
		$.fn.fixLinks3 = function()
		{
			$(this).each(function()
			{
				var r, m, s;
				//
				s = String($(this).attr('onclick'));
				r = /window.open\(["']ViewContentImage\.asp\?path=(.*)&caption=.*['"]\)/;
				m = r.exec(s)
				$(this).removeAttr('onclick');
				$(this).removeAttr('title');
				$(this).attr('href', m[1]);
				$(this).attr('rel', 'prettyPhoto');
				$(this).attr('title', $(this).children('img').attr('alt'));
				$(this).children('img').attr('alt', '');
			});
		};
		})(jQuery);

		(function($) {
			$.fn.fixLinks4 = function() {
				$(this).each(function() {
					var r, m, s;
					s = String($(this).attr('href'));
					r = /ViewContentImage\.asp\?path=(.*)&caption=(.*)/;
					m = r.exec(s);
					$(this).removeAttr('onclick');
					$(this).attr('href', m[1]);
					$(this).attr('rel', 'prettyPhoto');
					$(this).attr('title', unescape(m[2]));
					$(this).children('img').attr('alt', '');
				});
			};
		})(jQuery);

</script>

<script src="/js/jtip.js" type="text/javascript"></script>

<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script type="text/javascript">
//.load("elements", "1", {packages: "transliteration"});
</script>
<script type="text/javascript" src="http://www.google.com/coop/cse/t13n?form=cse-search-box&t13n_langs=en"></script>

<script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=cse-search-box&lang=en"></script>






<script type="text/javascript">
var _lngCatID = 89;
$(document).ready(function() {
$('#content a[xmlns\\:dt]').each(function() {
    var link = $(this).attr('href');
    if (link.indexOf('id=') > -1) {
        if (link.substring(link.indexOf('id=') + 3, link.indexOf('id=') + 9).indexOf('%') != -1) {
            var id = link.substring(link.indexOf('id=') + 3, link.indexOf('id=') + 10);
            $(this).attr('href', $(this).attr('href').replace(id, id.replace('%', '')));
        }
    }
});
});
</script>
</HEAD>
<BODY onload="" dir="ltr" class="ltr">

	
	<div id="top">	
		<span id="iisTitle" class="left" style="display:inline">
		<a title="&#1048;&#1085;&#1089;&#1090;&#1080;&#1090;&#1091;&#1090; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; &#1080;&#1089;&#1084;&#1072;&#1080;&#1083;&#1080;&#1079;&#1084;&#1072; " href="home.asp">&#1048;&#1085;&#1089;&#1090;&#1080;&#1090;&#1091;&#1090; &#1080;&#1089;&#1089;&#1083;&#1077;&#1076;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; &#1080;&#1089;&#1084;&#1072;&#1080;&#1083;&#1080;&#1079;&#1084;&#1072; </a>
		</span>
				
<form class="right" action="/searchResults.asp" id="cse-search-box">
  <div>
    <input type="hidden" name="cx" value="005462578309701098770:_qygld4lghm" />
    <input type="hidden" name="cof" value="FORID:10" />
    <input type="hidden" name="ie" value="UTF-8" />
    <input type="text" name="q" class="top_search" id="textfield" value="&#1055;&#1086;&#1080;&#1089;&#1082; &#1087;&#1086; &#1089;&#1072;&#1081;&#1090;&#1091;" onFocus="checkTextInput('textfield')" onBlur="checkTextInput('textfield')" />
	<input type="image" class="go_button" alt="" src="/images/go.gif" onClick="return ($('#textfield').attr('value') != '')"/>
  </div>
</form>

	</div><a style="font-size: 0; line-height: 0"name="top"></a>

	
	An error occurred on the server when processing the URL. Please contact the system administrator. <p/> If you are the system administrator please click <a href="http://go.microsoft.com/fwlink/?LinkID=82731">here</a> to find out more about this error.