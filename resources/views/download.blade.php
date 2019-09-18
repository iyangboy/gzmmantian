<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>应用下载</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style>
        body{background-color: #2D2D2D}
    </style>
</head>
<body>
    <!-- 背景div -->
    <div id="mydiv" style="height:auto; text-align: center;">
        <h1 style="color: #fff;">应用下载页面</h1>
        <a style="margin-top: 300px;" class="btn btn-success" href="http://www.gzmmantian.com/download/daxiangjiebei2.apk">下载应用</a>
    </div>
    <script type="text/javascript">
        window.onload = function() {
            //配置
            var config = {
                vx: 4,  //小球x轴速度,正为右，负为左
                vy: 4,  //小球y轴速度
                height: 2,  //小球高宽，其实为正方形，所以不宜太大
                width: 2,
                count: 200,     //点个数
                color: "121, 162, 185",     //点颜色
                stroke: "130,255,255",      //线条颜色
                dist: 6000,     //点吸附距离
                e_dist: 20000,  //鼠标吸附加速距离
                max_conn: 10    //点到点最大连接数
            }

            //调用
            CanvasParticle(config);
        }
    </script>
    <script type="text/javascript" src="{{URL::asset('js/canvas-particle.js')}}"></script>
</body>
</html>
