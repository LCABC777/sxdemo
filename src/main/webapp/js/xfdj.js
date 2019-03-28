$(function(){
	//删除自然人、单位、事件事故、反映人
	$(document).on("click",".tdh_btn_del",function(){
		var formObj = $(this).parents('.xfdj_box');
		var hideInput = $('#jbxxHideId');
		var oldVal = hideInput.val();
		hideInput.val(oldVal + formObj.attr("id") + ",");
		formObj.remove();
	})

    $(document).on("click",".tdh_btn_view",function(){
    	//通过dom对象当前表单找到需要隐藏的行
        var tr = $(this).parents('.xfdj_box').find('tr.tr_hide');
        if(tr.length){
            tr.toggle();
            if(tr.css('display')=='none'){
                $(this).html('<i class="tdh_icon icon_edit"></i>展开更多信息');
            }else{
                $(this).html('<i class="tdh_icon icon_edit"></i>隐藏更多信息');
            }
        }
    })
})

//序列化form表单
function serializeForm(){
	var xfbh = $('#xfbh').val();
	$('#formIdNum').val(formId);
	$('#zjIdNum').val(idNum);
	//序列化基本信息
	var jbxxForm = serialize("#jbxxForm", undefined, 'jbxx_');
	//序列化被反映人信息
	var bfyrForm = serialize('#bfyrDiv', undefined, 'bfyr_');
	//序列化反映人信息
	var fyrForm = serialize('#fyrDiv', undefined, 'fyr__');
	console.log(jbxxForm);
	//判断必填项
	if(checkNecessary(jbxxForm) == "checkWrong"){
		return;
	}
	$.ajax({
		type:"POST",
		url:"toSave.do",
		data:jbxxForm + '&' + bfyrForm + '&' + fyrForm,
		success:function(data){
			window.location.reload();
		},
		error:function(e){
			alert("表单保存有误");
			console.log(e);
		}
	})
}

//给表单取值
function getForm(){
	var xfbh = $('input[name="xfbh"]').val();
	$.ajax({
		type:"POST",
		url:"toGet.do",
		data:{
			"xfbh":xfbh,
		},
		success:function(data){
			//若data为null，则以该xfbh为主键的记录不存在
			if($.isEmptyObject(data)){
				alert("信访编号 " + xfbh + " 未被保存");
			}else{
				console.log(data);
				//给各个表单赋值
				giveJbxxForm(data[0][0]);
				giveZrrForm(data[1]);
				giveDwForm(data[2]);
				giveSjsgForm(data[3]);
				giveFyrForm(data[4]);
				giveSfz(data[5]);
				giveDwzz(data[6]);
				giveSjsgzz(data[7]);
			}
		},
		error:function(e){
			alert("表单赋值有误");
			console.log(e);
		}
	})
}

//证件zjid
var idNum = 0;

//增加身份证
function addSfz(obj){
	return addZj(obj,'sfz');
};

//增加单位的单位证照
function addDwzj(obj){
	addZj(obj,"dwzj");
}

//增加事件的单位证照
function addSjzj(obj){
	addZj(obj,"sjzj");
}

//增加证件
function addZj(obj,type){
	idNum = idNum + 1;
	var formId = $(obj).parents('.xfdj_box').attr('id');
	var zjHtml = '<tr class="zjAllClass" id="' + formId + 'zj' + idNum+'"><td align="center"><label><input type="checkbox" class="inputCheck" name="' + formId + type + 'Check" onchange="' + type + 'Checked(this)" data-id="' + formId + 'zj' + idNum + '"/></label></td><td><select class="inputSel" id="' + formId + 'zjzl' + idNum + '" name="' + formId + 'zjzl' + idNum + '"><option value="' + type + '">组织机构代码证</option></select></td><td><input class="inputText" type="text" placeholder="" name="' + formId + 'zjhm' + idNum + '" id="' + formId + 'zjhm' + idNum + '"/></td><td><input class="inputText" type="text" placeholder="" name="' + formId + 'qtzjmc' + idNum + '" id="' + formId + 'qtzjmc' + idNum + '"/></td></tr>';
	$(obj).parents('.xfdj_subbox').find('.xfdj_table').append(zjHtml);
	initForm(formId + 'zj' + idNum);
};

