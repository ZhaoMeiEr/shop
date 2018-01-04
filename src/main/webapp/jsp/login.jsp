<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	request.setAttribute("path", path);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body ng-app='myApp'>
<div ui-view></div>
<input type="hidden" id="path" value="${path}">
		<label>用户名</label>
		<input type="text" id="username" name="username">
		<label>密码</label>
		<input type="password" id="password" name="password">
		<button type="button" id="commit">提交</button>
</body>
<script src="js/lib/jquery-1.12.3.min.js"></script>
<script src="js/lib/angularJs/angular.min.js"></script>
<script
	src="https://cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.js"></script>
	<script src="js/lib/angularJs/ocLazyLoad.min.js"></script>
	 <script src="js/web/appConfig.js"></script>
	<script src="js/web/appRoute.js"></script>
<script src="js/web/login.js"></script>
</html>