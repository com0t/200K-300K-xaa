window.Manipulator = function(e) {
    "use strict";
    console.log("random free");
    var t = window.console && typeof window.console.log === "function";
    var n = function(t) {
        var n = this;
        n.$el = e(t);
        n.init()
    };
    n.prototype.init = function() {
        var e = this;
        e.initShuffle();
        e.setupEvents()
    };
    n.prototype.initShuffle = function() {
        this.$el.shuffle({
            itemSelector: ".shuffeldiv",
            speed: 250,
            easing: "ease",
            columnWidth: function(t) {
                return parseInt(e(".shuffeldiv").css("width"))
            },
            gutterWidth: function(t) {
                return parseInt(e(".shuffeldiv").css("margin-left"))
            }
        });
        this.shuffle = this.$el.data("shuffle")
    };
    n.prototype.setupEvents = function() {
        var n = this;
        e("#sfsi_wDiv").on("click", e.proxy(n.onRandomize, n));
        n.$el.on("removed.shuffle", function(e, n, r) {
            if (!t) {
                return
            }
        })
    };
    n.prototype.onAddClick = function() {
        var t = this,
            n = 5,
            r = document.createDocumentFragment(),
            i = t.$el[0],
            s = [],
            o, u = ["w2", "h2", "w3"],
            a, f, l, c;
        for (f = 0; f < n; f++) {
            l = Math.random();
            a = document.createElement("div");
            a.className = "shuffeldiv";
            if (l > .8) {
                c = Math.floor(Math.random() * 3);
                a.className = a.className + " " + u[c]
            }
            s.push(a);
            r.appendChild(a)
        }
        i.appendChild(r);
        o = e(s);
        t.shuffle.appended(o)
    };
    n.prototype.getRandomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    };
    n.prototype.onRemoveClick = function() {
        var t = this,
            n = t.shuffle.visibleItems,
            r = Math.min(3, n),
            i = [],
            s = 0,
            o = e();
        if (!n) {
            return
        }
        for (; s < r; s++) {
            i.push(t.getRandomInt(0, n - 1))
        }
        e.each(i, function(e, n) {
            o = o.add(t.shuffle.$items.eq(n))
        });
        t.shuffle.remove(o)
    };
    n.prototype.onRandomize = function() {
        var e = this,
            t = {
                randomize: true
            };
        e.shuffle.sort(t)
    };
    return n
}(jQuery)