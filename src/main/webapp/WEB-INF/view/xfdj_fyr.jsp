<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="xfdj_box" id="fyr">
	<div class="tdh_btn_list">
		<ul>
			<li><a class="tdh_btn tdh_btn_view"><i
					class="tdh_icon icon_edit"></i>编辑更多信息</a></li>
			<li><a class="tdh_btn tdh_btn_del"><i
					class="tdh_icon icon_sc"></i>删除</a></li>
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
			<td class="tdTitle"><i class="required">*</i>是否署名</td>
			<td class="tdCont disabled">
				<label><input class="inputRadio" name="sfsm" type="radio" id="shi" value="shi"/>是</label> 
				<label><input class="inputRadio" name="sfsm" type="radio" checked="checked" id="fou" value="fou"/>否</label>
			</td>
			<td class="tdTitle">联系方式</td>
			<td class="tdCont disabled">
				<input class="inputText" type="text" placeholder="" name="lxfs" id="lxfs"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle"><i class="required">*</i>姓名</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText necessary" type="text" placeholder="" name="xm" id="xm"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">工作单位</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText" type="text" placeholder="" name="gzdw" id="gzdw"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">单位分类</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="dwfl" id="dwfl">
					<option	value=""></option>
					<option	value="dwfl1">单位分类1</option>
					<option	value="dwfl2">单位分类2</option>
				</select>
			</td>
			<td class="tdTitle">行业分类</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="hyfl" id="hyfl">
					<option value=""></option>
					<option value="hyfl1">行业分类1</option>
					<option value="hyfl2">行业分类2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">工作单位地址</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText" type="text" placeholder="" name="gzdwdz" id="gzdwdz"/>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">职务</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="zw" id="zw">
					<option value=""></option>
					<option value="zw1">职务1</option>
					<option value="zw2">职务1</option>
				</select>
			</td>
			<td class="tdTitle">行政级别</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="xzjb" id="xzjb">
					<option	value=""></option>
					<option	value="xzjb1">行政级别1</option>
					<option	value="xzjb2">行政级别2</option>
				</select>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">政治面貌</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="zzmm" id="zzmm">
					<option value=""></option>
					<option value="zzmm1">政治面貌1</option>
					<option value="zzmm2">政治面貌2</option>
				</select>
			</td>
			<td class="tdTitle">民族</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="mz" id="mz">
					<option	value=""></option>
					<option	value="mz1">民族1</option>
					<option	value="mz2">民族2</option>
				</select>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">出生日期</td>
			<td class="tdCont disabled">
				<input class="Wdate inputText" type="text" onClick="WdatePicker()" readonly="readonly" name="csrq" id="csrq"/>
			</td>
			<td class="tdTitle">性别</td>
			<td class="tdCont disabled">
				<label><input class="inputRadio" name="xb" type="radio" id="nan" value="nan"/>男</label> 
				<label><input class="inputRadio" name="xb" type="radio" checked="checked" id="nv" value='nv'/>女</label>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle disabled">企业性质</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled" name="qyxz" id="qyxz">
					<option value=""></option>
					<option value="qyxz1">企业性质1</option>
					<option value="qyxz2">企业性质1</option>
				</select>
			</td>
			<td class="tdTitle disabled">企业级别</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled" name="qyjb" id="qyjb">
					<option value=""></option>
					<option value="qyjb1">企业级别1</option>
					<option value="qyjb2">企业级别2</option>
				</select>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle disabled">企业岗位</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled" name="qygw" id="qygw">
					<option value=""></option>
					<option value="qygw1">企业岗位1</option>
					<option value="qygw2">企业岗位2</option>
				</select>
			</td>
			<td class="tdTitle disabled">企业人员类别</td>
			<td class="tdCont disabled">
				<select class="inputSel" disabled="disabled" name="qyrylb" id="qyrylb">
					<option value=""></option>
					<option value="qyrylb1">企业人员类别1</option>
					<option value="qyrylb2">企业人员类别2</option>
				</select>
			</td>
		</tr>
	</table>
</div>