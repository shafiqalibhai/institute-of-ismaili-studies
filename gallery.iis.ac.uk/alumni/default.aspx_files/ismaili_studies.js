//<SCRIPT>
function fnLaunchLargeImg(strPath) {
    fnViewContentImage('WebAssets/large/' + strPath);
}

function fnViewContentImage(strPath) {
    var winImg = LaunchCentreWindow('ViewContentImagea9ef.html?layout=front&amp;path=' + escape(strPath), 'ContentImage', 200, 200, '');
}

function LaunchGlossaryByID(i) {
    return LaunchGlossary('ContentLink19b3.html?type=glossary&amp;id=' + i);

}



function checkTextInput(id) {
    var text = document.getElementById(id);
    if (text.value == text.defaultValue) {
        text.value = '';
    }
    else if (text.value == '') {
        text.value = text.defaultValue;
    }
}

function LaunchGlossary(s) {
    if (s == '') return;
    var oWin = LaunchCentreWindow(s, 'glossary', 800, 200, 'resizable=1, scrollbars=auto')
    if (oWin != null) {
        oWin.focus();
    }
    else {
        document.location.href = s;
    }

    return false;
}

function LaunchPreviewFull(strSrc) {
    var winImg = LaunchCentreWindow('ViewContentImagea9ef.html?layout=front&amp;path=' + escape(strSrc), 'ViewImage', 200, 200, '');
}

function ImageLoadFailed(o) {
    if (String(window.event) != 'undefined') {
        o = window.event.srcElement
    }
    o.style.display = "None";
}

function SendToAFriend() {
    var oWin = LaunchCentreWindow('send_to_a_friendc2dd.html?ContentID=' + _lngContentID, 'SendToAFriend', 300, 440, 'resizable=1')
    if (oWin != null) oWin.focus();
    if (oWin == null)
        return true;
    else
        return false;
}

function PopupLink(s, c) {
    var oWin = LaunchCentreWindow('ViewContentImage0746.html?path=' + s + '&caption=' + c, 'ViewImage', 200, 200, '')
    return (oWin == null);
}

function changeSheets(whichSheet) {
    var int_css_num = null
    if (document.styleSheets) {
        var c = document.getElementsByTagName("link").length;
        for (var i = 0; i < c; i++) {
            var o = document.getElementsByTagName("link")[i]
            if (o.getAttribute("rel").indexOf("style") != -1 && o.getAttribute("title")) {
                if (o.title.indexOf('size_') != -1) {
                    // The setTimeout part of the following commands prevents a stupid IE bug that
                    // causes all or some of the images src's to disappear
                    //document.getElementsByTagName("link")[i].disabled=true;

                    //Disable all <link> tags except the one for the selected font size
                    if (o.title == 'size_' + whichSheet) {
                        setTimeout('document.getElementsByTagName("link")[' + i + '].disabled=false;', 1);
                    } else {
                        setTimeout('document.getElementsByTagName("link")[' + i + '].disabled=true;', 1);
                    }
                }
            }
        }
        //setTimeout('document.getElementsByTagName("link")[' + int_css_num + '].disabled=false;', 2);

        //Store the stylesheet selected in a cookie
        document.cookie = "stylesheet=" + whichSheet;
    }
}

function GetStyleStored() {
    var arr_cookies = document.cookie.split(';');
    for (var i = 0; i < arr_cookies.length; i++) {
        //		alert(arr_cookies[i])
    }
    //alert(document.cookie)
}

//ANDY: Publications template section switcher
function showSection(strSection) {

    //Set all sections to be hidden
    document.getElementById('pubsSynopsis').style.display = 'none';
    document.getElementById('pubsContents').style.display = 'none';
    document.getElementById('pubsBibliography').style.display = 'none';

    switch (strSection) {

        case "synopsis":
            document.getElementById('pubsSynopsis').style.display = 'inline';
            break;

        case "contents":
            document.getElementById('pubsContents').style.display = 'inline';
            break;

        case "bibliography":
            document.getElementById('pubsBibliography').style.display = 'inline';
            break;
    }
}