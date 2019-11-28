$(function() {
	//alert('hello world');
	//console.log("aaa");
	//获取servletpath的方式，默认servletpath就是1级路径
	var pathName = window.document.location.pathname;
	console.log("pathName:" + pathName);
	var servletpath = pathName.substring(0, pathName.indexOf('/', 1) + 1);
	console.log("servletpath:" + servletpath);

	$.ajax({
		type: 'POST',
		url: servletpath + 'sample/hello/',
		data: null,
		success: function(result) {
			console.log("data:" + result);
		},
		//dataType: "json",
	});
});