//删除身份证
function delSfz(obj){
	delZj(obj,"sfzCheck");
}

//删除单位的单位证照
function delDwzj(obj){
	delZj(obj,"dwzjCheck");
}

//删除事件事故的单位证照
function delSjzj(obj){
	delZj(obj,"sjzjCheck");
}

//删除证件
function delZj(obj,type){
	var formId = $(obj).parents('.xfdj_box').attr('id');
	$(":input[name='" + formId + type + "']:checked").each(function(){
		if(!this.id){
			var dataId = $(this).attr("data-id");
			var hideInput = $('#jbxxHideId');
			var oldVal = hideInput.val();
			hideInput.val(oldVal + dataId + ",");
			$("#"+dataId).remove();
		}
	})
}

//给jbxx表单赋值
function giveJbxxForm(data){
	var xfbh = $('#xfbh').val();
	if(data == null){
		/*alert('xfbh是' + xfbh + '的表单不存在');*/
		return;
	}
	$('#txm').val(data.txm);
	$('#xfrq').val(data.xfrq);
	setSelVal('#xflb', data.xflb);
	setSelVal('#xfly', data.xfly);
	setSelVal('#xffs', data.xffs);
	chooseChbs("",data.xwsj);
	chooseChbs("",data.sfsj);
	var jjcd = data.jjcd;
	setRadioVal('#' + jjcd, true);
	chooseChbs("",data.qttz);
	$('#wtms').val(data.wtms);
	$('#wtgjz').val(data.wtgjz);
	setSelVal('#wtsd', data.wtsd);
	$('#xfrs').val(data.xfrs);
	$('#djr').val(data.djr);
	$('#djsj').val(data.djsj);
	formId = parseInt(data.formIdNum);
	idNum = parseInt(data.zjIdNum);
}

//给zrr表单赋值
function giveZrrForm(data){
	for(var i =0; i <data.length; i++){
		var newFormId = data[i].id;
		if($('#' + newFormId).length <=0){
			addZrr(newFormId);
		}
		$('#' + newFormId + 'xm').val(data[i].xm);
		chooseChbs(newFormId,data[i].rytz);
		setSelVal('#' + newFormId + 'gbgxcj', data[i].gbgxcj);
		setSelVal('#' + newFormId + 'zxwycj', data[i].zxwycj);
		setSelVal('#' + newFormId + 'rddbcj', data[i].rddbcj);
		setSelVal('#' + newFormId + 'jwwycj', data[i].jwwycj);
		$('#' + newFormId + 'gzdw').val(data[i].gzdw);
		setSelVal('#' + newFormId + 'dwfl', data[i].dwfl);
		setSelVal('#' + newFormId + 'hyfl', data[i].hyfl);
		$('#' + newFormId + 'gzdwdz').val(data[i].gzdwdz);
		setSelVal('#' + newFormId + 'zw', data[i].zw);
		setSelVal('#' + newFormId + 'xzjb', data[i].xzjb);
		setSelVal('#' + newFormId + 'zzmm', data[i].zzmm);
		setSelVal('#' + newFormId + 'mz', data[i].mz);
		$('#' + newFormId + 'csrq').val(data[i].csrq);
		setRadioVal('#' + newFormId + data[i].xb, true);
	}
}

//给dw表单赋值
function giveDwForm(data){
	for(var i =0; i<data.length; i++){
		var newFormId = data[i].id;
		if($('#' + newFormId).length <= 0){
			addDw(newFormId);
		}
		$('#' + newFormId + 'dwmc').val(data[i].dwmc);
		setSelVal('#' + newFormId + 'dwfl', data[i].dwfl);
		setSelVal('#' + newFormId + 'hyfl', data[i].hyfl);
		$('#' + newFormId + 'fddbr').val(data[i].fddbr);
		setSelVal('#' + newFormId + 'dwxz', data[i].dwxz);
		setSelVal('#' + newFormId + 'dbrzjzl', data[i].dbrzjzl);
		$('#' + newFormId + 'dbrzjhm').val(data[i].dbrzjhm);
		$('#' + newFormId + 'dwdz').val(data[i].dwdz);
	}
}

