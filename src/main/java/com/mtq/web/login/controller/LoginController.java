package com.mtq.web.login.controller;

import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mtq.util.ResponseResult;
import com.mtq.util.SystemState;
import com.mtq.web.login.service.LoginService;

@Controller
@RequestMapping(value="/loginHandle")
public class LoginController {

	private static final Logger logger = Logger.getLogger(LoginController.class);
	@Autowired
	private LoginService loginService;
	@RequestMapping("/login")
	@ResponseBody
	public ResponseResult login(ResponseResult responseResult,@Validated String username,@Validated String password) {
		try {
			System.out.println("success!!");
			Map<String, Object> login = loginService.loginQuery(username, password);
			if(null != login) {
				responseResult.setMsg("登录成功。");
				responseResult.setState(SystemState.REQUEST_SUCCESS);
			}else {
				responseResult.setMsg("用户名或密码错误！！");
				responseResult.setState(SystemState.REQUEST_ERROR);
			}
		} catch (Exception e) {
			logger.error("用户登录出错 ! !【错误信息：】"+e.getMessage());
			responseResult.setMsg("用户登录出错。");
			responseResult.setState(SystemState.REQUEST_ERROR);
			e.printStackTrace();
		}
		return responseResult;
	}
}
