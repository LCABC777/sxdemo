<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/lib/jquery.min.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/DatePicker/WdatePicker.js" ></script>
	<!-- <script type="text/javascript" src="../static/tdh/tdh.nicescroll.js" ></script> -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/layui/lay/modules/layer.js" ></script>
	<!--btn开始-->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/tdh/btn/css/btn.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/btn/js/tdh.btn.js" ></script>
	<!--btn结束-->
	<!--form开始-->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/tdh/form/css/form.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/tdh/form/js/tdh.form.js" ></script>
	<!--form结束-->
	<!--ztree开始-->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/plugg/ztree/css/metroStyle/metroStyle.css" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/plugg/ztree/css/metroStyle/diy.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/ztree/js/jquery.ztree.core.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/plugg/ztree/js/jquery.ztree.exedit.js" ></script>
	<!--ztree结束-->
	<!--扫描开始-->
	<!--<script type="text/javascript" src="../../../../../ext/Resources/dynamsoft.webtwain.config.js"> </script>
	<script type="text/javascript" src="../../../../../ext/Resources/dynamsoft.webtwain.initiate.js"> </script>-->
	<!--扫描结束-->
	<!-- <link rel="stylesheet" href="../../common/main/reset.css" />
	<link rel="stylesheet" href="../../common/form/css/form.css" /> --> 
	<link rel="stylesheet" href="${pageContext.request.contextPath}/css/xfdj.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/xfdj_main.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/xfdj.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.serialize.js"></script>
