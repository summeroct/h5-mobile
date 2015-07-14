# h5-mobile

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello Canvas</title>
</head>
<body>
    <script>

        function initCanvas (w, h) {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            canvas.width = w;
            canvas.height = h;

            ctx.lineWidth = 1;
            ctx.lineJoin = 'round';

            document.body.appendChild(canvas);

            return ctx;
        }

        function drawPath(ctx, x, y, r, radianStart, radianEnd, anticlockwise) {
            ctx.beginPath();
            // ctx.moveTo(50, 50);
            ctx.arc(x, y, r, radianStart, radianEnd, anticlockwise);
            // ctx.closePath();
            ctx.stroke();
        }

        var ctx = initCanvas(100, 100);

        drawPath(ctx, 50, 50, 20, -1/2 * Math.PI, 1/2 * Math.PI, false);

        setTimeout(function () {
            ctx.clearRect(0,0,100,100);
            drawPath(ctx, 50, 50, 20, -1/2 * Math.PI, 2/3 * Math.PI, false);
        }, 1000);

        setTimeout(function () {
            ctx.clearRect(0,0,100,100);
            drawPath(ctx, 50, 50, 20, -1/2 * Math.PI, 2 * Math.PI, false);
        }, 2000);

    </script>
</body>
</html>
