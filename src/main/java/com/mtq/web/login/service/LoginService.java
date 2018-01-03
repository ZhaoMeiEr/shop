package com.mtq.web.login.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtq.web.login.dao.LoginDao;

@Service
public class LoginService {

	@Autowired
	private LoginDao loginDao;
	public Map<String,Object> loginQuery(String username,String password)throws Exception{
		return loginDao.queryLogin(username, password);
	}
}