//给sjsg表单赋值
function giveSjsgForm(data){
	for(var i = 0; i < data.length; i++){
		var newFormId = data[i].id;
		if($('#' + newFormId).length <=0){
			addSjsg(newFormId);
		}
		$('#' + newFormId + 'sjsgmc').val(data[i].sjsgmc);
		$('#' + newFormId + 'sjsgdd').val(data[i].sjsgdd);
		$('#' + newFormId + 'zrdwmc').val(data[i].zrdwmc);
		setSelVal('#' + newFormId + 'zrdwfl',data[i].zrdwfl);
		setSelVal('#' + newFormId + 'hyfl',data[i].hyfl);
		$('#' + formId + 'fddbr').val(data[i].fddbr);
		setSelVal('#' + newFormId + 'dwxz',data[i].dwxz);
		setSelVal('#' + newFormId + 'dbrzjzl',data[i].dbrzjzl);
		$('#' + newFormId + 'dbrzjhm').val(data[i].dbrzjhm);
		$('#' + newFormId + 'dwdz').val(data[i].dwdz);
	}
}

//给fyr表单赋值
function giveFyrForm(data){
	for(var i = 0; i < data.length; i++){
		var newFormId = data[i].id;
		if($('#' + newFormId).length <=0){
			addFyr(newFormId);
		}
		setRadioVal('#' + newFormId + data[i].sfsm, true);
		$('#' + newFormId + 'lxfs').val(data[i].lxfs);
		$('#' + newFormId + 'xm').val(data[i].xm);
		$('#' + newFormId + 'gzdw').val(data[i].gzdw);
		setSelVal('#' + newFormId + 'dwfl', data[i].dwfl);
		setSelVal('#' + newFormId + 'hyfl', data[i].hyfl);
		$('#' + newFormId + 'gzdwdz').val(data[i].gzdwdz);
		setSelVal('#' + newFormId + 'zw', data[i].zw);
		setSelVal('#' + newFormId + 'xzjb', data[i].xzjb);
		setSelVal('#' + newFormId + 'zzmm', data[i].zzmm);
		setSelVal('#' + newFormId + 'mz', data[i].mz);
		$('#' + newFormId + 'csrq').val(data[i].csrq);
		setRadioVal('#' + newFormId + 'xb', true);
	}
}

//给sfz赋值
function giveSfz(data){
	giveZj(data,'addSfz');
}

//给单位证照赋值
function giveDwzz(data){
	giveZj(data,'addDwzj');
}

//给sjsg证照赋值
function giveSjsgzz(data){
	giveZj(data,'addSjzj');
}


/**
 * 若zjzl不存在，则创建。否则直接修改该行tr。
 * @param data 传入的zj对象
 * @param typeClass 按钮种类
 */
