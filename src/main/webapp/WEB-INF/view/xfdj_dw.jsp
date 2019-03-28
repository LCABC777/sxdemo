<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="xfdj_box" id="dw">
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
			<td class="tdTitle"><i class="required">*</i>单位名称</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText necessary" type="text" placeholder="" name="dwmc" id="dwmc" />
			</td>
		</tr>
		<tr>
			<td class="tdTitle">单位分类</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="dwfl" id="dwfl">
					<option	value=""></option>
					<option	value="dwfl1">单位分类1</option>
					<option	value="dwfl2">单位分类1</option>
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
			<td class="tdTitle">法定代表人</td>
			<td class="tdCont disabled">
				<input class="inputText" type="text" placeholder="" name="fddbr" id="fddbr"/></td>
			<td class="tdTitle">单位性质</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="dwxz" id="dwxz">
					<option value=""></option>
					<option value="dwxz1">单位性质1</option>
					<option value="dwxz2">单位性质2</option>
				</select>
			</td>
		</tr>
		<tr>
			<td class="tdTitle">代表人证件种类</td>
			<td class="tdCont disabled">
				<select class="inputSel" name="dbrzjzl" id="dbrzjzl">
					<option	value=""></option>
					<option	value="dbrzjzl">代表人证件种类1</option>
					<option	value="dbrzjzl">代表人证件种类2</option>
				</select>
			</td>
			<td class="tdTitle">代表人证件号码</td>
			<td class="tdCont disabled">
				<input class="inputText" type="text" placeholder="" name="dbrzjhm" id="dbrzjhm" />
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">单位证照信息</td>
			<td class="tdCont" colspan="3">
				<div class="xfdj_subbox">
					<div class="tdh_btn_list">
						<ul>
							<li><a class="tdh_btn addDwzj" onclick="addDwzj(this)">添加</a></li>
							<li><a class="tdh_btn delDwzj" onclick="delDwzj(this)">删除</a></li>
						</ul>
					</div>
					<table class="xfdj_table">
						<tr>
							<th width="40"><label><input type="checkbox" class="inputCheck" name="dwzjCheck" id="dwzjCheck" onchange="dwzjChecked(this)"/></label></th>
							<th>证照类型</th>
							<th>证件号码</th>
							<th>其他证照名称</th>
						</tr>
					</table>
				</div>
			</td>
		</tr>
		<tr class="tr_hide">
			<td class="tdTitle">单位地址</td>
			<td class="tdCont disabled" colspan="3">
				<input class="inputText" type="text" placeholder="" name="dwdz" id="dwdz"/>
			</td>
		</tr>
	</table>
</div>