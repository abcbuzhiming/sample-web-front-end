/**
 * 定义layui的插件
*/

var myplug = function(){
    
};
layui.define(['layer'],function(exports){
    //do something
    console.log('定义插件时做了工作');
    //插件必须是一个函数对象
    
    //给插件增加成员属性，可以是函数，可以是变量
    myplug.fun1 = function(str){
      //alert('插件输出:' + str);
      layer.msg('插件输出:' + str);
    }
    //输出这个插件，第一个参数就是名称，第二个是插件对象本身
    exports('myplug', myplug);
  });