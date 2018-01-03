package com.mtq.web.login.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDao {

	public Map<String,Object> queryLogin(
			@Param(value="username")String username,
			@Param(value="password")String password)throws Exception;
}
