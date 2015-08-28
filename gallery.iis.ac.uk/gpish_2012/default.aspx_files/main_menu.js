MainMenu = function() {

    var opened = null;
    var closeDelay = null;

    return {
        init: function(obj) {
            var r;
            var l, a, t, c;
            var i;

            r = document.getElementById(obj.root);

            l = r.getElementsByTagName("li");

            for (i = 0; i < l.length; i++) {
                c = l[i].getElementsByTagName("a");
                c[c.length - 1].className = "last";
                a = l[i].getElementsByTagName("a")[0];
                t = l[i].getElementsByTagName("div")[0];
                a.obj = t.obj = { callee: a, target: t };
                a.onmouseover = t.onmouseover = function() {
                    MainMenu.open(this.obj);
                };
                a.onmouseout = t.onmouseout = function() {
                    MainMenu.close();
                };
                t.style.display = "none";
            }

        },
        open: function(obj) {
            this.actualClose();
            this.opened = obj;
            obj.target.style.display = "block";
            clearTimeout(this.closeDelay);
        },
        close: function() {
            var f;
            if (this.opened == null) {
                return;
            }
            f = function() {
                MainMenu.actualClose();
            };
            this.closeDelay = setTimeout(f, 1000);
        },
        actualClose: function() {
            if (this.opened == null) {
                return;
            }
            this.opened.target.style.display = "none";
            this.opened = null;
        }
    };

} ();
