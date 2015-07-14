/**
 * @param  {[type]}
 * @return {[type]}    [description]
 */
define(function(){
    var Browser = $.browser,
    	app ={};
    if (Browser.msie && Browser.version <= 8)
        return;
    var a = function() {
        //获得随机数
        function getRandom(a) {
            return a * Math.random()
        }
        function s() {
            return document.createElement("canvas")
        }
        //
        function t() {
            var a;
            for (var d = 0; d < m; d++)
                a = d < m * .6 ? 0 : d < m * .8 ? 1 : d < m * .9 ? 2 : d < m * .98 ? 3 : 4, o[d] = [getRandom(b), getRandom(c), a]
        }
        function u() {
            var a, d, e, f;
            p += .01, d = Math.sin(p);
            for (a = 0; a < m; a++) {
                f = o[a], e = Math.sin(4 * p + a), f[1] += f[2] / 2 + (2 + e), f[0] += 6 * (d + e / 2) / (10 / f[2]), f[1] > c && (f[1] = -n, f[0] = getRandom(b));
                if (f[0] > b || f[0] < -n)
                    d > 0 ? f[0] = -n : f[0] = b;
                o[a] = f
            }
        }
        function v() {
            var a;
            k.fillStyle = l, k.clearRect(0, 0, b, c), k.beginPath();
            for (a = 0; a < m; a++)
                k.drawImage(i[o[a][2]], o[a][0], o[a][1]);
            k.fill(), u()
        }
        //获取窗体区域
        //b width
        //c height
        //m 
        //l 线性颜色渐变
        //j canvas dom 
        function getWindow(a) {
            b = window.innerWidth, 
            c = window.innerHeight,
            j !== undefined && (j.width = b, j.height = c, m = b * c / 6e3, l = k.createLinearGradient(0, 0, 0, c), t())
        }
        //init
        function x() {
            window.addEventListener("resize", a.resizeHandler, !1), 
            j = document.createElement("canvas"), 
            j.style.position = "fixed", 
            j.style.top = "0px", 
            j.style.left = "0px", 
            j.style.zIndex = 5e3, 
            j.style.pointerEvents = "none", 
            j.id = "canvas_snow", 
            document.body.appendChild(j), 
            k = j.getContext("2d"), 
            k.strokeStyle = "none", 
            d = s(), //绘制雪花
            e = s(), 
            f = s(), 
            g = s(), 
            h = s(), 
            i = [d, e, f, g, h], 
            snowFlake({
                canvas: d,
                width: n * .4,
                height: n * .4,
                color: "#FFF",
                soft: .05
            });
            snowFlake({
                canvas: e,
                width: n * .5,
                height: n * .5,
                color: "#FFF",
                soft: .05
            }); 
            snowFlake({
                canvas: f,
                width: n * .6,
                height: n * .6,
                color: "#FFF",
                soft: .3
            }); 
            snowFlake({
                canvas: g,
                width: n * .8,
                height: n * .8,
                color: "#FFF",
                soft: .2
            }); 
            snowFlake({
                canvas: h,
                width: n,
                height: n,
                color: "#FFF",
                soft: .05
            }); 
            getWindow(null), 
            app.snowTimer = setInterval(function() {
                q(a.draw)
            }, 50)
        }
        //雪花
        function snowFlake(a) {
            var b, c, d, e, f, g, h, i, j;
            d = a.width || 30, 
            e = a.height || 30, 
            f = d / 2, 
            g = e / 2, 
            i = a.color || "#FFF", 
            h = a.soft || 0, 
            b = a.canvas, 
            b.width = d, 
            b.height = d, 
            c = b.getContext("2d"), 
            c.clearRect(0, 0, d, e), 
            j = c.createRadialGradient(f, g, 0, f, g, f), 
            j.addColorStop(0, i), //
            j.addColorStop(.1, i), 
            j.addColorStop(.85, hexToRgba(i, h)), 
            j.addColorStop(1, hexToRgba(i, 0)), 
            c.fillStyle = j, 
            c.fillRect(0, 0, d, e)
        }
        //hex转rgba
        function hexToRgba(a, b) {
            var c, d, e;
            return a = a.replace(/^s*#|s*$/g, ""), 
                   a.length === 3 && (a = a.replace(/([0-9a-fA-F])/g, "$1$1")), 
                   d = parseInt(a.substr(2, 2), 16), 
                   e = parseInt(a.substr(4, 2), 16), 
                   c = parseInt(a.substr(0, 2), 16), 
                   "rgba(" + c + ", " + d + ", " + e + ", " + b + ")"
        }
        var b, c, d, e, f, g, h, i = [], j, k, l, m, n = 20, o = [], p = 0, q = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 62.5)
            }
        }();
        return {init: x,draw: v,resizeHandler: getWindow}
    }();
    (a.init(), Browser.ie && setTimeout(function() {
        clearTimeout(app.snowTimer), $("canvas_snow").dispose()
    }, 2e3))
});
