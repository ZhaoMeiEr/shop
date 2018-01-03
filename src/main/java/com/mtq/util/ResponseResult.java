package com.mtq.util;

import java.util.List;
import java.util.Map;

public class ResponseResult {
	private String state;
	private List<?> dataList;
	private Map<String, Object> dataObject;
	private String msg;

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public List<?> getDataList() {
		return dataList;
	}

	public void setDataList(List<?> dataList) {
		this.dataList = dataList;
	}

	public Map<String, Object> getDataObject() {
		return dataObject;
	}

	public void setDataObject(Map<String, Object> dataObject) {
		this.dataObject = dataObject;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