function giveZj(data,typeClass){
	for(var i = 0;i < data.length; i++){
		//赋值、修改id
		var sfzId = data[i].id;
		var formId = sfzId.substring(0,sfzId.indexOf('zj'));
		var zjIdNum = sfzId.substring(sfzId.indexOf('zj') + 2);
		if($('#' + formId + 'zjzl' + zjIdNum).length <=0){
			$('#' + formId + ' .' + typeClass).click();
			setSelVal('#' + formId + 'zjzl' + idNum, data[i].zjzl);
			$('#' + formId + 'zjhm' + idNum).val(data[i].zjhm);
			$('#' + formId + 'qtzjmc' + idNum).val(data[i].qtzzmc);
			$('#' + formId + 'zjzl' + idNum).attr('id', formId + 'zjzl' + zjIdNum);
			$('#' + formId + 'zjzl' + idNum).attr('name', formId + 'zjzl' + zjIdNum);
			$('#' + formId + 'zjhm' + idNum).attr('id', formId + 'zjhm' + zjIdNum);
			$('#' + formId + 'zjhm' + idNum).attr('name', formId + 'zjhm' + zjIdNum);
			$('#' + formId + 'qtzjmc' + idNum).attr('id', formId + 'qtzjmc' + zjIdNum);
			$('#' + formId + 'qtzjmc' + idNum).attr('name', formId + 'qtzjmc' + zjIdNum);
		}else{
			setSelVal('#' + formId + 'zjzl' + zjIdNum, data[i].zjzl);
			$('#' + formId + 'zjhm' + zjIdNum).val(data[i].zjhm);
			$('#' + formId + 'qtzjmc' + zjIdNum).val(data[i].qtzzmc);
		}
	}
}


//判断必填项是否填写
function checkNecessary(formStr){
	var xfbh = $('#xfbh').val();
	var xfrq = $('#xfrq').val();
	var xflb = $('#xflb').val();
	var xfly = $('#xffs').val();
	var xffs = $('#xfly').val();
	var xwsj = formStr.indexOf('xwsj');
	var sfsj = formStr.indexOf('sfsj');
	var jjcd = formStr.indexOf('jjcd');
	var qttz = formStr.indexOf('qttz');
	var wtms = $('#wtms').val();
	var djr = $('#djr').val();
	var djsj = $('#djsj').val();
	var msg = [];
	if (!xfbh) {
		msg.push('信访编号');
	}
	if (!xfrq) {
		msg.push('信访日期');
	}
	if (!xflb) {
		msg.push('信访类别');
	}
	if (!xfly) {
		msg.push('信访来源');
	}
	if (!xffs) {
		msg.push('信访方式');
	}
	if(xwsj == -1){
		msg.push('行为涉及');
	}
	if(sfsj == -1){
		msg.push('身份涉及');
	}
	if(jjcd == -1){
		msg.push("紧急程度");
	}
	if(qttz == -1){
		msg.push('其他特征');
	}
	if (!wtms) {
		msg.push('问题描述');
	}
	if (!djr) {
		msg.push('登记人');
	}
	if (!djsj) {
		msg.push('登记时间');
	}
	if (msg.length) {
		alert("请检查基本信息必填项：" + msg.join(','));
		return "checkWrong";
	}
	//判断信访人数是否为数字
	var reg = /^[0-9][0-9]*$/;
	var xfrs = $('#xfrs').val();
	if(xfrs && !reg.test(xfrs)){
		alert("信访人数应为数字");
		return "checkWrong";
	}
	//判断fyr和bfyr必填项是否为空
	var fyrAndBfyr = [];
	$('.necessary').each(function(){
		if($(this).attr("type") == "radio"){
			var isChecked = $('input[name="' + $(this).attr('name') + '"]'.is(':checked'));
			if(!isChecked){
				fyrAndBfyr.push("checkWrong");
			}
		}
		if(!$(this).val() && typeof($(this).attr("name")) != 'undefined'){
			fyrAndBfyr.push("checkWrong");
		}
	})
	if(fyrAndBfyr.length > 0){
		alert("反映人和被反映人有必填项未写");
		return "checkWrong";
	}
}

//多选框选择
function chooseChbs(formId,chbs){
	var chbsArr = chbs.split(",");
	for(var i = 0; i < chbsArr.length; i++){
		setCheckVal('#' + formId + chbsArr[i], true);
	}
}

//新增自然人表单
/*var formId = 0;*/
//新增自然人,并动态改变id
/*function addZrr(newFormId){
	var xfbh = $('#xfbh').val();
	$.ajax({
		type:"GET",
		url:"zrrForm.do",
		async:false,
		date:{},
		success:function(data){
			var obj = $(data);
			$('#bfyrDiv').append(obj);
			initFormByParent(obj);
			if(newFormId == null){
				formId = formId + 1;
				$('#zrr').attr('id', xfbh + 'zrr' + formId);
				changeNameAndId(xfbh + 'zrr' + formId,'sfz');
			}else{
				$('#zrr').attr('id', newFormId);
				changeNameAndId(newFormId,'sfz');
			}
		},
	})
}*/