</head>
<body>
	<div class="wrapper">
		<!--信访材料开始-->
		<div class="letter_stuff">
			<div class="letter_caption">
				<i class="tdh_icon icon_xfzl"></i>信访材料
				<div class="letter_operate">
					<a class="tdh_btn"><i class="tdh_icon icon_import"></i>引入</a>
					<a class="tdh_btn" onclick="createDom(domData)"><i class="tdh_icon icon_scan"></i>扫描</a>
					<a class="tdh_btn" onclick="del()"><i class="tdh_icon icon_del"></i>删除</a>
					<a class="tdh_btn"><i class="tdh_icon icon_scanner"></i>扫描仪设置</a>
					<a class="tdh_btn"><i class="tdh_icon icon_catalogue"></i>智能编目</a>
					<a class="tdh_btn tdh_btn_disable"><i class="tdh_icon icon_confirm"></i>确认编目</a>
				</div>
			</div>
			<div class="letter_display">
				<div class="letter_catalog">
					<a class="letter_catalog_btn"></a>
					<div class="letter_tree">
						<span class="letter_tree_rrow"></span>
						<ul id="tree" class="ztree"></ul>
					</div>
				</div>
				<div class="letter_file" id="domBtnDiv"></div>
				<div class="letter_scan" style="display: none;">
					<div class="letter_scanbox" style="width: 100%; height: 100%;"></div>
					<a class="letter_scan_prev"></a>
					<a class="letter_scan_next"></a>
					<div class="letter_scan_group">
						<a class="letter_scan_btn icon_close" title="关闭" onclick="hidescan()"></a>
						<a class="letter_scan_btn icon_enlarge" title="放大"></a>
						<a class="letter_scan_btn icon_reduce" title="缩小"></a>
						<a class="letter_scan_btn icon_left" title="左转"></a>
						<a class="letter_scan_btn icon_right" title="右转"></a>
						<a class="letter_scan_btn icon_save" title="保存"></a>
						<a class="letter_scan_btn icon_print" title="打印"></a>
						<a class="letter_scan_btn icon_eraser" title="橡皮擦"></a>
						<a class="letter_scan_btn icon_cutting" title="裁剪"></a>
					</div>
				</div>
			</div>
		</div>
		<!--信访材料结束-->
		<!--信访登记信息开始-->
		<div class="letter_info">
			<div class="letter_caption"><i class="tdh_icon icon_register"></i>信访登记</div>
			<div class="letter_form">
				<table class="tdh_form" id="jbxxForm">
					<colgroup>
						<col width="20%" />
						<col width="30%" />
						<col width="20%" />
						<col width="30%" />
					</colgroup>
					<tr>
						<td colspan="4">
							<div class="tdh_form_caption"><i class="tdh_form_tag"></i>基本信息</div>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>信访编号</td>
						<td class="tdCont disabled">
							<input class="inputText" type="text" placeholder="" name="xfbh" id="xfbh" onblur="getForm()"/>
							<input class="inputText" type="hidden" id="jbxxHideId" name="jbxxHideId" value="">
							<input class="inputText" type="hidden" id="formIdNum" name="formIdNum" value="">
							<input class="inputText" type="hidden" id="zjIdNum" name="zjIdNum" value="">
						</td>
						<td class="tdTitle">条形码</td>
						<td class="tdCont disabled">
							<input class="inputText" type="text" placeholder="" name="txm" id="txm"/>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>信访日期</td>
						<td class="tdCont disabled">
							<input class="Wdate inputText" type="text" onClick="WdatePicker()" readonly="readonly" name="xfrq" id="xfrq"/>
						</td>
						<td class="tdTitle"><i class="required">*</i>信访类别</td>
						<td class="tdCont disabled">
							<select class="inputSel" name="xflb" id="xflb">
								<option value=""></option>
								<option value="xflb1">信访类别1</option>
								<option value="xflb2">信访类别2</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>信访来源</td>
						<td class="tdCont disabled">
							<select class="inputSel" name="xfly" id="xfly">
								<option value=""></option>
								<option value="xfly1">信访来源1</option>
								<option value="xfly2">信访来源2</option>
							</select>
						</td>
						<td class="tdTitle"><i class="required">*</i>信访方式</td>
						<td class="tdCont disabled">
							<select class="inputSel" name="xffs" id="xffs">
								<option value=""></option>
								<option value="xffs1">信访方式1</option>
								<option value="xffs2">信访方式2</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>信访特征</td>
						<td class="tdCont disabled" colspan="3">
							<table>
								<tr>
									<td width="100" valign="top" style="line-height: 30px;"><i class="point"></i>行为涉及：</td>
									<td>
										<label><input class="inputCheck" name="xwsj" type="checkbox" value="sxwj" id="sxwj"/>涉嫌违纪</label>
										<label><input class="inputCheck" name="xwsj" type="checkbox" value="zwwf" id="zwwf"/>职务违法</label>
									</td>
								</tr>
								<tr>
									<td width="100" valign="top" style="line-height: 30px;"><i class="point"></i>身份涉及：</td>
									<td>
										<label><input class="inputCheck" name="sfsj" type="checkbox" value="szxwy" id="szxwy"/>涉证协委员</label>
										<label><input class="inputCheck" name="sfsj" type="checkbox" value="srddb" id="srddb"/>涉人大代表</label>
										<label><input class="inputCheck" name="sfsj" type="checkbox" value="sjwwy" id="sjwwy"/>涉纪委委员</label>
										<label><input class="inputCheck" name="sfsj" type="checkbox" value="sgwy" id="sgwy"/>涉公务员</label>
										<label><input class="inputCheck" name="sfsj" type="checkbox" value="sdwybs" id="sdwybs"/>涉单位一把手</label>
									</td>
								</tr>
								<tr>
									<td width="100" valign="top" style="line-height: 30px;"><i class="point"></i>紧急程度：</td>
									<td>
										<label><input class="inputRadio" name="jjcd" type="radio" value="fcjj" id="fcjj"/>非常紧急</label>
										<label><input class="inputRadio" name="jjcd" type="radio" value="jj" id="jj"/>紧急</label>
										<label><input class="inputRadio" name="jjcd" type="radio" value="yb" id="yb"/>一般</label>
									</td>
								</tr>
								<tr>
									<td width="100" valign="top" style="line-height: 30px;"><i class="point"></i>其他特征：</td>
									<td>
										<label><input class="inputCheck" name="qttz" type="checkbox" value="cfxf" id="cfxf"/>重复信访</label>
										<label><input class="inputCheck" name="qttz" type="checkbox" value="sdwhsjsg" id="sdwhsjsg"/>涉单位或事件事故</label>
										<label><input class="inputCheck" name="qttz" type="checkbox" value="zyjbj" id="zyjbj"/>重要举报件</label>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>问题描述</td>
						<td class="tdCont disabled" colspan="3">
							<textarea class="inputArea" name="wtms" id="wtms"></textarea>
						</td>
					</tr>
					<tr>
						<td class="tdTitle">问题关键字</td>
						<td class="tdCont disabled" colspan="3">
							<input class="inputText" type="text" placeholder="" name="wtgjz" id="wtgjz"/>
						</td>
					</tr>
					<tr>
						<td class="tdTitle">问题属地</td>
						<td class="tdCont disabled">
							<select class="inputSel" name="wtsd" id="wtsd">
								<option value=""></option>
								<option value="wtsd1">问题属地1</option>
								<option value="wtsd2">问题属地2</option>
							</select>
						</td>
						<td class="tdTitle">信访人数</td>
						<td class="tdCont disabled">
							<input class="inputText" type="text" placeholder="" name="xfrs" id="xfrs"/>
						</td>
					</tr>
					<tr>
						<td class="tdTitle"><i class="required">*</i>登记人</td>
						<td class="tdCont disabled">
							<input class="inputText" type="text" placeholder="" name="djr" id="djr"/>
						</td>
						<td class="tdTitle"><i class="required">*</i>登记时间</td>
						<td class="tdCont disabled">
							<input class="Wdate inputText" type="text" onClick="WdatePicker()" readonly="readonly" name="djsj" id="djsj"/>
						</td>
					</tr>
					<tr>
						<td class="tdTitle disabled">重要信访批次号</td>
						<td class="tdCont disabled" colspan="3">
							<input class="inputText" type="text" placeholder="" disabled="disabled" />
						</td>
					</tr>
					<tr>
						<td class="tdTitle disabled">交办单位</td>
						<td class="tdCont disabled" colspan="3">
							<select class="inputSel" disabled="disabled"><option value=""></option></select>
						</td>
					</tr>
					<tr>
						<td class="tdTitle disabled">领导交办意见</td>
						<td class="tdCont disabled" colspan="3">
							<textarea class="inputArea" disabled="disabled"></textarea>
						</td>
					</tr>
				</table>
				<div class="tdh_form_caption"><i class="tdh_form_tag"></i>被反映人信息<a class="tdh_btn" onclick="showJcdx()"><i class="tdh_icon icon_person"></i>从监察对象中选择</a></div>
				<div id="bfyrDiv"></div> 
				<div class="xfdj_group tdh_btn_list ">
					<ul>
						<li><a class="tdh_btn" onclick="addZrr()"><i class="tdh_icon icon_addZrr"></i>新增自然人</a></li>
						<li><a class="tdh_btn" onclick="addDw()"><i class="tdh_icon icon_addFr"></i>新增单位</a></li>
						<li><a class="tdh_btn" onclick="addSjsg()"><i class="tdh_icon icon_addFz"></i>新增事件事故</a></li>
					</ul>
				</div>
				<div class="tdh_form_caption"><i class="tdh_form_tag"></i>反映人信息</div>
				<div id="fyrDiv">
				</div>
				<div class="xfdj_group tdh_btn_list ">
					<ul>
						<li><a class="tdh_btn" onclick="addFyr()" id="addFyr"><i class="tdh_icon icon_addZrr"></i>新增反映人</a></li>
					</ul>
				</div>
			</div>
			<div class="bottom">
				<a class="tdh_btn tdh_btn_blue" id="getbtn" onclick="getForm()">取值</a>
  				<a class="tdh_btn tdh_btn_blue" id="savebtn" onclick="serializeForm()">保存</a>
				<a class="tdh_btn tdh_btn_blue" id="changebtn">修改</a>
			</div>
		</div>
		<!--信访登记信息结束-->
	</div>
</body>
</html>
