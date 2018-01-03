var path = "";
$(function() {
	path = $("#path").val();
	// getPageBox();
	// $("head").append(
	// '<link rel="stylesheet" href="' + path
	// + '/js/lib/system/css/Main.css"/>');
	// Main.loading();
});

var Main = {
	totalPage : 1,
	prePage : 1,
	nextPage : 1,
	pageNum : 1,
	param : null,
	_ajax : function(url, param, fn) {
		if (url == null || url === "" || typeof fn != "function") {
			alert("参数传递错误，正确方式：_ajax(url,{param1:param1,...},function(data){...})");
			return;
		}
		param = param || {};
		Main.loadingShow();
		$.ajax({
			url : url,
			type : 'post',
			data : param,
			timeout : 10000,
			dataType : 'json',
			success : function(data) {
				Main.loadingHide();
				if (typeof (data) != "object") {
					if (status.indexOf("<html>") > 0) {
						alert("系统登录超时，请重新登录。。");
						window.location = "/login/";
					}
				} else {
					fn(data);
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				if (textStatus === "error") {
					alert("请求失败！！");
				} else if (textStatus == "timeout") {
					alert("请求超时！！");
				}
				Main.loadingHide();
			}
		});
	},
	requestAjax : function(url, param, fn) {
		if (url == null || url === "" || typeof fn != "function") {
			alert("参数传递错误，正确方式：_ajax(url,{param1:param1,...},function(data){...})");
			return;
		}
		param = param || {};
		$("#loading").show();
		$.post(url, param, function(data) {
			if (typeof (data) != "object" && data == "timeOut") {
				alert("登录超时，请重新登录！！！")
				window.location = path + "/login/";
			} else {
				fn(data);
				$("#loading").hide();
			}
		});
	},
	ajaxPage : function(url, param, fn) {
		if (url == null || url === "" || typeof fn != "function") {
			alert("参数传递错误，正确方式：ajaxPage(url,{param1:param1,...},function(data){...})");
			return;
		}
		if (param == null) {
			param = {};
		}

		param.pageNum = 1;
		Main.param = param;
		Main.loadingShow();
		$.ajax({
			url : url,
			type : 'post',
			data : Main.param,
			timeout : 100000,
			dataType : 'json',
			success : function(data) {
				Main.totalPage = data.totalPage;
				Main.pageNum = data.pageNum;
				Main.nextPage = data.nextPage;
				Main.prePage = data.prePage;
				Main.getPageBox();
				Main.loadingHide();
				if (typeof (data) != "object") {
					if (status.indexOf("<html>") > 0) {
						alert("系统登录超时，请重新登录。。");
						window.location = "/login/";
					}
				} else {
					fn(data.data);
				}

			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				if (textStatus === "error") {
					alert("请求失败！！");
				} else if (textStatus == "timeout") {
					alert("请求超时！！");
				}
				Main.loadingHide();

			}
		});
		// 先解除事件绑定防止重复执行
		$(document).off("click", ".page_prev");
		$(document).off("click", ".page_next");
		$(document).off("click", ".goPage");
		// 上一页
		$(document).on("click", ".page_prev", function() {
			if (Main.prePage >= 1) {
				Main.loadingShow();
				Main.param.pageNum = Main.prePage;
				$.ajax({
					url : url,
					type : 'post',
					data : Main.param,
					timeout : 10000,
					dataType : 'json',
					success : function(data) {
						Main.totalPage = data.totalPage;
						Main.pageNum = data.pageNum;
						Main.nextPage = data.nextPage;
						Main.prePage = data.prePage;
						Main.getPageBox();
						Main.loadingHide();
						if (typeof (data) != "object") {
							if (status.indexOf("<html>") > 0) {
								alert("系统登录超时，请重新登录。。");
								window.location = "/login/";
							}
						} else {
							fn(data.data);
						}

					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						if (textStatus === "error") {
							alert("请求失败！！");
						} else if (textStatus == "timeout") {
							alert("请求超时！！");
						}
						Main.loadingHide();

					}
				});
			}
		});
		// 下一页
		$(document).on("click", ".page_next", function() {
			if (Main.nextPage <= Main.totalPage) {
				Main.loadingShow();
				Main.param.pageNum = Main.nextPage;
				$.ajax({
					url : url,
					type : 'post',
					data : Main.param,
					timeout : 10000,
					dataType : 'json',
					success : function(data) {
						Main.totalPage = data.totalPage;
						Main.pageNum = data.pageNum;
						Main.nextPage = data.nextPage;
						Main.prePage = data.prePage;
						Main.getPageBox();
						Main.loadingHide();
						if (typeof (data) != "object") {
							if (status.indexOf("<html>") > 0) {
								alert("系统登录超时，请重新登录。。");
								window.location = "/login/";
							}
						} else {
							fn(data.data);
						}

					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						if (textStatus === "error") {
							alert("请求失败！！");
						} else if (textStatus == "timeout") {
							alert("请求超时！！");
						}
						Main.loadingHide();
					}
				});
			}
		});
		// 跳转页
		$(document).on("click", ".goPage", function() {
			var pageNum = $(this).text();
			if (pageNum === "") {
				alert("页码不能为空！！");
				return;
			}
			if (!isNaN(pageNum)) {
				if (pageNum > Main.totalPage) {
					alert("页码不能大于总页数！");
					return;
				}
				Main.loadingShow();
				Main.param.pageNum = pageNum;
				$.ajax({
					url : url,
					type : 'post',
					data : Main.param,
					timeout : 10000,
					dataType : 'json',
					success : function(data) {
						Main.totalPage = data.totalPage;
						Main.pageNum = data.pageNum;
						Main.nextPage = data.nextPage;
						Main.prePage = data.prePage;
						Main.getPageBox();
						Main.loadingHide();
						if (typeof (data) != "object") {
							if (status.indexOf("<html>") > 0) {
								alert("系统登录超时，请重新登录。。");
								window.location = "/login/";
							}
						} else {
							fn(data.data);
						}
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						if (textStatus === "error") {
							alert("请求失败！！");
						} else if (textStatus == "timeout") {
							alert("请求超时！！");
						}
						Main.loadingHide();

					}
				});
			} else {
				alert("页码必须为数字！！");
			}
		});

	},
	getPageElement : function(element, pageList) {
		var pageBox = '<div class="page_box">';
		pageBox += '<a href="javascript:;" class="page_prev">上一页</a>';
		pageBox += pageList;
		pageBox += '<a href="javascript:;" class="page_next">下一页</a>';
		pageBox += '</div>';
		$(document).find(element).empty().html(pageBox);
	},
	loading : function() {
		var loadHTML = '<div class="loading" style="display:none;">';
		loadHTML += '<div class="loading_wrap">';
		loadHTML += '<div class="loading_box">';
		loadHTML += '<img src="' + path + '/imgs/loading.gif" alt="">';
		loadHTML += '<h3>加载中...</h3>';
		loadHTML += '</div>';
		loadHTML += '</div>';
		loadHTML += '</div>';
		$("body").append(loadHTML);

	},
	loadingHide : function() {
		$(".loading").hide();
	},
	loadingShow : function() {
		$(".loading").show();
	},
	_save : function(formId, fn) {
		$(formId).ajaxForm(function(result) {
			if (result.state == "success") {
				alert("保存成功！");
				Main._dialogHide();
				if (typeof fn == "function") {
					fn();
				}
			} else {
				alert("保存失败！");
			}
		}).submit();
	},
	_delete : function(url, param, fn) {
		if (param == null) {
			alert("参数错误:url,{param1:param1..},function(){}");
		}
		if (confirm("您确定要删除吗？")) {
			$.post(url, param, function(result) {
				if (result.state == "success") {
					alert("删除成功！！");
					if (typeof fn == "function") {
						fn();
					}
				} else {
					alert("删除失败！！");
				}
			});
		}
	},_deleteGroup :function(url,param,fn){
		if (param == null) {
			alert("参数错误:url,{param1:param1..},function(){}");
		}
		if (confirm("您确定要删除吗？")) {
			$.post(url, param, function(result) {
				if (result.state == "success") {
					alert("删除成功！！");
					if (typeof fn == "function") {
						fn();
					}
				} else {
					if(result.msg=="undelete"){
						alert("当前用户组下存在用户，无法删除!");
						return;
					}
					alert("删除失败！！");
				}
			});
		}
	},
	_resetForm : function(formId) {
		$(formId)[0].reset();
	},
	_dialogHide : function() {
		if ($(".dialog").is(":visible")) {
			$("body").css("overflow", "visible");
			$("html").css("overflow", "auto");
		}
		$(".dialog").hide();
	},
	uuid : function() {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
		s[8] = s[13] = s[18] = s[23] = "-";

		var uuid = s.join("");
		return uuid;
	},
	_handleJson : function(str) {
		return str.replace(/<[^>]+>/g, "");
	},
	timeComparison : function(date1, date2) {
		// 判断日期相隔天数
		s1 = new Date(date1.replace(/-/g, "/"));
		s2 = new Date(date2.replace(/-/g, "/"));
		var days = s2.getTime() - s1.getTime();
		var time = parseInt(days / (1000 * 60 * 60 * 24));
		return time;
	},
	getPageBox : function() {
		var pageHtml = "";
		if (Main.pageNum - 2 >= 1) {
			for (var i = Main.pageNum - 2; i <= Main.pageNum; i++) {
				if (i == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ i + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + i
							+ '</a>';
				}

			}
		} else {
			for (var i = 1; i <= Main.pageNum; i++) {
				if (i == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ i + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + i
							+ '</a>';
				}

			}
		}
		if (Main.pageNum + 2 <= Main.totalPage) {
			for (var j = Main.pageNum + 1; j <= Main.pageNum + 2; j++) {
				if (j == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ j + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + j
							+ '</a>';
				}

			}
		} else {
			for (var j = Main.pageNum + 1; j <= Main.totalPage; j++) {
				if (j == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ j + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + j
							+ '</a>';
				}

			}
		}
		if (Main.totalPage - Main.pageNum <= 1 && Main.totalPage >= 5) {
			pageHtml = "";
			for (var j = Main.totalPage - 5; j <= Main.totalPage; j++) {
				if (j == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ j + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + j
							+ '</a>';
				}
			}
		}
		if (Main.pageNum - 1 <= 1 && Main.totalPage >= 5) {
			pageHtml = "";
			for (var j = 1; j <= 5; j++) {
				if (j == Main.pageNum) {
					pageHtml += '<a href="javascript:;" class="goPage current">'
							+ j + '</a>';
				} else {
					pageHtml += '<a href="javascript:;" class="goPage">' + j
							+ '</a>';
				}
			}
		}

		Main.getPageElement(".ug_page_box", pageHtml);
	}

}