// //新增单位
// function addDw(newFormId){
// 	var xfbh = $('#xfbh').val();
// 	$.ajax({
// 		type:"GET",
// 		url:"dwForm.do",
// 		async:false,
// 		date:{},
// 		success:function(data){
// 			var obj = $(data);
// 			$('#bfyrDiv').append(obj);
// 			initFormByParent(obj);
// 			if(newFormId == null){
// 				formId = formId + 1;
// 				$('#dw').attr('id', xfbh + 'dw' + formId);
// 				changeNameAndId(xfbh + 'dw' + formId,'dwzj');
// 			}else{
// 				$('#dw').attr('id', newFormId);
// 				changeNameAndId(newFormId,'dwzj');
// 			}
// 		}
// 	})
// }

//新增事件事故表单
/*function addSjsg(newFormId){
	var xfbh = $('#xfbh').val();
	$.ajax({
		type:"GET",
		url:"sjsgForm.do",
		async:false,
		date:{},
		success:function(data){
			var obj = $(data);
			$('#bfyrDiv').append(obj);
			initFormByParent(obj);
			if(newFormId == null){
				formId = formId + 1;
				$('#sjsg').attr('id', xfbh + 'sjsg' + formId);
				changeNameAndId(xfbh + 'sjsg' + formId,'sjzj');
			}else{
				$('#sjsg').attr('id', newFormId);
				changeNameAndId(newFormId,'sjzj');
			}
		}
	})
}

//新增反映人
function addFyr(newFormId){
	var xfbh = $('#xfbh').val();
	$('#formIdXx')
	$.ajax({
		type:"get",
		url:"fyrForm.do",
		async:false,
		date:{},
		success:function(data){
			var obj = $(data);
			$('#fyrDiv').append(obj);
			initFormByParent(obj);
			if(newFormId == null){
				formId = formId + 1;
				$('#fyr').attr('id', xfbh + 'fyr' + formId);
				changeNameAndId(xfbh + 'fyr' + formId,'');
			}else{
				$('#fyr').attr('id',newFormId);
				changeNameAndId(newFormId,'');
			}
		}
	})
}*/

//批量选择sfz
function sfzChecked(obj) {
	checkMany(obj,"sfzCheck");
}

//批量选择单位的单位证件
function dwzjChecked(obj) {
	checkMany(obj,"dwzjCheck");
}

//批量选择事件事故的单位证件
function sjzjChecked(obj) {
	checkMany(obj,"sjzjCheck");
}

//批量选择多选框
function checkMany(obj,type){
	var formId = $(obj).parents('.xfdj_box').attr('id');
	var chbs = $('input[name="'+ formId + type + '"]');
	console.log(chbs.length);
	if (obj.id) {
		for (var i = 1; i < chbs.length; i++) {
			if (obj.checked == true) {
				var chb = chbs[i];
				console.log(chb);
				setCheckVal($(chb),true);
			}
		}
		// 全不选
		for (var i = 1; i < chbs.length; i++) {
			// 若全选框的结果为没选中，则进行全不选操作,否则进入下一步
			if (obj.checked == false) {
				var chb = chbs[i];
				setCheckVal($(chb),false);
			}
		}
	} else {
		var checkedNum = 0;
		for (var i = 1; i < chbs.length; i++) {
			if (chbs[i].checked) {
				checkedNum = checkedNum + 1;
			}
		}
		// 若子选择全选，全选框也选中。
		if (checkedNum == chbs.length - 1) {
			setCheckVal($(chbs[0]),true);
		// 若子选项没有全选，全选框不选中。
		} else{
			setCheckVal($(chbs[0]),false);
		}
	}
}