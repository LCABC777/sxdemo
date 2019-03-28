<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="xfdj_box" id="zrr">
	<div class="tdh_btn_list">
		<ul>
			<li><a class="tdh_btn tdh_btn_view"><i class="tdh_icon icon_edit"></i>编辑更多信息</a></li>
			<li><a class="tdh_btn tdh_btn_del"><i class="tdh_icon icon_sc"></i>删除</a></li>
		</ul>
	</div>
	<table class="tdh_form">
		<colgroup>
			<col width="20%" />
			<col width="30%" />
			<col width="20%" />
			<col width="30%" />
		</colgroup>
		<tr>
			<td class="tdTitle"><i class="required">*</i>姓名</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText necessary" type="text" placeholder="" id="xm" name="xm"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">人员特征</td>
			<td class="tdCont" colspan="3">
				<label><input class="inputCheck" name="rytz" type="checkbox" value="zxwy" id="zxwy" name=""/>政协委员</label> 
				<label><input class="inputCheck" name="rytz" type="checkbox" value="rddb" id="rddb" name="rddw"/>人大代表</label> 
				<label><input class="inputCheck" name="rytz" type="checkbox" value="jwwy" id="jwwy" name="jwwy"/>纪委委员</label> 
				<label><input class="inputCheck" name="rytz" type="checkbox" value="gwy" id="gwy" name="gwy"/>公务员</label> 
				<label><input class="inputCheck" name="rytz" type="checkbox" value="dwybs" id="dwybs" name="dwybs" />单位一把手</label>
			</td>
		</tr>
		<tr>
			<td class="tdTitle"><i class="required">*</i>干部管辖层级</td>
			<td class="tdCont disabled">
				<select class="inputSel necessary" id="gbgxcj" name="gbgxcj">
					<option value=""></option>
					<option value="干部管辖层级1">干部管辖层级1</option>
					<option value="干部管辖层级2">干部管辖层级2</option>
				</select>
			</td>
			<td class="tdTitle">政协委员层级</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="zxwycj" name="zxwycj">
					<option value=""></option>
					<option value="zxwycj1">政协委员层级1</option>
					<option value="zxwycj2">政协委员层级2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">人大代表层级</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="rddbcj" name="rddbcj">
					<option	value=""></option>
					<option	value="rddbcj1">人大代表层级1</option>
					<option	value="rddbcj2">人大代表层级2</option>
				</select>
			</td>
			<td class="tdTitle">纪委委员层级</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="jwwycj" name="jwwycj">
					<option	value=""></option>
					<option	value="jwwycj1">纪委委员层级1</option>
					<option	value="jwwycj2">纪委委员层级2</option>
				</select></td>
		</tr>
		<tr>
			<td class="tdTitle">工作单位</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText" type="text" placeholder="" id="gzdw" name="gzdw"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">单位分类</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="dwfl" name="dwfl">
					<option value=""></option>
					<option value="dwfl1">单位分类1</option>
					<option value="dwfl2">单位分类2</option>
				</select>
			</td>
			<td class="tdTitle">行业分类</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="hyfl" name="hyfl">
					<option	value=""></option>
					<option	value="hyfl1">行业分类1</option>
					<option	value="hyfl2">行业分类2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">工作单位地址</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText" type="text" placeholder="" id="gzdwdz" name="gzdwdz"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">职务</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="zw" name="zw">
					<option	value=""></option>
					<option	value="职务1">职务1</option>
					<option	value="职务2">职务2</option>
				</select>
			</td>
			<td class="tdTitle">行政级别</td>
			<td class="tdCont">
				<select class="inputSel" id="xzjb" name="xzjb">
					<option	value=""></option>
					<option	value="xzjb1">行政级别1</option>
					<option	value="xzjb2">行政级别2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">证件信息</td>
			<td class="tdCont" colspan="3">
				<div class="xfdj_subbox">
					<div class="tdh_btn_list">
						<ul>
							<li><a class="tdh_btn addSfz" onclick="addSfz(this)">添加</a></li>
							<li><a class="tdh_btn delSfz" onclick="delSfz(this)">删除</a></li>
						</ul>
					</div>
					<table class="xfdj_table" id="sfz_table">
						<tr>
							<th width="40"><label><input type="checkbox" class="inputCheck" name="sfzCheck" id="sfzCheck" onchange="sfzChecked(this)"/></label></th>
							<th>证件种类</th>
							<th>证件号码</th>
							<th>其他证件名称</th>
						</tr>
					</table>
				</div>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">政治面貌</td>
			<td class="tdCont disabled">
				<select class="inputSel" id="zzmm" name="zzmm">
					<option	value=""></option>
					<option	value="zzmm1">政治面貌1</option>
					<option	value="zzmm2">政治面貌2</option>
				</select>
			</td>
			<td class="tdTitle">民族</td>
			<td class="tdCont">
				<select class="inputSel" id="mz" name="mz">
					<option	value=""></option>
					<option value="汉">汉</option>
					<option value="回">回</option>
				</select>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">出生日期</td>
			<td class="tdCont disabled">
				<input class="Wdate inputText" type="text" onClick="WdatePicker()" readonly="readonly" id="csrq" name="csrq"/>
			</td>
			<td class="tdTitle">性别</td>
			<td class="tdCont disabled">
				<label><input class="inputRadio" name="xb" type="radio" id="nan" value="男"/>男</label> 
				<label><input class="inputRadio" name="xb" type="radio" checked="checked" id="nv" value="nv"/>女</label>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle disabled">企业性质</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled">
					<option value=""></option>
				</select>
			</td>
			<td class="tdTitle disabled">企业级别</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled">
					<option value=""></option>
				</select>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle disabled">企业岗位</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled">
					<option value=""></option>
				</select>
			</td>
			<td class="tdTitle disabled">企业人员类别</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled">
					<option value=""></option>
				</select>
			</td>
		</tr>
	</table>
</div>