# sample-relative-path README
这是一个前后端分离的前端访问后端接口，如果处理相对路径，和接口中含有servlet路径时的处理范例

## 文件说明
sample.html		直接写在html中的js，访问远端接口

dir/sample.html
dir/dir/sample.html
这两个文件是引用的同一个js文件，在这个js文件中计算路径，会受到html文件本身所在路径的影响，所以必须得到servlet路径，然后拼接成绝对路径来访问接口

## 结论
* 在html和css中出现的相对路径，是以html和css文件所在路径为基准。
* js中的路径则是以导入此js的网页文件所在的位置为基准的。所以如果一个js文件被多个html文件引用，而这些html文件所在的路径层级不同，js里使用相对路径就会出现问题
