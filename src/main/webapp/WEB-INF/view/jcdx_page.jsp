<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/dhtmlxgrid.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxAjax/codebase/dhtmlxcommon.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/dhtmlxgrid.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/dhtmlxgridcell.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/ext/dhtmlxgrid_pgn_bricks.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/skins/dhtmlxgrid_dhx_skyblue.css" />
<!-- 	<link rel="stylesheet" href="../static/plugg/dhtmlx/dhtmlxGrid/codebase/tdh/grid_home.css" /> -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/dhtmlx/dhtmlxGrid/codebase/ext/dhtmlxgrid_filter.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/lib/jquery.min.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/DatePicker/WdatePicker.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/layui/lay/modules/layer.js" ></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/tdh/btn/css/btn.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/btn/js/tdh.btn.js" ></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/tdh/form/css/form.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/form/js/tdh.form.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/form/js/tdh.form.placeholder.js" ></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/tdh/paging/css/paging.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/paging/js/tdh.paging.js" ></script>
<!-- 	<link rel="stylesheet" href="../../common/list/css/reset.css" />
	<link rel="stylesheet" href="../../common/list/css/list.css" /> -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/xfdj.js"></script>
	<%-- <script type="text/javascript" src="${pageContext.request.contextPath}/js/xfdjhtml.js"></script> --%>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/xfdj_jcdx.js" ></script>
</head>
<body>
	<div class="wrapper">
		<div class="container">
			<div class="tdh_form_search">
				<table>
					<tr>
						<td>
							<div class="chooseType">
								<span>类型：</span><a class="chooseType_btn active" data-type="zrr">自然人</a><a class="chooseType_btn" data-type="dw">单位</a>
							</div>
						</td>
						<td width="320">
							<table class="tdh_form_layout">
								<tr>
									<td width="20"><span class="search_span"></span></td>
									<td><input class="inputText inputborder spec" type="text" placeholder="请输入单位名称或地址" /></td>
									<td width="54"><a class="tdh_btn tdh_btn_blue">查询</a></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td width="54"><a class="tdh_btn tdh_btn_blue" onclick="downloadExcel()">导出excel</a></td>
								</tr>
								<tr>
									<td></td>
									<td><input type="file" id="uploadEventFile" name="file" value="" /></td>
									<td width="54"><a class="tdh_btn tdh_btn_blue" onclick="uploadExcel()">导入excel</a></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
			<div class="search_result" data-for="zrr">
				<div id="jcdxGrid" class="gridbox" style="width:100%;height:350px"></div>
				<div class="page">
					<a class="page_prev"></a>
					<span class="page_span">第1页，共1页</span>
					<a class="page_next"></a>
					<span class="page_span">跳转至</span>
					<input class="page_to" type="text" />
					<span class="page_span">页</span>
					<a class="page_btn">确定</a>
					<span class="page_toggle">共6条</span>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
