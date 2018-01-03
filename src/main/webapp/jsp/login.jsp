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
<body>
<input type="hidden" id="path" value="${path}">
<form action="${path}/loginHandle/login" method="post">

		<label>用户名</label>
		<input type="text" id="username">
		<label>密码</label>
		<input type="password" id="password">
		<button type="submit">提交</button>
		</form>
		<!-- <button type="button" id="commit">提交</button> -->
</body>
<script src="js/lib/jquery-1.12.3.min.js"></script>
<script src="js/lib/main.js"></script>
<script src="js/web/login.js"></script>
</html>